import ScrollReveal from "../shared/ScrollReveal";
import aboutBioPortrait from "../../assets/images/about/about.png";

export default function BioSection() {
  return (
    <section className="about-intro py-16 md:py-24" style={{ padding: "6rem 2rem", maxWidth: 1400, margin: "0 auto" }}>
      <div className="intro-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Portrait */}
        <ScrollReveal direction="left" className="flex-1 w-full flex justify-center">
          <div className="overflow-hidden rounded-[24px] w-full max-w-[500px]">
            <img
              src={aboutBioPortrait}
              alt="Rohit Jangir Portrait"
              className="intro-image image-zoom w-full h-auto object-cover block transition-transform duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1) hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
              width="500"
              height="500"
            />
          </div>
        </ScrollReveal>

        {/* Bio Content */}
        <ScrollReveal direction="right" className="intro-content flex-1">
          <h2
            className="font-serif text-[#0F1F22] leading-none text-left"
            style={{
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              marginTop: 0,
              marginBottom: "0.5rem",
            }}
          >
            ROHIT JANGIR
          </h2>
          <h3
            className="font-serif text-[#333] leading-[1.2] text-left"
            style={{
              fontWeight: 400,
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              marginTop: 0,
              marginBottom: "1.5rem",
            }}
          >
            Entrepreneur, Innovator &amp; Investor
          </h3>
          <p
            className="font-sans text-justify text-[#4A5568] leading-[1.6]"
            style={{
              fontWeight: 400,
              marginBottom: "1.5rem",
            }}
          >
            With over 5 years of experience in building businesses from the ground up, I've transformed
            ideas into thriving ventures across multiple industries. My journey began with a passion for
            innovation and a commitment to creating meaningful impact.
          </p>
          <p
            className="font-sans text-justify text-[#4A5568] leading-[1.6]"
            style={{
              fontWeight: 400,
            }}
          >
            Today, I lead a diverse portfolio of companies, ranging from tech-driven solutions at Aronix
            Web Tech to sustainable mobility with Aaru Mobility and infrastructure excellence through
            Aaru Developers.
          </p>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-intro {
            padding: 4rem 5% !important;
          }
          .intro-grid {
            grid-template-columns: 1fr !important;
          }
          .intro-content h2, .intro-content h3 {
            text-align: center !important;
          }
        }
        @media (max-width: 768px) {
          .about-intro {
            padding: 3rem 5% !important;
          }
        }
      `}</style>
    </section>
  );
}
