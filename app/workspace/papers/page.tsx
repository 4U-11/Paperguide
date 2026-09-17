import Link from "next/link";
import ActionButton from "@/components/ActionButton";

const papers = [
  {
    id: 1,
    title: "Learning-Based Model Predictive Control",
    field: "控制 · MPC",
    status: "阅读中",
    progress: "68%",
    updated: "今天更新",
  },
  {
    id: 2,
    title: "Deep Reinforcement Learning for Quadrotor Control",
    field: "无人机 · 强化学习",
    status: "待开始",
    progress: "0%",
    updated: "昨天更新",
  },
  {
    id: 3,
    title: "Vision-Based Robotic Manipulation",
    field: "机器人 · 视觉控制",
    status: "已完成",
    progress: "100%",
    updated: "3 天前更新",
  },
];

export default function WorkspacePapersPage() {
  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
            My papers
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            我的论文
          </h1>
          <p className="mt-4 text-lg text-[#6e6e73]">
            所有阅读、分析和复现中的论文。
          </p>
        </div>

        <ActionButton href="/workspace/new">
          新建论文
        </ActionButton>
      </div>

      <div className="mt-12 space-y-4">
        {papers.map((paper) => (
          <Link
            key={paper.id}
            href="/papers/demo"
            className="block rounded-[28px] bg-white p-6 ring-1 ring-black/[.06] transition hover:-translate-y-0.5 hover:ring-black/[.12] sm:p-7"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm text-[#6e6e73]">{paper.field}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  {paper.title}
                </h2>
                <p className="mt-3 text-sm text-[#6e6e73]">{paper.updated}</p>
              </div>

              <div className="flex items-center gap-5 lg:min-w-[240px] lg:justify-end">
                <div className="min-w-24">
                  <div className="h-1.5 rounded-full bg-[#e8e8ed]">
                    <div
                      className="h-1.5 rounded-full bg-[#0071e3]"
                      style={{ width: paper.progress }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-[#6e6e73]">{paper.progress} 已整理</p>
                </div>
                <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#6e6e73]">
                  {paper.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
