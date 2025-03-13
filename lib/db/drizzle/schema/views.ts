import { sql, eq } from "drizzle-orm";
import { pgView } from "drizzle-orm/pg-core";
import { authUid, authUsers } from "drizzle-orm/supabase";
import { user } from "./user";

export const usersView = pgView("users_view").as((qb) => {
  const cte = qb.$with("cte").as(
    qb
      .select({
        id: authUsers.id,
        email: authUsers.email,
        createdAt: authUsers.createdAt,
        fullName: sql<string>`${user.fullName}`.as("full_name"),
      })
      .from(authUsers)
      .innerJoin(user, eq(authUsers.id, user.id))

      // NOTE: must re-apply a check like in the RLS policy since there's a join in this view. Source: trust me bro
      .where(eq(user.id, authUid)),
  );

  return qb.with(cte).select().from(cte);
});
