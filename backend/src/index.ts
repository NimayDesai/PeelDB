import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import RedisStore from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { __prod__ } from "./constants";
import dataSource from "./db.config";
import { HelloResolver } from "./resolvers/hello";
import { OrganizationResolver } from "./resolvers/organization";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";

// Initialize client.

// Initialize store.

const main = async () => {
  // await Organization.create({
  //   name: "bob",
  //   email: "bob@bob.com",
  //   typeOfOrganization: "non profit",
  //   address: "2 Seasame Street",
  //   phoneNumber: "1234567890",
  // }).save();

  await dataSource.initialize();
  // await dataSource.runMigrations();

  const app = express();

  const redis = new Redis(process.env.REDIS_URL);
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
        sameSite: "lax",
        domain: __prod__ ? ".peeldb.me" : undefined,
      },
      resave: false, // required: force lightweight session keep alive (touch)
      saveUninitialized: false, // recommended: only save session when data exists
      secret: "qwaasqwdqweqwadqwdaa",
    }),
    cors<cors.CorsRequest>({
      origin: "",
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
    cors: {
      origin: [process.env.CORS_ORIGIN, "https://peeldb.me"],
      credentials: true,
    },
  });

  app.listen(parseInt(process.env.PORT), () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
