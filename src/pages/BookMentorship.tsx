import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CreditCard } from "lucide-react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, duration, selectedDate, selectedTime });
    alert("Mentorship session booked successfully!");
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-14">
          
          {/* Header */}
          <div className="text-center mb-12 border-b border-gray-100 pb-10">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Book Mentorship</h1>
            <p className="text-gray-500 text-sm">
              Schedule your personalized session with our expert mentors
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Column - User Details */}
              <div className="space-y-6">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors text-[15px]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors text-[15px]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors text-[15px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Company / Startup Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors text-[15px]"
                  />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Plan Name
                  </label>
                  <input
                    type="text"
                    name="planName"
                    value={formData.planName}
                    onChange={handleChange}
                    placeholder="e.g. 30-min Quick Call"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors text-[15px] bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Price (₹)
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="e.g. 999"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors text-[15px] bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Pitch Details
                  </label>
                  <textarea
                    name="pitchDetails"
                    value={formData.pitchDetails}
                    onChange={handleChange}
                    placeholder="Briefly describe what you'd like to discuss..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors text-[15px] resize-none"
                  ></textarea>
                </div>
              </div>
              
              {/* Right Column - Booking Details */}
              <div className="space-y-6">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g. 30 Minutes"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors text-[15px] bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Choose Date
                  </label>
                  <MentorshipCalendar
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                  />
                </div>
                
                <div>
                  <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                    Choose Time
                  </label>
                  <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm min-h-[120px] flex items-center justify-center text-center">
                    {!selectedDate ? (
                      <p className="text-gray-400 text-sm">Select a date and duration to see available slots</p>
                    ) : (
                      <div className="flex flex-wrap gap-3 justify-center">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
                              ${selectedTime === time 
                                ? "bg-navy text-white border-navy" 
                                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
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
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Select Payment Method</h3>
              
              <div className="flex items-center justify-center p-4 rounded-lg border border-gray-200 mb-6 bg-white cursor-pointer hover:border-gray-400 transition-colors">
                <div className="flex items-center gap-3">
                  <CreditCard className="text-[#3395FF]" size={20} />
                  <span className="font-medium text-gray-700 text-sm">Razorpay (Cards, UPI, Net Banking)</span>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <p className="text-[13px] text-gray-600 leading-relaxed text-center">
                  I agree, the amount is strictly non-refundable under any circumstances. Sessions may be rescheduled with prior notice of at least 24 hours, subject to availability. No-shows or late cancellations will not be eligible for rescheduling or refunds. Booking fees confirm your acceptance of these terms and secure your reserved time slot.
                </p>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-navy hover:bg-navy-dark text-white px-10 py-3.5 rounded-lg font-medium transition-colors w-full md:w-auto min-w-[200px]"
                >
                  Book Your Session
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
