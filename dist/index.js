"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv").config({ path: ".env" });
require("./mongodb/connect");
const type_graphql_1 = require("type-graphql");
const apollo_server_1 = require("apollo-server");
const ClientResolver_1 = require("./Resolvers/ClientResolver");
async function main() {
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [ClientResolver_1.ClientResolver],
    });
    console.log();
    const server = new apollo_server_1.ApolloServer({
        schema,
        introspection: true,
        cors: {
            origin: "*",
            credentials: true,
        },
    });
    // Script para Migração
    // await migrateAddStatus()
    const { url } = await server.listen();
    console.log("Server running on " + url);
}
main();
