import { pgTable, uuid } from "drizzle-orm/pg-core";
import { user } from "./user";

export const premiumUsage = pgTable("user_premium_action_usage", {
  userId: uuid("premium_usage_user_id")
    .primaryKey()
    .notNull()
    .references(() => user.id),
});
