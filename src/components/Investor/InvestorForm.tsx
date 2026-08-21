import { useState } from "react";
import { Link } from "react-router-dom";

export default function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would submit to backend here
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-black/5">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">Partner With Us</h2>
          <p className="text-center text-muted text-sm mb-10">
            Interested in co-investing or joining our LP network? Leave your details below.
          </p>

          {submitted ? (
            <div className="text-center py-10 bg-cream/50 rounded-xl border border-teal/20">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-navy mb-2">Inquiry Submitted Successfully!</h3>
              <p className="text-muted text-sm">
                Thank you for your interest. Our investor relations team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-5 py-3 rounded-xl border border-black/10 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-sm bg-cream/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-5 py-3 rounded-xl border border-black/10 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-sm bg-cream/50"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Organization</label>
                  <input
                    type="text"
                    placeholder="Enter organization name"
                    className="w-full px-5 py-3 rounded-xl border border-black/10 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-sm bg-cream/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-5 py-3 rounded-xl border border-black/10 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-sm bg-cream/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Investment Interest</label>
                <select className="w-full px-5 py-3 rounded-xl border border-black/10 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-sm bg-cream/50 text-navy">
                  <option value="">Select your area of interest</option>
                  <option value="co-investing">Co-Investing Opportunities</option>
                  <option value="lp-network">Join LP Network</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3 rounded-xl border border-black/10 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-sm bg-cream/50 resize-none"
                ></textarea>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted">
                  Looking to pitch a startup instead?{" "}
                  <Link to="/pitch" className="text-teal hover:underline">
                    Go here
                  </Link>
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-navy text-white font-medium rounded-xl hover:bg-navy-dark transition-colors"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
