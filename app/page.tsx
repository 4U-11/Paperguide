import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <SiteHeader />

      <main>
        <section className="overflow-hidden bg-black px-6 pb-0 pt-20 text-center text-white sm:pt-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-medium tracking-[0.22em] text-[#a1a1a6]">
              PAPERGUIDE
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              把论文读懂。
              <br />
              把复现做出来。
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#a1a1a6] sm:text-xl">
              从原文、公式到代码和实验，建立一条清晰、可追溯的科研复现路径。
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/papers"
                className="rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0077ed]"
              >
                进入论文库
              </Link>

              <Link
                href="/manual"
                className="rounded-full border border-[#0071e3] px-6 py-3 text-sm font-medium text-[#2997ff] transition hover:bg-[#0071e3]/10"
              >
                查看复现手册
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-20 h-64 max-w-5xl sm:h-80">
            <div className="absolute left-1/2 top-8 h-48 w-[88%] -translate-x-1/2 rounded-[32px] border border-white/30 bg-gradient-to-br from-[#d7d7dc] via-[#51545b] to-[#e4e5e8] opacity-80 shadow-[0_0_70px_rgba(255,255,255,.22)] sm:h-64 sm:rounded-[44px]" />
            <div className="absolute left-1/2 top-20 h-36 w-[62%] -translate-x-1/2 rounded-[24px] border border-white/20 bg-gradient-to-r from-[#1d1d1f] via-[#4c5360] to-[#1d1d1f] shadow-[0_18px_80px_rgba(0,113,227,.35)] sm:top-28 sm:h-48 sm:rounded-[32px]" />
            <div className="absolute left-1/2 top-32 h-2 w-28 -translate-x-1/2 rounded-full bg-white/40 sm:top-40" />
          </div>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium text-[#6e6e73]">一个更清晰的工作流</p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              让复杂论文，变成可以一步步完成的事情。
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <article className="rounded-[28px] bg-white p-8 ring-1 ring-black/[.06]">
                <p className="text-sm font-medium text-[#0071e3]">01</p>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight">整理论文</h3>
                <p className="mt-4 leading-7 text-[#6e6e73]">
                  提取标题、章节、公式、图表和关键实验信息，形成可检索的论文结构。
                </p>
              </article>

              <article className="rounded-[28px] bg-white p-8 ring-1 ring-black/[.06]">
                <p className="text-sm font-medium text-[#0071e3]">02</p>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight">理解方法</h3>
                <p className="mt-4 leading-7 text-[#6e6e73]">
                  把研究问题、核心方法、变量和假设组织成一条清晰的解释链。
                </p>
              </article>

              <article className="rounded-[28px] bg-white p-8 ring-1 ring-black/[.06]">
                <p className="text-sm font-medium text-[#0071e3]">03</p>
                <h3 className="mt-12 text-2xl font-semibold tracking-tight">开始复现</h3>
                <p className="mt-4 leading-7 text-[#6e6e73]">
                  对照实验设置和评价指标，记录每一步进度、证据和仍待解决的问题。
                </p>
              </article>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/[.08] bg-white px-6 py-10">
          <div className="mx-auto max-w-6xl text-sm text-[#6e6e73]">
            PaperGuide · 面向控制、自动化与机器人方向的论文复现工作台
          </div>
        </footer>
      </main>
    </div>
  );
}
