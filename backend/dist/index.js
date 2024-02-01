"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const Organization_1 = require("./entities/Organization");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const organization_1 = require("./resolvers/organization");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
const user_1 = require("./resolvers/user");
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const ioredis_1 = __importDefault(require("ioredis"));
const cors_1 = __importDefault(require("cors"));
const main = async () => {
    const conn = await (0, typeorm_1.createConnection)({
        type: "postgres",
        database: "school-app2",
        username: "postgres",
        password: "postgres",
        logging: !constants_1.__prod__,
        synchronize: true,
        migrations: [path_1.default.join(__dirname, "./migrations/*")],
        entities: [Organization_1.Organization, User_1.User],
    });
    const app = (0, express_1.default)();
    const redis = new ioredis_1.default();
    let redisStore = new connect_redis_1.default({
        client: redis,
        disableTouch: true,
    });
    app.use((0, express_session_1.default)({
        name: "qid",
        store: redisStore,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            secure: constants_1.__prod__,
            sameSite: "none",
        },
        resave: false,
        saveUninitialized: false,
        secret: "qwaasqwdqweqwadqwdaa",
    }), (0, cors_1.default)({
        origin: "https://studio.apollographql.com",
        credentials: true,
    }));
    app.set("trust proxy", 1);
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [hello_1.HelloResolver, organization_1.OrganizationResolver, user_1.UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
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
//# sourceMappingURL=index.js.map