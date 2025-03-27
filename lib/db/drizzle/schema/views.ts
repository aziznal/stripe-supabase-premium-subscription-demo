import { sql, eq, and } from "drizzle-orm";
import { pgView } from "drizzle-orm/pg-core";
import { authUid, authUsers } from "drizzle-orm/supabase";
import { user } from "./user";
import { subscription } from "./subscription";

export const usersView = pgView("users_view").as((qb) => {
  const cte = qb.$with("cte").as(
    qb
      .select({
        id: authUsers.id,
        email: authUsers.email,
        createdAt: authUsers.createdAt,
        fullName: sql<string>`${user.fullName}`.as("full_name"),
        subscriptionTier: subscription.tier,
      })
      .from(authUsers)
      .innerJoin(user, eq(authUsers.id, user.id))
      .leftJoin(subscription, eq(subscription.userId, user.id))
      .where(and(eq(user.id, authUid))),
  );

  return qb.with(cte).select().from(cte);
});
