import { Pool } from "pg";

const db = new Pool({
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT!,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_USER,
});

export default db;
