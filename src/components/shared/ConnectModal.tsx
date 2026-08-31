import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
    alert("Message sent successfully!");
    onClose();
    setFormData({ name: "", email: "", purpose: "", message: "" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-full max-w-[560px] p-[30px_20px] md:p-[50px_40px] relative text-center z-10 animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-[12px] right-[15px] md:top-[15px] md:right-[20px] text-[#999] hover:text-[#333] transition-colors p-1"
          aria-label="Close modal"
        >
          <X size={28} strokeWidth={2} />
        </button>

        <h2 className="text-[1.25rem] md:text-[1.5rem] text-[#111] mb-2 font-serif font-normal">Connect with us</h2>
        <p className="text-[0.85rem] md:text-[0.9rem] text-[#777] mb-5 md:mb-8 font-sans">Stay up to date with all the latest from us.</p>

        <form onSubmit={handleSubmit} className="text-left font-sans">
          <div className="mb-4 md:mb-5">
            <label className="block text-[0.8rem] md:text-[0.85rem] text-[#444] mb-1.5 font-medium">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              className="w-full px-[15px] py-[12px] border-[1.5px] border-[#e0e0e0] rounded-xl text-[0.95rem] outline-none transition-colors focus:border-[#485E68]"
            />
          </div>

          <div className="mb-4 md:mb-5">
            <label className="block text-[0.8rem] md:text-[0.85rem] text-[#444] mb-1.5 font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-[15px] py-[12px] border-[1.5px] border-[#e0e0e0] rounded-xl text-[0.95rem] outline-none transition-colors focus:border-[#485E68]"
            />
          </div>

          <div className="mb-4 md:mb-5">
            <label className="block text-[0.8rem] md:text-[0.85rem] text-[#444] mb-1.5 font-medium">Purpose*</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              minLength={2}
              className="w-full px-[15px] py-[12px] border-[1.5px] border-[#e0e0e0] rounded-xl text-[0.95rem] outline-none transition-colors focus:border-[#485E68]"
            />
          </div>

          <div className="mb-6 md:mb-7">
            <label className="block text-[0.8rem] md:text-[0.85rem] text-[#444] mb-1.5 font-medium">Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-[15px] py-[12px] border-[1.5px] border-[#e0e0e0] rounded-xl text-[0.95rem] outline-none transition-colors focus:border-[#485E68] min-h-[100px] resize-y"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-[14px] px-[30px] bg-[#485E68] text-white rounded-full font-semibold text-[0.95rem] md:text-[1rem] cursor-pointer hover:bg-[#3A4B53] transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
