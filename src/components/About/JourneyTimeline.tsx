const milestones = [
  {
    year: "2018.",
    title: "The Spark",
    description: "A vision took shape — the idea of JFAM was born.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <p className="uppercase text-xs tracking-widest text-muted mb-2">My Journey</p>
        <h2 className="font-serif text-2xl md:text-3xl mb-14">My results-driven Web Design Process</h2>

        <div className="space-y-14">
          {milestones.map((m) => (
            <div key={m.year} className="grid grid-cols-[auto_1fr] gap-8 items-start">
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl text-navy">{m.year}</span>
                <span className="w-px flex-1 bg-teal mt-3" />
              </div>
              <div className="pt-2">
                <h3 className="font-serif text-2xl mb-2">{m.title}</h3>
                <p className="text-muted text-sm">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
