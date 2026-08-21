import { StatData } from "../../types";
import { Link } from "react-router-dom";

const stats: StatData[] = [
  { value: "50+", label: "Startups Invested" },
  { value: "15+", label: "Successful Exits" },
  { value: "3x", label: "Average ROI" },
  { value: "$20M", label: "Total Investment" },
];

export default function PitchHero() {
  return (
    <section className="bg-[#DCE4E6]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] mb-4 leading-tight">
            Building Tomorrow's Success Stories
          </h1>
          <p className="text-navy/60 text-[15px] mb-6 max-w-md leading-relaxed">
            Partnering with visionary founders to transform innovative ideas into scalable
            businesses. Let's create something extraordinary together.
          </p>
          <Link
            to="/pitch#form"
            className="inline-block px-7 py-3 rounded-lg bg-navy text-white text-sm font-medium hover:bg-navy-dark transition-colors mb-8"
          >
            Share Your Idea
          </Link>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/40">
                <p className="font-serif text-xl md:text-2xl text-navy">{s.value}</p>
                <p className="text-[11px] text-navy/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Handshake illustration placeholder */}
        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white/30 flex items-center justify-center">
          <div className="text-center text-navy/20">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="mx-auto mb-3">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p className="text-sm">Illustration Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
