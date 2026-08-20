import { Check } from "lucide-react";
import type { PricingPlan } from "../../types";

const plans: PricingPlan[] = [
  {
    name: "Quick Call",
    originalPrice: "₹1999",
    price: "₹999",
    discountLabel: "50% OFF",
    description: "Perfect for quick questions and guidance on specific challenges.",
    features: [
      "Single 30-minute video call",
      "Focused discussion on one topic",
      "Actionable insights",
      "Email follow-up summary",
    ],
  },
  {
    name: "Startup Deep-Dive",
    originalPrice: "₹11999",
    price: "₹5999",
    discountLabel: "50% OFF",
    description: "Complete mentorship package for serious entrepreneurs.",
    features: [
      "2-hour intensive session",
      "Business model evaluation",
      "Market strategy & positioning",
      "Pitch deck review",
    ],
  },
  {
    name: "Strategy Session",
    originalPrice: "₹4999",
    price: "₹1999",
    discountLabel: "50% OFF",
    description: "Deep dive into your business strategy and growth planning.",
    features: [
      "Full 1-hour consultation",
      "Comprehensive business analysis",
      "Strategic roadmap",
      "Resources & tools",
    ],
  },
];

export default function PricingPackages() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-3">
          Choose Your Mentorship Package
        </h2>
        <p className="text-center text-muted text-sm mb-14 max-w-xl mx-auto">
          Select the package that best fits your needs. All sessions are conducted via video call
          and include personalized guidance.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="bg-white rounded-2xl border border-black/5 p-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-lg">{p.name}</h3>
                <span className="text-[11px] bg-accent text-white px-2.5 py-1 rounded-full">
                  {p.discountLabel}
                </span>
              </div>
              <p className="text-muted text-sm line-through mb-1">{p.originalPrice}</p>
              <p className="font-serif text-3xl mb-4">{p.price}</p>
              <p className="text-muted text-sm mb-6">{p.description}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-teal mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-navy rounded-lg py-2.5 text-sm font-medium hover:bg-navy hover:text-white transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
