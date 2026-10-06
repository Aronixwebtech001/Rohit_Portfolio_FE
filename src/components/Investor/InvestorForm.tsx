import { useState } from "react";
import { investorApi } from "../../features/investor/api.investor";
import { InvestorPayload } from "../../features/investor/types.investor";

export default function InvestorForm() {
  const [form, setForm] = useState<InvestorPayload>({
    fullName: "",
    organizationName: "",
    mobileNumber: "",
    country: "",
    investorCategory: "",
    emailAddress: "",
    message: "",
    isInvestorEnquiry: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.organizationName.trim())
      newErrors.organizationName = "Organization name is required";

    if (!/^[6-9]\d{9}$/.test(form.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
    }

    if (!form.country.trim()) newErrors.country = "Country is required";

    if (!form.investorCategory.trim())
      newErrors.investorCategory = "Investor category is required";

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.emailAddress)
    ) {
      newErrors.emailAddress = "Enter a valid email address";
    }

    if (!form.isInvestorEnquiry)
      newErrors.isInvestorEnquiry = "You must confirm this enquiry";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    let newForm: InvestorPayload;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      newForm = { ...form, [name]: e.target.checked };
    } else {
      newForm = { ...form, [name]: value };
    }
    setForm(newForm);

    // validate only the changed field
    const newErrors = { ...errors };
    switch (name) {
      case "fullName":
        if (!newForm.fullName.trim()) newErrors.fullName = "Full name is required";
        else delete newErrors.fullName;
        break;
      case "organizationName":
        if (!newForm.organizationName.trim())
          newErrors.organizationName = "Organization name is required";
        else delete newErrors.organizationName;
        break;
      case "mobileNumber":
        if (!/^[6-9]\d{9}$/.test(newForm.mobileNumber))
          newErrors.mobileNumber = "Enter a valid Indian mobile number";
        else delete newErrors.mobileNumber;
        break;
      case "country":
        if (!newForm.country.trim()) newErrors.country = "Country is required";
        else delete newErrors.country;
        break;
      case "investorCategory":
        if (!newForm.investorCategory.trim())
          newErrors.investorCategory = "Investor category is required";
        else delete newErrors.investorCategory;
        break;
      case "emailAddress":
        if (
          !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(newForm.emailAddress)
        )
          newErrors.emailAddress = "Enter a valid email address";
        else delete newErrors.emailAddress;
        break;
      case "isInvestorEnquiry":
        if (!newForm.isInvestorEnquiry)
          newErrors.isInvestorEnquiry = "You must confirm this enquiry";
        else delete newErrors.isInvestorEnquiry;
        break;
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await investorApi.create(form);
      console.log(response.message);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-black/5 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-colors text-[15px] bg-[#F5F7F8]";

  return (
    <section className="bg-[#F0F4F5]">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-5 sm:p-8 md:p-12 shadow-sm">
          <h2 className="font-serif text-3xl md:text-[34px] text-center mb-2 text-navy">
            Investor Relations
          </h2>
          <p className="text-center text-muted text-[15px] mb-10">
            Partner with us in building technology-driven infrastructure across India.
          </p>

          {submitted ? (
            <div className="text-center py-12 bg-[#F5F7F8] rounded-xl border border-teal/20">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-navy mb-2">
                Form Submitted Successfully!
              </h3>
              <p className="text-muted text-[15px]">
                Thank you for your interest. Our investor relations team will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-[15px] font-medium text-navy mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              {/* Organization Name */}
              <div>
                <label className="block text-[15px] font-medium text-navy mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={form.organizationName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.organizationName && (
                  <p className="text-red-500 text-sm">{errors.organizationName}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-[15px] font-medium text-navy mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={form.mobileNumber}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    handleChange(e);
                  }}
                  maxLength={10}
                  className={inputClass}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm">{errors.mobileNumber}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="block text-[15px] font-medium text-navy mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a country</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm">{errors.country}</p>
                )}
              </div>

              {/* Investor Category */}
              <div>
                <label className="block text-[15px] font-medium text-navy mb-2">
                  Investor Category *
                </label>
                <select
                  name="investorCategory"
                  value={form.investorCategory}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a category</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Technology">Technology</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Other">Other</option>
                </select>
                {errors.investorCategory && (
                  <p className="text-red-500 text-sm">{errors.investorCategory}</p>
                )}
              </div>

                           {/* Email Address */}
              <div>
                <label className="block text-[15px] font-medium text-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={form.emailAddress}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-sm">{errors.emailAddress}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[15px] font-medium text-navy mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any additional information you'd like to share..."
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              {/* Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  name="isInvestorEnquiry"
                  checked={form.isInvestorEnquiry}
                  onChange={handleChange}
                  className="w-4.5 h-4.5 rounded border-black/20 text-navy focus:ring-navy"
                />
                <span className="text-[15px] text-navy">
                  I confirm this is an investment enquiry. *
                </span>
              </label>
              {errors.isInvestorEnquiry && (
                <p className="text-red-500 text-sm">{errors.isInvestorEnquiry}</p>
              )}

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

