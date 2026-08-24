const stats = [
  { value: "30+", label: "Portfolio" },
  { value: "30+", label: "Clients" },
  { value: "30+", label: "Projects" },
  { value: "30+", label: "Industries" },
];

export default function PortfolioStats() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-12 flex flex-wrap justify-center gap-6 md:gap-12">
        {stats.map((s, i) => (
          <div
            key={i}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-navy/10 flex flex-col items-center justify-center bg-white shadow-sm"
          >
            <span className="font-serif text-xl md:text-2xl text-navy">{s.value}</span>
            <span className="text-[11px] text-muted mt-0.5">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
