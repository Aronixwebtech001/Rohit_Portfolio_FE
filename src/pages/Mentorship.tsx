import { Link } from "react-router-dom";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";
import mentorImg1 from "../assets/images/mentorship/image1.png";

const whyReasons = [
  {
    icon: "https://img.icons8.com/ios/50/1a2a32/line-chart.png",
    title: "Accelerated Growth",
    desc: "Avoid common pitfalls and fast track your business growth"
  },
  {
    icon: "https://img.icons8.com/ios/50/1a2a32/goal--v1.png",
    title: "Clear Direction",
    desc: "Get clarity on your goals and a concrete roadmap to achieve them"
  },
  {
    icon: "https://img.icons8.com/ios/50/1a2a32/graduation-cap.png",
    title: "Strategic Thinking",
    desc: "Learn to think like a successful entrepreneur and make better business decisions"
  }
];

const packages = [
  {
    title: "Quick Call",
    discount: "60% OFF",
    originalPrice: "₹1,650",
    price: "₹999 / $10.86",
    desc: "Perfect for quick questions and guidance on specific challenges",
    features: [
      "Single 30-minute video call",
      "Focused discussion on one topic",
      "Actionable insights",
      "Email follow-up summary"
    ],
    buttonText: "Book Quick Call Now",
    featured: false
  },
  {
    title: "Startup Deep-Dive",
    discount: "70% OFF",
    originalPrice: "₹17,200",
    price: "₹12,000 / $130.47",
    desc: "Complete mentorship package for serious entrepreneurs",
    features: [
      "2-hour intensive session",
      "Business model evaluation",
      "Growth strategy development",
      "Pitch deck review & refinement",
      "1 month email support"
    ],
    buttonText: "Book Deep-Dive Session",
    featured: true
  }
];

export default function Mentorship() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-bg" style={{ paddingTop: 80 }}>
        <div className="max-w-content mx-auto px-[5%] py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
          <ScrollReveal direction="left" className="flex-1">
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-navy leading-[1.1] mb-6">
              Where Ideas Turn Into Real Businesses.
            </h1>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-8 max-w-[550px]">
              This is not theory. This is execution.<br />
              I mentor ambitious founders, refine strategies, and showcase the
              work that speaks louder than words. If you're
              ready to build with clarity and confidence you're in the right place.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex-1 flex justify-center">
            <img
              src={mentorImg1}
              alt="Mentorship Visualization"
              className="w-full max-w-[500px] h-auto object-contain"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE MENTORSHIP */}
      <section className="py-16 md:py-24 bg-bg-light" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy">Why Choose Mentorship?</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyReasons.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 mx-auto bg-bg-light rounded-full flex items-center justify-center mb-6">
                    <img src={reason.icon} alt={reason.title} className="w-8 h-8 opacity-80" loading="lazy" />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-3">{reason.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{reason.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 md:py-24 bg-white" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy mb-4">Choose Your Mentorship Package</h2>
            <p className="text-[#4A5568] max-w-[600px] mx-auto">
              Select the package that best fits your needs. All sessions are conducted via video call
              and include personalized guidance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`rounded-2xl p-8 flex flex-col h-full relative overflow-hidden transition-all duration-400 hover:-translate-y-2 ${pkg.featured ? 'bg-navy shadow-xl text-white' : 'bg-bg-light shadow-sm text-navy'}`}>
                  {pkg.featured && (
                    <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                  
                  <h3 className={`font-serif text-2xl mb-6 ${pkg.featured ? 'text-white' : 'text-navy'}`}>{pkg.title}</h3>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-accent/10 text-accent text-sm font-bold px-3 py-1 rounded-full mb-2">
                      {pkg.discount}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className={`text-sm line-through ${pkg.featured ? 'text-white/50' : 'text-[#A0AEC0]'}`}>
                        {pkg.originalPrice}
                      </span>
                      <span className={`text-3xl font-serif font-bold ${pkg.featured ? 'text-white' : 'text-navy'}`}>
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-sm mb-8 ${pkg.featured ? 'text-white/80' : 'text-[#4A5568]'}`}>
                    {pkg.desc}
                  </p>
                  
                  <ul className="flex-1 space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent mt-0.5">✓</span>
                        <span className={`text-sm ${pkg.featured ? 'text-white/90' : 'text-[#4A5568]'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all cursor-pointer ${pkg.featured ? 'bg-white text-navy hover:bg-gray-100' : 'bg-navy text-white hover:bg-accent'}`}>
                    {pkg.buttonText}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
