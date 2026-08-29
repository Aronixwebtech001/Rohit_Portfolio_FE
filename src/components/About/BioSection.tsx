import ScrollReveal from "../shared/ScrollReveal";

export default function BioSection() {
  return (
    <section className="py-16 md:py-24 bg-bg-light" style={{ padding: "80px 5%" }}>
      <div className="max-w-content mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Portrait */}
        <ScrollReveal direction="left" className="flex-1">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208359/images/ventures/global/heroimage.png.png"
              alt="Rohit Jangir Portrait"
              className="w-full max-w-[500px] h-auto object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Bio Content */}
        <ScrollReveal direction="right" className="flex-1">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-navy leading-[1] mb-2">ROHIT JANGIR</h2>
          <h3 className="font-serif text-[clamp(1rem,3vw,1.5rem)] text-[#333] mb-6 leading-tight font-normal">
            Entrepreneur, Innovator &amp; Investor
          </h3>
          <p className="text-[#4A5568] text-base leading-relaxed mb-6 text-justify">
            With over 5 years of experience in building businesses from the ground up, I've transformed
            ideas into thriving ventures across multiple industries. My journey began with a passion for
            innovation and a commitment to creating meaningful impact.
          </p>
          <p className="text-[#4A5568] text-base leading-relaxed text-justify">
            Today, I lead a diverse portfolio of companies, ranging from tech-driven solutions at Aronix
            Web Tech to sustainable mobility with Aaru Mobility and infrastructure excellence through
            Aaru Developers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
