import worldMap from "../../assets/images/world-map.png";
import type { VentureNode } from "../../types";

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
    name: "Aaru Mobility",
    color: "#D14343",
    description:
      "Aaru Mobility is a professional mobility solutions company offering chauffeur-driven car rentals, employee transport services, event travel, and premium fleet solutions with a focus on safety, reliability, and customer comfort.",
  },
  {
    key: "aaru-developers",
    name: "Aaru Developers",
    color: "#C23D9C",
    description:
      "Aaru Developers is a real estate company specializing in residential and commercial projects, delivering quality construction, modern design, and reliable property solutions.",
  },
  {
    key: "awt",
    name: "Aronix Web Technology",
    color: "#7A3FCF",
    description:
      "Aronix Web Tech is a digital solutions company providing web development, UI/UX design, branding, and technology services to help businesses grow online.",
  },
  {
    key: "aaru-care",
    name: "Aaru Care Foundation",
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
          className="relative rounded-2xl bg-card p-6 md:p-10 overflow-hidden"
          style={{
            backgroundImage: `url(${worldMap})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mb-8 inline-block bg-white rounded-xl px-6 py-4 shadow-sm font-serif text-lg">
            Rohit Jangir
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ventures.map((v) => (
              <div
                key={v.key}
                className="bg-white rounded-xl p-5 border-l-4"
                style={{ borderColor: v.color }}
              >
                <p className="font-semibold text-sm mb-2" style={{ color: v.color }}>
                  {v.name.toUpperCase()}
                </p>
                <p className="text-muted text-xs leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
