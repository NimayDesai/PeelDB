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
import { User } from "./entities/User";
import { UserResolver } from "./resolvers/user";
import RedisStore from "connect-redis";
import session from "express-session";
import Redis from "ioredis";
import { MyContext } from "./types";
import cors from "cors";

// Initialize client.

// Initialize store.

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: "school-app2",
    username: "postgres",
    password: "postgres",
    logging: !__prod__,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Organization, User],
  });

  //   await conn.runMigrations();
  const app = express();

  const redis = new Redis();
  let redisStore = new RedisStore({
    client: redis,
    disableTouch: true,
  });

  // Initialize session storage.
  app.use(
    session({
      name: "qid",
      store: redisStore,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        secure: __prod__,
        sameSite: "none",
      },
      resave: false, // required: force lightweight session keep alive (touch)
      saveUninitialized: false, // recommended: only save session when data exists
      secret: "qwaasqwdqweqwadqwdaa",
    }),
    cors<cors.CorsRequest>({
      origin: "https://studio.apollographql.com",
      credentials: true,
    })
  );
  app.set("trust proxy", 1);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, OrganizationResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});