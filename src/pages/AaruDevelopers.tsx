import { Link } from "react-router-dom";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";

export default function AaruDevelopers() {
  return (
    <>
      <div className="pt-20"></div>

      <section className="bg-hero-bg py-16 md:py-24 px-[5%] relative overflow-hidden">
        <div className="max-w-content mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <ScrollReveal direction="left" className="flex-1">
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] text-navy leading-[1.1] mb-6">
              Easy way to find a perfect property
            </h1>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-8">
              AARU Developers is a real estate and infrastructure company focused on
              quality construction and sustainable development. The firm delivers
              residential and commercial projects with strong planning, modern design,
              timely execution.
            </p>
            <a 
              href="https://aarudevelopers.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-accent transition-colors duration-300"
            >
              Visit Official Website
            </a>
          </ScrollReveal>
          
          <ScrollReveal direction="right" className="flex-1 relative overflow-hidden md:overflow-visible">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208577/images/aaru-dev/Aaru_Developer.jpg.png" 
                alt="AARU Developers Property" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-accent/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
          </ScrollReveal>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
