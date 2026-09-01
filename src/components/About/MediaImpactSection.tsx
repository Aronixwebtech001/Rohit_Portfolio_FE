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
    <div className="stats-marquee-container" style={{ padding: "0 0 3rem 0", width: "100%", overflow: "hidden", backgroundColor: "transparent", whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
      <div
        className="stats-marquee"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          width: "max-content",
          willChange: "transform",
          animation: "scroll-stats 35s linear infinite",
          paddingLeft: "4rem",
        }}
      >
        {/* Set 1 */}
        {stats.map((stat, i) => (
          <span key={`s1-${i}`} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "#111", display: "inline-flex", alignItems: "center", gap: "1.5rem" }}>
            {stat}
            <span className="star-icon" style={{ fontSize: "1.2rem", color: "#496372" }}>✦</span>
          </span>
        ))}
        {/* Set 2 (Duplicate for infinite loop) */}
        {stats.map((stat, i) => (
          <span key={`s2-${i}`} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "#111", display: "inline-flex", alignItems: "center", gap: "1.5rem" }}>
            {stat}
            <span className="star-icon" style={{ fontSize: "1.2rem", color: "#496372" }}>✦</span>
          </span>
        ))}
      </div>

      <style>{`
        .stats-marquee:hover {
          animation-play-state: paused !important;
        }
        @keyframes scroll-stats {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }
      `}</style>
    </div>
  );
}
