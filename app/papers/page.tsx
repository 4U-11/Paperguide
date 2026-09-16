import Link from "next/link"
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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← 返回首页
        </a>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Paper Library
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            我的论文
          </h1>

          <p className="mt-4 text-slate-600">
            整理正在阅读、分析和复现的科研论文。
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">{paper.field}</p>

                  <h2 className="mt-2 text-xl font-semibold">
                    <Link
                        href="/papers/demo"
                        className="transition hover:text-blue-600"
                     >
                        {paper.title}
                     </Link>
                  </h2>
                </div>

                <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                  {paper.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}