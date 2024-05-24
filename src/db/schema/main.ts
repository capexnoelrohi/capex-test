import { bigint, serial, timestamp, varchar } from "drizzle-orm/mysql-core";
import { capexTable } from "./_table";
import { sql } from "drizzle-orm";

const now = sql`CURRENT_TIMESTAMP()`;

const defaultColumns = {
  id: serial("id"),
  createdAt: timestamp("created_at").notNull().default(now),
  updatedAt: timestamp("updated_at").onUpdateNow(),
};

export const user = capexTable("user", {
  ...defaultColumns,
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
});

export const post = capexTable("post", {
  ...defaultColumns,
  title: varchar("title", { length: 255 }).notNull(),
  content: varchar("content", { length: 255 }).notNull(),
  createdBy: bigint("created_by", { mode: "number" }).notNull(),
});
