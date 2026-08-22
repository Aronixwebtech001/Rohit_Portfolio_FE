import { CaseStudyCard } from "../../types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cards: CaseStudyCard[] = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
    label: "Case Study",
    title: "Corporate Excellence Delivered",
    description: "How we turned an 18,000 sq.ft office into a scalable business asset",
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80&auto=format&fit=crop",
    label: "Case Study",
    title: "Beyond Boundaries Farmhouse",
    description: "How we delivered a 23,400 sq.ft luxury farmhouse with precision and excellence",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop",
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

        {/* Card row with side arrow controls */}
        <div className="relative">
          {/* Left arrow — positioned at vertical center of cards, outside grid */}
          <button className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-black/10 items-center justify-center hover:bg-card transition-colors z-10">
            <ArrowLeft size={18} />
          </button>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div key={c.title} className="rounded-2xl border border-black/5 overflow-hidden hover:shadow-md transition-shadow group bg-white">
                <div className="aspect-[4/3] bg-card overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted mb-2 uppercase tracking-wide">{c.label}</p>
                  <h3 className="font-serif text-lg mb-2 leading-snug">{c.title}</h3>
                  <p className="text-sm text-muted mb-4 leading-relaxed">{c.description}</p>
                  <Link to="/case-study" className="text-sm font-medium text-navy hover:text-teal transition-colors">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow — positioned at vertical center of cards, outside grid */}
          <button className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy text-white items-center justify-center hover:bg-navy-dark transition-colors z-10">
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Centered Read More button below grid */}
        <div className="flex justify-center mt-10">
          <Link
            to="/case-study"
            className="px-8 py-3 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy-dark transition-colors"
          >
            Read More
          </Link>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
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
