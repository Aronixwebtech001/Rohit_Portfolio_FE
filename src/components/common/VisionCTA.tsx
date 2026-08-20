export default function VisionCTA() {
  return (
    <section className="bg-[#4d6870] px-5 py-20 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[820px] text-center">
        <h2 className="font-serif text-[34px] font-normal tracking-[-0.02em] sm:text-[40px] lg:text-[42px]">
          Ready to Transform Your Vision?
        </h2>

        <p className="mx-auto mt-4 max-w-[620px] text-[12px] leading-5 text-white/95 sm:text-[13px]">
          Whether you&apos;re looking for investment, mentorship, or
          collaboration, let&apos;s explore how we can create something
          extraordinary together.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/investor"
            className="rounded-md bg-white px-7 py-3 text-[12px] font-medium text-[#26343a] transition hover:bg-slate-100"
          >
            Investors
          </a>

          <a
            href="/pitch"
            className="rounded-md border border-white/80 px-7 py-3 text-[12px] font-medium text-white transition hover:bg-white/10"
          >
            Pitch Your Idea
          </a>
        </div>
      </div>
    </section>
  );
}