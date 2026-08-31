import ScrollReveal from "../shared/ScrollReveal";

export default function MissionVisionSection() {
  return (
    <section className="py-16 md:py-24 bg-white" style={{ padding: "80px 5%" }}>
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollReveal direction="left">
          <div className="bg-bg-light rounded-2xl p-10">
            <h2 className="font-serif text-2xl text-navy mb-4">Our Mission</h2>
            <p className="text-[#4A5568] leading-relaxed">
              To build sustainable, technology-driven businesses that create lasting value for communities,
              partners, and stakeholders while empowering the next generation of entrepreneurs through
              mentorship and strategic investment.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="bg-navy rounded-2xl p-10">
            <h2 className="font-serif text-2xl text-white mb-4">Our Vision</h2>
            <p className="text-white/80 leading-relaxed">
              To become a leading conglomerate recognized globally for innovation, integrity, and
              impact — transforming industries through smart mobility, advanced technology, and
              world-class infrastructure development.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
