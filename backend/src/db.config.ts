import "dotenv-safe/config";
import path from "path";
import { DataSource } from "typeorm";
import { __prod__ } from "./constants";
import { Organization } from "./entities/Organization";
import { Star } from "./entities/Stars";
import { User } from "./entities/User";

const dataSource = new DataSource({
  // Create dataSource to be used globally accross the app
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: !__prod__,
  synchronize: true,
  migrations: [path.join(__dirname, "./migrations/*")],
  entities: [Organization, User, Star],
});

dataSource.initialize();

export default dataSource;
