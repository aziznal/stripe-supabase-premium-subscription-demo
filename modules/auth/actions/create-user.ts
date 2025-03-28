"use server";

import { createClient } from "@/lib/supabase/server";
import { user } from "@/lib/db/drizzle/schema/index";
import { createDrizzleSupabaseClient } from "@/lib/db/drizzle";
import { SignupForm } from "../schemas";

export async function createUser(args: SignupForm) {
  const db = await createDrizzleSupabaseClient();

  const supabase = await createClient();

  const signupResult = await supabase.auth.signUp({
    email: args.email,
    password: args.password,
  });

  if (signupResult.error) {
    throw new Error(
      "Something went wrong while signing up",
      signupResult.error,
    );
  }

  await db.admin.transaction(async (tx) => {
    if (!signupResult.data.user || !signupResult.data.session) {
      throw new Error("An unknown error occurred while signing up");
    }

    await tx
      .insert(user)
      .values({
        id: signupResult.data.user.id,
        fullName: args.fullName,
      })
      .onConflictDoUpdate({
        set: {
          fullName: args.fullName,
        },
        target: [user.id],
      });
  });
}
