import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MentorshipCalendar from "../components/Mentorship/MentorshipCalendar";

export default function BookMentorship() {
  const location = useLocation();
  const state = location.state as { planName?: string; price?: string } | null;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    pitchDetails: "",
    planName: state?.planName || "",
    price: state?.price || "",
  });

  const [duration, setDuration] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (formData.planName) {
      if (formData.planName.toLowerCase().includes("quick call")) {
        setDuration("30 Minutes");
      } else if (formData.planName.toLowerCase().includes("deep-dive")) {
        setDuration("2 Hours");
      } else if (formData.planName.toLowerCase().includes("strategy")) {
        setDuration("1 Hour");
      }
    }
  }, [formData.planName]);

  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms.");
      return;
    }
    console.log({ ...formData, duration, selectedDate, selectedTime, paymentMethod });
    alert("Mentorship session booked successfully!");
  };

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf1] min-h-screen flex justify-center items-start">
      <div className="w-full max-w-[95%] lg:max-w-[900px] bg-white p-[clamp(20px,4vw,40px)_clamp(20px,4vw,50px)] rounded-2xl border border-gray-200 shadow-[0_4px_50px_rgba(0,0,0,0.02)] my-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal text-[#1a1a1a] mb-2">Book Mentorship</h2>
          <p className="font-sans text-[clamp(0.9rem,2vw,15px)] text-[#4b5563] m-0">
            Schedule your personalized session with our expert mentors
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            
            {/* Left Column */}
            <div className="flex-1 space-y-5">
              <div>
                <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                  Your Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 rounded-lg border border-[#e5e7eb] font-sans text-[15px] text-[#1a1a1a] bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                  Contact Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    handleChange(e);
                  }}
                  maxLength={10}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full px-4 py-3.5 rounded-lg border border-[#e5e7eb] font-sans text-[15px] text-[#1a1a1a] bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3.5 rounded-lg border border-[#e5e7eb] font-sans text-[15px] text-[#1a1a1a] bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  required
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                    Plan Name*
                  </label>
                  <select
                    name="planName"
                    value={formData.planName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border border-[#e5e7eb] font-sans text-[15px] text-[#1a1a1a] bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                    required
                  >
                    <option value="">Select a plan</option>
                    <option value="30-min Quick Call">30-min Quick Call</option>
                    <option value="Startup Deep-Dive">Startup Deep-Dive</option>
                    <option value="1-hour Strategy Session">1-hour Strategy Session</option>
                  </select>
                </div>
                
                <div className="w-full sm:w-[120px]">
                  <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                    Price (₹)*
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="e.g. 999"
                    className="w-full px-4 py-3.5 rounded-lg border border-[#e5e7eb] font-sans text-[15px] text-[#1a1a1a] bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    required
                    readOnly
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                  Topic for discussion*
                </label>
                <textarea
                  name="pitchDetails"
                  value={formData.pitchDetails}
                  onChange={handleChange}
                  placeholder="Briefly describe what you'd like to discuss..."
                  className="w-full px-4 py-3.5 rounded-lg border border-[#e5e7eb] font-sans text-[15px] text-[#1a1a1a] bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors resize-y min-h-[100px]"
                  required
                ></textarea>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="flex-1 space-y-5">
              <div>
                <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                  Duration*
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-lg border border-[#e5e7eb] font-sans text-[15px] text-[#1a1a1a] bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors appearance-none cursor-pointer"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  required
                >
                  <option value="">Select duration</option>
                  <option value="30 Minutes">30 Minutes</option>
                  <option value="1 Hour">1 Hour</option>
                  <option value="2 Hours">2 Hours</option>
                </select>
              </div>
              
              <div className="mb-5">
                <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                  Choose Date*
                </label>
                <MentorshipCalendar
                  selectedDate={selectedDate}
                  onSelectDate={setSelectedDate}
                />
              </div>
              
              <div>
                <label className="block font-sans text-[14px] font-semibold text-[#1a1a1a] mb-2">
                  Select Time*
                </label>
                <div className="bg-white rounded-lg border border-[#e5e7eb] p-5">
                  {!selectedDate ? (
                    <p className="text-gray-400 text-sm text-center py-4">Select a date to see available slots</p>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-2 rounded-lg text-[13px] font-medium transition-colors border text-center
                            ${selectedTime === time 
                              ? "bg-[#102a43] text-white border-[#102a43]" 
                              : "bg-white text-[#4b5563] border-[#e5e7eb] hover:border-[#9ca3af] hover:text-[#1a1a1a]"
                            }
                          `}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-8 pt-8 border-t border-[#e5e7eb]">
            <h3 className="font-serif text-xl text-[#1a1a1a] mb-5 font-normal">Select Payment Method</h3>
            
            <div className="mb-6">
              <label className="flex items-center gap-4 p-4 rounded-xl border border-[#2563eb] bg-[#eff6ff] cursor-pointer">
                <input 
                  type="radio" 
                  name="payment_method" 
                  value="razorpay" 
                  checked={paymentMethod === "razorpay"}
                  onChange={() => setPaymentMethod("razorpay")}
                  className="w-5 h-5 text-[#2563eb] border-gray-300 focus:ring-[#2563eb]" 
                  required 
                />
                <span className="font-sans text-[15px] font-medium text-[#1e293b] flex items-center gap-2">
                  <span className="text-[#2563eb] text-lg">💳</span> Razorpay (Cards, UPI, Net Banking)
                </span>
              </label>
            </div>
            
            <div className="bg-[#f8fafc] border border-[#e2e8f0] p-5 rounded-xl mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="agree" 
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#102a43] rounded border-gray-300 focus:ring-[#102a43]" 
                  required 
                />
                <p className="font-sans text-[13px] text-[#64748b] leading-[1.6] m-0">
                  I agree, the amount is strictly <span className="text-[#ef4444] font-semibold bg-[#fef2f2] px-1 rounded">non-refundable</span> under any
                  circumstances. Sessions may be rescheduled with prior notice of at least 24 hours, subject to
                  availability. No-shows or late cancellations will not be eligible for rescheduling or refunds. Booking
                  fees confirm your acceptance of these terms and secure your reserved time slot.
                </p>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#102a43] hover:bg-[#000000] text-white py-4 rounded-xl font-sans text-lg font-medium transition-all duration-300 hover:shadow-[0_10px_20px_rgba(16,42,67,0.15)] hover:-translate-y-[2px]"
            >
              Book Your Session
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
