import { env } from "@/env.mjs";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

export { capexTable as tableCreator } from "./schema/_table";

const globalPool: mysql.Pool | undefined = undefined;

function connect() {
  if (typeof globalPool !== "undefined") {
    return globalPool;
  }
  return mysql.createPool({
    uri: env.DATABASE_URL,
  });
}

export const db = drizzle(connect(), {
  schema,
  mode: "default",
  // logger: process.env.NODE_ENV === "development",
});
