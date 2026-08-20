import type { StatData } from "../../types";
import handshake from "../../assets/images/rect-40064.png";

const stats: StatData[] = [
  { value: "50+", label: "Startups Invested" },
  { value: "15+", label: "Successful Exits" },
  { value: "3x", label: "Average ROI" },
  { value: "$20M", label: "Total Investment" },
];

export default function PitchHero() {
  return (
    <section className="bg-[#DCE4E6] relative overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-24 relative z-10">
        <div className="md:w-[55%]">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 text-[#2C3E50]">Building Tomorrow's Success Stories</h1>
          <p className="text-[#34495E] text-sm md:text-base mb-8 max-w-lg">
            Partnering with visionary founders to transform innovative ideas into scalable businesses. Let's create something extraordinary together.
          </p>
          <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#1C2833] text-white text-sm font-medium hover:bg-black mb-12">
            Share Your Idea
          </button>
          <div className="flex flex-wrap gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl py-4 px-6 text-center shadow-sm min-w-[120px]">
                <p className="font-serif text-2xl font-semibold text-[#1C2833]">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-[-5%] top-1/2 -translate-y-1/2 h-[120%] w-[50%] z-0">
        <img src={handshake} alt="Handshake" className="w-full h-full object-contain object-right" />
      </div>
    </section>
  );
}
