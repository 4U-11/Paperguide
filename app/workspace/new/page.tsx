import ActionButton from "@/components/ActionButton";

export default function NewPaperPage() {
  return (
    <>
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
          New paper
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
          新建论文
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6e6e73]">
          从上传一份 PDF 开始，建立属于这篇论文的阅读和复现工作区。
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_320px]">
        <section className="rounded-[28px] bg-white p-6 ring-1 ring-black/[.06] sm:p-8">
          <label
            htmlFor="paper-file"
            className="block cursor-pointer rounded-[24px] border border-dashed border-black/15 bg-[#f5f5f7] px-6 py-16 text-center transition hover:border-[#0071e3] hover:bg-[#f0f7ff]"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1d1d1f] text-2xl text-white">
              +
            </span>
            <span className="mt-6 block text-xl font-semibold tracking-tight">
              选择论文 PDF
            </span>
            <span className="mt-3 block text-sm text-[#6e6e73]">
              支持 PDF 格式，单个文件不超过 50 MB
            </span>
            <input
              id="paper-file"
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
            />
          </label>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-[#424245]">论文名称</span>
              <input
                type="text"
                placeholder="例如：Learning-Based MPC"
                className="mt-3 w-full rounded-xl border border-black/10 bg-[#f5f5f7] px-4 py-3 text-sm outline-none transition placeholder:text-[#a1a1a6] focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[#424245]">研究方向</span>
              <input
                type="text"
                placeholder="例如：控制、机器人"
                className="mt-3 w-full rounded-xl border border-black/10 bg-[#f5f5f7] px-4 py-3 text-sm outline-none transition placeholder:text-[#a1a1a6] focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/15"
              />
            </label>
          </div>

          <ActionButton className="mt-8">
            创建阅读工作区
          </ActionButton>
        </section>

        <aside className="h-fit rounded-[28px] bg-white p-6 ring-1 ring-black/[.06] sm:p-8">
          <p className="text-sm text-[#6e6e73]">上传之后</p>
          <div className="mt-5 space-y-5">
            <div>
              <p className="font-medium">01 · 解析结构</p>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                识别标题、章节、页码和图表。
              </p>
            </div>
            <div>
              <p className="font-medium">02 · 建立索引</p>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                为正文和公式建立可检索片段。
              </p>
            </div>
            <div>
              <p className="font-medium">03 · 开始复现</p>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">
                记录方法、代码和实验结果。
              </p>
            </div>
          </div>
          <p className="mt-7 rounded-2xl bg-[#f5f5f7] p-4 text-xs leading-5 text-[#6e6e73]">
            当前为前端原型。PDF 保存和解析功能将在后端阶段接入。
          </p>
        </aside>
      </div>
    </>
  );
}
