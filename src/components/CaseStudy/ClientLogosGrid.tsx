export default function ClientLogosGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 pb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">
          Relied upon by a Fresh Generation of Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-card" />
          ))}
        </div>
      </div>
    </section>
  );
}
