import { useState } from "react";
import ScrollReveal from "../shared/ScrollReveal";

interface VentureItem {
  name: string;
  heading: string;
  logo: string;
  desc: string;
  link: string;
  accentColor: string;
  position: { top: string; left: string };
  zIndex?: number;
  logoWidth?: number;
  headingMargin?: string;
  textMargin?: string;
  clickMeBottom?: string;
}

const ventures: VentureItem[] = [
  {
    name: "aronix",
    heading: "ARONIX WEB TECHNOLOGY",
    logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208330/images/ventures/AWT-logo.png.png",
    desc: "A specialized digital laboratory delivering high end web architecture, UI/UX design, and brand transformation.",
    link: "https://www.aronixwebtech.com/",
    accentColor: "#8B00CD",
    position: { top: "68%", left: "48.5%" },
    zIndex: 15,
    logoWidth: 90,
    headingMargin: "ml-[35px] -mt-[25px]",
    textMargin: "ml-[35px]",
    clickMeBottom: "-20px",
  },
  {
    name: "aaru",
    heading: "AARU DEVELOPER",
    logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208333/images/ventures/aaru-logo.png.png",
    desc: "An elite real estate and infrastructure firm dedicated to high value residential and commercial projects.",
    link: "https://aarudevelopers.com",
    accentColor: "#CD00AC",
    position: { top: "40%", left: "58.5%" },
    logoWidth: 160,
    headingMargin: "ml-[10px] mt-[30px]",
    textMargin: "ml-[10px]",
    clickMeBottom: "33px",
  },
  {
    name: "jfam",
    heading: "JFAM",
    logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208316/images/ventures/jfam.png.png",
    desc: "A multidisciplinary firm executing complex interior design, government tenders, and architectural projects.",
    link: "https://www.jfam.co.in/",
    accentColor: "#26BF19",
    position: { top: "10%", left: "30%" },
    logoWidth: 120,
    headingMargin: "ml-[20px]",
    textMargin: "ml-[20px]",
    clickMeBottom: "-23px",
  },
  {
    name: "mobility",
    heading: "AARU MOBILITY",
    logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208315/images/ventures/aaru-mobility.png.png",
    desc: "A mobility powerhouse providing chauffeur driven rentals and corporate fleet solutions",
    link: "https://www.aarumobility.com/",
    accentColor: "#CD0000",
    position: { top: "22%", left: "46.5%" },
    logoWidth: 135,
    headingMargin: "ml-[15px]",
    textMargin: "ml-[15px]",
    clickMeBottom: "23px",
  },
  {
    name: "care",
    heading: "AARU CARE FOUNDATION",
    logo: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208314/images/ventures/aaru-care-logo-ventures.png.png",
    desc: "Driving social change through education, healthcare, and empowerment.",
    link: "https://aarucarefoundation.org",
    accentColor: "#0077CD",
    position: { top: "72%", left: "29%" },
    zIndex: 10,
    logoWidth: 140,
    headingMargin: "ml-[15px] mt-[75px]",
    textMargin: "ml-[15px]",
    clickMeBottom: "18px",
  },
];

function InfographicBox({ venture }: { venture: VentureItem }) {
  const [hovered, setHovered] = useState(false);
  const isExternal = venture.link.startsWith("http");

  return (
    <a
      href={venture.link}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="absolute flex flex-row items-start justify-start z-10 text-left no-underline"
      style={{
        top: venture.position.top,
        left: venture.position.left,
        gap: 10,
        zIndex: venture.zIndex || 10,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo + Click Me */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        <img
          src={venture.logo}
          alt={`${venture.heading} Logo`}
          style={{ width: venture.logoWidth || 100, height: "auto" }}
          className="object-contain"
          loading="lazy"
        />
        <span
          className="absolute left-1/2 text-[0.70rem] font-sans font-semibold text-[#1a202c] bg-white px-2 py-[2px] rounded-xl whitespace-nowrap pointer-events-none z-[15] transition-all duration-300"
          style={{
            bottom: venture.clickMeBottom || "-18px",
            transform: `translateX(-50%) translateY(${hovered ? "0" : "5px"})`,
            opacity: hovered ? 1 : 0,
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          Click Me →
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col items-start" style={{ gap: 5 }}>
        <h4
          className={`text-[0.85rem] font-sans font-bold m-0 leading-[1.2] ${venture.headingMargin || ""}`}
          style={{ color: venture.accentColor }}
        >
          {venture.heading}
        </h4>
        <p
          className={`text-[0.75rem] font-sans font-medium opacity-90 m-0 text-[#3B3B3B] ${venture.textMargin || ""}`}
          style={{ maxWidth: 300 }}
        >
          {venture.desc}
        </p>
      </div>
    </a>
  );
}

// Mobile card for responsive fallback
function VentureCard({ venture }: { venture: VentureItem }) {
  const isExternal = venture.link.startsWith("http");
  return (
    <a
      href={venture.link}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="block no-underline"
    >
      <div className="flex flex-col items-center text-center gap-2 p-5 bg-white rounded-lg w-full"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.1)", maxWidth: 280 }}>
        <img
          src={venture.logo}
          alt={venture.heading}
          className="w-[100px] h-auto object-contain"
          loading="lazy"
        />
        <div className="flex flex-col items-center gap-[5px]">
          <h4
            className="text-base font-sans font-bold m-0"
            style={{ color: venture.accentColor }}
          >
            {venture.heading}
          </h4>
          <p className="text-[0.85rem] font-sans font-medium text-[#3B3B3B] text-center m-0">
            {venture.desc}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function VenturesDiagram() {
  return (
    <section className="flex justify-center items-center overflow-hidden w-full max-w-full" style={{ padding: "40px 20px" }}>
      {/* Desktop: Infographic with positioned overlays */}
      <div className="hidden lg:block w-full">
        <ScrollReveal className="w-full">
          <div
            className="ventures-map-box relative flex justify-center items-center mx-auto"
            style={{
              border: "1px solid #000000",
              backgroundColor: "#F4F4F4",
            }}
          >
            {/* SVG Infographic Background */}
            <img
              src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208331/images/ventures/Infographics.svg.svg"
              alt="Rohit Jangir Venture Ecosystem Infographic"
              className="ventures-infographics w-full h-full object-contain"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              loading="lazy"
            />

            {/* Venture Boxes */}
            {ventures.map((v) => (
              <InfographicBox key={v.name} venture={v} />
            ))}

            {/* Center RJ Logo */}
            <a
              href="/"
              className="absolute flex justify-center items-center infographic-box-media"
              style={{ top: "33%", left: "2.5%" }}
            >
              <img
                src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208363/images/logos/rj-logo.png.png"
                alt="Rohit Jangir"
                className="rj-logo-img h-auto object-contain"
                style={{ width: 300 }}
                loading="lazy"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Mobile/Tablet: Card grid fallback */}
      <div className="lg:hidden w-full">
        {/* Center RJ logo card first on mobile */}
        <div className="flex justify-center mb-5">
          <a href="/" className="block no-underline">
            <div className="flex justify-center items-center bg-white rounded-lg p-0 overflow-hidden w-full max-w-[280px]"
              style={{ height: 120, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
              <img
                src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208363/images/logos/rj-logo.png.png"
                alt="Rohit Jangir"
                className="h-auto max-w-[90%] object-contain"
                loading="lazy"
              />
            </div>
          </a>
        </div>

        <div className="grid gap-5 px-3 sm:px-5 justify-items-center w-full"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))" }}>
          {ventures.map((v) => (
            <ScrollReveal key={v.name}>
              <VentureCard venture={v} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
