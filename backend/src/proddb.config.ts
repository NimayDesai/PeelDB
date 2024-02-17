import path from "path";
import "dotenv-safe/config";
import { DataSource } from "typeorm";
import { __prod__ } from "./constants";
import { Organization } from "./entities/Organization";
import { Star } from "./entities/Stars";
import { User } from "./entities/User";

const dataSource = new DataSource({
  type: "postgres",
  database: "school-app5",
  password: "postgres",
  username: "postgres",
  logging: !__prod__, // Only log in dev
  synchronize: true, // Sync entities with database
  migrations: [path.join(__dirname, "./migrations/*")], // Migrations folder
  entities: [Organization, User, Star], // All tables
});
export default dataSource;
