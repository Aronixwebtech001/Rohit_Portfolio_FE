const partners = ["AWT", "AARU MOBILITY", "JFAM", "AARU CARE FOUNDATION", "AARU"];

export default function PartnerLogos() {
  return (
    <section className="relative bg-navy-dark">
      {/* Wave top edge */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z" fill="#0F1B21" />
        </svg>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 py-10 flex items-center justify-between gap-8 flex-wrap">
        {partners.map((p) => (
          <span key={p} className="text-white/50 font-serif text-sm md:text-base tracking-widest uppercase">
            {p}
          </span>
        ))}
      </div>

      {/* Wave bottom edge */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,20 C240,50 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z" fill="#F7F8F8" />
        </svg>
      </div>
    </section>
  );
}
