import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/world-map.png";

const tabs = ["Product Design", "UX Research", "Leadership", "Design System"];

const tabContent = [
  {
    title: "Product design for easy community access",
    description: "Helping startups and brands to craft expressive and engaging solutions for their software needs.",
  },
  {
    title: "User-centric research for better conversion",
    description: "Deep dive into user behavior to identify friction points and optimize the complete customer journey.",
  },
  {
    title: "Building high-performance design teams",
    description: "Strategies and frameworks for scaling design organizations while maintaining quality and culture.",
  },
  {
    title: "Scalable design systems for enterprise",
    description: "Creating comprehensive component libraries that accelerate development and ensure brand consistency.",
  },
];

export default function CaseStudyHero() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white">
      {/* Top banner */}
      <div className="bg-[#DCE4E6] text-center py-12 px-6 relative">
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl">
          STRATEGIC{" "}
          <span className="italic">CASE STUDIES</span>
          <br />
          &amp; visionary VENTURES{" "}
          <span className="italic">THAT SCALE !</span>
        </h1>
        {/* Callout arrow */}
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-muted">
          <span>Become our source of inspiration</span>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-muted">
            <path d="M1 6h16M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10">
        {/* Tab row */}
        <div className="flex gap-8 border-b border-black/10 pt-8 text-sm overflow-x-auto">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`pb-4 whitespace-nowrap transition-colors ${
                active === i
                  ? "border-b-2 border-navy font-medium text-navy"
                  : "text-muted hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="grid md:grid-cols-2 gap-10 py-14 items-center min-h-[400px]">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500" key={active}>
            <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-snug">
              {tabContent[active].title}
            </h2>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              {tabContent[active].description}
            </p>
            <Link
              to="#"
              onClick={(e) => e.preventDefault()}
              className="inline-block px-6 py-2.5 rounded-full border border-navy text-sm font-medium hover:bg-navy hover:text-white transition-colors"
            >
              Read Case Study
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-card overflow-hidden">
            <img src={heroImage} alt="Case Study" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
