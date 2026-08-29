import ScrollReveal from "../shared/ScrollReveal";

const expertiseItems = [
  { title: "Business Strategy", desc: "Architecting growth frameworks for scalable ventures." },
  { title: "Technology & Innovation", desc: "Leveraging cutting-edge tech for operational excellence." },
  { title: "Investment & Finance", desc: "Strategic capital deployment across emerging sectors." },
  { title: "Infrastructure", desc: "Building world-class commercial and residential projects." },
  { title: "Mobility Solutions", desc: "Sustainable transportation and fleet management systems." },
  { title: "Mentorship", desc: "Empowering the next generation of entrepreneurs." },
];

export default function ExpertiseSection() {
  return (
    <section className="py-16 md:py-24 bg-bg-light" style={{ padding: "80px 5%" }}>
      <div className="max-w-content mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy">Areas of Expertise</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 cursor-default group">
                <h3 className="font-serif text-lg text-navy mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
