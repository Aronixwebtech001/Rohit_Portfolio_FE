import { FeatureCardData } from "../../types";

export default function IconFeatureCard({ icon, title, description }: FeatureCardData) {
  return (
    <div className="relative bg-card rounded-2xl pt-14 pb-8 px-6 text-center h-full mt-6">
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#F5F7F8] shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-center justify-center text-navy">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-3 text-navy">{title}</h3>
      <p className="text-muted text-[15px] leading-relaxed">{description}</p>
    </div>
  );
}

