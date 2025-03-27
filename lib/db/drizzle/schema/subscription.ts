import { pgTable, uuid } from "drizzle-orm/pg-core";
import { user } from "./user";
import { subscriptionTier } from "./subscription-tier";

export const subscription = pgTable("user_subscriptions", {
  userId: uuid("subscription_user_id")
    .primaryKey()
    .notNull()
    .references(() => user.id),

  tier: subscriptionTier().notNull(),

  // TODO: add created_at
  // TODO: add expiry 
});
