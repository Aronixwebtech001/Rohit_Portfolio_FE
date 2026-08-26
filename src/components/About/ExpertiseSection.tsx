import { BarChart3, Settings2, Handshake } from "lucide-react";
import IconFeatureCard from "../shared/IconFeatureCard";

const expertise = [
  {
    icon: <BarChart3 size={22} />,
    title: "Investment Strategy",
    description: "Identifying high-potential ideas with strategic investment opportunities.",
  },
  {
    icon: <Settings2 size={22} />,
    title: "Business Development",
    description: "Strategic planning, market analysis, and scaling businesses for sustainable growth.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Mentorship",
    description: "Guiding entrepreneurs through challenges and helping them achieve their vision.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif uppercase text-2xl md:text-3xl text-center mb-16">AREAS OF EXPERTISE</h2>
        <div className="grid md:grid-cols-3 gap-8 pt-6">
          {expertise.map((e) => (
            <IconFeatureCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}
