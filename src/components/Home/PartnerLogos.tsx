const partners = ["AWT", "AARU MOBILITY", "JFAM", "AARU CARE", "AARU"];

export default function PartnerLogos() {
  return (
    <section className="bg-navy-dark">
      <div className="max-w-content mx-auto px-6 md:px-10 py-8 flex items-center justify-between gap-8 flex-wrap">
        {partners.map((p) => (
          <span key={p} className="text-white/60 font-serif text-sm md:text-base tracking-wide">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
