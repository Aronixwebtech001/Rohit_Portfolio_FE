import { Link } from "react-router-dom";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";
import { useState } from "react";
import { pitchApi } from "../features/pitch/api.pitch";

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
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      await pitchApi.create({
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        contactNumber: formData.phone.trim() || "9876543210",
        companyName: formData.company.trim() || `${formData.name.trim()}'s Venture`,
        sector: formData.industry || "Technology",
        stage: formData.stage || "Idea Stage",
        investmentRequired: formData.funding.trim() || "50000",
        pitchSummary: formData.description.trim(),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", industry: "", stage: "", funding: "", description: "" });
    } catch (err: any) {
      setError(err.message || "Failed to submit pitch. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
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
              alt="Partnership Handshake"
              className="max-w-full h-auto rounded-2xl shadow-xl max-h-[480px] object-cover"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-[5%]">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] text-navy mb-4">Investment Philosophy</h2>
            <p className="text-[#4A5568] max-w-[600px] mx-auto">
              We partner with visionary founders tackling massive markets with asymmetric risk-reward profiles.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-bg-light rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="text-4xl mb-4 block">{f.icon}</span>
                  <h3 className="font-serif text-lg text-navy mb-3">{f.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-[5%] border-t border-navy/5">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] text-navy mb-4">Evaluation Process</h2>
            <p className="text-[#4A5568] max-w-[600px] mx-auto">
              Transparent, founder-friendly, and structured for swift decision-making.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative">
                  <span className="font-serif text-4xl text-accent/30 font-bold mb-2 block">{s.num}</span>
                  <h3 className="font-serif text-xl text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{s.desc}</p>
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
            {submitted ? (
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md text-center border border-emerald-100">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold shadow-md">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-navy mb-2">
                  Pitch Submitted Successfully!
                </h3>
                <p className="text-[#4A5568] text-[15px] max-w-lg mx-auto mb-6">
                  Thank you for sharing your venture pitch. Our investment review team evaluates all incoming submissions and will reach out to you directly via email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="py-3 px-8 bg-navy text-white rounded-xl text-sm font-medium hover:bg-black transition-colors"
                >
                  Submit Another Pitch
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-md space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    maxLength={15}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9+]/g, '') })}
                    className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]"
                  />
                </div>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent bg-white"
                >
                  <option value="">Select Industry</option>
                  <option>Technology</option>
                  <option>Mobility</option>
                  <option>Infrastructure</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Other</option>
                </select>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent bg-white"
                >
                  <option value="">Select Stage</option>
                  <option>Idea Stage</option>
                  <option>MVP</option>
                  <option>Early Revenue</option>
                  <option>Growth Stage</option>
                  <option>Scale</option>
                </select>
                <input
                  type="text"
                  placeholder="Funding Required (e.g., $500K)"
                  value={formData.funding}
                  onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                  className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)]"
                />
                <textarea
                  placeholder="Describe your idea... *"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(72,94,104,0.1)] resize-vertical"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-navy hover:bg-black disabled:bg-gray-400 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg"
                >
                  {loading ? "Submitting Pitch..." : "Submit Pitch"}
                </button>
                {error && (
                  <p className="text-red-600 text-sm mt-3 text-center font-medium bg-red-50 py-2 px-3 rounded-lg border border-red-200">
                    {error}
                  </p>
                )}
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
