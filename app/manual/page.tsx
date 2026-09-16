import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "确认研究问题",
    description: "用自己的话写出论文要解决的问题，并记录对应的论文页码。",
    status: "已完成",
    tone: "bg-emerald-50 text-emerald-700",
  },
  {
    number: "02",
    title: "整理方法与公式",
    description: "标记核心方法、变量定义、关键假设和主要公式。",
    status: "进行中",
    tone: "bg-blue-50 text-blue-700",
  },
  {
    number: "03",
    title: "准备运行环境",
    description: "记录 Python 版本、依赖、硬件要求和数据集来源。",
    status: "待开始",
    tone: "bg-slate-100 text-slate-600",
  },
  {
    number: "04",
    title: "获取并阅读代码",
    description: "确认代码入口、主要文件、关键函数和配置文件。",
    status: "待开始",
    tone: "bg-slate-100 text-slate-600",
  },
  {
    number: "05",
    title: "运行基础实验",
    description: "按照论文中的实验设置运行基线，并记录实际输出。",
    status: "待开始",
    tone: "bg-slate-100 text-slate-600",
  },
  {
    number: "06",
    title: "对比与记录结果",
    description: "比较论文结果和复现结果，记录差异、原因和后续问题。",
    status: "待开始",
    tone: "bg-slate-100 text-slate-600",
  },
];

export default function ManualPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href="/papers/demo"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← 返回论文详情
        </Link>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Reproduction Manual
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              复现手册
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              把论文中的方法、代码和实验拆成可以逐项确认的复现步骤。
            </p>
          </div>

          <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:max-w-xs">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">当前进度</span>
              <strong className="text-xl font-semibold">2 / 6</strong>
            </div>

            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-1/3 rounded-full bg-blue-600" />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              已完成 1 项，正在处理 1 项
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-700">
                    {step.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="text-lg font-semibold">{step.title}</h2>
                      <span
                        className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${step.tone}`}
                      >
                        {step.status}
                      </span>
                    </div>

                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold">当前论文</h2>

            <p className="mt-3 text-lg font-semibold">
              Learning-Based Model Predictive Control
            </p>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-sm font-semibold text-slate-700">证据记录</p>

              <ul className="mt-3 space-y-3 text-sm text-slate-600">
                <li>论文页码：第 3、5、8 页</li>
                <li>章节：Method、Experiments</li>
                <li>代码状态：尚未关联</li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800">
              提醒：目前的进度和内容是静态示例，后续连接数据库后才会保存真实记录。
            </div>

            <Link
              href="/papers/demo"
              className="mt-6 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
            >
              返回论文详情
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
