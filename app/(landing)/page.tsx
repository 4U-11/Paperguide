import ActionButton from "@/components/ActionButton";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-[#1d1d1f] sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            把论文读懂
            <br />
            把复现做出来
          </h1>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ActionButton href="/workspace">
              START
            </ActionButton>
          </div>

          <p className="mx-auto mt-10 max-w-md text-sm leading-6 text-[#6e6e73]">
            PaperGuide 是一个帮助你读懂论文整理方法并开始复现实验的科研工作台
          </p>
        </div>
      </section>
    </main>
  );
}
