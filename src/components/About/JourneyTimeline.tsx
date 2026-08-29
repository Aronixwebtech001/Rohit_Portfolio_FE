import { useState, useEffect, useRef } from "react";
import ScrollReveal from "../shared/ScrollReveal";

const journeySteps = [
  { year: "2018", title: "The Beginning", desc: "Started the entrepreneurial journey with a vision to create impactful businesses." },
  { year: "2019", title: "First Venture", desc: "Launched the first business venture, laying the foundation for future growth." },
  { year: "2020", title: "Building Scale", desc: "Expanded operations and built a team of dedicated professionals." },
  { year: "2021", title: "Diversification", desc: "Entered new sectors including mobility and infrastructure development." },
  { year: "2022", title: "JFAM Launch", desc: "Founded JFAM, marking a significant milestone in the portfolio." },
  { year: "2023", title: "Tech Revolution", desc: "Launched Aronix Web Tech, bringing cutting-edge digital solutions." },
  { year: "2024", title: "Mobility Vision", desc: "Established Aaru Mobility for sustainable transportation solutions." },
  { year: "2025", title: "Growth & Impact", desc: "Expanded to 200+ team members and ₹150+ crores in project value." },
  { year: "2026", title: "Future Forward", desc: "Continuing to build, innovate, and empower the next generation." },
];

export default function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollRange = rect.height - vh;
      if (scrollRange <= 0) return;
      const progress = Math.max(0, Math.min(0.999, -rect.top / scrollRange));
      const stepIndex = Math.floor(progress * journeySteps.length);
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Mobile: simple list
  if (isMobile) {
    return (
      <section className="py-16 bg-bg-light" style={{ padding: "60px 5%" }}>
        <ScrollReveal className="text-center mb-10">
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy">My Journey</h2>
        </ScrollReveal>
        <div className="max-w-[600px] mx-auto space-y-6">
          {journeySteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="flex gap-4 items-start">
                <span className="text-2xl font-serif text-accent font-bold min-w-[60px]">{step.year}</span>
                <div>
                  <h3 className="font-serif text-lg text-navy mb-1">{step.title}</h3>
                  <p className="text-sm text-[#4A5568]">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: sticky scroll
  return (
    <div ref={wrapperRef} style={{ height: `${journeySteps.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center bg-bg-light" style={{ padding: "0 5%" }}>
        <div className="max-w-content mx-auto w-full">
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] text-navy mb-10">My Journey</h2>

          <div className="flex gap-12 items-stretch">
            {/* Left: Year Display */}
            <div className="flex items-center">
              <span className="font-serif text-[clamp(3rem,8vw,6rem)] text-navy leading-none font-bold">
                {journeySteps[activeStep].year}
              </span>
            </div>

            {/* Center: Progress Line */}
            <div className="relative w-[3px] bg-navy/10 rounded-full min-h-[400px]">
              <div
                className="absolute top-0 left-0 w-full bg-accent rounded-full transition-all duration-500"
                style={{ height: `${((activeStep + 1) / journeySteps.length) * 100}%` }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-md transition-all duration-500"
                style={{ top: `${((activeStep + 0.5) / journeySteps.length) * 100}%` }}
              />
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex items-center">
              <div className="transition-all duration-500">
                <h3 className="font-serif text-2xl text-navy mb-3">{journeySteps[activeStep].title}</h3>
                <p className="text-[#4A5568] text-base leading-relaxed max-w-[500px]">
                  {journeySteps[activeStep].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
