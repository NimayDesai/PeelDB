"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationResolver = void 0;
const Organization_1 = require("../entities/Organization");
const type_graphql_1 = require("type-graphql");
let OrganizationResolver = class OrganizationResolver {
    organizations() {
        return Organization_1.Organization.find();
    }
    organization(id) {
        return Organization_1.Organization.findOne({ where: { id } });
    }
    async addOrganization(name, email, address, phoneNumber, typeOfOrganization) {
        const organization = Organization_1.Organization.create({
            name,
            email,
            address,
            phoneNumber,
            typeOfOrganization,
        }).save();
        return organization;
    }
    async updateOrganization(name, email, id, address, phoneNumber, typeOfOrganization) {
        let organization = await Organization_1.Organization.findOne({ where: { id } });
        if (!organization) {
            return null;
        }
        if (typeof name !== "undefined") {
            await Organization_1.Organization.update({ id }, { name });
        }
        if (typeof email !== "undefined") {
            await Organization_1.Organization.update({ id }, { email });
        }
        if (typeof address !== "undefined") {
            await Organization_1.Organization.update({ id }, { address });
        }
        if (typeof phoneNumber !== "undefined") {
            await Organization_1.Organization.update({ id }, { phoneNumber });
        }
        if (typeof typeOfOrganization !== "undefined") {
            await Organization_1.Organization.update({ id }, { typeOfOrganization });
        }
        organization = await Organization_1.Organization.findOne({ where: { id } });
        return organization;
    }
    async deleteOrganization(id) {
        await Organization_1.Organization.delete({ id });
        return true;
    }
};
exports.OrganizationResolver = OrganizationResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Organization_1.Organization]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrganizationResolver.prototype, "organizations", null);
__decorate([
    (0, type_graphql_1.Query)(() => Organization_1.Organization, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrganizationResolver.prototype, "organization", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Organization_1.Organization),
    __param(0, (0, type_graphql_1.Arg)("name", () => String)),
    __param(1, (0, type_graphql_1.Arg)("email", () => String)),
    __param(2, (0, type_graphql_1.Arg)("address", () => String)),
    __param(3, (0, type_graphql_1.Arg)("phoneNumber", () => String)),
    __param(4, (0, type_graphql_1.Arg)("typeOfOrganization", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], OrganizationResolver.prototype, "addOrganization", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Organization_1.Organization, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("name", () => String, { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("email", () => String, { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("id")),
    __param(3, (0, type_graphql_1.Arg)("address", () => String, { nullable: true })),
    __param(4, (0, type_graphql_1.Arg)("phoneNumber", () => String, { nullable: true })),
    __param(5, (0, type_graphql_1.Arg)("typeOfOrganization", () => String, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, String, String]),
    __metadata("design:returntype", Promise)
], OrganizationResolver.prototype, "updateOrganization", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrganizationResolver.prototype, "deleteOrganization", null);
exports.OrganizationResolver = OrganizationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], OrganizationResolver);
//# sourceMappingURL=organization.js.map