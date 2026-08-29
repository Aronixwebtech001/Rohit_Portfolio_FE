import { useState, useEffect, useRef } from "react";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";

import caseStudyImg1 from "../assets/images/case-study/image2.jpg";
import caseStudyImg2 from "../assets/images/case-study/image3.jpg";
import caseStudyImg3 from "../assets/images/case-study/image4.jpg";
import caseStudyImg4 from "../assets/images/case-study/image5.jpg";

const caseStudies = [
  {
    id: "interior",
    tab: "Interior",
    title: "Transforming Operations into Scalable and Profitable Enterprises",
    desc: "JFAM empowers businesses with structured leadership, financial discipline, and technology integration, enabling sustainable growth, operational efficiency, and long-term enterprise scalability.",
    image: caseStudyImg1
  },
  {
    id: "mobility",
    tab: "Mobility",
    title: "Driving Seamless Mobility Across India's Growing Infrastructure",
    desc: "Aaru Mobility delivers integrated transportation solutions, combining technology, efficient fleet management, and strategic operations to enable reliable, scalable mobility infrastructure across India.",
    image: caseStudyImg2
  },
  {
    id: "real-estate",
    tab: "Real Estate",
    title: "Transforming Infrastructure Through Structured Systems and Strategy",
    desc: "Strategic management, standardized processes, and technology integration enabled efficient operations, stronger brand credibility, and scalable infrastructure growth for long-term development.",
    image: caseStudyImg3
  },
  {
    id: "design-system",
    tab: "Design System",
    title: "Engineering Modern\nWeb Experiences",
    desc: "Creating powerful web platforms, applications, and custom digital solutions designed to scale with your business.",
    image: caseStudyImg4
  }
];

const stats = [
  { target: 7, label: "Years Experience" },
  { target: 91, label: "Project Completed" },
  { target: 200, label: "Team Members", suffix: "+" },
  { target: 15, label: "Awards Won", suffix: "+" }
];

function AnimatedStat({ target, label, suffix = "" }: { target: number, label: string, suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const start = performance.now();

          const step = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            setValue(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
            else setValue(target);
          };

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center group">
      <h4 className="font-sans text-sm md:text-base text-[#4A5568] uppercase tracking-wider mb-2">{label}</h4>
      <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy font-bold">{value}{suffix}</p>
      <div className="w-12 h-1 bg-accent mx-auto mt-4 transition-all duration-300 group-hover:w-24"></div>
    </div>
  );
}

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState(0);
  const activeStudy = caseStudies[activeTab];

  return (
    <>
      <div className="pt-20"></div>

      {/* TABS SECTION */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-content mx-auto px-[5%]">
          <ul className="flex overflow-x-auto hide-scrollbar space-x-8 md:space-x-12">
            {caseStudies.map((study, i) => (
              <li 
                key={study.id} 
                className={`relative py-6 cursor-pointer whitespace-nowrap transition-colors duration-300 ${activeTab === i ? 'text-navy font-bold' : 'text-[#4A5568] hover:text-navy'}`}
                onClick={() => setActiveTab(i)}
              >
                <span className="font-serif text-lg md:text-xl">{study.tab}</span>
                {activeTab === i && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CASE STUDY ITEM SECTION */}
      <section className="py-16 md:py-24 bg-bg-light" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 transition-opacity duration-500" key={`content-${activeTab}`}>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-navy leading-[1.1] mb-6 whitespace-pre-line">
                {activeStudy.title}
              </h2>
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed">
                {activeStudy.desc}
              </p>
            </div>
            <div className="flex-1 w-full" key={`image-${activeTab}`}>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg animate-fade-in">
                <img 
                  src={activeStudy.image} 
                  alt={activeStudy.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-16 md:py-24 bg-white" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <AnimatedStat key={i} target={stat.target} label={stat.label} suffix={stat.suffix} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
