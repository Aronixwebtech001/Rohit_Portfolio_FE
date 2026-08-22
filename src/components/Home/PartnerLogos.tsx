import awtLogo from "../../assets/images/awt-logo.png";

const partners = [
  { name: "AWT", logo: awtLogo },
  { name: "AARU MOBILITY", logo: null },
  { name: "JFAM", logo: null },
  { name: "AARU CARE FOUNDATION", logo: null },
  { name: "AARU", logo: null },
];

function LogoItem({ name, logo }: { name: string; logo: string | null }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className="h-7 md:h-9 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
      />
    );
  }
  return (
    <span className="text-white/50 font-serif text-sm md:text-base tracking-[0.2em] uppercase whitespace-nowrap hover:text-white/80 transition-colors">
      {name}
    </span>
  );
}

export default function PartnerLogos() {
  /* Duplicate the list to create a seamless loop */
  const doubled = [...partners, ...partners];

  return (
    <section className="relative bg-navy-dark overflow-hidden">
      {/* Wave top edge — connects to hero bottom wave */}

      <div className="py-8 md:py-10 overflow-hidden">
        <div className="marquee-track">
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center justify-center px-10 md:px-16 shrink-0"
            >
              <LogoItem name={p.name} logo={p.logo} />
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom edge */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C240,50 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z"
            fill="#F7F8F8"
          />
        </svg>
      </div>
    </section>
  );
}
