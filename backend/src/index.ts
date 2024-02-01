import "reflect-metadata";
import { Or, createConnection } from "typeorm";
import { __prod__ } from "./constants";
import { Organization } from "./entities/Organization";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { OrganizationResolver } from "./resolvers/organization";
import path from "path";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: "school-app2",
    username: "postgres",
    password: "postgres",
    logging: !__prod__,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Organization],
  });

  //   await conn.runMigrations();
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, OrganizationResolver],
      validate: false,
    }),
    context: () => ({}),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
