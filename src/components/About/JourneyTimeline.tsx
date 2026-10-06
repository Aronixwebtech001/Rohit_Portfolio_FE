import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../shared/ScrollReveal";

interface JourneyStep {
  year: string;
  title: string;
  desc: string;
}

const journeySteps: JourneyStep[] = [
  {
    year: "2018",
    title: "The Spark",
    desc: "A vision took shape, the idea of JFAM was born — laying the foundation for an entrepreneurial journey.",
  },
  {
    year: "2019",
    title: "First Venture",
    desc: "JFAM officially launched, marking the beginning of my entrepreneurial journey.",
  },
  {
    year: "2020",
    title: "Building the Core",
    desc: "Focused on strengthening operations, learning through execution, and building resilience.",
  },
  {
    year: "2021",
    title: "New Horizons",
    desc: "Expanded into new ventures with the launch of Aaru Mobility.",
  },
  {
    year: "2022",
    title: "Digital Leap",
    desc: "Entered the digital ecosystem by founding Aronix Web Tech.",
  },
  {
    year: "2023",
    title: "Infrastructure Expansion",
    desc: "Diversified into real estate and infrastructure with Aaru Developers.",
  },
  {
    year: "2024",
    title: "Social Impact",
    desc: "Growth and consolidation across all businesses.",
  },
  {
    year: "2025",
    title: "Mentorship & Investment",
    desc: "Launched Aaru Care Foundation for social and community impact.",
  },
  {
    year: "2026",
    title: "Aaru Logistics Launched",
    desc: "Expanding into global supply chain management to bridge the gap between innovation and efficient distribution.",
  },
];

const tensPositions = [0, 0, 1, 1, 1, 1, 1, 1, 1];
const onesPositions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const SLIDE_HEIGHT = 220;

