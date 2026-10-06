import ScrollReveal from "../shared/ScrollReveal";
import aboutBg from "../../assets/images/about/about.bg.png";
import aboutResponsive from "../../assets/images/about/about.responsive.png";

export default function QuoteBanner() {
  return (
    <section
      className="about-quote relative py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col items-start justify-center bg-cover bg-no-repeat overflow-hidden w-full"
      style={{
        minHeight: "450px",
      }}
    >
      <div className="max-w-[1300px] w-full mx-auto relative z-10">
        <ScrollReveal className="w-full">
          <p
            className="quote-text font-serif text-white text-left leading-[1.65] m-0"
            style={{
              fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
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
            className="quote-author block text-white/95 font-sans text-left md:text-right"
            style={{
              marginTop: "1.25rem",
              fontWeight: 400,
              fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
              maxWidth: "55%",
            }}
          >
            -Rohit Jangir
          </span>
        </ScrollReveal>
      </div>

      <style>{`
        .about-quote {
          background-image: linear-gradient(rgba(28, 50, 58, 0.45), rgba(28, 50, 58, 0.45)), url(${aboutBg});
          background-attachment: fixed;
          background-position: right center;
        }

        @media (max-width: 1024px) {
          .about-quote {
            background-image: linear-gradient(rgba(28, 50, 58, 0.65), rgba(28, 50, 58, 0.65)), url(${aboutResponsive}) !important;
            background-attachment: scroll !important;
            background-position: 85% 25% !important;
          }
          .quote-text, .quote-author {
            max-width: 70% !important;
          }
        }

        @media (max-width: 768px) {
          .about-quote {
            background-image: linear-gradient(rgba(28, 50, 58, 0.8), rgba(28, 50, 58, 0.8)), url(${aboutResponsive}) !important;
            background-attachment: scroll !important;
            background-position: 85% 20% !important;
            padding: 5rem 1.5rem !important;
          }
          .quote-text {
            max-width: 100% !important;
            text-align: left !important;
            font-size: 1.15rem !important;
            line-height: 1.7 !important;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          }
          .quote-author {
            max-width: 100% !important;
            text-align: left !important;
            font-size: 1.35rem !important;
            margin-top: 1rem !important;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          }
        }

        @media (max-width: 480px) {
          .about-quote {
            background-position: 85% 15% !important;
            padding: 4rem 1.25rem !important;
          }
          .quote-text {
            font-size: 1.05rem !important;
            line-height: 1.65 !important;
          }
          .quote-author {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
