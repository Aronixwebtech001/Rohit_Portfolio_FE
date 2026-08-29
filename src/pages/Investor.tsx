import { useState } from "react";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";

const thesisCards = [
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/bar-chart.png",
    title: "Long Term ValueCreation",
    desc: "Creating sustainable businesses that deliver robust returns and long-term economic impact."
  },
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/settings--v1.png",
    title: "Technology Led Disruption",
    desc: "Leveraging cutting-edge technologies to redefine industries and create new market opportunities."
  },
  {
    icon: "https://img.icons8.com/material-outlined/48/0F1F22/handshake.png",
    title: "Founder First Partnership",
    desc: "Empowering founders with the capital, mentorship, and network needed to scale globally."
  }
];

export default function Investor() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    mobileNumber: "",
    country: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll review and get back to you shortly.");
    setFormData({ fullName: "", organization: "", mobileNumber: "", country: "", email: "", message: "" });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-hero-bg" style={{ paddingTop: 80 }}>
        <div className="max-w-content mx-auto px-[5%] py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
          <ScrollReveal direction="left" className="flex-1">
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] text-navy leading-[1.1] mb-6">
              Investing in Scalable Innovation
            </h1>
            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed mb-8 max-w-[550px]">
              We partner with ambitious founders building high-growth technology businesses. Our strategic
              capital and operational expertise help transform early-stage potential into longterm market
              leadership.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex-1 flex justify-center">
            <img
              src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208334/images/ventures/invester_hero.png.png"
              alt="Strategic Investment Illustration"
              className="w-full max-w-[500px] h-auto object-contain"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* INVESTMENT THESIS */}
      <section className="py-16 md:py-24 bg-bg-light" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy">Our Investment Thesis</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thesisCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 mx-auto bg-bg-light rounded-full flex items-center justify-center mb-6">
                    <img src={card.icon} alt={card.title} className="w-8 h-8 opacity-80" loading="lazy" />
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-3">{card.title}</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR RELATIONS FORM */}
      <section className="py-16 md:py-24 bg-white" style={{ padding: "80px 5%" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="bg-bg-light rounded-2xl p-8 md:p-12 shadow-sm">
            <ScrollReveal className="text-center mb-10">
              <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy mb-4">Investor Relations</h2>
              <p className="text-[#4A5568]">Partner with us in building technology-driven infrastructure across India.</p>
            </ScrollReveal>

            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Full Name <span className="text-accent">*</span></label>
                    <input type="text" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} placeholder="Enter Full Name"
                      className="px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all focus:border-accent bg-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Organisation Name</label>
                    <input type="text" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} placeholder="Organisation Name"
                      className="px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all focus:border-accent bg-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Mobile Number <span className="text-accent">*</span></label>
                    <input type="tel" required value={formData.mobileNumber} onChange={e => setFormData({...formData, mobileNumber: e.target.value})} placeholder="Phone Number"
                      className="px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all focus:border-accent bg-white" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Country <span className="text-accent">*</span></label>
                    <input type="text" required value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} placeholder="Country"
                      className="px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all focus:border-accent bg-white" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-navy">Email Address <span className="text-accent">*</span></label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Email Address"
                    className="px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all focus:border-accent bg-white" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-navy">Message / Enquiry Details <span className="text-accent">*</span></label>
                  <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Write your message here..." rows={4}
                    className="px-4 py-3 border border-navy/15 rounded-lg text-base outline-none transition-all focus:border-accent bg-white resize-y" />
                </div>

                <button type="submit"
                  className="w-full py-4 bg-navy text-white rounded-lg font-semibold mt-4 transition-all hover:bg-accent cursor-pointer">
                  Submit Enquiry
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
