const stats = [{ value: "30+", label: "Portfolio" }, { value: "30+", label: "Portfolio" }, { value: "30+", label: "Portfolio" }, { value: "30+", label: "Portfolio" }];

export default function PortfolioStats() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-16 pb-4 flex flex-wrap justify-center gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="w-32 h-32 rounded-full border-2 border-card flex flex-col items-center justify-center"
          >
            <span className="font-serif text-2xl">{s.value}</span>
            <span className="text-xs text-muted">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
