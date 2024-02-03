import { MyContext } from "../types";
import { Organization } from "../entities/Organization";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  Info,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";
import { Star } from "../entities/Stars";

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
  @UseMiddleware(isAuth)
  @Mutation(() => Boolean)
  async vote(
    @Arg("organizationId", () => Int) organizationId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const isStar = value !== -1;
    const realValue = isStar ? 1 : -1;
    const { userId } = req.session;

    const star = await Star.findOne({ where: { organizationId, userId } });

    if (star && star.value !== realValue) {
      await getConnection().transaction(async (tm) => {
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
      await getConnection().transaction(async (tm) => {
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
  @Query(() => PaginatedOrganizations)
  async organizations(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null,
    @Ctx() { req }: MyContext
  ): Promise<PaginatedOrganizations> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    const replacements: any[] = [realLimitPlusOne];

    if (req.session.userId) {
      replacements.push(req.session.userId);
    }

    let cursorIndex = 99;

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
      cursorIndex = replacements.length;
    }
    const organizations = await getConnection().query(
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
      req.session.userId
        ? '(select value from star where "userId" = $2 and "organizationId" = o.id) "voteStatus"'
        : 'null as "voteStatus"'
    }
    from organization o
    inner join public.user u on u.id = o."creatorId"
    ${cursor ? `where o."createdAt" < $${cursorIndex}` : ""}
    order by o."createdAt" DESC
    limit $1
    `,
      replacements
    );

    return {
      organizations: organizations.slice(0, realLimit),
      hasMore: organizations.length === realLimitPlusOne,
    };
  }
  @Query(() => Organization, { nullable: true })
  organization(@Arg("id", () => Int) id: number): Promise<Organization | null> {
    return Organization.findOne({ where: { id } });
  }
  @Mutation(() => Organization)
  @UseMiddleware(isAuth)
  async addOrganization(
    @Arg("input") input: OrganizationInput,
    @Ctx() { req }: MyContext
  ): Promise<Organization> {
    const organization = Organization.create({
      ...input,
      creatorId: req.session.userId,
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
  async deleteOrganization(@Arg("id") id: number) {
    await Organization.delete({ id });
    return true;
  }
}
