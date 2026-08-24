import { BarChart3, Settings2, Handshake } from "lucide-react";
import IconFeatureCard from "../shared/IconFeatureCard";

const thesis = [
  {
    icon: <BarChart3 size={22} />,
    title: "Long Term Value Creation",
    description: "Avoid common pitfalls and fast track your business growth",
  },
  {
    icon: <Settings2 size={22} />,
    title: "Technology Led Disruption",
    description: "Get clarity on your goals and a concrete roadmap to achieve them",
  },
  {
    icon: <Handshake size={22} />,
    title: "Founder First Partnership",
    description: "Learn to think like a successful entrepreneur and make better business decisions",
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
