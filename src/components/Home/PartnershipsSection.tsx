import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../shared/ScrollReveal";

const steps = [
  {
    tag: "Collaboration",
    title: "Strategic Alliance",
    description: "We believe in the power of synergy. By combining our expertise with industry leaders, we create scalable solutions that drive meaningful change in the global landscape.",
    designation: "Partnering for Growth",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    tag: "Innovation",
    title: "Tech Integration",
    description: "Working with cutting-edge technology partners to integrate smart mobility and sustainable infrastructure into our core ventures and projects.",
    designation: "Future-Forward Solutions",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    tag: "Investment",
    title: "Capital Growth",
    description: "Providing strategic investment and operational support to high-growth startups in the technology and mobility sectors across emerging markets.",
    designation: "Fueling Ambition",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    tag: "Mentorship",
    title: "Founder Support",
    description: "Empowering the next generation of entrepreneurs through direct investment, mentorship, and access to our global network of experts and resources.",
    designation: "Building Legacies",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200", // Placeholder for people mentoring (since AI generation is currently rate limited)
  },
  {
    tag: "Venture",
    title: "Market Expansion",
    description: "Helping our partners scale their impact by opening doors to new markets and facilitating cross-border collaborations and partnerships.",
    designation: "Scaling Globally",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function PartnershipsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollRange = rect.height - vh;

      if (scrollRange <= 0) return;

      const progress = Math.max(0, Math.min(0.999, -rect.top / scrollRange));
      const stepIndex = Math.floor(progress * steps.length);
      setActiveIndex(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // On mobile, show stacked cards
  if (isMobile) {
    return (
      <section className="bg-[#C9D3D7]" style={{ padding: "60px 0" }}>
        <div className="px-[5%]">
          <div className="bg-white rounded-[30px] p-5 md:p-10">
            <ScrollReveal className="text-center mb-8">
              <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy font-normal">Partnerships</h2>
            </ScrollReveal>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className={`py-8 ${i < steps.length - 1 ? "border-b border-black/5" : ""}`}>
                    <span className="inline-block px-5 py-2.5 bg-[#F0F4F7] rounded-full text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-accent border border-black/5 mb-6">
                      {step.tag}
                    </span>
                    <h3 className="font-serif text-[clamp(1.6rem,5vw,2.2rem)] text-navy font-normal leading-tight mb-4">{step.title}</h3>
                    <p className="text-[15px] text-black leading-[26px] mb-4 max-w-[520px] opacity-85 text-justify">{step.description}</p>
                    <p className="font-sans font-medium text-black text-sm uppercase tracking-[0.2em] opacity-80">{step.designation}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop: sticky scroll matching Project A exactly
  return (
    <section
      ref={sectionRef}
      className="relative bg-[#C9D3D7]"
      style={{ height: "400vh" }}
    >
      <div
        ref={stickyRef}
        className="sticky top-[90px] flex items-center justify-center px-0"
        style={{
          height: "calc(100vh - 120px)",
          paddingBottom: "20px",
        }}
      >
        <div
          className="bg-white rounded-[40px] w-[calc(100%-10%)] max-w-content mx-auto h-full flex flex-col justify-start overflow-hidden"
          style={{
            padding: "20px 60px 40px",
            boxShadow: "0 40px 100px rgba(0,0,0,0.05)",
          }}
        >
          {/* Centered Header */}
          <div className="text-center max-w-[800px] mx-auto mb-4">
            <h2 className="font-serif text-[48px] text-navy font-normal tracking-[-0.01em]">Partnerships</h2>
          </div>

          {/* Content: Text Column + Image Column */}
          <div className="flex gap-16 flex-1 items-center relative pb-5">
            {/* Left: Text Steps */}
            <div className="flex-1 relative h-full min-h-[250px]">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start transition-all will-change-[transform,opacity] ${
                    i === activeIndex
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-5 pointer-events-none"
                  }`}
                  style={{
                    transition: i === activeIndex
                      ? "opacity 0.5s ease 0.2s, transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s"
                      : "opacity 0.3s ease, transform 0.4s ease",
                  }}
                >
                  <span className="inline-block px-[22px] py-[10px] bg-[#F0F4F7] rounded-full text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-accent border border-black/5 mb-6 w-fit">
                    {step.tag}
                  </span>
                  <h3 className="font-serif text-[40px] text-navy font-normal leading-[1.1] mb-4">{step.title}</h3>
                  <p className="text-[16px] text-black leading-[26px] mb-6 max-w-[520px] opacity-85 text-justify">{step.description}</p>
                  <p className="font-sans font-medium text-black text-[14px] uppercase tracking-[0.2em] opacity-80">{step.designation}</p>
                </div>
              ))}
            </div>

            {/* Right: Sticky Image */}
            <div className="flex-[1.25] h-full relative" style={{ marginTop: "2%" }}>
              <div
                className="w-full h-full rounded-[40px] overflow-hidden relative"
                style={{ boxShadow: "0 40px 90px rgba(0,0,0,0.12)" }}
              >
                {steps.map((step, i) => (
                  <img
                    key={i}
                    src={step.image}
                    alt={step.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      i === activeIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
