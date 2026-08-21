import worldMap from "../../assets/images/world-map.png";
import { VentureNode } from "../../types";

const ventures: VentureNode[] = [
  {
    key: "jfam",
    name: "JFAM",
    color: "#3FA66B",
    description:
      "JFam is a multidisciplinary firm delivering interior design, architecture, construction, and government tender projects with quality and reliability.",
  },
  {
    key: "aaru-mobility",
    name: "AARU MOBILITY",
    color: "#D14343",
    description:
      "Aaru Mobility is a professional mobility solutions company offering chauffeur-driven car rentals, employee transport services, event travel, and premium fleet solutions with a focus on safety, reliability, and customer comfort.",
  },
  {
    key: "aaru-developers",
    name: "AARU DEVELOPERS",
    color: "#C23D9C",
    description:
      "Aaru Developers is a real estate company specializing in residential and commercial projects, delivering quality construction, modern design, and reliable property solutions.",
  },
  {
    key: "awt",
    name: "ARONIX WEB TECHNOLOGY",
    color: "#7A3FCF",
    description:
      "Aronix Web Tech is a digital solutions company providing web development, UI/UX design, branding, and technology services to help businesses grow online.",
  },
  {
    key: "aaru-care",
    name: "AARU CARE FOUNDATION",
    color: "#2E7FD1",
    description:
      "Aaru Care Foundation is a non-profit organization dedicated to social welfare, community development, education, healthcare support, and empowering underprivileged individuals.",
  },
];

export default function VenturesDiagram() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div
          className="relative rounded-2xl bg-card p-6 md:p-10 overflow-hidden min-h-[500px]"
          style={{
            backgroundImage: `url(${worldMap})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Slight overlay to soften the map */}
          <div className="absolute inset-0 bg-card/80" />

          <div className="relative z-10">
            {/* Center-left Rohit Jangir node */}
            <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2">
              <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-black/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white font-serif text-lg">
                    R
                  </div>
                  <span className="font-serif text-lg text-navy">Rohit Jangir</span>
                </div>
              </div>
            </div>

            {/* Mobile: show name at top */}
            <div className="md:hidden mb-6">
              <div className="inline-block bg-white rounded-xl px-6 py-4 shadow-sm font-serif text-lg">
                Rohit Jangir
              </div>
            </div>

            {/* Venture cards - positioned on the right side on desktop */}
            <div className="md:ml-[35%] space-y-4">
              {ventures.map((v) => (
                <div
                  key={v.key}
                  className="bg-white rounded-xl p-5 border-l-4 shadow-sm hover:shadow-md transition-shadow"
                  style={{ borderColor: v.color }}
                >
                  <div className="flex items-start gap-4">
                    {/* Colored dot connector */}
                    <div className="hidden md:block mt-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: v.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm mb-1.5 tracking-wide" style={{ color: v.color }}>
                        {v.name}
                      </p>
                      <p className="text-muted text-xs leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connecting lines (desktop only) — drawn with absolute positioned elements */}
            <svg
              className="hidden md:block absolute left-[180px] top-0 w-[calc(35%-180px)] h-full pointer-events-none"
              viewBox="0 0 200 500"
              preserveAspectRatio="none"
              fill="none"
            >
              {ventures.map((v, i) => {
                const startY = 250; // center
                const endY = 50 + i * 95; // distribute evenly
                return (
                  <path
                    key={v.key}
                    d={`M0,${startY} C100,${startY} 100,${endY} 200,${endY}`}
                    stroke={v.color}
                    strokeWidth="2"
                    strokeDasharray="6 3"
                    opacity="0.5"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
