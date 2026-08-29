import ScrollReveal from "../shared/ScrollReveal";

const stats = [
  "15+ industry awards and recognition",
  "Founded 5+ successful companies",
  "Led projects worth ₹150+ crores",
  "Built teams of 200+ professionals",
  "Mentored 100+ aspiring entrepreneurs",
  "5+ years of entrepreneurial journey",
];

export default function MediaImpactSection() {
  return (
    <section className="overflow-hidden bg-navy py-4">
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{
          animation: "marquee-ticker 30s linear infinite",
          width: "max-content",
        }}
      >
        {[...stats, ...stats].map((stat, i) => (
          <span key={i} className="flex items-center gap-6 text-white/90 text-sm md:text-base font-sans">
            {stat}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
