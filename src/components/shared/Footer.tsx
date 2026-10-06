import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { subscribeApi } from "../../features/subscribe/api.subscribe";
import { useState } from "react";
import ConnectModal from "./ConnectModal";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Ventures", to: "/ventures" },
  { label: "Pitch", to: "/pitch" },
];

const opportunities = [
  { label: "Pitch Your Ideas", to: "/pitch" },
  { label: "Book Consultation", to: "/mentorship" },
  { label: "Case Study", to: "/case-study" },
];

/* Custom social SVG icons — lucide-react removed brand icons */
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socialIcons = [
  { icon: <LinkedinIcon />, label: "LinkedIn" },
  { icon: <XIcon />, label: "X (Twitter)" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
];

export default function Footer() {
   const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

     const strictEmailRegex = /^(?![0-9])[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!strictEmailRegex.test(email)) {
      setError("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await subscribeApi.create({ email: email.trim().toLowerCase() });
      setSuccess(res.message || "Successfully subscribed!");
      setEmail("");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <footer className="bg-navy-dark text-white">
      {/* Newsletter subscribe bar — top of footer */}
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-10 pt-10 sm:pt-14 pb-8 flex flex-col items-center">
        <form
          className="flex items-center w-full max-w-md rounded-full overflow-hidden border border-white/20 relative p-0.5 sm:p-1"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            placeholder="Email Address"
            className="min-w-0 flex-1 px-3.5 sm:px-5 py-2 sm:py-3 text-white text-xs sm:text-sm outline-none bg-transparent placeholder:text-white/40"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`shrink-0 whitespace-nowrap px-4 sm:px-6 py-2 sm:py-2.5 text-navy text-xs sm:text-sm font-medium rounded-full transition-colors ${
              isSubmitting ? "bg-white/70 cursor-not-allowed" : "bg-white hover:bg-cream"
            }`}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
        {success && <p className="text-green-400 text-xs mt-2">{success}</p>}
      </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] gap-x-6 gap-y-10 sm:gap-8 md:gap-10 max-w-content mx-auto px-6 md:px-10">
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-[25px]">Rohit Jangir</h4>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-3 sm:mb-2.5">
              Building Businesses,<br />Empowering Entrepreneurs.
            </p>
            <div className="mt-2 sm:mt-5">
              <button
                onClick={() => setIsConnectModalOpen(true)}
                className="inline-flex items-center justify-center py-2 px-3.5 sm:px-[18px] text-xs sm:text-sm border-[1.5px] border-white rounded-md text-white no-underline font-semibold transition-all duration-300 hover:bg-white hover:text-navy cursor-pointer bg-transparent w-fit"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-[25px]">Quick Links</h4>
            <div className="flex flex-col">
              <Link to="/about" className="text-white/90 no-underline text-sm sm:text-base mb-2.5 sm:mb-3 transition-colors duration-300 hover:text-white hover:underline">About</Link>
              <Link to="/ventures" className="text-white/90 no-underline text-sm sm:text-base mb-2.5 sm:mb-3 transition-colors duration-300 hover:text-white hover:underline">Ventures</Link>
              <Link to="/pitch" className="text-white/90 no-underline text-sm sm:text-base mb-2.5 sm:mb-3 transition-colors duration-300 hover:text-white hover:underline">Pitch</Link>
            </div>
          </div>

          {/* Column 3: Opportunities */}
          <div className="flex flex-col">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-[25px]">Opportunities</h4>
            <div className="flex flex-col">
              <Link to="/pitch" className="text-white/90 no-underline text-sm sm:text-base mb-2.5 sm:mb-3 transition-colors duration-300 hover:text-white hover:underline">Pitch Your Ideas</Link>
              <Link to="/mentorship" className="text-white/90 no-underline text-sm sm:text-base mb-2.5 sm:mb-3 transition-colors duration-300 hover:text-white hover:underline">Book Consultation</Link>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-[25px]">Connect</h4>
            <div className="flex flex-col mb-4">
              <a
                href="mailto:connect@rohitjangir.com"
                className="text-white/90 no-underline text-xs sm:text-sm md:text-base mb-3 transition-colors duration-300 hover:text-white hover:underline break-words"
              >
                connect@rohitjangir.com
              </a>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/people/Rohit-Jangir/100047800952815/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/80 transition-colors duration-300 hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com/RohitJa50047844"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white/80 transition-colors duration-300 hover:text-white"
              >
                <XIcon />
              </a>
              <a
                href="https://www.instagram.com/offical_rohitjangir"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/80 transition-colors duration-300 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-733707129/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/80 transition-colors duration-300 hover:text-white"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-white/10 mt-10 pt-[15px] pb-6 px-4 text-xs sm:text-sm text-white/80">
          <span>
            &copy; 2025 - 2026 Rohit Jangir. All rights reserved. | Designed &amp; Developed by{" "}
            <a
              href="https://aronixwebtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white font-medium hover:text-gold transition-colors"
            >
              Aronix Web Tech
            </a>
          </span>
        </div>
      </footer>

      <ConnectModal 
        isOpen={isConnectModalOpen} 
        onClose={() => setIsConnectModalOpen(false)} 
      />
    </>
  );
}
