import { useState } from "react";

export default function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-black/10 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-sm bg-cream/50";

  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-black/5">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-2">Investor Relations</h2>
          <p className="text-center text-muted text-sm mb-8">
            Partner with us in building technology-driven infrastructure across India.
          </p>

          {submitted ? (
            <div className="text-center py-10 bg-cream/50 rounded-xl border border-teal/20">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-navy mb-2">Form Submitted Successfully!</h3>
              <p className="text-muted text-sm">
                Thank you for your interest. Our investor relations team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Row 1: Full Name | Organisation Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Organisation Name (If not type NA) *
                  </label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 2: Mobile Number | Country */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Mobile Number *</label>
                  <input type="tel" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Country *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 3: Investment Category | Email Address */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Investment Category *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Email Address *</label>
                  <input type="email" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Any additional information you'd like to share..."
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="w-4 h-4 rounded border-black/20 text-navy focus:ring-navy"
                  required
                />
                <span className="text-sm text-navy">I confirm this is an investment enquiry. *</span>
              </label>

              {/* Submit */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="px-10 py-3 bg-navy text-white font-medium rounded-xl hover:bg-navy-dark transition-colors text-sm"
                >
                  Submit Form
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
