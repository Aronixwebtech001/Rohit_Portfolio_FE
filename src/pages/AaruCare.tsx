import { useState, useEffect } from "react";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";

const slides = [
  "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208560/images/aaru-care/2ND-hero-care.png.png",
  "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208557/images/aaru-care/3rd-hero-care.png.png"
];

export default function AaruCare() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="pt-20"></div>

      <section className="relative w-full h-[60vh] md:h-[80vh] bg-navy overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={slide} 
              alt={`AARU Care Foundation Slide ${index + 1}`} 
              className="w-full h-full object-cover opacity-80"
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </div>
        ))}
        
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <ScrollReveal>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-tight mb-6 max-w-[800px]">
              Empowering Communities Through Compassion
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-[600px] mx-auto">
              Dedicated to transforming lives through child education, women empowerment, and compassionate care. Making a real difference in communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy mb-8">Make a Difference Today</h2>
            <p className="text-[#4A5568] max-w-[700px] mx-auto mb-10 text-lg leading-relaxed">
              Join us in our mission to bring hope and positive change to those who need it most. 
              Together, we can build a better, more equitable world for future generations.
            </p>
            <a 
              href="https://aarucare.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-navy transition-colors duration-300"
            >
              Visit AARU Care Foundation
            </a>
          </ScrollReveal>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
