import type { ReactNode } from "react";

export default function PaperLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">{children}</main>
    </div>
  );
}
