import { Organization } from "../entities/Organization";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class OrganizationResolver {
  @Query(() => [Organization])
  organizations(): Promise<Organization[]> {
    return Organization.find();
  }
  @Query(() => Organization, { nullable: true })
  organization(@Arg("id", () => Int) id: number): Promise<Organization | null> {
    return Organization.findOne({ where: { id } });
  }
  @Mutation(() => Organization)
  async addOrganization(
    @Arg("name", () => String) name: string,
    @Arg("email", () => String) email: string,
    @Arg("address", () => String) address: string,
    @Arg("phoneNumber", () => String) phoneNumber: string,
    @Arg("typeOfOrganization", () => String) typeOfOrganization: string
  ): Promise<Organization | null> {
    const organization = Organization.create({
      name,
      email,
      address,
      phoneNumber,
      typeOfOrganization,
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