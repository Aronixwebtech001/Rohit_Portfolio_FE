import { useState, useEffect } from "react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
    setFormData({ name: "", email: "", purpose: "", message: "" });
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1C323A]/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="w-full max-w-[520px] mx-auto m-auto relative animate-fade-in z-10">
        <div className="w-full bg-[#ffffff] rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-5 sm:p-7 md:p-[30px_40px] text-center relative">
          <button 
            onClick={onClose} 
            className="absolute top-[12px] right-[15px] text-[24px] cursor-pointer text-[#999] hover:text-[#333] leading-[1] bg-transparent border-none p-[5px]"
          >
            &times;
          </button>
          
          <h2 className="text-[1.35rem] text-[#111] mb-[6px] font-serif font-normal leading-[1.2]">Connect with us</h2>
          <p className="text-[0.85rem] text-[#777] mb-[15px] font-sans font-light">Stay up to date with all the latest from us.</p>

          {success && (
            <div className="p-2 bg-green-50 text-green-700 rounded-lg mb-[15px] border border-green-200 text-sm">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="text-left m-0 flex flex-col font-sans">
            <label className="block text-[0.8rem] text-[#444] mb-[4px] font-medium">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              className="w-full px-[15px] py-[10px] border-[1.5px] border-[#e0e0e0] rounded-[10px] text-[0.9rem] outline-none transition-colors duration-300 focus:border-[#485E68] mb-[12px] font-sans"
            />

            <label className="block text-[0.8rem] text-[#444] mb-[4px] font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-[15px] py-[10px] border-[1.5px] border-[#e0e0e0] rounded-[10px] text-[0.9rem] outline-none transition-colors duration-300 focus:border-[#485E68] mb-[12px] font-sans"
            />

            <label className="block text-[0.8rem] text-[#444] mb-[4px] font-medium">Purpose*</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              minLength={2}
              className="w-full px-[15px] py-[10px] border-[1.5px] border-[#e0e0e0] rounded-[10px] text-[0.9rem] outline-none transition-colors duration-300 focus:border-[#485E68] mb-[12px] font-sans"
            />

            <label className="block text-[0.8rem] text-[#444] mb-[4px] font-medium">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={1000}
              rows={3}
              className="w-full px-[15px] py-[10px] border-[1.5px] border-[#e0e0e0] rounded-[10px] text-[0.9rem] outline-none transition-colors duration-300 focus:border-[#485E68] min-h-[80px] resize-y mb-[12px] font-sans block"
            ></textarea>

            <button
              type="submit"
              className="w-full py-[12px] px-[25px] bg-[#485E68] text-[#ffffff] border-none rounded-[30px] font-semibold text-[0.95rem] cursor-pointer transition-all duration-300 shadow-[0_8px_20px_rgba(72,94,104,0.3)] hover:bg-[#3A4B53] hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(72,94,104,0.45)] mt-[8px] block"
            >
              SEND MESSAGE
            </button>
            <div className="text-right text-[#FF4B4B] text-[0.75rem] font-medium mt-[6px]">
              {formData.message.length}/1000
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
