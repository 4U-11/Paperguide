"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { workspaceNavigation } from "@/components/navigation";

export function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  return (
    <nav className={mobile ? "flex gap-2 overflow-x-auto" : "space-y-1"}>
      {workspaceNavigation.map((item) => {
        const active =
          item.href === "/workspace"
            ? pathname === item.href
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={
              mobile
                ? `shrink-0 rounded-full px-4 py-2 text-xs font-medium transition ${
                    active
                      ? "bg-[#1d1d1f] text-white"
                      : "bg-black/[.05] text-[#6e6e73] hover:bg-black/[.08]"
                  }`
                : `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                    active
                      ? "bg-[#1d1d1f] font-medium text-white"
                      : "text-[#6e6e73] hover:bg-[#f5f5f7] hover:text-[#1d1d1f]"
                  }`
            }
          >
            {!mobile && <span className="w-6 text-[11px] opacity-50">{item.number}</span>}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function WorkspaceSidebar({ children }: { children?: ReactNode }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-black/[.08] bg-white lg:block">
      <div className="flex h-full flex-col px-5 py-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#1d1d1f]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1d1d1f] text-xs font-bold text-white">
            P
          </span>
          PaperGuide
        </Link>

        <div className="mt-14">
          <p className="px-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#a1a1a6]">
            Workspace
          </p>
          <div className="mt-4">
            <NavigationLinks />
          </div>
        </div>

        {children ?? (
          <div className="mt-auto rounded-2xl bg-[#f5f5f7] p-4 text-xs leading-5 text-[#6e6e73]">
            <p className="font-medium text-[#424245]">阶段 1 · 前端原型</p>
            <p className="mt-1">后续将连接 FastAPI、数据库和文件存储。</p>
          </div>
        )}
      </div>
    </aside>
  );
}
