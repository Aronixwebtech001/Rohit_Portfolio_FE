import ScrollReveal from "../shared/ScrollReveal";

interface ThesisCard {
  icon: string;
  iconAlt: string;
  title: string;
  desc: string;
}

const thesisCards: ThesisCard[] = [
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/bar-chart.png",
    iconAlt: "Growth and Value Creation Icon",
    title: "Long Term ValueCreation",
    desc: "Creating sustainable businesses that deliver robust returns and long-term economic impact.",
  },
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/settings--v1.png",
    iconAlt: "Technology Led Disruption Icon",
    title: "Technology Led Disruption",
    desc: "Leveraging cutting-edge technologies to redefine industries and create new market opportunities.",
  },
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/handshake.png",
    iconAlt: "Founder First Partnership Icon",
    title: "Founder First Partnership",
    desc: "Empowering founders with the capital, mentorship, and network needed to scale globally.",
  },
];

export default function InvestmentThesis() {
  return (
    <section className="text-center" style={{ padding: "50px 0", backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto" style={{ maxWidth: 1400, padding: "0 4%" }}>
        <ScrollReveal>
          <h2
            className="font-serif text-[#0F1F22] font-normal"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "clamp(40px, 6vw, 80px)" }}
          >
            Our Investment Thesis
          </h2>
        </ScrollReveal>

        <div className="flex justify-center flex-wrap" style={{ gap: 30 }}>
          {thesisCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                className="relative text-center transition-all duration-300 hover:-translate-y-[5px]"
                style={{
                  backgroundColor: "#F8FBFE",
                  border: "1px solid #E6EBED",
                  borderRadius: 24,
                  padding: "60px 30px 40px",
                  width: "min(320px, 100%)",
                  maxWidth: "100%",
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
                  className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full"
                  style={{
                    top: -45,
                    width: 90,
                    height: 90,
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 4px 15px rgba(15, 31, 34, 0.05)",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 70,
                      height: 70,
                      backgroundColor: "#E6EBED",
                    }}
                  >
                    <img src={card.icon} alt={card.iconAlt} className="w-8 h-8" loading="lazy" />
                  </div>
                </div>

                <h3
                  className="font-serif text-[#0F1F22] font-normal"
                  style={{ fontSize: "1.6rem", marginBottom: 15 }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans text-[#485E68] font-light leading-[1.5]"
                  style={{ fontSize: "1rem" }}
                >
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
