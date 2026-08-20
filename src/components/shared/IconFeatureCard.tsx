import type { FeatureCardData } from "../../types";

export default function IconFeatureCard({ icon, title, description }: FeatureCardData) {
  return (
    <div className="relative bg-[#F8F9FA] rounded-2xl pt-10 pb-8 px-6 text-center border border-gray-200">
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#E9ECEF] border border-gray-200 flex items-center justify-center text-gray-700 shadow-sm">
        {icon}
      </div>
      <h3 className="font-serif text-lg text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
