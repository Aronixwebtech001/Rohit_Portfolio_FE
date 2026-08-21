export default function InvestorHero() {
  return (
    <section className="bg-[#DCE4E6]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] mb-4 leading-tight">
            Investing in Scalable Innovation
          </h1>
          <p className="text-navy/60 text-[15px] max-w-md leading-relaxed">
            We partner with ambitious founders building high-growth technology businesses. Our
            strategic capital and operational expertise help transform early-stage potential into
            long-term market leadership.
          </p>
        </div>
        {/* Illustration placeholder */}
        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white/30 flex items-center justify-center">
          <div className="text-center text-navy/20">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="mx-auto mb-3">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <p className="text-sm">Illustration Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
