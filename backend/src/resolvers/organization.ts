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
import dataSource from "../db.config";
import { Organization } from "../entities/Organization";
import { Star } from "../entities/Stars";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";

// Create an input Type used for the user inptu when Adding and Organization
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
  phoneNumber: string;
}

@ObjectType()
class PaginatedOrganizations {
  @Field(() => [Organization])
  organizations: Organization[];
  @Field()
  hasMore: boolean;
}

@Resolver()
export class OrganizationResolver {
  // Make sure user is logged in
  @UseMiddleware(isAuth)
  @Mutation(() => Boolean)
  async vote(
    @Arg("organizationId", () => Int) organizationId: number, // Take in organizationId and value
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const isStar = value !== -1;
    const realValue = isStar ? 1 : -1; // Cap the vote to 1 or -1 (when unstarring a post)
    const { userId } = req.session;

    const star = await Star.findOne({ where: { organizationId, userId } }); // Find the star object using the organizationId and UserId

    if (star && star.value !== realValue) {
      // Check if user has already starred and is changing his vote
      await dataSource.transaction(async (tm) => {
        await tm.query(
          // Update star with new value
          `
        update star
        set value = $1
        where "organizationId" = $2 and "userId" = $3
        `,
          [realValue, organizationId, userId]
        );
        await tm.query(
          // Add the new value to the points
          `
        update organization
        set points = points + $1
        where id = $2
        `,
          [realValue, organizationId]
        );
      });
    } else if (!star) {
      await dataSource.transaction(async (tm) => {
        await tm.query(
          // Add a new row of star
          `
        insert into star ("userId", "organizationId", value)
        values ($1, $2, $3)
        `,
          [userId, organizationId, realValue]
        );
        await tm.query(
          // Add points by the value which the user voted
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
  @Query(() => PaginatedOrganizations)
  async organizations(
    @Arg("limit", () => Int) limit: number,
    @Arg("searchValue", () => String) searchValue: string,
    @Arg("searchOptions", () => String) searchOptions: string,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null,
    @Ctx() { req }: MyContext
  ): Promise<PaginatedOrganizations> {
    const realLimit = Math.min(50, limit); // Cap the limit at 50
    const realLimitPlusOne = realLimit + 1; // Fetch the next item to know if there is still more data
    const replacements: any[] = [realLimitPlusOne];

    if (req.session.userId) {
      // Check if user is logged in
      replacements.push(req.session.userId); // If the user is logged in, add the session id to the query
    }

    let cursorIndex = 99; // Add a cursor index

    if (cursor) {
      // If there is a cursor, add it to the query
      replacements.push(new Date(parseInt(cursor)));
      cursorIndex = replacements.length; // Make sure that PostgresSQl doesnt insert a value out of range
    }
    const organizations = await dataSource.query(
      // Get all Organizations
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
      // If User is logged in, get their voteStatus on the Organization
      req.session.userId
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

    // Return Organizations, and if there is more data
    return {
      organizations: organizations.slice(0, realLimit),
      hasMore: organizations.length === realLimitPlusOne,
    };
  }
  @Query(() => Organization, { nullable: true })
  organization(@Arg("id", () => Int) id: number): Promise<Organization | null> {
    return Organization.findOne({ where: { id }, relations: ["creator"] });
    // Find an organization where the id is equal to the id the user specified
    // Also fetches the creator of the Organization
  }
  @Mutation(() => Organization)
  @UseMiddleware(isAuth)
  async addOrganization(
    @Arg("input") input: OrganizationInput,
    @Ctx() { req }: MyContext
  ): Promise<Organization> {
    const organization = Organization.create({
      // Add the input to a new organization
      ...input,
      creatorId: req.session.userId, // Use the session id of the logged in user as the creatorId
    }).save();
    return organization;
  }
  @Mutation(() => Organization, { nullable: true })
  async updateOrganization(
    @Arg("name", () => String, { nullable: true }) name: string,
    @Arg("email", () => String, { nullable: true }) email: string,
    @Arg("id") id: number,
    @Arg("address", () => String, { nullable: true }) address: string,
    @Arg("phoneNumber", () => String, { nullable: true }) phoneNumber: string,
    @Arg("typeOfOrganization", () => String, { nullable: true })
    typeOfOrganization: string
  ): Promise<Organization | null> {
    let organization = await Organization.findOne({ where: { id } });
    if (!organization) {
      return null;
    }
    if (typeof name !== "undefined") {
      await Organization.update({ id }, { name });
    }
    if (typeof email !== "undefined") {
      await Organization.update({ id }, { email });
    }
    if (typeof address !== "undefined") {
      await Organization.update({ id }, { address });
    }
    if (typeof phoneNumber !== "undefined") {
      await Organization.update({ id }, { phoneNumber });
    }
    if (typeof typeOfOrganization !== "undefined") {
      await Organization.update({ id }, { typeOfOrganization });
    }
    organization = await Organization.findOne({ where: { id } });
    return organization;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth) // Make sure a logged in user is not deleting organizations
  async deleteOrganization(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    await Organization.delete({ id, creatorId: req.session.userId }); // Make sure the user can only delete the organizations the user added
    return true; // The Functin was able to delete the organization
  }
}
