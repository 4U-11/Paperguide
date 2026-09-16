import Link from "next/link"
import SiteHeader from "@/components/SiteHeader";
const papers = [
  {
    id: 1,
    title: "Learning-Based Model Predictive Control",
    field: "控制 · MPC",
    status: "阅读中",
  },
  {
    id: 2,
    title: "Deep Reinforcement Learning for Quadrotor Control",
    field: "无人机 · 强化学习",
    status: "待开始",
  },
  {
    id: 3,
    title: "Vision-Based Robotic Manipulation",
    field: "机器人 · 视觉控制",
    status: "已完成",
  },
];

export default function PapersPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/"
          className="text-sm font-medium text-[#0071e3] hover:text-[#0077ed]"
        >
          ← 返回首页
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
            Paper Library
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.045em]">
            我的论文
          </h1>

          <p className="mt-5 text-lg text-[#6e6e73]">
            整理正在阅读、分析和复现的科研论文。
          </p>

          <Link
            href="/upload"
            className="mt-7 inline-block rounded-full bg-[#0071e3] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0077ed]"
          >
            上传新的论文
          </Link>
        </div>

        <div className="mt-14 grid gap-5">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="rounded-[28px] bg-white p-7 ring-1 ring-black/[.06] transition hover:-translate-y-0.5 hover:ring-black/[.12]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-[#6e6e73]">{paper.field}</p>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    <Link
                        href="/papers/demo"
                        className="transition hover:text-[#0071e3]"
                     >
                        {paper.title}
                     </Link>
                  </h2>
                </div>

                <span className="w-fit rounded-full bg-[#f5f5f7] px-3 py-1 text-sm font-medium text-[#6e6e73]">
                  {paper.status}
                </span>
              </div>
            </article>
          ))}
        </div>
        </section>
      </main>
    </div>
  );
}
