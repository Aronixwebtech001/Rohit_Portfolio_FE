import ScrollReveal from "../shared/ScrollReveal";

const ventures = [
  { name: "Aronix Web Tech", logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208337/images/ventures/awt.png.png", desc: "Digital solutions & technology services", link: "https://aronix.com" },
  { name: "JFAM", logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208325/images/ventures/jfam-logo.png.png", desc: "Infrastructure & real estate development", link: "/jfam" },
  { name: "Aaru Mobility", logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208315/images/ventures/aaru-mobility.png.png", desc: "Sustainable transportation & fleet management", link: "https://www.aarumobility.com/" },
  { name: "Aaru Developers", logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208336/images/ventures/aaru.png.png", desc: "Construction & development excellence", link: "/aaru-developers" },
  { name: "Aaru Care Foundation", logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208329/images/ventures/aaru-care-logo.png.png", desc: "Social impact & community welfare", link: "/aaru-care" },
  { name: "Aaru Logistics", logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208322/images/ventures/aaru-log.png.png", desc: "Supply chain & logistics solutions", link: "#" },
];

export default function VenturesDiagram() {
  return (
    <section className="py-16 md:py-24 bg-bg-light" style={{ padding: "80px 5%" }}>
      <div className="max-w-content mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy mb-4">Our Ecosystem</h2>
          <p className="text-[#4A5568] max-w-[600px] mx-auto">
            A diverse portfolio of companies driving innovation across technology, mobility, infrastructure, and social impact.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((v, i) => {
            const isExternal = v.link.startsWith("http");
            return (
              <ScrollReveal key={i} delay={i * 80}>
                <a 
                  href={v.link} 
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : ""}
                  className="block h-full"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 cursor-pointer text-center group h-full">
                    <img src={v.logo} alt={v.name} className="h-[80px] w-auto object-contain mx-auto mb-6 opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" />
                    <h3 className="font-serif text-lg text-navy mb-2 group-hover:text-accent transition-colors">{v.name}</h3>
                    <p className="text-sm text-[#4A5568]">{v.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
