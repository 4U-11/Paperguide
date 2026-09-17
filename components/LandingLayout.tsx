import type { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">{children}</div>;
}
