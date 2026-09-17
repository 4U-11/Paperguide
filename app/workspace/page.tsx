import Link from "next/link";
import ActionButton from "@/components/ActionButton";

const recentPapers = [
  {
    title: "Learning-Based Model Predictive Control",
    meta: "控制 · MPC · 更新于今天",
    progress: "68%",
    status: "阅读中",
  },
  {
    title: "Deep Reinforcement Learning for Quadrotor Control",
    meta: "无人机 · 强化学习 · 更新于昨天",
    progress: "0%",
    status: "待开始",
  },
  {
    title: "Vision-Based Robotic Manipulation",
    meta: "机器人 · 视觉控制 · 更新于 3 天前",
    progress: "100%",
    status: "已完成",
  },
];

export default function WorkspacePage() {
  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
            Dashboard
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            工作区总览
          </h1>
          <p className="mt-4 text-lg text-[#6e6e73]">
            从今天开始，把论文阅读变成一条可追踪的复现路径。
          </p>
        </div>

        <ActionButton href="/workspace/new">
          新建论文
        </ActionButton>
      </div>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06]">
          <p className="text-sm text-[#6e6e73]">全部论文</p>
          <p className="mt-5 text-4xl font-semibold tracking-tight">03</p>
        </div>
        <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06]">
          <p className="text-sm text-[#6e6e73]">正在阅读</p>
          <p className="mt-5 text-4xl font-semibold tracking-tight">01</p>
        </div>
        <div className="rounded-[24px] bg-[#1d1d1f] p-6 text-white">
          <p className="text-sm text-[#a1a1a6]">本周复现进度</p>
          <p className="mt-5 text-4xl font-semibold tracking-tight">42%</p>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="rounded-[28px] bg-white p-6 ring-1 ring-black/[.06] sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">最近论文</h2>
            <Link
              href="/workspace/papers"
              className="text-sm font-medium text-[#0071e3] hover:text-[#0077ed]"
            >
              查看全部
            </Link>
          </div>

          <div className="mt-6 divide-y divide-black/[.08]">
            {recentPapers.map((paper) => (
              <Link
                key={paper.title}
                href="/papers/demo"
                className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-medium tracking-tight transition hover:text-[#0071e3]">
                    {paper.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6e6e73]">{paper.meta}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{paper.progress}</span>
                  <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs text-[#6e6e73]">
                    {paper.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] bg-white p-6 ring-1 ring-black/[.06] sm:p-8">
          <p className="text-sm text-[#6e6e73]">今日建议</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            先把方法读清楚。
          </h2>
          <p className="mt-4 leading-7 text-[#6e6e73]">
            回到正在阅读的论文，整理变量定义、关键假设和实验设置。
          </p>
          <Link
            href="/papers/demo#methods"
            className="mt-7 inline-block text-sm font-medium text-[#0071e3] hover:text-[#0077ed]"
          >
            继续阅读方法 →
          </Link>
        </aside>
      </section>
    </>
  );
}
