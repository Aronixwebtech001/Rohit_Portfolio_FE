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
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <h2 className="font-serif uppercase text-2xl md:text-3xl mb-16 text-center">
          MY JOURNEY
        </h2>
        <p className="text-xl text-gray-700 font-serif mb-12 text-center">
          Building a legacy of innovation and impact
        </p>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-[100px] md:left-[160px] top-6 bottom-0 w-px bg-teal/50" />

          <div className="space-y-12">
            {milestones.map((m) => (
              <div key={m.year} className="grid grid-cols-[100px_1fr] md:grid-cols-[160px_1fr] gap-6 items-start relative">
                <div className="flex justify-end pt-1 pr-4 md:pr-8">
                  <span className="font-serif text-4xl md:text-6xl text-navy tracking-tight">{m.year}</span>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-[96px] md:left-[156px] top-[14px] md:top-[22px] w-2.5 h-2.5 rounded-full bg-teal z-10" />

                <div className="pt-2 md:pt-4 pl-4 md:pl-8">
                  <h3 className="font-serif text-2xl md:text-3xl mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
