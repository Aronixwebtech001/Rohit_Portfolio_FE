import { FeatureCardData } from "../../types";

export default function IconFeatureCard({ icon, title, description }: FeatureCardData) {
  return (
    <div className="relative bg-[#F7F9F9] border border-black/5 rounded-2xl pt-16 pb-8 px-6 text-center h-full">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-navy">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
