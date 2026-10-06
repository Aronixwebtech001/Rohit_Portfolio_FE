import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../shared/ScrollReveal";

const caseStudies = [
  {
    image: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208441/images/resources/Casestudy1.png.png", // Mobility
    title: "Corporate Excellence Delivered",
    description: "How we turned an 18,000 sq.ft office into a scalable business asset",
    linkText: "Learn about Corporate Excellence Case Study →",
  },
  {
    image: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208435/images/resources/Casestudy2.jpg.jpg", // Farmhouse / Home
    title: "Beyond Boundaries Farmhouse",
    description: "How we delivered a 23,400 sq.ft luxury farmhouse with precision and excellence",
    linkText: "Explore Luxury Farmhouse Case Study →",
  },
  {
    image: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208422/images/resources/CASE_STUDY_003.jpg.png", // Corporate / Meeting room
    title: "Luxury Living Redefined",
    description: "How we built a world class 4 BHK home with zero operational waste",
    linkText: "View Luxury Living Redefined Details →",
  },
  {
    image: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208429/images/resources/Mask-group1.png.png",
    title: "The Future Workspace",
    description: "Redefining coworking spaces for the next generation of creative creators.",
    linkText: "See Future Workspace Innovation →",
  },
  {
    image: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208428/images/resources/Mask-group2.png.png",
    title: "Experience-First Retail",
    description: "Blending digital touchpoints with physical luxury to drive brand engagement.",
    linkText: "Read Experience-First Retail Story →",
  },
];

export default function CaseStudiesSection() {
  const [currentPos, setCurrentPos] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval>>();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const getVisibleCards = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const getGap = useCallback(() => {
    if (typeof window === "undefined") return 30;
    if (window.innerWidth < 640) return 20;
    if (window.innerWidth < 1024) return 24;
    return 30;
  }, []);

  const maxPos = Math.max(0, caseStudies.length - getVisibleCards());

  const goNext = useCallback(() => {
    setCurrentPos((prev) => (prev < maxPos ? prev + 1 : 0));
  }, [maxPos]);

  const goPrev = useCallback(() => {
    setCurrentPos((prev) => (prev > 0 ? prev - 1 : maxPos));
  }, [maxPos]);

  // Auto-scroll
  const startAutoScroll = useCallback(() => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(goNext, 3800);
  }, [goNext]);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [startAutoScroll]);

  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    startAutoScroll();
  };

  const getCardWidth = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return 350;
    const visible = getVisibleCards();
    const gap = getGap();
    return Math.floor((wrapper.offsetWidth - gap * (visible - 1)) / visible);
  }, [getVisibleCards, getGap]);

  const [cardWidth, setCardWidth] = useState(350);
  const [gap, setGap] = useState(30);

  useEffect(() => {
    const updateDimensions = () => {
      setGap(getGap());
      setCardWidth(getCardWidth());
      const visible = getVisibleCards();
      const newMaxPos = Math.max(0, caseStudies.length - visible);
      setCurrentPos((prev) => Math.min(prev, newMaxPos));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [getCardWidth, getGap, getVisibleCards]);

  const translateX = -currentPos * (cardWidth + gap);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    clearInterval(autoScrollRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      goNext();
      resetAutoScroll();
    } else if (distance < -40) {
      goPrev();
      resetAutoScroll();
    }
    touchStartX.current = null;
    touchEndX.current = null;
    startAutoScroll();
  };

  return (
    <section className="bg-[#f8fafc] py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%] w-full">
        <ScrollReveal className="text-center mb-8 sm:mb-12 lg:mb-14">
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] text-navy font-normal">Case Studies</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative w-full">
            <div className="flex items-center gap-6 lg:gap-[30px] relative w-full">
              {/* Prev Arrow (desktop) */}
              <button
                onClick={() => { goPrev(); resetAutoScroll(); }}
                className="hidden lg:flex flex-shrink-0 w-12 h-12 rounded-full border border-navy items-center justify-center text-navy bg-transparent hover:bg-navy/5 transition-all duration-300 cursor-pointer"
                aria-label="Previous Case Study"
                style={{ transform: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(-3px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="10 17 5 12 10 7" />
                </svg>
              </button>

              {/* Slider */}
              <div
                ref={wrapperRef}
                className="flex-1 w-full overflow-hidden"
                style={{ padding: "16px 2px" }}
                onMouseEnter={() => clearInterval(autoScrollRef.current)}
                onMouseLeave={startAutoScroll}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  ref={sliderRef}
                  className="flex"
                  style={{
                    gap: `${gap}px`,
                    transform: `translateX(${translateX}px)`,
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {caseStudies.map((cs, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 bg-white rounded-2xl flex flex-col transition-all duration-300"
                      style={{
                        width: cardWidth,
                        maxWidth: cardWidth,
                        padding: "24px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div className="w-full h-[200px] sm:h-[220px] rounded-xl overflow-hidden mb-6 bg-slate-100 flex-shrink-0">
                        <img
                          src={cs.image}
                          alt={cs.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col flex-grow text-left">
                        <span className="text-[0.85rem] text-[#64748b] mb-2.5 block font-normal">Case Study</span>
                        <h3 className="font-serif text-[1.4rem] sm:text-[1.6rem] text-[#1a202c] mb-3 leading-[1.3] font-normal">{cs.title}</h3>
                        <p className="text-[0.92rem] sm:text-[0.95rem] text-[#64748b] leading-relaxed mb-6">{cs.description}</p>
                        <Link
                          to="/case-study"
                          className="text-[0.92rem] sm:text-[0.95rem] font-semibold text-[#1a202c] no-underline mt-auto inline-flex items-center gap-2 hover:text-navy transition-colors duration-300"
                        >
                          {cs.linkText}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Arrow (desktop) */}
              <button
                onClick={() => { goNext(); resetAutoScroll(); }}
                className="hidden lg:flex flex-shrink-0 w-12 h-12 rounded-full border border-navy items-center justify-center text-white bg-navy hover:bg-navy-light transition-all duration-300 cursor-pointer"
                aria-label="Next Case Study"
                style={{ transform: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(3px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="14 7 19 12 14 17" />
                </svg>
              </button>
            </div>

            {/* Mobile & Tablet Navigation Controls */}
            <div className="flex lg:hidden justify-center items-center gap-4 mt-6">
              <button
                onClick={() => { goPrev(); resetAutoScroll(); }}
                className="w-11 h-11 rounded-full border border-navy flex items-center justify-center text-navy bg-white hover:bg-navy/5 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Previous Case Study"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="10 17 5 12 10 7" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2 px-1">
                {Array.from({ length: maxPos + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setCurrentPos(idx); resetAutoScroll(); }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentPos === idx ? "w-6 bg-navy" : "w-2 bg-navy/25"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => { goNext(); resetAutoScroll(); }}
                className="w-11 h-11 rounded-full border border-navy flex items-center justify-center text-white bg-navy hover:bg-navy-light transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Next Case Study"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="14 7 19 12 14 17" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* View All */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <Link
            to="/case-study"
            className="inline-block bg-navy text-white py-3.5 px-8 sm:px-10 rounded-md font-semibold no-underline transition-all duration-300 hover:bg-navy-light hover:translate-y-[-2px] hover:shadow-lg text-center"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
