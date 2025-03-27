import { sql } from "drizzle-orm";
import { pgPolicy } from "drizzle-orm/pg-core";
import { authenticatedRole, authUid } from "drizzle-orm/supabase";
import { subscription } from "./subscription";

export const subscriptions_policy1 = pgPolicy(
  "allow authenticated users full access to their subscription info",
  {
    as: "permissive",
    to: authenticatedRole,
    for: "all",
    using: sql`${subscription.userId} = ${authUid}`,
  },
).link(subscription);
