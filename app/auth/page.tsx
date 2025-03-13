import { Page } from "@/lib/client/components/layout/Page";
import { LoginForm } from "@/modules/auth/components/LoginForm";
import { SignupForm } from "@/modules/auth/components/SignupForm";

export default function AuthPage() {
  return (
    <Page className="flex min-h-[100dvh] flex-col items-center justify-center gap-12">
      <div className="text-center">
        <h1 className="mb-3 text-2xl font-black text-balance">
          Premium Demo with <span className="text-amber-500">Stripe</span>
        </h1>

        <p className="text-muted-foreground text-balance">
          An app made with Next.js, Supabase, and Stripe
        </p>
      </div>

      <div className="flex max-w-[500px] flex-col gap-16">
        <SignupForm />

        <LoginForm />
      </div>
    </Page>
  );
}
