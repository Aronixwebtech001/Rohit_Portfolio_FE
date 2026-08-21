const stats = [
  { value: "30+", label: "Portfolio" },
  { value: "30+", label: "Clients" },
  { value: "30+", label: "Projects" },
  { value: "30+", label: "Industries" },
];

export default function PortfolioStats() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-6 flex flex-wrap justify-center gap-8 md:gap-14">
        {stats.map((s, i) => (
          <div
            key={i}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-navy/15 flex flex-col items-center justify-center bg-white shadow-sm"
          >
            <span className="font-serif text-2xl text-navy">{s.value}</span>
            <span className="text-xs text-muted mt-1">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
