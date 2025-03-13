import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { authUsers } from "drizzle-orm/supabase";

export const user = pgTable("user", {
  id: uuid("user_id")
    .primaryKey()
    .notNull()
    .references(() => authUsers.id),
  fullName: text("user_full_name").notNull(),
});

export const userRelations = relations(user, ({ one }) => ({
  authUser: one(authUsers, {
    fields: [user.id],
    references: [authUsers.id],
  }),
}));
