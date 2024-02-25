import { MyContext } from "../types";
import { Organization } from "../entities/Organization";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { Star } from "../entities/Stars";
import dataSource from "../db.config";

// Input for creating an organization
@InputType()
class OrganizationInput {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  typeOfOrganization: string;
  @Field()
  address: string;
  @Field()
  description: string;
  @Field()
  phoneNumber: string;
}

@InputType()
class UpdateOrganizationInput {
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => String, { nullable: true })
  typeOfOrganization?: string;
  @Field(() => String, { nullable: true })
  address?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
}

// An Objectype which returns the list of organization, and if there is more data
@ObjectType()
class PaginatedOrganizations {
  @Field(() => [Organization])
  organizations: Organization[];
  @Field()
  hasMore: boolean;
}

// Other input
@Resolver()
export class OrganizationResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Boolean)
  // Lets user star an organization
  async vote(
    @Arg("organizationId", () => Int) organizationId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const isStar = value !== -1; // Limits value to plus or -1
    const realValue = isStar ? 1 : -1;
    const { userId } = req.session; // Gets the currently logged in user from the cookie

    const star = await Star.findOne({ where: { organizationId, userId } }); // See if the user has voted already

    if (star && star.value !== -1) {
      // The user has already voted and they are changing their vote (star to unstar) or (star to unstar to star)
      await dataSource.transaction(async (tm) => {
        await tm.query(
          `
        update star
        set value = $1
        where "organizationId" = $2 and "userId" = $3
        `,
          [realValue, organizationId, userId]
        );
        await tm.query(
          `
        update organization
        set points = points + $1
        where id = $2
        `,
          [realValue, organizationId]
        );
      });
    } else if (!star) {
      // The user has not voted
      await dataSource.transaction(async (tm) => {
        await tm.query(
          `
        insert into star ("userId", "organizationId", value)
        values ($1, $2, $3)
        `,
          [userId, organizationId, realValue]
        );
        await tm.query(
          `
        update organization
        set points = points + $1
        where id = $2
        `,
          [realValue, organizationId]
        );
      });
    }
    return true;
  }
  // Gets all organizations based on the cursor and limit
  @Query(() => PaginatedOrganizations)
  async organizations(
    @Arg("limit", () => Int) limit: number,
    @Arg("searchValue", () => String) searchValue: string,
    @Arg("searchOptions", () => String) searchOptions: string,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null,
    @Ctx() { req }: MyContext
  ): Promise<PaginatedOrganizations> {
    const realLimit = Math.min(100, limit); // Cap limit at 100
    const extraLimit = realLimit + 1; // Fetch the next organization, but do not display it
    const replacements: any[] = [extraLimit];

    if (req.session.userId) {
      // If there is al ogged in user
      replacements.push(req.session.userId);
    }

    let cursorIndex = 99;

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
      cursorIndex = replacements.length;
    }
    // Get all organizations, passing in the cursor, and taking in the limit while filtering results by the search options
    const organizations = await dataSource.query(
      `
    select o.*,
    json_build_object(
      'username', u.username,
      'id', u.id,
      'email', u.email,
      'createdAt', u."createdAt",
      'updatedAt', u."updatedAt"
      ) creator,
    ${
      req.session.userId // If user is logged in get their voteStatus
        ? '(select value from star where "userId" = $2 and "organizationId" = o.id) "voteStatus"'
        : 'null as "voteStatus"'
    }
    from organization o 
    inner join public.user u on u.id = o."creatorId"
    where LOWER(o.${searchOptions}) LIKE '%${searchValue}%'

    ${cursor ? `and o."createdAt" < $${cursorIndex}` : ""}
    order by o."createdAt" DESC
    limit $1
    `,
      replacements
    );

    return {
      organizations: organizations.slice(0, realLimit), // Liimit number of Organizations based on the limit
      hasMore: organizations.length === extraLimit,
    };
  }
  // Finds a singular organization
  @Query(() => Organization, { nullable: true })
  async organization(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<Organization | null> {
    const organizations = await dataSource.query(`
    select o.*,
    json_build_object(
      'username', u.username,
      'id', u.id,
      'email', u.email,
      'createdAt', u."createdAt",
      'updatedAt', u."updatedAt"
      ) creator,
    ${
      req.session.userId // If user is logged in get their voteStatus
        ? `(select value from star where "userId" = ${req.session.userId} and "organizationId" = o.id) "voteStatus"`
        : 'null as "voteStatus"'
    }
    from organization o
    inner join public.user u on u.id = o."creatorId"
    where o.id = ${id}

    `);

    return organizations[0];
  }
  // Adds an organization to the database
  @Mutation(() => Organization)
  @UseMiddleware(isAuth) // Make sure User is logged in
  async addOrganization(
    @Arg("input") input: OrganizationInput,
    @Ctx() { req }: MyContext
  ): Promise<Organization> {
    const organization = Organization.create({
      // Create User with the creator ID being the currently logged-in User
      ...input,
      creatorId: req.session.userId,
    }).save();
    return organization;
  }
  @Mutation(() => Organization, { nullable: true })
  async updateOrganization(
    @Arg("id", () => Int) id: number,
    @Arg("input") input: UpdateOrganizationInput,
    @Ctx() { req }: MyContext
  ): Promise<Organization | null> {
    // Find an organization with the specified ID
    let organizationQuery = await Organization.findOne({ where: { id } });
    // If no organization is found, return null
    if (!organizationQuery) {
      return null;
    }


    // Return the result of updating the organization
      .createQueryBuilder()
      .update(Organization)
      .set({
        name: input.name ? input.name : organizationQuery.name, // Only update the fields the user specified
        typeOfOrganization: input.typeOfOrganization
          ? input.typeOfOrganization
          : organizationQuery.typeOfOrganization,
        address: input.address ? input.address : organizationQuery.address,
        email: input.email ? input.email : organizationQuery.email,
        description: input.description
          ? input.description
          : organizationQuery.description,
        phoneNumber: input.phoneNumber
          ? input.phoneNumber
          : organizationQuery.phoneNumber,
      })
      // Get the creatorId from the logged in user to make sure only the creator can edit the organization
      .where('id = :id and "creatorId" = :creatorId', {
        id,
        creatorId: req.session.userId,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth) // Make sure there is a logged in user
  async deleteOrganization(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    await Organization.delete({ id, creatorId: req.session.userId }); // Only delete the organizations the user has added
    return true;
  }
}
