import path from "path";
import "dotenv-safe/config";
import { DataSource } from "typeorm";
import { __prod__ } from "./constants";
import { Organization } from "./entities/Organization";
import { Star } from "./entities/Stars";
import { User } from "./entities/User";

const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: !__prod__,
  synchronize: true,
  migrations: [path.join(__dirname, "./migrations/*")],
  entities: [Organization, User, Star],
});

export const initataSource = async () => {
  await dataSource.initialize();
  await dataSource.runMigrations();
};

export default dataSource;
