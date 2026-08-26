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
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] mb-6 leading-[1.1] text-navy">
            Building Tomorrow's<br />Success Stories
          </h1>
          <p className="text-muted text-[17px] mb-10 max-w-lg leading-relaxed">
            Partnering with visionary founders to transform innovative ideas into scalable
            businesses. Let's create something extraordinary together.
          </p>
          <Link
            to="/pitch#form"
            className="inline-block px-8 py-3.5 rounded-lg bg-navy text-white text-[15px] font-medium hover:bg-navy-dark transition-colors mb-16"
          >
            Share Your Idea
          </Link>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-5 text-center flex flex-col justify-center shadow-sm">
                <p className="font-serif text-2xl md:text-[28px] text-navy mb-1">{s.value}</p>
                <p className="text-[12px] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src={handshakeImg}
            alt="Handshake partnership illustration"
            className="w-full max-w-xl rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
