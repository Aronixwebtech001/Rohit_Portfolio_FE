import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">Our Purpose &amp; Direction</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl p-7">
            <Target size={20} className="text-teal mb-3" />
            <h3 className="font-serif text-lg mb-2">Mission</h3>
            <p className="text-muted text-sm leading-relaxed">
              My mission is to empower ambitious entrepreneurs with the right capital,
              mentorship, and proven systems. I believe every great idea deserves a real chance —
              not just funding, but the right guidance and direction. Through my ventures across
              mobility, technology, construction, and social impact, I am committed to building
              businesses that create meaningful value for both people and communities.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <Eye size={20} className="text-teal mb-3" />
            <h3 className="font-serif text-lg mb-2">Vision</h3>
            <p className="text-muted text-sm leading-relaxed">
              My vision is to build a powerful ecosystem where no driven entrepreneur is ever held
              back by a lack of resources, guidance, or opportunity. I want to create a lasting
              legacy that goes far beyond business — one that transforms industries, uplifts
              communities, and proves that when innovation meets integrity and purpose, the impact
              is truly limitless and generational.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
