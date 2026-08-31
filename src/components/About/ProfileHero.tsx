import ScrollReveal from "../shared/ScrollReveal";

export default function ProfileHero() {
  return (
    <section
      className="about-hero w-full overflow-hidden bg-[#1C323A] flex justify-center min-h-auto"
      style={{
        padding: "60px 0 0 0",
      }}
    >
      <ScrollReveal className="w-full hero-inner m-0">
        <img
          src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208449/images/about/hero_bg.jpeg.jpg"
          alt="Rohit Jangir's Entrepreneurial Journey"
          className="hero-image block w-full h-auto object-cover object-center"
          style={{ maxHeight: "50vh" }}
          fetchPriority="high"
          decoding="async"
        />
      </ScrollReveal>

      <style>{`
        @media (max-width: 992px) {
          .about-hero {
            padding: 80px 0 0 0 !important;
          }
        }
        @media (max-width: 768px) {
          .about-hero {
            padding: 50px 0 0 0 !important;
          }
        }
        @media (max-width: 480px) {
          .about-hero {
            padding: 60px 0 0 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
