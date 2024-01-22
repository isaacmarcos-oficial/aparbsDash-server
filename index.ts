import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env" });
import "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { ClientResolver } from "./Resolvers/ClientResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [ClientResolver],
    // emitSchemaFile: path.resolve(__dirname, "scheme.ggl"),
  });
  console.log()

  const server = new ApolloServer({
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
