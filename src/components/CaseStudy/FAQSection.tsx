import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "What industries do you focus on?",
    a: "Our portfolio spans mobility, technology, real estate, and social impact. We are always looking for innovative ideas across these sectors and beyond.",
  },
  {
    q: "What is the typical investment range?",
    a: "We invest in early-stage startups with investment amounts ranging from ₹10 Lakhs to ₹1 Crore, depending on the stage, traction, and market opportunity.",
  },
  {
    q: "How long does the evaluation process take?",
    a: "The initial screening takes 1–2 weeks. If your pitch is shortlisted, we schedule a deep-dive meeting within the following week. The entire process typically takes 3–4 weeks.",
  },
  {
    q: "Do you provide mentorship along with investment?",
    a: "Absolutely. Every founder we back gets hands-on mentorship covering strategy, operations, fundraising, and growth — not just capital.",
  },
  {
    q: "What stage of startups do you typically invest in?",
    a: "We primarily focus on seed and pre-Series A startups that have demonstrated initial traction, a clear market opportunity, and a strong founding team.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">Common Queries Answered</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Question list */}
          <div className="bg-white rounded-2xl p-2 shadow-sm">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setActive(i)}
                className={`w-full flex items-center justify-between text-left px-5 py-4 rounded-xl text-sm transition-colors ${
                  active === i
                    ? "bg-cream font-medium text-navy"
                    : "text-muted hover:bg-cream/50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                      active === i ? "bg-navy" : "bg-black/15"
                    }`}
                  />
                  <span className="line-clamp-2">{f.q}</span>
                </span>
                <ChevronRight
                  size={16}
                  className={`shrink-0 ml-2 transition-transform ${
                    active === i ? "text-navy" : "text-muted/50"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Answer panel */}
          <div className="bg-white rounded-2xl p-8 shadow-sm min-h-[200px]">
            <h3 className="font-serif text-lg mb-4 text-navy">{faqs[active].q}</h3>
            <p className="text-muted text-sm leading-relaxed">{faqs[active].a}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
