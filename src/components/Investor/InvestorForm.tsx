const fields = [
  { label: "Full Name", required: true, type: "text" },
  { label: "Organisation Name (If not type NA)", required: true, type: "text" },
  { label: "Mobile Number", required: true, type: "tel" },
  { label: "Country", required: true, type: "text" },
  { label: "Investment Category", required: true, type: "text" },
  { label: "Email Address", required: true, type: "email" },
];

export default function InvestorForm() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-2">Investor Relations</h2>
          <p className="text-center text-muted text-sm mb-8">
            Partner with us in building technology-driven infrastructure across India.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              {fields.map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium mb-2">
                    {f.label} {f.required && <span className="text-accent">*</span>}
                  </label>
                  <input
                    type={f.type}
                    required={f.required}
                    className="w-full border border-black/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-teal"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message (Optional)</label>
              <textarea
                rows={4}
                placeholder="Any additional information you'd like to share..."
                className="w-full border border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-teal resize-none"
              />
            </div>

            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" required className="w-4 h-4" />
              I confirm this is an investment enquiry. <span className="text-accent">*</span>
            </label>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy-dark"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
