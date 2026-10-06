import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";
import mentorHeroImg from "../assets/images/final/mentorship-hero.png";
import topicsImg from "../assets/images/final/home-meeting.png"; // Using this as AI generated placeholder for topics

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
    originalPrice: "₹1650",
    price: "₹999 / $10.86",
    desc: "Perfect for quick questions and guidance on specific challenges",
    features: [
      "Single 30-minute video call",
      "Focused discussion on one topic",
      "Actionable insights",
      "Email follow-up summary"
    ],
    buttonText: "Book Quick Call Now",
    featured: false,
    duration: "30min",
    planName: "30-min Quick Call",
    priceVal: "999"
  },
  {
    title: "Startup Deep-Dive",
    discount: "70% OFF",
    originalPrice: "₹17200",
    price: "₹12000 / $130.47",
    desc: "Complete mentorship package for serious entrepreneurs",
    features: [
      "2-hour intensive session",
      "Business model evaluation",
      "Market strategy & positioning",
      "Pitch deck review"
    ],
    buttonText: "Book Startup Deep-Dive",
    featured: true,
    duration: "2hr",
    planName: "Startup Deep-Dive",
    priceVal: "12000"
  },
  {
    title: "Strategy Session",
    discount: "60% OFF",
    originalPrice: "₹8300",
    price: "₹4999 / $54.35",
    desc: "Deep dive into your business strategy and growth planning",
    features: [
      "Full 1-hour consultation",
      "Comprehensive business analysis",
      "Strategic roadmap",
      "Resources & tools"
    ],
    buttonText: "Book Strategy Session",
    featured: false,
    duration: "1hr",
    planName: "1-hour Strategy Session",
    priceVal: "4999"
  }
];

