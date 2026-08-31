import { useState, useRef } from "react";
import { Upload } from "lucide-react";

export default function PitchForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "fullName":
        return /^[a-zA-Z\s]+$/.test(value) && value.length >= 3 && value.length <= 100;
      case "companyName":
        return /^[a-zA-Z0-9\s&]+$/.test(value) && value.length >= 2 && value.length <= 100;
      case "sector":
        return /^[a-zA-Z\s]+$/.test(value) && value.length > 0 && value.length <= 50;
      case "investmentRequired":
        const num = Number(value);
        return Number.isInteger(num) && num >= 1000 && num <= 1000000000;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "contactNumber":
        return /^\+?[0-9]{10,15}$/.test(value);
      case "pitchSummary":
        return value.length >= 50 && value.length <= 2000 && !/<[^>]*>/g.test(value);
      default:
        return true;
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFieldErrors((prev) => ({
      ...prev,
      [name]: !validateField(name, value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate all fields before submission
    const errors: Record<string, boolean> = {};
    for (const [name, value] of formData.entries()) {
      errors[name] = !validateField(name, value as string);
    }
    setFieldErrors(errors);

    if (Object.values(errors).some((err) => err)) {
      return; // stop submission if any field invalid
    }

    try {
      setLoading(true);

      const file = fileRef.current?.files?.[0];
      if (file) {
        formData.append("proposalFile", file);
      }

      const res = await fetch("/api/pitch/submit", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const baseClass =
    "w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-1 transition-colors text-[15px] bg-[#F5F7F8]";
  const errorClass = "border-red-500 focus:ring-red-500";
  const validClass = "border-black/5 focus:border-navy focus:ring-navy";

  return (
    <section id="form" className="bg-[#F0F4F5]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="font-serif text-3xl md:text-[34px] text-center mb-10 text-navy">
            Submit Your Pitch
          </h2>

          {submitted ? (
            <div className="text-center py-12 bg-[#F5F7F8] rounded-xl border border-teal/20">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-navy mb-2">
                Pitch Submitted Successfully!
              </h3>
              <p className="text-muted text-[15px]">
                Thank you for your interest. Our team will review your pitch and
                get back to you soon.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
                onBlur={handleBlur}
                className={`${baseClass} ${fieldErrors.fullName ? errorClass : validClass}`}
              />

              <input
                name="companyName"
                type="text"
                placeholder="Company / Startup Name"
                required
                onBlur={handleBlur}
                className={`${baseClass} ${fieldErrors.companyName ? errorClass : validClass}`}
              />

              <input
                name="sector"
                type="text"
                placeholder="Sector"
                required
                onBlur={handleBlur}
                className={`${baseClass} ${fieldErrors.sector ? errorClass : validClass}`}
              />

              <input
                name="investmentRequired"
                type="number"
                placeholder="Investment Required"
                required
                onBlur={handleBlur}
                className={`${baseClass} ${fieldErrors.investmentRequired ? errorClass : validClass}`}
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                onBlur={handleBlur}
                className={`${baseClass} ${fieldErrors.email ? errorClass : validClass}`}
              />

              <input
                name="contactNumber"
                type="tel"
                placeholder="Contact Number"
                required
                onBlur={handleBlur}
                className={`${baseClass} ${fieldErrors.contactNumber ? errorClass : validClass}`}
              />

              <textarea
                name="pitchSummary"
                rows={4}
                placeholder="Describe your business idea, market opportunity, and growth potential"
                required
                onBlur={handleBlur}
                className={`${baseClass} resize-none ${fieldErrors.pitchSummary ? errorClass : validClass}`}
              ></textarea>

              {/* File Upload */}
              <div
                className="border-2 border-dashed border-black/10 rounded-xl p-8 text-center cursor-pointer hover:border-navy/30 transition-colors bg-[#F5F7F8]"
                onClick={() => fileRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
              >
                <Upload size={28} className="mx-auto mb-3 text-navy/40" />
                <p className="text-[15px] text-navy/70 mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-muted">PDF, PPT, or DOCX (Max 10MB)</p>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.ppt,.pptx,.doc,.docx"
                  className="hidden"
                  name="proposalFile"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-10 py-3.5 bg-navy text-white font-medium rounded-xl hover:bg-navy-dark transition-colors text-[15px] w-full md:w-auto min-w-[200px]"
              >
                {loading ? "Submitting..." : "Submit Pitch"}
              </button>

              {error && (
                <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
