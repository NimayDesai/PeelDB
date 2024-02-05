import { ApolloServer } from "apollo-server-express";
import RedisStore from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { __prod__ } from "./constants";
import { HelloResolver } from "./resolvers/hello";
import { OrganizationResolver } from "./resolvers/organization";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";

const main = async () => {
  const app = express();

  const redis = new Redis(process.env.REDIS_URL); // Create Redis Store
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
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // Max age for 10 Year
        httpOnly: true,
        secure: __prod__, // Only use secure cookies in production
        domain: __prod__ ? ".peeldb.me" : undefined,
        sameSite: "lax",
      },
      resave: false, // required: force lightweight session keep alive (touch)
      saveUninitialized: false, // recommended: only save session when data exists
      secret: process.env.SESSION_SECRET,
    }),
    cors<cors.CorsRequest>({
      origin: [process.env.CORS_ORIGIN, "https://studio.apollographql.com"], // Add frontend to cors
      credentials: true,
    })
  );
  app.set("trust proxy", 1);

  const apolloServer = new ApolloServer({
    // Create Apolo Server
    schema: await buildSchema({
      resolvers: [HelloResolver, OrganizationResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }), // Add Context with request and response
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    // Add the app to apollo
    app,
    cors: {
      origin: [process.env.CORS_ORIGIN, "https://studio.apollographql.com"],
      credentials: true,
    },
  });

  app.listen(parseInt(process.env.PORT), () => {
    // Start the server on port 4000
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
