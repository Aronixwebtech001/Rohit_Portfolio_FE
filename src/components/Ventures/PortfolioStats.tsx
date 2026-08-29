import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../shared/ScrollReveal";

const stats = [
  { target: 30, suffix: "+", label: "Portfolio" },
  { target: 200, suffix: "+", label: "Investments" },
  { target: 1.5, suffix: "m", label: "Raised", isFloat: true },
  { target: 1, prefix: "#", suffix: "", label: "Investor" },
];

function AnimatedStat({ target, suffix = "", prefix = "", label, isFloat = false }: {
  target: number; suffix?: string; prefix?: string; label: string; isFloat?: boolean;
}) {
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
            const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
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
  }, [target, isFloat]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#CBD5E1" strokeWidth="8" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="font-serif text-2xl md:text-3xl text-navy font-bold">
            {prefix}{isFloat ? value.toFixed(1) : value}{suffix}
          </h3>
          <p className="text-xs text-[#4A5568] mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioStats() {
  return (
    <section className="py-16 md:py-20 bg-bg-light" style={{ padding: "60px 5%" }}>
      <div className="max-w-content mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <AnimatedStat key={i} {...stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
