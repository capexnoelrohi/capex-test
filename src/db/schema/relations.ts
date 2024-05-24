import { relations } from "drizzle-orm";
import { post, user } from "./main";

export const userRelations = relations(user, ({ many }) => ({
  posts: many(post),
}));

export const postRelations = relations(post, ({ one }) => ({
  createdBy: one(user, {
    fields: [post.createdBy],
    references: [user.id],
  }),
}));
