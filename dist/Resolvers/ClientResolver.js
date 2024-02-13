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
exports.ClientResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ClientInput_1 = require("../Inputs/ClientInput");
const Client_1 = require("../Models/Client");
const Client_2 = require("../mongodb/Models/Client");
let ClientResolver = class ClientResolver {
    async clients() {
        return await Client_2.ClientMongo.find();
    }
    async client(id) {
        return await Client_2.ClientMongo.findOne({ _id: id });
    }
    async clientsFiltered(clientNumber, clientName) {
        const query = {};
        if (clientNumber) {
            query.clientNumber = new RegExp(clientNumber, "i");
        }
        if (clientName) {
            query.name = new RegExp(clientName, "i");
        }
        return await Client_2.ClientMongo.find(query);
    }
    async createClient(createClientObject) {
        const { name, phone, serviceOrder, clientNumber, dischargeDate, note, sentToday, sentThreeDays, sentSevenDays, sentOneMonth, sentThreeMonths, sentSixMonths, } = createClientObject;
        return await Client_2.ClientMongo.create({
            name,
            phone,
            serviceOrder,
            clientNumber,
            dischargeDate,
            note,
            sentToday,
            sentThreeDays,
            sentSevenDays,
            sentOneMonth,
            sentThreeMonths,
            sentSixMonths,
        });
    }
    async editClient(editClientObject) {
        const client = { ...editClientObject };
        await Client_2.ClientMongo.updateOne({ _id: client.id }, client);
        return client;
    }
    async deleteClient(id) {
        await Client_2.ClientMongo.deleteOne({ _id: id });
        return id;
    }
};
exports.ClientResolver = ClientResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Client_1.Client]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "clients", null);
__decorate([
    (0, type_graphql_1.Query)(() => Client_1.Client),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "client", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Client_1.Client]),
    __param(0, (0, type_graphql_1.Arg)("clientNumber", { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)("clientName", { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "clientsFiltered", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Client_1.Client),
    __param(0, (0, type_graphql_1.Arg)("createClientObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ClientInput_1.CreateClientInput]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "createClient", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Client_1.Client),
    __param(0, (0, type_graphql_1.Arg)("editClientObject")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ClientInput_1.EditClientInput]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "editClient", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "deleteClient", null);
exports.ClientResolver = ClientResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ClientResolver);
