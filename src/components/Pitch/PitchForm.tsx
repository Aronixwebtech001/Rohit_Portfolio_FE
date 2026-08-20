import { UploadCloud } from "lucide-react";

const fields = [
  { label: "Full Name", required: true, type: "text" },
  { label: "Company / Startup Name", required: true, type: "text" },
  { label: "Sector", required: true, type: "text" },
  { label: "Investment Required", required: true, type: "text" },
  { label: "Email Address", required: true, type: "email" },
  { label: "Contact Number", required: true, type: "tel" },
];

export default function PitchForm() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-10 text-gray-800">Submit Your Pitch</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {fields.map((f) => (
                <div key={f.label}>
                  <label className="block text-[13px] font-medium text-gray-700 mb-2">
                    {f.label} {f.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={f.type}
                    required={f.required}
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-[#1C2833]"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-2">
                Pitch Summary <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your business idea, market opportunity, and growth potential"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm outline-none focus:border-[#1C2833] resize-none"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-2">
                Upload Proposal / Pitch Deck (Optional)
              </label>
              <div className="border border-dashed border-gray-300 rounded-md py-10 flex flex-col items-center text-center text-gray-400 text-xs">
                <UploadCloud size={24} className="mb-2 text-gray-400" />
                Click to upload or drag and drop
                <br />
                PDF, PPT, or DOCX (Max 10MB)
              </div>
            </div>

            <div className="text-center pt-4 flex flex-col items-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 rounded-md bg-[#1C2833] text-white text-sm font-medium hover:bg-black mb-3"
              >
                Submit Pitch
              </button>
              <p className="text-[11px] text-gray-500">
                Submissions will be reviewed and responded to at connect@rohitjangir.com
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
