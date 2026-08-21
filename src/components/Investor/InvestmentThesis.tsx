import { BarChart3, Settings2, Handshake } from "lucide-react";
import IconFeatureCard from "../shared/IconFeatureCard";

const thesis = [
  {
    icon: <BarChart3 size={22} />,
    title: "Long Term Value Creation",
    description: "Identifying high-potential ventures with sustainable competitive advantages and strong unit economics.",
  },
  {
    icon: <Settings2 size={22} />,
    title: "Technology Led Disruption",
    description: "Backing founders who leverage technology to create scalable, defensible market positions.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Founder First Partnership",
    description: "Building deep relationships with founders, providing hands-on support beyond just capital.",
  },
];

export default function InvestmentThesis() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">Our Investment Thesis</h2>
        <div className="grid md:grid-cols-3 gap-8 pt-6">
          {thesis.map((t) => (
            <IconFeatureCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
