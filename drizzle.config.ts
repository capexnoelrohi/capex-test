import { env } from "@/env.mjs";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "src/db/schema/index.ts",
  dialect: "mysql",
  out: "migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["cpx_*"],
  verbose: true,
  strict: true,
});
