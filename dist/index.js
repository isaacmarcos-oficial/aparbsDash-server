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
        // emitSchemaFile: path.resolve(__dirname, "scheme.ggl"),
    });
    console.log();
    const server = new apollo_server_1.ApolloServer({
        schema,
        cors: {
            origin: process.env.FRONTEND_ENDPOINT,
            credentials: true
        }
    });
    const { url } = await server.listen();
    console.log("Server running on " + url);
}
main();
