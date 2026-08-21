const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Completed" },
  { value: "15+", label: "Awards Won" },
  { value: "4", label: "Industries Served" },
];

export default function StatsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 pb-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center border-t-2 border-navy pt-6">
            <p className="text-muted text-sm mb-3 font-medium">{s.label}</p>
            <p className="font-serif text-3xl md:text-4xl text-navy">{s.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
