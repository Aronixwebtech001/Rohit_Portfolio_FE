export default function ClientLogosGrid() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 pb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14 leading-snug">
          Relied upon by a Fresh
          <br className="hidden md:block" />
          {" "}Generation of Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1513628253939-010e64ac66cd?w=600&q=80&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&auto=format&fit=crop"
          ].map((src, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl overflow-hidden hover:shadow-md transition-shadow relative"
            >
              <img src={src} alt="Case Study" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#432371]/80 to-transparent pointer-events-none opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
