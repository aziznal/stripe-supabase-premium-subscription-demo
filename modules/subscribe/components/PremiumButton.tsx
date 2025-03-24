"use client";

import { cn } from "@/lib/client/utils";
import { LucideCrown } from "lucide-react";
import Link from "next/link";

export const PremiumButton: React.FC<{ className?: string }> = (props) => {
  return (
    <Link
      href="/subscribe"
      className={cn(
        props.className,
        "flex items-center justify-center gap-1 rounded bg-gradient-to-r from-fuchsia-500 to-violet-500 px-2 py-1 text-xs font-bold outline-offset-4 transition-all hover:outline-2 hover:outline-fuchsia-500",
      )}
    >
      Get Premium
      <LucideCrown size="18" />
    </Link>
  );
};
