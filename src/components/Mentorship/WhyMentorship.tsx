import { TrendingUp, Target, GraduationCap } from "lucide-react";
import IconFeatureCard from "../shared/IconFeatureCard";

const reasons = [
  {
    icon: <TrendingUp size={22} />,
    title: "Accelerated Growth",
    description: "Avoid common pitfalls and fast track your business growth.",
  },
  {
    icon: <Target size={22} />,
    title: "Clear Direction",
    description: "Get clarity on your goals and a concrete roadmap to achieve them.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Strategic Thinking",
    description: "Learn to think like a successful entrepreneur and make better business decisions.",
  },
];

export default function WhyMentorship() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">Why Choose Mentorship?</h2>
        <div className="grid md:grid-cols-3 gap-8 pt-6">
          {reasons.map((r) => (
            <IconFeatureCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
