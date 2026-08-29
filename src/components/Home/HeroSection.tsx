import { Link } from "react-router-dom";
import ScrollReveal from "../shared/ScrollReveal";

export default function HeroSection() {
  return (
    <section className="relative bg-hero-bg" style={{ paddingTop: 80 }}>
      <div className="max-w-content mx-auto px-[5%] py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Content */}
        <ScrollReveal direction="left" className="flex-1 text-center lg:text-left">
          <h3 className="text-sm md:text-base uppercase tracking-[3px] text-accent font-sans font-medium mb-4 fade-in">
            CEO | INNOVATOR | INVESTOR
          </h3>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[1.1] text-navy mb-6 text-fade-up">
            ROHIT JANGIR
          </h1>
          <p className="text-base md:text-lg text-[#4A5568] leading-relaxed max-w-[550px] mx-auto lg:mx-0 mb-8 text-fade-up" style={{ animationDelay: "0.2s" }}>
            As an Entrepreneur and CEO , I specialise in architecting high growth companies within the
            Mobility, Tech and Infrastructure sectors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/pitch"
              className="inline-flex items-center justify-center py-3 px-8 rounded-md text-base font-semibold no-underline transition-all duration-300
                bg-navy text-white border-[1.5px] border-navy
                hover:bg-transparent hover:text-navy"
            >
              Pitch Your Idea
            </Link>
            <Link
              to="/mentorship"
              className="inline-flex items-center justify-center py-3 px-8 rounded-md text-base font-semibold no-underline transition-all duration-300
                bg-transparent text-navy border-[1.5px] border-navy
                hover:bg-navy hover:text-white"
            >
              Book 1:1 Consultant
            </Link>
          </div>
        </ScrollReveal>

        {/* Right Image */}
        <ScrollReveal direction="right" className="flex-1 flex justify-center lg:justify-end">
          <img
            src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208359/images/ventures/global/heroimage.png.png"
            alt="Rohit Jangir"
            className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain"
            fetchPriority="high"
            width={600}
          />
        </ScrollReveal>
      </div>

      {/* Wave divider - matching Project A */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px]"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#1C323A"
          />
        </svg>
      </div>
    </section>
  );
}
