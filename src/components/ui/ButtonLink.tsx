import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold";
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition",
        variant === "primary" && "bg-[#115a37] text-white hover:bg-[#0f4a2f]",
        variant === "gold" && "bg-[#caa24a] text-black hover:opacity-90",
        variant === "secondary" &&
          "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
      )}
    >
      {children}
    </Link>
  );
}
