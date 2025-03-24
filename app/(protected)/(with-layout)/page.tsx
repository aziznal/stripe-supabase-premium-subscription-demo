import { Page } from "@/lib/client/components/layout/Page";
import { getUserInfo } from "@/modules/user/actions";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const user = await getUserInfo();

  return (
    <Page>
      <div className="mb-12 text-3xl">
        Welcome, <span className="font-bold">{user.fullName}</span>
      </div>
    </Page>
  );
}
