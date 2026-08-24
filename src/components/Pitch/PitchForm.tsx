import { useState, useRef } from "react";
import { Upload } from "lucide-react";

export default function PitchForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) setFileName(file.name);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-black/10 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-sm bg-cream/50";

  return (
    <section id="form" className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-black/5">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">Submit Your Pitch</h2>

          {submitted ? (
            <div className="text-center py-10 bg-cream/50 rounded-xl border border-teal/20">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-navy mb-2">Pitch Submitted Successfully!</h3>
              <p className="text-muted text-sm">
                Thank you for your interest. Our team will review your pitch and get back to you soon.
              </p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Row 1: Full Name | Company / Startup Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Company / Startup Name *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 2: Sector | Investment Required */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Sector *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Investment Required *</label>
                  <input type="text" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 3: Email Address | Contact Number */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Email Address *</label>
                  <input type="email" required placeholder="" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Contact Number *</label>
                  <input type="tel" required placeholder="" className={inputClass} />
                </div>
              </div>

              {/* Row 4: Pitch Summary */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">Pitch Summary *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your business idea, market opportunity, and growth potential"
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Upload Proposal / Pitch Deck (Optional)
                </label>
                <div
                  className="border-2 border-dashed border-black/10 rounded-xl p-6 text-center cursor-pointer hover:border-navy/30 transition-colors"
                  onClick={() => fileRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <Upload size={24} className="mx-auto mb-2 text-navy/30" />
                  {fileName ? (
                    <p className="text-sm text-navy font-medium">{fileName}</p>
                  ) : (
                    <>
                      <p className="text-sm text-navy/60">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted mt-1">PDF, PPT, or DOCX (Max 10MB)</p>
                    </>
                  )}
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.ppt,.pptx,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col items-center gap-3">
                <button
                  type="submit"
                  className="px-10 py-3 bg-navy text-white font-medium rounded-xl hover:bg-navy-dark transition-colors text-sm"
                >
                  Submit Pitch
                </button>
                <p className="text-xs text-muted">
                  Submissions will be reviewed and responded to connect@rohitjangir.com
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
