"use client";

import { PremiumButton } from "@/modules/subscribe/components/PremiumButton";
import { UserDropdown } from "@/modules/user/components/UserDropdown";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="container px-4 mx-auto flex items-center justify-between border-b py-5">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-muted-foreground cursor-pointer font-bold hover:text-amber-400"
        >
          Home
        </Link>

        <PremiumButton />
      </div>

      <UserDropdown />
    </header>
  );
};
