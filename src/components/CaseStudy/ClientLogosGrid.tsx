export default function ClientLogosGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 pb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14 leading-snug">
          Relied upon by a Fresh
          <br className="hidden md:block" />
          {" "}Generation of Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl bg-card overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`w-full h-full bg-gradient-to-br ${
                i % 3 === 0
                  ? "from-navy/10 to-teal/5"
                  : i % 3 === 1
                  ? "from-teal/10 to-navy/5"
                  : "from-accent/5 to-navy/10"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
