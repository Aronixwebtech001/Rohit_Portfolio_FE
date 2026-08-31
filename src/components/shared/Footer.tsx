import { Link } from "react-router-dom";
import { useState } from "react";
import ConnectModal from "./ConnectModal";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <>
      <footer className="bg-navy text-white font-sans" style={{ padding: "80px 5% 40px" }}>
        {/* Newsletter Section */}
        <div className="max-w-[600px] mx-auto mb-[60px] text-center">
          <form
            onSubmit={handleSubscribe}
            className="flex items-center bg-[#E8EDF0] rounded-[50px] p-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none py-[15px] px-[25px] text-base text-[#333] outline-none placeholder:text-[#999]"
            />
            <button
              type="submit"
              className="bg-white text-navy border-none py-3 px-[35px] rounded-[50px] font-bold cursor-pointer transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-black hover:text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] gap-10 max-w-content mx-auto">
          {/* Column 1: Brand */}
          <div>
            <h4 className="text-white text-xl font-bold mb-[25px]">Rohit Jangir</h4>
            <p className="text-white/90 text-base leading-relaxed mb-2.5">
              Building Businesses,<br />Empowering Entrepreneurs.
            </p>
            <div className="mt-5">
              <button
                onClick={() => setIsConnectModalOpen(true)}
                className="inline-flex items-center justify-center py-2 px-[18px] text-sm border-[1.5px] border-white rounded-md text-white no-underline font-semibold transition-all duration-300 hover:bg-white hover:text-navy cursor-pointer bg-transparent"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-xl font-bold mb-[25px]">Quick Links</h4>
            <div className="flex flex-col">
              <Link to="/about" className="text-white/90 no-underline text-base mb-3 transition-colors duration-300 hover:text-white hover:underline">About</Link>
              <Link to="/ventures" className="text-white/90 no-underline text-base mb-3 transition-colors duration-300 hover:text-white hover:underline">Ventures</Link>
              <Link to="/pitch" className="text-white/90 no-underline text-base mb-3 transition-colors duration-300 hover:text-white hover:underline">Pitch</Link>
            </div>
          </div>

          {/* Column 3: Opportunities */}
          <div>
            <h4 className="text-white text-xl font-bold mb-[25px]">Opportunities</h4>
            <div className="flex flex-col">
              <Link to="/pitch" className="text-white/90 no-underline text-base mb-3 transition-colors duration-300 hover:text-white hover:underline">Pitch Your Ideas</Link>
              <Link to="/mentorship" className="text-white/90 no-underline text-base mb-3 transition-colors duration-300 hover:text-white hover:underline">Book Consultation</Link>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-white text-xl font-bold mb-[25px]">Connect</h4>
            <div className="flex flex-col mb-4">
              <a
                href="mailto:connect@rohitjangir.com"
                className="text-white/90 no-underline text-base mb-3 transition-colors duration-300 hover:text-white hover:underline"
              >
                connect@rohitjangir.com
              </a>
            </div>
            <div className="flex gap-4">
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
                <TwitterIcon />
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
        <div className="text-center border-t border-white/10 mt-10 pt-[15px] text-sm text-white/80">
          <span>
            &copy; 2025 - 2026 Rohit Jangir. All rights reserved. | Designed &amp; Developed by{" "}
            <span className="underline">Aronix Web Tech</span>
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
