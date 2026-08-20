const stats = [
  { value: "14", label: "Years Experience" },
  { value: "91", label: "Project Completed" },
  { value: "$100m", label: "Startup Funding" },
  { value: "10", label: "Industries Served" },
];

export default function StatsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 pb-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center border-t-2 border-navy pt-4">
            <p className="text-muted text-sm mb-2">{s.label}</p>
            <p className="font-serif text-3xl">{s.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
