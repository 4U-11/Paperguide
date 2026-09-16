export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
              P
            </div>

            <div>
              <p className="text-lg font-semibold">PaperGuide</p>
              <p className="text-xs text-slate-500">
                科研论文复现指导平台
              </p>
            </div>
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            阶段 1 · 前端原型
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            从论文阅读到实验复现
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            把论文读懂，
            <br />
            把复现做出来。
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            PaperGuide 帮助你整理论文、理解研究方法，并一步一步完成科研复现。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#workflow"
              className="rounded-lg bg-blue-600 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-700"
            >
              开始探索
            </a>

            <a
              href="#about"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
            >
              了解平台
            </a>
          </div>
        </div>

        <div id="workflow" className="mt-20 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">01</p>
            <h2 className="mt-4 text-xl font-semibold">整理论文</h2>
            <p className="mt-3 leading-7 text-slate-600">
              提取论文标题、章节、公式、图表和关键实验信息。
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">02</p>
            <h2 className="mt-4 text-xl font-semibold">理解方法</h2>
            <p className="mt-3 leading-7 text-slate-600">
              将研究问题、核心方法、变量和假设组织成清晰的知识结构。
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600">03</p>
            <h2 className="mt-4 text-xl font-semibold">开始复现</h2>
            <p className="mt-3 leading-7 text-slate-600">
              根据实验配置和复现步骤，逐项记录自己的进度与问题。
            </p>
          </article>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          PaperGuide · 面向控制、自动化与机器人方向的论文复现工作台
        </div>
      </section>
    </main>
  );
}