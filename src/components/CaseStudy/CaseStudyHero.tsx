import { useState } from "react";

const tabs = ["Product Design", "UX Research", "Leadership", "Design System"];

export default function CaseStudyHero() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white">
      <div className="bg-[#DCE4E6] text-center py-10 px-6">
        <h1 className="font-serif text-2xl md:text-3xl">
          STRATEGIC <span className="italic">CASE STUDIES</span>
          <br />
          &amp; visionary VENTURES <span className="italic">THAT SCALE !</span>
        </h1>
        <p className="text-xs text-muted mt-2">Become our source of inspiration</p>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex gap-8 border-b border-black/10 pt-8 text-sm overflow-x-auto">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`pb-4 whitespace-nowrap ${
                active === i ? "border-b-2 border-navy font-medium" : "text-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 py-14 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Product design for easy community access
            </h2>
            <p className="text-muted text-sm mb-6">
              Helping startups and brands to craft expressive and engaging solutions for their
              software needs.
            </p>
            <button className="px-6 py-2.5 rounded-full border border-navy text-sm font-medium hover:bg-navy hover:text-white">
              Read Case Study
            </button>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-card" />
        </div>
      </div>
    </section>
  );
}
