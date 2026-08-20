import type { CaseStudyCard } from "../../types";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards: CaseStudyCard[] = [
  {
    image: "",
    label: "Case Study",
    title: "Corporate Excellence Delivered",
    description: "How we turned an 18,000 sq.ft office into a scalable business asset",
  },
  {
    image: "",
    label: "Case Study",
    title: "Beyond Boundaries Farmhouse",
    description: "How we delivered a 23,400 sq.ft luxury farmhouse with precision and excellence",
  },
  {
    image: "",
    label: "Case Study",
    title: "Luxury Living Redefined",
    description: "How we built a world class 4 BHK home with zero operational waste",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-black/5 overflow-hidden">
              <div className="aspect-[4/3] bg-card" />
              <div className="p-5">
                <p className="text-xs text-muted mb-2">{c.label}</p>
                <h3 className="font-serif text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted mb-4">{c.description}</p>
                <span className="text-sm font-medium text-navy">Read More &rarr;</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-10">
          <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-card">
            <ArrowLeft size={16} />
          </button>
          <button className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-navy-dark">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
