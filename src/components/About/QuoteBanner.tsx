import ScrollReveal from "../shared/ScrollReveal";
import aboutBg from "../../assets/images/about/about.bg.png";
import aboutResponsive from "../../assets/images/about/about.responsive.png";

export default function QuoteBanner() {
  return (
    <section
      className="about-quote relative py-24 px-8 md:px-16 lg:px-24 flex flex-col items-start justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        minHeight: "450px",
        padding: "6rem 2rem",
      }}
    >
      <div className="max-w-[1300px] w-full mx-auto relative z-10">
        <ScrollReveal className="w-full">
          <p
            className="quote-text font-serif text-white text-justify leading-[1.6] m-0"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              maxWidth: "55%",
            }}
          >
            An idea is only the spark, it is the relentless hard work that turns it into a fire. I don't just
            build businesses to reach a finish line, I design legacies that stand the Rest of Time. While
            others focus on the transaction, I am focused on the foundation
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200} className="w-full">
          <span
            className="quote-author block text-white font-sans text-right"
            style={{
              marginTop: "1rem",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 2vw, 1.8rem)",
              maxWidth: "55%",
            }}
          >
            -Rohit Jangir
          </span>
        </ScrollReveal>
      </div>

      <style>{`
        .about-quote {
          background-image: linear-gradient(rgba(28, 50, 58, 0.4), rgba(28, 50, 58, 0.4)), url(${aboutBg});
          background-attachment: fixed;
          background-position: center;
        }

        @media (max-width: 992px) {
          .about-quote {
            background-attachment: scroll !important;
            background-position: 80% center !important;
          }
        }

        @media (max-width: 768px) {
          .about-quote {
            background-image: linear-gradient(rgba(28, 50, 58, 0.65), rgba(28, 50, 58, 0.65)), url(${aboutResponsive}) !important;
            background-attachment: scroll !important;
            background-position: center !important;
            padding: 6rem 1.5rem !important;
          }
          .quote-text, .quote-author {
            max-width: 100% !important;
            text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          }
        }

        @media (max-width: 480px) {
          .about-quote {
            padding: 4rem 5% !important;
          }
          .quote-text {
            font-size: 1.1rem !important;
          }
          .quote-author {
            font-size: 1.25rem !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
