import "dotenv-safe/config";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import RedisStore from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import { buildSchema } from "type-graphql";
import { __prod__ } from "./constants";
import dataSource from "./db.config";
import { OrganizationResolver } from "./resolvers/organization";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";

const main = async () => {
  await dataSource.initialize(); // Initialize the database
  await dataSource.runMigrations();

  const app = express(); // Create express app

  const redis = new Redis(process.env.REDIS_URL); // Create redis store and redis client
  let redisStore = new RedisStore({
    client: redis,
    disableTouch: true,
  });

  // Initialize session storage.
  app.use(
    // Add the cookie and redis session
    session({
      name: process.env.COOKIE_NAME,
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
      secret: process.env.SESSION_SECRET,
    }),
    cors<cors.CorsRequest>({
      origin: "",
      credentials: true,
    })
  );
  app.set("trust proxy", 1);

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [OrganizationResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res, redis }),
  });

  await apolloServer.start();
  // Allow dev host, production host, and apollo studio to send requests
  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: [
        process.env.CORS_ORIGIN,
        "https://peeldb.me",
        "https://studio.apollographql.com",
      ],
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
