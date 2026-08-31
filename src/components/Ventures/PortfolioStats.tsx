import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../shared/ScrollReveal";

interface StatData {
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  isFloat?: boolean;
  duration?: number;
}

const stats: StatData[] = [
  { target: 30, suffix: "+", label: "Portfolio", duration: 2000 },
  { target: 200, suffix: "+", label: "Investments", duration: 6000 },
  { target: 1.5, suffix: "m", label: "Raised", isFloat: true, duration: 2000 },
  { target: 1, prefix: "#", suffix: "", label: "Investor", duration: 2000 },
];

function AnimatedStat({ target, suffix = "", prefix = "", label, isFloat = false, duration = 2000 }: StatData) {
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
          const start = performance.now();

          const step = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = ease * target;
            setValue(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
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
  }, [target, isFloat, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center" style={{ flex: 1, minWidth: 150, maxWidth: 200 }}>
      <div className="stat-circle relative flex justify-center items-center"
        style={{ width: 180, height: 180 }}>
        <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#CBD5E1" strokeWidth="8" />
        </svg>
        <div className="relative z-[1] flex flex-col items-center justify-center">
          <h3 className="font-sans text-[2.1rem] font-normal text-[#1A202C] m-0 leading-[1.1]"
            style={{ letterSpacing: "0.5px" }}>
            {prefix}{isFloat ? value.toFixed(1) : value}{suffix}
          </h3>
          <p className="font-sans text-[1.3rem] text-[#1A202C] font-normal mt-1 m-0">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioStats() {
  return (
    <section className="bg-white" style={{ marginTop: "1rem" }}>
      <ScrollReveal>
        <div className="flex justify-center items-center flex-wrap mx-auto"
          style={{ gap: 80, maxWidth: 1200, padding: "0 15px" }}>
          {stats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
