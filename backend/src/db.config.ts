import path from "path";
import { DataSource } from "typeorm";
import { __prod__ } from "./constants";
import { Organization } from "./entities/Organization";
import { Star } from "./entities/Stars";
import { User } from "./entities/User";

const dataSource = new DataSource({
  type: "postgres",
  database: "school-app2",
  username: "postgres",
  password: "postgres",
  logging: !__prod__,
  synchronize: true,
  migrations: [path.join(__dirname, "./migrations/*")],
  entities: [Organization, User, Star],
});

export default dataSource;
