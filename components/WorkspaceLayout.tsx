"use client";

import type { ReactNode } from "react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <WorkspaceSidebar />

      <div className="lg:pl-64">
        <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
