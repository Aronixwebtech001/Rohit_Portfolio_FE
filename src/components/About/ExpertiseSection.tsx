import ScrollReveal from "../shared/ScrollReveal";

interface ExpertiseItem {
  icon: string;
  iconAlt: string;
  title: string;
  desc: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/bar-chart.png",
    iconAlt: "Expertise in Investment Strategy",
    title: "Investment Strategy",
    desc: "Identifying high-potential ideas with strategic investment opportunities.",
  },
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/settings--v1.png",
    iconAlt: "Expertise in Business Development",
    title: "Business Development",
    desc: "Strategic planning, market analysis, and scaling businesses for sustainable growth.",
  },
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/handshake.png",
    iconAlt: "Expertise in Mentorship",
    title: "Mentorship",
    desc: "Guiding entrepreneurs through challenges and helping them achieve their vision.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="expertise-section text-center" style={{ padding: "6rem 2rem", backgroundColor: "#ffffff" }}>
      <div className="mx-auto" style={{ maxWidth: 1400, padding: "0 4%" }}>
        <ScrollReveal>
          <h2
            className="font-serif text-[#0F1F22] font-normal uppercase"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "4rem" }}
          >
            AREAS OF EXPERTISE
          </h2>
        </ScrollReveal>

        <div className="expertise-grid flex justify-center flex-wrap" style={{ gap: 30, marginTop: 80 }}>
          {expertiseItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                className="expertise-card relative flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-[5px]"
                style={{
                  backgroundColor: "#F8FBFE",
                  border: "1px solid #E6EBED",
                  borderRadius: 24,
                  padding: "60px 30px 40px",
                  width: 320,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 30px rgba(15, 31, 34, 0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Floating icon above card */}
                <div
                  className="card-icon-wrapper absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full"
                  style={{
                    top: -45,
                    width: 90,
                    height: 90,
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 4px 15px rgba(15, 31, 34, 0.05)",
                  }}
                >
                  <div
                    className="card-icon flex items-center justify-center rounded-full"
                    style={{
                      width: 70,
                      height: 70,
                      backgroundColor: "#E6EBED",
                    }}
                  >
                    <img src={item.icon} alt={item.iconAlt} className="w-8 h-8" loading="lazy" />
                  </div>
                </div>

                <h3
                  className="font-serif text-[#0F1F22] font-normal"
                  style={{ fontSize: "1.6rem", marginBottom: 15 }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans text-[#485E68] font-light leading-[1.5]"
                  style={{ fontSize: "1rem" }}
                >
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .expertise-card {
            width: 100% !important;
            max-width: 320px !important;
            margin-top: 45px !important;
          }
        }
      `}</style>
    </section>
  );
}
