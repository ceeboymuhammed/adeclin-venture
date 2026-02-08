import { ReactNode } from "react";
import clsx from "clsx";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6", // reduced side padding
        className
      )}
    >
      {children}
    </div>
  );
}
