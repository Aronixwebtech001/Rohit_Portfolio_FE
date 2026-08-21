import { FeatureCardData } from "../../types";

export default function IconFeatureCard({ icon, title, description }: FeatureCardData) {
  return (
    <div className="relative bg-card rounded-2xl pt-12 pb-8 px-6 text-center">
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-card border-4 border-white flex items-center justify-center text-navy shadow-sm">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
