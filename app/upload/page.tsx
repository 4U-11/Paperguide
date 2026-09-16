export default function UploadPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <a
          href="/papers"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← 返回论文库
        </a>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Add a paper
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            上传一篇新论文
          </h1>

          <p className="mt-4 text-slate-600">
            上传 PDF 后，PaperGuide 将帮助你整理章节、公式和实验信息。
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <label
            htmlFor="paper-file"
            className="block cursor-pointer rounded-xl border-2 border-dashed border-slate-300 px-6 py-16 text-center transition hover:border-blue-500 hover:bg-blue-50"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600">
              ↑
            </div>

            <p className="mt-5 text-lg font-semibold">
              点击选择 PDF 文件
            </p>

            <p className="mt-2 text-sm text-slate-500">
              支持 PDF 格式，单个文件不超过 50 MB
            </p>

            <input
              id="paper-file"
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
            />
          </label>

          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-700">
              上传后将完成
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>✓ 识别论文标题和章节</li>
              <li>✓ 提取正文、公式和图表信息</li>
              <li>✓ 建立论文阅读工作区</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}