export default function JourneyTimeline() {
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const tensRollerRef = useRef<HTMLDivElement>(null);
  const onesRollerRef = useRef<HTMLDivElement>(null);
  const contentStripRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const tensRoller = tensRollerRef.current;
    const onesRoller = onesRollerRef.current;
    const contentStrip = contentStripRef.current;
    const lineFill = lineFillRef.current;
    const dot = dotRef.current;

    if (!wrapper || !sticky || !tensRoller || !onesRoller || !contentStrip) return;

    let currentStep = -1;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperTop = rect.top;
      const wrapperBottom = rect.bottom;
      const wrapperHeight = rect.height;
      const vh = window.innerHeight;

      // Determine positioning state
      if (wrapperTop > 0) {
        sticky.classList.remove("is-fixed", "is-bottom");
      } else if (wrapperBottom <= vh) {
        sticky.classList.remove("is-fixed");
        sticky.classList.add("is-bottom");
      } else {
        sticky.classList.add("is-fixed");
        sticky.classList.remove("is-bottom");
      }

      // Calculate progress (0 to 1) through the wrapper
      const scrolledPx = -wrapperTop;
      const scrollableHeight = wrapperHeight - vh;
      const progress = Math.max(0, Math.min(1, scrolledPx / scrollableHeight));

      const stepIndex = Math.min(
        journeySteps.length - 1,
        Math.floor(progress * journeySteps.length)
      );

      // Dot + green fill: follow continuous progress
      const fillPercent = progress * 100;
      if (dot) {
        dot.style.top = `${fillPercent}%`;
      }
      if (lineFill) {
        lineFill.style.height = `${fillPercent}%`;
      }

      // Snapping digits + text strip
      if (stepIndex !== currentStep) {
        currentStep = stepIndex;

        tensRoller.style.transform = `translateY(-${tensPositions[stepIndex]}em)`;
        onesRoller.style.transform = `translateY(-${onesPositions[stepIndex]}em)`;
        contentStrip.style.transform = `translateY(-${stepIndex * SLIDE_HEIGHT}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Mobile fallback view
  if (isMobile) {
    return (
      <section className="py-16 bg-bg-light" style={{ padding: "60px 5%" }}>
        <ScrollReveal className="text-center mb-10">
          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy text-center mb-10 text-uppercase">
            My Journey
          </h2>
        </ScrollReveal>
        <div className="max-w-[600px] mx-auto space-y-6">
          {journeySteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div
                className="step-slide bg-white rounded-xl shadow-sm border-l-[3px] border-[#1C323A] p-5 mb-6"
                data-year={step.year}
              >
                <div className="inline-block bg-[#1C323A] text-white text-xs font-semibold px-3 py-1 rounded-[20px] mb-3 tracking-wider">
                  {step.year}
                </div>
                <h3 className="font-serif text-xl text-navy mb-2">{step.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  }

  // Desktop timeline sticky-scroll view
  return (
    <div
      ref={wrapperRef}
      className="journey-scroll-wrapper relative overflow-hidden w-full max-w-full"
      style={{ position: "relative", height: `${journeySteps.length * 100}vh` }}
    >
      <div
        ref={stickyRef}
        className="journey-sticky w-full h-screen flex items-center bg-[#f0f2f5] overflow-hidden z-[5]"
      >
        <div className="journey-inner w-full max-w-[1300px] mx-auto px-[5%]">
          <h2
            className="journey-heading text-center font-serif text-[#1C323A] uppercase tracking-wide"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 400,
              marginBottom: "3.5rem",
            }}
          >
            My Journey
          </h2>

          <div className="journey-display grid gap-0 items-center min-h-[400px]" style={{ gridTemplateColumns: "38% 80px 1fr" }}>
            {/* Left: Year digit rollers */}
            <div className="step-number-area flex items-center justify-end pr-10">
              <div
                className="step-number flex items-start font-serif font-normal text-[#1C323A] leading-none select-none"
                style={{
                  fontSize: "clamp(7rem, 16vw, 14rem)",
                  letterSpacing: "-4px",
                }}
              >
                <span className="num-static">20</span>
                <div className="num-roller inline-block h-[1em] overflow-hidden relative">
                  <div
                    ref={tensRollerRef}
                    className="num-roller-strip flex flex-col transition-transform duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1)"
                  >
                    <span className="block h-[1em] leading-none">1</span>
                    <span className="block h-[1em] leading-none">2</span>
                  </div>
                </div>
                <div className="num-roller inline-block h-[1em] overflow-hidden relative">
                  <div
                    ref={onesRollerRef}
                    className="num-roller-strip flex flex-col transition-transform duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1)"
                  >
                    <span className="block h-[1em] leading-none">8</span>
                    <span className="block h-[1em] leading-none">9</span>
                    <span className="block h-[1em] leading-none">0</span>
                    <span className="block h-[1em] leading-none">1</span>
                    <span className="block h-[1em] leading-none">2</span>
                    <span className="block h-[1em] leading-none">3</span>
                    <span className="block h-[1em] leading-none">4</span>
                    <span className="block h-[1em] leading-none">5</span>
                    <span className="block h-[1em] leading-none">6</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Vertical Line + Dot */}
            <div className="step-line-area flex flex-col items-center h-[400px] relative">
              <div className="journey-line-track w-[3px] h-full bg-[#c8ced5] rounded-[2px] relative overflow-hidden">
                <div
                  ref={lineFillRef}
                  className="journey-line-fill block w-full h-0 bg-[#2bca8e] rounded-[2px]"
                />
              </div>
              <div
                ref={dotRef}
                className="step-dot absolute w-4 h-4 rounded-full bg-[#2bca8e] z-[3] top-0 -translate-y-1/2 border-none shadow-none"
              />
            </div>

            {/* Right: Content strip */}
            <div className="step-content-area pl-10 h-[220px] overflow-hidden">
              <div
                ref={contentStripRef}
                className="step-content-strip flex flex-col transition-transform duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1)"
              >
                {journeySteps.map((step, i) => (
                  <div
                    key={i}
                    className="step-slide h-[220px] flex-shrink-0 flex flex-col justify-center"
                    data-step={i + 1}
                    data-year={step.year}
                  >
                    <h3
                      className="font-serif font-normal text-[#1C323A] leading-[1.2]"
                      style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", marginBottom: "1rem" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-sans text-[#555] leading-[1.8]"
                      style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)", maxWidth: 550, marginBottom: "1rem" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .journey-scroll-wrapper {
          position: relative !important;
        }
        .journey-sticky.is-fixed {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
        }
        .journey-sticky.is-bottom {
          position: absolute !important;
          bottom: 0 !important;
          top: auto !important;
          left: 0 !important;
        }
      `}</style>
    </div>
  );
}
