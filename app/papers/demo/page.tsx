import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function PaperDetailPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20">
        <Link
          href="/papers"
          className="text-sm font-medium text-[#0071e3] hover:text-[#0077ed]"
        >
          ← 返回论文库
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#f0f7ff] px-3 py-1 text-sm font-medium text-[#0071e3]">
                控制
              </span>

              <span className="rounded-full bg-[#e8e8ed] px-3 py-1 text-sm font-medium text-[#424245]">
                MPC
              </span>

              <span className="rounded-full bg-[#1d1d1f] px-3 py-1 text-sm font-medium text-white">
                阅读中
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              Learning-Based Model Predictive Control
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6e6e73]">
              这是一篇关于学习型模型预测控制的示例论文，用于演示 PaperGuide
              如何组织论文阅读和复现信息。
            </p>

            <div className="mt-14 rounded-[30px] bg-white p-7 ring-1 ring-black/[.06] sm:p-9">
              <h2 className="text-2xl font-semibold tracking-tight">研究概览</h2>

              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="font-medium text-[#424245]">研究问题</h3>
                  <p className="mt-2 leading-7 text-[#6e6e73]">
                    如何利用学习方法改进模型预测控制在复杂系统中的控制效果？
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-[#424245]">核心方法</h3>
                  <p className="mt-2 leading-7 text-[#6e6e73]">
                    使用数据驱动模型预测系统行为，再通过滚动优化计算控制输入。
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-[#424245]">复现重点</h3>
                  <p className="mt-2 leading-7 text-[#6e6e73]">
                    需要重点确认系统模型、预测时域、控制时域和评价指标。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[28px] bg-white p-6 ring-1 ring-black/[.06]">
            <h2 className="font-semibold">论文信息</h2>

            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-[#6e6e73]">阅读进度</dt>
                <dd className="mt-1 font-medium">68%</dd>
              </div>

              <div>
                <dt className="text-[#6e6e73]">论文页数</dt>
                <dd className="mt-1 font-medium">12 页</dd>
              </div>

              <div>
                <dt className="text-[#6e6e73]">最近更新</dt>
                <dd className="mt-1 font-medium">今天</dd>
              </div>
            </dl>

            <div className="mt-6 h-2 rounded-full bg-[#e8e8ed]">
              <div className="h-2 w-[68%] rounded-full bg-[#0071e3]" />
            </div>

            <Link
              href="/manual"
              className="mt-6 block rounded-full bg-[#0071e3] px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-[#0077ed]"
            >
              打开复现手册
            </Link>
          </aside>
        </div>
        </section>
      </main>
    </div>
  );
}
