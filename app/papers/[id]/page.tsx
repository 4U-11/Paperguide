const evidence = [
  { label: "论文明确给出", value: "实验设置、评价指标" },
  { label: "代码中找到", value: "训练入口、控制器实现" },
  { label: "需要确认", value: "预测时域与数据划分" },
];

export default function PaperResultPage() {
  return (
    <>
      <header className="border-b border-black/[.08] pb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#6e6e73]">
          <span>控制</span>
          <span className="text-black/20">/</span>
          <span>MPC</span>
          <span className="ml-2 rounded-full bg-[#1d1d1f] px-3 py-1 text-white">
            阅读中
          </span>
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">
          Learning-Based Model Predictive Control
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6e6e73]">
          将论文原文、方法解释、实验结果和复现线索组织在同一页中，方便从阅读继续走向实现。
        </p>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6e6e73]">
          <span>来源：示例论文 · 2024</span>
          <span>12 页</span>
          <span>最近更新：今天</span>
        </div>
      </header>

      <section id="summary" className="scroll-mt-32 border-b border-black/[.08] py-12 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
          Summary
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">概要</h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06] lg:col-span-2">
            <p className="leading-8 text-[#424245]">
              论文研究如何利用学习得到的系统模型改进模型预测控制在复杂动态系统中的表现，重点关注模型误差、预测性能和控制稳定性之间的关系。
            </p>
          </div>
          <div className="rounded-[24px] bg-[#1d1d1f] p-6 text-white">
            <p className="text-sm text-[#a1a1a6]">核心问题</p>
            <p className="mt-4 text-xl font-semibold leading-8">
              如何在不完全知道系统模型时，仍然获得可靠的控制效果？
            </p>
          </div>
        </div>
      </section>

      <section id="methods" className="scroll-mt-32 border-b border-black/[.08] py-12 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
          Methods
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">方法</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          <article className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06]">
            <p className="text-sm font-medium text-[#0071e3]">01 · 系统模型</p>
            <p className="mt-4 leading-7 text-[#6e6e73]">
              通过历史数据学习系统动态，得到用于预测未来状态的模型。
            </p>
          </article>
          <article className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06]">
            <p className="text-sm font-medium text-[#0071e3]">02 · 滚动优化</p>
            <p className="mt-4 leading-7 text-[#6e6e73]">
              在有限预测时域内优化控制序列，只执行当前时刻的第一个控制量。
            </p>
          </article>
          <article className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06]">
            <p className="text-sm font-medium text-[#0071e3]">03 · 约束处理</p>
            <p className="mt-4 leading-7 text-[#6e6e73]">
              同时考虑状态约束和输入约束，保证控制结果满足系统安全边界。
            </p>
          </article>
        </div>
      </section>

      <section id="results" className="scroll-mt-32 border-b border-black/[.08] py-12 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
          Results
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">结果</h2>
        <div className="mt-7 overflow-hidden rounded-[24px] bg-white ring-1 ring-black/[.06]">
          <div className="grid grid-cols-3 border-b border-black/[.08] px-6 py-4 text-sm font-medium text-[#6e6e73]">
            <span>指标</span>
            <span>论文结果</span>
            <span>复现记录</span>
          </div>
          <div className="grid grid-cols-3 px-6 py-5 text-sm">
            <span>跟踪误差</span>
            <span className="font-medium">0.124</span>
            <span className="text-[#6e6e73]">待运行</span>
          </div>
          <div className="grid grid-cols-3 border-t border-black/[.08] px-6 py-5 text-sm">
            <span>控制能耗</span>
            <span className="font-medium">1.82</span>
            <span className="text-[#6e6e73]">待运行</span>
          </div>
        </div>
      </section>

      <section id="figures" className="scroll-mt-32 border-b border-black/[.08] py-12 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
          Figures
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">图表</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <figure className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06]">
            <div className="flex h-48 items-end gap-3 rounded-2xl bg-[#f5f5f7] px-8 pb-7 pt-6">
              <div className="h-16 flex-1 rounded-t-lg bg-[#d2d2d7]" />
              <div className="h-24 flex-1 rounded-t-lg bg-[#a1a1a6]" />
              <div className="h-32 flex-1 rounded-t-lg bg-[#0071e3]" />
              <div className="h-40 flex-1 rounded-t-lg bg-[#1d1d1f]" />
            </div>
            <figcaption className="mt-5 text-sm leading-6 text-[#6e6e73]">
              图 1 · 不同控制策略下的跟踪误差对比（示意）
            </figcaption>
          </figure>
          <figure className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06]">
            <div className="flex h-48 items-center justify-center rounded-2xl bg-[#f5f5f7] text-sm text-[#6e6e73]">
              实验轨迹图占位
            </div>
            <figcaption className="mt-5 text-sm leading-6 text-[#6e6e73]">
              图 2 · 系统状态轨迹与约束边界（示意）
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="reproduction" className="scroll-mt-32 py-12 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
          Reproduction
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">复现信息</h2>
        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_320px]">
          <div className="rounded-[24px] bg-white p-6 ring-1 ring-black/[.06] sm:p-8">
            <h3 className="text-xl font-semibold">当前证据</h3>
            <div className="mt-6 divide-y divide-black/[.08]">
              {evidence.map((item) => (
                <div key={item.label} className="grid gap-2 py-4 first:pt-0 sm:grid-cols-[180px_1fr]">
                  <span className="text-sm text-[#6e6e73]">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-[24px] bg-[#1d1d1f] p-6 text-white sm:p-8">
            <p className="text-sm text-[#a1a1a6]">下一步</p>
            <h3 className="mt-4 text-2xl font-semibold leading-8">
              关联代码仓库
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#a1a1a6]">
              找到实验入口和关键函数后，才能把论文假设与真实实现对应起来。
            </p>
            <span className="mt-7 inline-block rounded-full bg-white px-4 py-2 text-xs font-medium text-[#1d1d1f]">
              即将支持
            </span>
          </aside>
        </div>
      </section>
    </>
  );
}
