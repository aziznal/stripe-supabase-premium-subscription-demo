import { getSubscriptionTiers } from "@/modules/subscribe/plans";
import { pgEnum } from "drizzle-orm/pg-core";

export const subscriptionTier = pgEnum(
  "subscription_tier",
  getSubscriptionTiers(),
);
