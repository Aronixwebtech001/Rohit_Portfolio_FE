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
    "w-full px-4 py-3.5 rounded-xl border border-black/5 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-[15px] bg-[#F5F7F8]";

  return (
    <section className="bg-[#F0F4F5]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="font-serif text-3xl md:text-[34px] text-center mb-2 text-navy">Investor Relations</h2>
          <p className="text-center text-muted text-[15px] mb-10">
            Partner with us in building technology-driven infrastructure across India.
          </p>

          {submitted ? (
            <div className="text-center py-12 bg-[#F5F7F8] rounded-xl border border-teal/20">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-navy mb-2">Form Submitted Successfully!</h3>
              <p className="text-muted text-[15px]">
                Thank you for your interest. Our investor relations team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Row 1: Full Name | Organisation Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] font-medium text-navy mb-2">Full Name *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-navy mb-2">
                    Organisation Name (If not type NA) *
                  </label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 2: Mobile Number | Country */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] font-medium text-navy mb-2">Mobile Number *</label>
                  <input type="tel" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-navy mb-2">Country *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 3: Investment Category | Email Address */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[15px] font-medium text-navy mb-2">Investment Category *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[15px] font-medium text-navy mb-2">Email Address *</label>
                  <input type="email" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-[15px] font-medium text-navy mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Any additional information you'd like to share..."
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="w-4.5 h-4.5 rounded border-black/20 text-navy focus:ring-navy"
                  required
                />
                <span className="text-[15px] text-navy">I confirm this is an investment enquiry. *</span>
              </label>

              {/* Submit */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="px-10 py-3.5 bg-navy text-white font-medium rounded-xl hover:bg-navy-dark transition-colors text-[15px] w-full md:w-auto min-w-[200px]"
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
