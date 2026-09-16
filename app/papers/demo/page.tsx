import Link from "next/link";

export default function PaperDetailPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Link
          href="/papers"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← 返回论文库
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                控制
              </span>

              <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700">
                MPC
              </span>

              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                阅读中
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight">
              Learning-Based Model Predictive Control
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              这是一篇关于学习型模型预测控制的示例论文，用于演示 PaperGuide
              如何组织论文阅读和复现信息。
            </p>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">研究概览</h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-medium text-slate-800">研究问题</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    如何利用学习方法改进模型预测控制在复杂系统中的控制效果？
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-slate-800">核心方法</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    使用数据驱动模型预测系统行为，再通过滚动优化计算控制输入。
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-slate-800">复现重点</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    需要重点确认系统模型、预测时域、控制时域和评价指标。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold">论文信息</h2>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-slate-500">阅读进度</dt>
                <dd className="mt-1 font-medium">68%</dd>
              </div>

              <div>
                <dt className="text-slate-500">论文页数</dt>
                <dd className="mt-1 font-medium">12 页</dd>
              </div>

              <div>
                <dt className="text-slate-500">最近更新</dt>
                <dd className="mt-1 font-medium">今天</dd>
              </div>
            </dl>

            <div className="mt-6 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[68%] rounded-full bg-blue-600" />
            </div>

            <Link
              href="/manual"
              className="mt-6 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
            >
              打开复现手册
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
