import { Lightbulb, TrendingUp, Users } from "lucide-react";
import IconFeatureCard from "../shared/IconFeatureCard";

const points = [
  {
    icon: <Lightbulb size={22} />,
    title: "Innovation",
    description: "Learn to think like a successful entrepreneur and make better business decisions",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Scalability",
    description: "Business models with potential for rapid and sustainable growth",
  },
  {
    icon: <Users size={22} />,
    title: "Strategic Thinking",
    description: "Learn to think like a successful entrepreneur and make better business decisions",
  },
];

export default function WhatILookFor() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">What I Look For</h2>
        <div className="grid md:grid-cols-3 gap-8 pt-6">
          {points.map((p) => (
            <IconFeatureCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
