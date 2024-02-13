import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env" });
import "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { ClientResolver } from "./Resolvers/ClientResolver";
import { migrateAddStatus } from "./scripts/migrate-add-dischargeDAte";

async function main() {
  const schema = await buildSchema({
    resolvers: [ClientResolver],
  });
  console.log();

  const server = new ApolloServer({
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
