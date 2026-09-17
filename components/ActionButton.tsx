import type { ReactNode } from "react";
import Link from "next/link";

type ActionButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const buttonClassName =
  "inline-flex h-11 min-w-[120px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#6e6e73] px-6 text-center text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#424245] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6e6e73]/40";

export default function ActionButton({
  children,
  href,
  type = "button",
  className = "",
}: ActionButtonProps) {
  const classNameWithOverrides = `${buttonClassName} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classNameWithOverrides}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classNameWithOverrides}>
      {children}
    </button>
  );
}
