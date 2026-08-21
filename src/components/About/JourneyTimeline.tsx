const milestones = [
  {
    year: "2018.",
    title: "The Spark",
    description: "A vision took shape — the idea of JFAM was born.",
  },
  {
    year: "2019.",
    title: "Building the Foundation",
    description: "JFAM launched its first interior design and construction projects.",
  },
  {
    year: "2020.",
    title: "Expanding Horizons",
    description: "Aaru Mobility was founded — entering the professional transport industry.",
  },
  {
    year: "2021.",
    title: "Scaling Up",
    description: "Aronix Web Technology launched — building digital solutions for businesses.",
  },
  {
    year: "2022.",
    title: "Real Estate Entry",
    description: "Aaru Developers was established — residential and commercial projects began.",
  },
  {
    year: "2023.",
    title: "Social Impact",
    description: "Aaru Care Foundation launched — giving back to the community through education and healthcare.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <p className="uppercase text-xs tracking-widest text-muted mb-2 text-center">My Journey</p>
        <h2 className="font-serif text-2xl md:text-3xl mb-14 text-center">
          Building a Legacy, One Venture at a Time
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[72px] md:left-[90px] top-0 bottom-0 w-px bg-teal/30" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={m.year} className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
                <div className="flex flex-col items-center relative z-10">
                  <span className="font-serif text-3xl md:text-5xl text-navy">{m.year}</span>
                </div>
                <div className="pt-1 md:pt-2">
                  {/* Timeline dot */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-teal border-2 border-white shadow-sm" />
                    <h3 className="font-serif text-xl md:text-2xl">{m.title}</h3>
                  </div>
                  <p className="text-muted text-sm ml-6 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