export default function Mentorship() {
  const navigate = useNavigate();

  const handleBookClick = (pkg: any) => {
    navigate('/book-mentorship', {
      state: {
        planName: pkg.planName,
        price: pkg.priceVal
      }
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-hero-bg overflow-hidden" style={{ paddingTop: 80 }}>
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
              src={mentorHeroImg}
              alt="Mentorship Visualization"
              className="w-full max-w-[500px] h-auto object-contain"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE MENTORSHIP */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-[5%]">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.5rem)] font-normal text-navy">Why Choose Mentorship?</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mx-auto" style={{ maxWidth: 1000 }}>
            {whyReasons.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-[#f8fbfe] border border-[#e6ebed] rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-[5px] h-full"
                     onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 30px rgba(15, 31, 34, 0.05)"; }}
                     onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                  <div className="w-[70px] h-[70px] mx-auto bg-[#E6EBED] rounded-full flex items-center justify-center mb-6">
                    <img src={reason.icon} alt={reason.title} className="w-8 h-8 opacity-80" loading="lazy" />
                  </div>
                  <h3 className="font-serif text-[1.25rem] font-medium text-navy mb-3">{reason.title}</h3>
                  <p className="text-[0.95rem] font-light text-[#4A5568] leading-relaxed">{reason.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 md:py-24 bg-[#F8FBFE] px-4 md:px-[5%]">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,2.5rem)] font-normal text-navy mb-4">Choose Your Mentorship Package</h2>
            <p className="text-[#485e68] text-[0.95rem] max-w-[600px] mx-auto">
              Select the package that best fits your needs. All sessions are conducted via video call
              and include personalized guidance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`rounded-2xl p-8 flex flex-col h-full relative transition-all duration-300 border ${pkg.featured ? 'bg-[#102a43] border-[#102a43] text-white shadow-xl md:scale-105 z-10' : 'bg-white border-[#eef2f4] text-navy hover:shadow-lg'}`}>
                  {pkg.featured && (
                    <span className="absolute top-4 right-4 bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-[4px] uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                  
                  <h3 className={`font-serif text-[1.4rem] font-medium mb-5 ${pkg.featured ? 'text-white' : 'text-[#102a43]'}`}>{pkg.title}</h3>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-[#009b7c] text-white text-[0.75rem] font-semibold px-2 py-1 rounded-[4px] mb-2 uppercase">
                      {pkg.discount}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className={`text-[0.9rem] line-through ${pkg.featured ? 'text-white/70' : 'text-[#6b7280]'}`}>
                        {pkg.originalPrice}
                      </span>
                      <span className={`text-[1.8rem] font-serif font-semibold ${pkg.featured ? 'text-white' : 'text-[#102a43]'}`}>
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                  
                  <p className={`text-[0.9rem] mb-6 min-h-[40px] ${pkg.featured ? 'text-white/80' : 'text-[#485e68]'}`}>
                    {pkg.desc}
                  </p>
                  
                  <ul className="flex-1 space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 relative pl-6">
                        <span className={`absolute left-0 font-bold ${pkg.featured ? 'text-white' : 'text-[#102a43]'}`}>✓</span>
                        <span className={`text-[0.95rem] ${pkg.featured ? 'text-white/90' : 'text-[#374151]'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handleBookClick(pkg)}
                    className={`w-full py-[12px] rounded-lg font-semibold transition-all cursor-pointer border ${pkg.featured ? 'bg-[#009b7c] border-[#009b7c] text-white hover:bg-[#007f66] hover:border-[#007f66]' : 'bg-white border-[#000000] text-black hover:bg-black hover:text-white'}`}
                  >
                    {pkg.buttonText}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-16 md:py-24 bg-[#d8d5d5] px-4 md:px-[5%]">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-14 items-stretch">
          <div className="flex-1">
            <ScrollReveal>
              <h2 className="font-serif text-[clamp(2rem,4vw,2.5rem)] font-normal text-black mb-10 text-left">
                Topics I Can Help You With
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <ScrollReveal delay={100}>
                <div className="bg-white border border-[#eef2f4] rounded-xl p-5 h-full">
                  <h4 className="font-serif text-[1.05rem] font-semibold text-black mb-3">Strategy</h4>
                  <ul className="space-y-3 relative">
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Business Model Development</li>
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Market Strategy and Positioning</li>
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Product-Market Fit</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white border border-[#eef2f4] rounded-xl p-5 h-full">
                  <h4 className="font-serif text-[1.05rem] font-semibold text-black mb-3">Leadership</h4>
                  <ul className="space-y-3 relative">
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Team Building</li>
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Financial Planning</li>
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Leadership Development</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white border border-[#eef2f4] rounded-xl p-5 h-full">
                  <h4 className="font-serif text-[1.05rem] font-semibold text-black mb-3">Growth</h4>
                  <ul className="space-y-3 relative">
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Fundraising Strategy</li>
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Growth Marketing</li>
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Scaling Operations</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-white border border-[#eef2f4] rounded-xl p-5 h-full">
                  <h4 className="font-serif text-[1.05rem] font-semibold text-black mb-3">Operations</h4>
                  <ul className="space-y-3 relative">
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Operational Framework Design</li>
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Financial Planning</li>
                    <li className="text-[#4b5563] text-[0.95rem] pl-5 relative"><span className="absolute left-0 text-[#102a43] font-bold">✓</span> Process Optimization</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="flex-1 rounded-2xl overflow-hidden relative min-h-[360px]">
            <ScrollReveal className="w-full h-full">
              <img src={topicsImg} alt="Mentorship Topics" className="absolute w-full h-full object-cover inset-0" loading="lazy" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-[60px] bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[4%]">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] font-normal text-[#1a1a1a] mb-[70px] text-center">
              How It Works
            </h2>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row items-start justify-center max-w-[960px] mx-auto gap-0">
            {/* Step 1 */}
            <ScrollReveal className="flex flex-row md:flex-col items-center w-auto md:w-[120px] relative z-10 gap-[5px] md:gap-0">
              <div className="w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-[#e2e8ec] rounded-full flex items-center justify-center relative border border-[#c4d1d6]">
                <div className="absolute w-[52px] md:w-[90px] h-[52px] md:h-[90px] bg-[#f8fbfe] rounded-full border border-[#dde4e8] z-0"></div>
                <span className="font-sans text-[1.3rem] md:text-[2.2rem] text-[#1a2a32] font-medium relative z-10">1</span>
              </div>
              <div className="text-left md:text-center ml-4 md:ml-0 md:mt-6">
                <h4 className="font-serif text-[0.85rem] md:text-[1.25rem] text-[#1a1a1a] font-normal md:whitespace-nowrap mb-2">Choose Package</h4>
                <p className="font-sans text-[0.75rem] md:text-[0.95rem] text-[#485e68] font-normal leading-[1.2] md:leading-[1.4] w-auto md:w-[220px] md:mx-[-50px]">Select the mentorship package that suits your needs</p>
              </div>
            </ScrollReveal>

            {/* Line 1 */}
            <ScrollReveal className="hidden md:block flex-1 h-[2px] bg-[#a9b8c0] mt-[60px] relative min-w-[40px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[14px] h-[14px] border-r-2 border-t-2 border-[#a9b8c0]"></div>
            </ScrollReveal>
            <div className="md:hidden w-[2px] h-[40px] bg-[#a9b8c0] ml-[35px] my-2 relative"></div>

            {/* Step 2 */}
            <ScrollReveal className="flex flex-row md:flex-col items-center w-auto md:w-[120px] relative z-10 gap-[5px] md:gap-0" delay={100}>
              <div className="w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-[#e2e8ec] rounded-full flex items-center justify-center relative border border-[#c4d1d6]">
                <div className="absolute w-[52px] md:w-[90px] h-[52px] md:h-[90px] bg-[#f8fbfe] rounded-full border border-[#dde4e8] z-0"></div>
                <span className="font-sans text-[1.3rem] md:text-[2.2rem] text-[#1a2a32] font-medium relative z-10">2</span>
              </div>
              <div className="text-left md:text-center ml-4 md:ml-0 md:mt-6">
                <h4 className="font-serif text-[0.85rem] md:text-[1.25rem] text-[#1a1a1a] font-normal md:whitespace-nowrap mb-2">Book Session</h4>
                <p className="font-sans text-[0.75rem] md:text-[0.95rem] text-[#485e68] font-normal leading-[1.2] md:leading-[1.4] w-auto md:w-[220px] md:mx-[-50px]">Make payment and schedule your preferred time</p>
              </div>
            </ScrollReveal>

            {/* Line 2 */}
            <ScrollReveal className="hidden md:block flex-1 h-[2px] bg-[#a9b8c0] mt-[60px] relative min-w-[40px]" delay={100}>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[14px] h-[14px] border-r-2 border-t-2 border-[#a9b8c0]"></div>
            </ScrollReveal>
            <div className="md:hidden w-[2px] h-[40px] bg-[#a9b8c0] ml-[35px] my-2 relative"></div>

            {/* Step 3 */}
            <ScrollReveal className="flex flex-row md:flex-col items-center w-auto md:w-[120px] relative z-10 gap-[5px] md:gap-0" delay={200}>
              <div className="w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-[#e2e8ec] rounded-full flex items-center justify-center relative border border-[#c4d1d6]">
                <div className="absolute w-[52px] md:w-[90px] h-[52px] md:h-[90px] bg-[#f8fbfe] rounded-full border border-[#dde4e8] z-0"></div>
                <span className="font-sans text-[1.3rem] md:text-[2.2rem] text-[#1a2a32] font-medium relative z-10">3</span>
              </div>
              <div className="text-left md:text-center ml-4 md:ml-0 md:mt-6">
                <h4 className="font-serif text-[0.85rem] md:text-[1.25rem] text-[#1a1a1a] font-normal md:whitespace-nowrap mb-2">Prepare</h4>
                <p className="font-sans text-[0.75rem] md:text-[0.95rem] text-[#485e68] font-normal leading-[1.2] md:leading-[1.4] w-auto md:w-[220px] md:mx-[-50px]">Share your challenges and goals beforehand</p>
              </div>
            </ScrollReveal>

            {/* Line 3 */}
            <ScrollReveal className="hidden md:block flex-1 h-[2px] bg-[#a9b8c0] mt-[60px] relative min-w-[40px]" delay={200}>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 w-[14px] h-[14px] border-r-2 border-t-2 border-[#a9b8c0]"></div>
            </ScrollReveal>
            <div className="md:hidden w-[2px] h-[40px] bg-[#a9b8c0] ml-[35px] my-2 relative"></div>

            {/* Step 4 */}
            <ScrollReveal className="flex flex-row md:flex-col items-center w-auto md:w-[120px] relative z-10 gap-[5px] md:gap-0" delay={300}>
              <div className="w-[70px] md:w-[120px] h-[70px] md:h-[120px] bg-[#e2e8ec] rounded-full flex items-center justify-center relative border border-[#c4d1d6]">
                <div className="absolute w-[52px] md:w-[90px] h-[52px] md:h-[90px] bg-[#f8fbfe] rounded-full border border-[#dde4e8] z-0"></div>
                <span className="font-sans text-[1.3rem] md:text-[2.2rem] text-[#1a2a32] font-medium relative z-10">4</span>
              </div>
              <div className="text-left md:text-center ml-4 md:ml-0 md:mt-6">
                <h4 className="font-serif text-[0.85rem] md:text-[1.25rem] text-[#1a1a1a] font-normal md:whitespace-nowrap mb-2">Meet & Grow</h4>
                <p className="font-sans text-[0.75rem] md:text-[0.95rem] text-[#485e68] font-normal leading-[1.2] md:leading-[1.4] w-auto md:w-[220px] md:mx-[-50px]">Get personalized guidance and actionable insights</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
