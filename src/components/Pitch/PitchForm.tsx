import { useState, useRef } from "react";
import { Upload } from "lucide-react";
import { investorApi } from "../../feature/pitch/api.pitch";
import { PitchPayload } from "../../feature/pitch/types.pitch";

export default function PitchForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileUrl, setFileUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("proposalFile", file);

    const res = await fetch("/api/pitch/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("File upload failed");
    const data = await res.json();
    return data.url as string; // secure HTTPS URL from R2
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      // Let browser show validation messages
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    try {
      setLoading(true);

      let uploadedUrl = "";
      const file = fileRef.current?.files?.[0];
      if (file) {
        uploadedUrl = await uploadFile(file);
        setFileUrl(uploadedUrl);
      }

      const payload: PitchPayload = {
        fullName: formData.get("fullName") as string,
        companyName: formData.get("companyName") as string,
        sector: formData.get("sector") as string,
        investmentRequired: Number(formData.get("investmentRequired")),
        email: formData.get("email") as string,
        contactNumber: formData.get("contactNumber") as string,
        pitchSummary: formData.get("pitchSummary") as string,
        proposalFile: uploadedUrl,
      };

      await investorApi.create(payload);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const url = await uploadFile(file);
        setFileUrl(url);
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      try {
        const url = await uploadFile(file);
        setFileUrl(url);
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-black/5 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-[15px] bg-[#F5F7F8]";

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
                required
                minLength={3}
                maxLength={100}
                pattern="^[a-zA-Z\\s]+$"
                placeholder="Full Name"
                className={inputClass}
              />

              <input
                name="companyName"
                type="text"
                required
                minLength={2}
                maxLength={100}
                pattern="^[a-zA-Z0-9\\s&]+$"
                placeholder="Company / Startup Name"
                className={inputClass}
              />

              <input
                name="sector"
                type="text"
                required
                maxLength={50}
                pattern="^[a-zA-Z\\s]+$"
                placeholder="Sector"
                className={inputClass}
              />

              <input
                name="investmentRequired"
                type="number"
                required
                min={1000}
                max={1000000000}
                step={1}
                placeholder="Investment Required"
                className={inputClass}
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className={inputClass}
              />

              <input
                name="contactNumber"
                type="tel"
                required
                pattern="^\\+?[0-9]{10,15}$"
                placeholder="Contact Number"
                className={inputClass}
              />

              <textarea
                name="pitchSummary"
                required
                minLength={50}
                maxLength={2000}
                rows={4}
                placeholder="Describe your business idea, market opportunity, and growth potential"
                className={`${inputClass} resize-none`}
              ></textarea>

              {/* File Upload */}
              <div
                className="border-2 border-dashed border-black/10 rounded-xl p-8 text-center cursor-pointer hover:border-navy/30 transition-colors bg-[#F5F7F8]"
                onClick={() => fileRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <Upload size={28} className="mx-auto mb-3 text-navy/40" />
                {fileUrl ? (
                  <p className="text-[15px] text-navy font-medium">
                    File uploaded: {fileUrl}
                  </p>
                ) : (
                  <>
                    <p className="text-[15px] text-navy/70 mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-muted">
                      PDF, PPT, or DOCX (Max 10MB)
                    </p>
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
