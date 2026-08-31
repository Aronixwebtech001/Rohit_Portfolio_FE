import { useState, useRef, useCallback } from "react";
import ScrollReveal from "../shared/ScrollReveal";

interface FormData {
  full_name: string;
  organization: string;
  number: string;
  country: string;
  investment_category: string;
  email: string;
  message: string;
  confirm: boolean;
}

const API_BASE_URL = "https://rohitportfoliobackend.vercel.app/api/v1";

const investmentCategories = [
  "Seed Capital",
  "Series A",
  "Venture Capital",
  "Institutional Investor",
];

export default function InvestorForm() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    organization: "",
    number: "",
    country: "India",
    investment_category: "",
    email: "",
    message: "",
    confirm: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const showNotification = useCallback((message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      // Apply input filtering
      let filtered = value;
      if (name === "full_name" || name === "organization") {
        filtered = value.replace(/[^A-Za-z\s]/g, "");
      } else if (name === "number") {
        filtered = value.replace(/[^0-9]/g, "");
      }
      setFormData((prev) => ({ ...prev, [name]: filtered }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.full_name || !formData.email || !formData.number || !formData.country || !formData.investment_category) {
      showNotification("Please fill in all required fields.", "error");
      return;
    }

    if (formData.full_name.length < 2) {
      showNotification("Full name must be at least 2 characters long.", "error");
      return;
    }

    if (!formData.confirm) {
      showNotification("Please confirm this is an investment enquiry.", "error");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        full_name: formData.full_name.trim(),
        organization: formData.organization.trim(),
        number: formData.number.trim(),
        country: formData.country.trim(),
        investment_category: formData.investment_category,
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch(`${API_BASE_URL}/investor/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        showNotification("Investor request submitted successfully!", "success");
        setFormData({
          full_name: "",
          organization: "",
          number: "",
          country: "India",
          investment_category: "",
          email: "",
          message: "",
          confirm: false,
        });
      } else {
        let errorMsg = "Failed to submit form. Please try again.";
        if (data.detail && Array.isArray(data.detail)) {
          errorMsg = data.detail
            .map((err: { loc: string[]; msg: string }) => `${err.loc[err.loc.length - 1]}: ${err.msg}`)
            .join(", ");
        } else if (data.detail) {
          errorMsg = data.detail;
        }
        showNotification(errorMsg, "error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      showNotification("An unexpected error occurred.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full font-sans text-base text-[#0F1F22] bg-white transition-colors duration-300 outline-none box-border" +
    " border border-[#E6EBED] rounded-xl focus:border-[#1C323A]";

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#dddfe0" }}>
      <div className="mx-auto" style={{ maxWidth: 1400, padding: "0 4%" }}>
        <div
          className="text-center mx-auto"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E6EBED",
            borderRadius: 24,
            padding: 60,
            maxWidth: 1000,
            boxShadow: "0 10px 40px rgba(15, 31, 34, 0.03)",
          }}
        >
          {/* Notification */}
          {notification && (
            <div
              className={`fixed top-5 right-5 z-50 px-6 py-4 rounded-xl font-sans text-sm font-medium shadow-lg transition-all ${
                notification.type === "success"
                  ? "bg-green-600 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {notification.message}
            </div>
          )}

          <ScrollReveal>
            <h2
              className="font-serif text-[#0F1F22] font-normal"
              style={{ fontSize: "2.2rem", marginBottom: 10 }}
            >
              Investor Relations
            </h2>
            <p
              className="font-sans text-[#485E68] font-light"
              style={{ fontSize: "1.1rem", marginBottom: 50 }}
            >
              Partner with us in building technology-driven infrastructure across India.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="text-left flex flex-col"
              style={{ gap: 30 }}
            >
              {/* Row 1: Full Name + Organisation */}
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 30 }}>
                <div className="flex flex-col" style={{ gap: 10 }}>
                  <label className="font-sans text-[0.95rem] text-[#1C323A] font-medium">
                    Full Name <span className="text-[#FF4D4D]">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    required
                    minLength={2}
                    maxLength={100}
                    className={inputClasses}
                    style={{ padding: "14px 20px" }}
                  />
                </div>
                <div className="flex flex-col" style={{ gap: 10 }}>
                  <label className="font-sans text-[0.95rem] text-[#1C323A] font-medium">
                    Organisation Name (If not type NA)
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Organisation Name"
                    maxLength={100}
                    className={inputClasses}
                    style={{ padding: "14px 20px" }}
                  />
                </div>
              </div>

              {/* Row 2: Mobile Number + Country */}
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 30 }}>
                <div className="flex flex-col" style={{ gap: 10 }}>
                  <label className="font-sans text-[0.95rem] text-[#1C323A] font-medium">
                    Mobile Number <span className="text-[#FF4D4D]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    style={{ padding: "14px 20px" }}
                  />
                </div>
                <div className="flex flex-col" style={{ gap: 10 }}>
                  <label className="font-sans text-[0.95rem] text-[#1C323A] font-medium">
                    Country <span className="text-[#FF4D4D]">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    readOnly
                    required
                    className={inputClasses}
                    style={{
                      padding: "14px 20px",
                      backgroundColor: "#f8fbfe",
                      cursor: "default",
                    }}
                  />
                </div>
              </div>

              {/* Row 3: Investment Category + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 30 }}>
                <div className="flex flex-col" style={{ gap: 10 }}>
                  <label className="font-sans text-[0.95rem] text-[#1C323A] font-medium">
                    Investment Category <span className="text-[#FF4D4D]">*</span>
                  </label>
                  <select
                    name="investment_category"
                    value={formData.investment_category}
                    onChange={handleChange}
                    required
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23485E68%22%20d%3D%22M7%2010l5%205%205-5z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]`}
                    style={{ padding: "14px 20px" }}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {investmentCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col" style={{ gap: 10 }}>
                  <label className="font-sans text-[0.95rem] text-[#1C323A] font-medium">
                    Email Address <span className="text-[#FF4D4D]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    maxLength={100}
                    className={inputClasses}
                    style={{ padding: "14px 20px" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col md:col-span-2" style={{ gap: 10 }}>
                <label className="font-sans text-[0.95rem] text-[#1C323A] font-medium">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any additional information you'd like to share..."
                  maxLength={1000}
                  className={inputClasses + " resize-none"}
                  style={{ padding: "14px 20px", height: 120 }}
                />
              </div>

              {/* Confirmation Checkbox */}
              <div className="flex items-center" style={{ gap: 12 }}>
                <input
                  type="checkbox"
                  id="confirm"
                  name="confirm"
                  checked={formData.confirm}
                  onChange={handleChange}
                  required
                  className="w-[18px] h-[18px] cursor-pointer"
                />
                <label
                  htmlFor="confirm"
                  className="font-sans text-[0.95rem] text-[#485E68] cursor-pointer"
                >
                  I confirm this is an investment enquiry. <span className="text-[#FF4D4D]">*</span>
                </label>
              </div>

              {/* Submit */}
              <div className="self-center" style={{ marginTop: 20 }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="block mx-auto text-white font-sans font-medium cursor-pointer transition-all duration-300 hover:bg-[#0F1F22] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "#1C323A",
                    fontSize: "1.1rem",
                    padding: "16px 60px",
                    border: "none",
                    borderRadius: 12,
                  }}
                >
                  {submitting ? "Submitting..." : "Submit Form"}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
