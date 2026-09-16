import Link from "next/link";

const navItems = [
  { href: "/papers", label: "论文库" },
  { href: "/upload", label: "上传论文" },
  { href: "/manual", label: "复现手册" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/[.08] bg-[#f5f5f7]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-6xl items-center px-5 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#1d1d1f]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1d1d1f] text-xs font-bold text-white">
            P
          </span>
          PaperGuide
        </Link>

        <nav className="ml-auto flex items-center gap-3 text-[11px] text-[#424245] sm:gap-5 sm:text-xs">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#0071e3]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <span className="ml-3 hidden rounded-full bg-black/[.05] px-3 py-1 text-[11px] font-medium text-[#6e6e73] md:ml-8 md:inline-flex">
          前端原型
        </span>
      </div>
    </header>
  );
}
