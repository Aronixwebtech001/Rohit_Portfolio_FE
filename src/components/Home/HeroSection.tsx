import { Link } from "react-router-dom";
import ScrollReveal from "../shared/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative bg-hero-bg overflow-hidden" style={{ minHeight: '85vh', paddingTop: '80px' }}>
      <div className="max-w-content mx-auto px-[5%] flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-8 h-full">
        {/* Left Content */}
        <ScrollReveal direction="left" className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start pb-0 lg:pb-[10vh] relative z-10">
          <h3 className="text-[14px] sm:text-[16px] uppercase tracking-[0.2em] text-[#4A5568] font-sans font-medium mb-3 sm:mb-4 leading-[100%] text-fade-up">
            CEO | INNOVATOR | INVESTOR
          </h3>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,64px)] leading-[1.15] text-navy mb-4 font-normal text-fade-up" style={{ animationDelay: "0.1s" }}>
            ROHIT JANGIR
          </h1>
          <p className="text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-navy/85 max-w-[550px] mx-auto lg:mx-0 mb-8 sm:mb-14 font-sans font-normal text-center lg:text-left text-fade-up" style={{ animationDelay: "0.2s" }}>
            As an Entrepreneur and CEO , I specialise in architecting high growth companies within the
            Mobility, Tech and Infrastructure sectors.
          </p>
          <div className="flex flex-wrap gap-[1.2rem] justify-center lg:justify-start mb-6 relative z-10 text-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/pitch"
              className="inline-flex items-center justify-center py-[1.1rem] px-[2.8rem] rounded-[12px] text-[0.95rem] font-medium no-underline tracking-[0.02em]
                bg-navy text-white border-[1.5px] border-navy
                transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]
                hover:bg-transparent hover:text-navy hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(28,50,58,0.15)]"
            >
              Pitch Your Idea
            </Link>
            <Link
              to="/mentorship"
              className="inline-flex items-center justify-center py-[1.1rem] px-[2.8rem] rounded-[12px] text-[0.95rem] font-medium no-underline tracking-[0.02em]
                bg-transparent text-navy border-[1.5px] border-navy
                transition-all duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]
                hover:bg-navy hover:text-white hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(28,50,58,0.15)]"
            >
              Book 1:1 Consultant
            </Link>
          </div>
        </ScrollReveal>

        {/* Right Image */}
        <ScrollReveal direction="right" className="flex justify-center lg:justify-end items-end h-full relative z-[30]">
          <img
            src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208359/images/ventures/global/heroimage.png.png"
            alt="Rohit Jangir"
            className="w-[200px] sm:w-[240px] md:w-[340px] lg:w-[488px] h-auto block"
            style={{ 
              filter: "drop-shadow(60px 20px 50px #344A54) drop-shadow(-20px 20px 60px rgba(52, 74, 84, 0.7))",
              mixBlendMode: "multiply",
              transformOrigin: "bottom right"
            }}
            loading="eager"
            width={600}
          />
        </ScrollReveal>
      </div>

    </section>
  );
}
