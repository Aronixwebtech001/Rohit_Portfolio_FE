import { StatData } from "../../types";
import { Link } from "react-router-dom";
import handshakeImg from "../../assets/images/rect-43.png";

const stats: StatData[] = [
  { value: "50+", label: "Startups Invested" },
  { value: "15+", label: "Successful Exits" },
  { value: "3x", label: "Average ROI" },
  { value: "$20M", label: "Total Investment" },
];

export default function PitchHero() {
  return (
    <section className="bg-[#DCE4E6]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-2 gap-8 items-center">
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
        <div className="flex justify-end">
          <img
            src={handshakeImg}
            alt="Handshake partnership illustration"
            className="w-full max-w-sm rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
