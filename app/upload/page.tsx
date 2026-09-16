import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-4xl px-6 py-20">
        <Link
          href="/papers"
          className="text-sm font-medium text-[#0071e3] hover:text-[#0077ed]"
        >
          ← 返回论文库
        </Link>

        <div className="mt-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#6e6e73]">
            Add a paper
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.045em]">
            上传一篇新论文
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#6e6e73]">
            上传 PDF 后，PaperGuide 将帮助你整理章节、公式和实验信息。
          </p>
        </div>

        <div className="mt-14 rounded-[30px] bg-white p-6 ring-1 ring-black/[.06] sm:p-8">
          <label
            htmlFor="paper-file"
            className="block cursor-pointer rounded-[24px] border border-dashed border-black/15 bg-[#f5f5f7] px-6 py-20 text-center transition hover:border-[#0071e3] hover:bg-[#f0f7ff]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1d1d1f] text-2xl text-white">
              ↑
            </div>

            <p className="mt-6 text-xl font-semibold tracking-tight">
              点击选择 PDF 文件
            </p>

            <p className="mt-3 text-sm text-[#6e6e73]">
              支持 PDF 格式，单个文件不超过 50 MB
            </p>

            <input
              id="paper-file"
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
            />
          </label>

          <div className="mt-6 rounded-[22px] bg-[#f5f5f7] p-5">
            <p className="text-sm font-semibold text-[#424245]">
              上传后将完成
            </p>

            <ul className="mt-3 space-y-2 text-sm text-[#6e6e73]">
              <li><span className="mr-2 text-[#0071e3]">✓</span>识别论文标题和章节</li>
              <li><span className="mr-2 text-[#0071e3]">✓</span>提取正文、公式和图表信息</li>
              <li><span className="mr-2 text-[#0071e3]">✓</span>建立论文阅读工作区</li>
            </ul>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}
