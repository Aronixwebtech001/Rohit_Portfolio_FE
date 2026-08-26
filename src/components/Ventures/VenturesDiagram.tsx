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
      <div className="max-w-content mx-auto px-6 md:px-10 pb-12 pt-16">
        <h2 className="font-serif uppercase text-2xl md:text-3xl text-center mb-10 tracking-widest text-navy">
          My Ventures
        </h2>
        <div
          className="relative rounded-2xl bg-card/60 p-5 md:p-8 overflow-hidden"
          style={{
            backgroundImage: `url(${worldMap})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay to soften the map */}
          <div className="absolute inset-0 bg-card/85" />

          {/* Desktop layout: two-column grid */}
          <div className="relative z-10 hidden md:grid md:grid-cols-[200px_80px_1fr] items-center">
            {/* Column 1: Rohit Jangir card */}
            <div className="flex items-center justify-center self-center">
              <div className="bg-white rounded-xl px-5 py-3 shadow-md border border-black/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white font-serif text-sm">
                    R
                  </div>
                  <span className="font-serif text-base text-navy whitespace-nowrap">Rohit Jangir</span>
                </div>
              </div>
            </div>

            {/* Column 2: SVG connector lines */}
            <div className="relative h-full">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 80 500"
                preserveAspectRatio="none"
                fill="none"
              >
                {ventures.map((v, i) => {
                  const startY = 250;
                  const endY = 42 + i * 100;
                  return (
                    <path
                      key={v.key}
                      d={`M0,${startY} C50,${startY} 30,${endY} 80,${endY}`}
                      stroke={v.color}
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                      opacity="0.5"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Column 3: Venture cards */}
            <div className="space-y-3">
              {ventures.map((v) => (
                <div
                  key={v.key}
                  className="bg-white rounded-lg p-4 border-l-[3px] shadow-sm hover:shadow-md transition-shadow"
                  style={{ borderColor: v.color }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: v.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs mb-1 tracking-wide" style={{ color: v.color }}>
                        {v.name}
                      </p>
                      <p className="text-muted text-[11px] leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout: simple stacked */}
          <div className="relative z-10 md:hidden">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white font-serif text-xs">
                  R
                </div>
                <span className="font-serif text-sm">Rohit Jangir</span>
              </div>
            </div>
            <div className="space-y-3">
              {ventures.map((v) => (
                <div
                  key={v.key}
                  className="bg-white rounded-lg p-4 border-l-[3px] shadow-sm"
                  style={{ borderColor: v.color }}
                >
                  <p className="font-bold text-xs mb-1 tracking-wide" style={{ color: v.color }}>
                    {v.name}
                  </p>
                  <p className="text-muted text-[11px] leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
