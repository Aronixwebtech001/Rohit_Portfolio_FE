import { BarChart3, Settings2, Handshake } from "lucide-react";
import IconFeatureCard from "../shared/IconFeatureCard";

const thesis = [
  {
    icon: <BarChart3 size={22} />,
    title: "Long Term Value Creation",
    description: "We invest patient capital to build sustainable, market-leading businesses that deliver enduring value over time.",
  },
  {
    icon: <Settings2 size={22} />,
    title: "Technology Led Disruption",
    description: "We partner with visionary founders leveraging technology to disrupt traditional industries and create scalable solutions.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Founder First Partnership",
    description: "We provide strategic guidance and operational support, empowering founders to realize their boldest visions.",
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
