import { Link } from "react-router-dom";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";
import { useState } from "react";

const heroStats = [
  { value: "50+", label: "Startups Invested" },
  { value: "15+", label: "Successful Exits" },
  { value: "3x", label: "Average ROI" },
  { value: "$20M", label: "Total Investment" },
];

const focusAreas = [
  { icon: "💡", title: "DISRUPTIVE INNOVATION", desc: "Unique solutions that solve high friction problems through creative engineering or business models." },
  { icon: "📈", title: "SCALABLE MODELS", desc: "Business architectures with clear unit economics that can scale efficiently across markets." },
  { icon: "👥", title: "STRONG FOUNDERS", desc: "Teams with deep domain expertise, resilience, and a track record of execution excellence." },
  { icon: "🌍", title: "MARKET POTENTIAL", desc: "Large addressable markets with clear paths to market leadership and sustainable growth." },
];

const steps = [
  { num: "01", title: "Submit Your Pitch", desc: "Share your idea through our structured pitch form with key details about your venture." },
  { num: "02", title: "Initial Review", desc: "Our team reviews your submission and evaluates alignment with our investment thesis." },
  { num: "03", title: "Deep Dive Meeting", desc: "Selected founders get a face-to-face session to present their vision and discuss strategy." },
  { num: "04", title: "Partnership & Growth", desc: "Upon alignment, we formalize the partnership and begin the journey together." },
];

export default function Pitch() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", industry: "", stage: "", funding: "", description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your pitch! We'll review and get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", industry: "", stage: "", funding: "", description: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-bg" style={{ paddingTop: 80 }}>
        <div className="max-w-content mx-auto px-[5%] py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
          <ScrollReveal direction="left" className="flex-1">
            <h1 className="font-serif text-[clamp(2.5rem,7vw,4.5rem)] text-navy leading-[1.1] mb-6">BUILD THE FUTURE</h1>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-8 max-w-[550px]">
              Start pitching, Start partnering.<br />
              I am looking for high integrity founders to back with strategic capital, structural expertise, and a global network.
            </p>
            <button
              onClick={() => document.getElementById("pitch-form")?.scrollIntoView({ behavior: "smooth" })}
              className="py-3 px-8 bg-navy text-white border-none rounded-md text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-accent"
            >
              Share Your Idea
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {heroStats.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <h3 className="font-serif text-xl text-navy font-bold">{s.value}</h3>
                  <p className="text-xs text-[#4A5568] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex-1 flex justify-center">
            <img
              src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208597/images/pitch/hand.png.png"
              alt="Strategic Partnership"
              className="w-full max-w-[450px] h-auto object-contain"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* What I Look For */}
      <section className="py-16 md:py-24 bg-bg-light px-4 md:px-[5%]">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy">What I Look For</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1">
                  <span className="text-4xl mb-4 block">{area.icon}</span>
                  <h3 className="font-serif text-sm tracking-widest text-navy mb-3 uppercase">{area.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{area.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-[5%]">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy">The Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative">
                  <span className="font-serif text-5xl text-navy/10 font-bold">{step.num}</span>
                  <h3 className="font-serif text-lg text-navy mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Form */}
      <section id="pitch-form" className="py-16 md:py-24 bg-bg-light px-4 md:px-[5%]">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy mb-4">Submit Your Pitch</h2>
            <p className="text-[#4A5568]">Share your vision and let's explore how we can build something extraordinary together.</p>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-md space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]" />
                <input type="email" placeholder="Email *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]" />
                <input type="tel" placeholder="Phone" value={formData.phone} maxLength={10} onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
                  className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]" />
                <input type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]" />
              </div>
              <select value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent bg-white">
                <option value="">Select Industry</option>
                <option>Technology</option><option>Mobility</option><option>Infrastructure</option><option>Healthcare</option><option>Finance</option><option>Other</option>
              </select>
              <select value={formData.stage} onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent bg-white">
                <option value="">Select Stage</option>
                <option>Idea Stage</option><option>MVP</option><option>Early Revenue</option><option>Growth Stage</option><option>Scale</option>
              </select>
              <input type="text" placeholder="Funding Required (e.g., $500K)" value={formData.funding} onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]" />
              <textarea placeholder="Describe your idea... *" required rows={5} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)] resize-vertical" />
              <button type="submit"
                className="w-full py-4 bg-navy text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-accent">
                Submit Pitch
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
