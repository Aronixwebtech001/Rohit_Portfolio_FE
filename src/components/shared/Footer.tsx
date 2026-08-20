import { Link } from "react-router-dom";
import { FiLinkedin as Linkedin, FiTwitter as Twitter, FiInstagram as Instagram, FiFacebook as Facebook } from "react-icons/fi";

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

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 flex flex-col items-center gap-3">
        <form
          className="flex w-full max-w-md rounded-full overflow-hidden bg-white/95"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-5 py-3 text-navy text-sm outline-none bg-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-navy text-sm font-medium rounded-full m-0.5 hover:bg-cream"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 pb-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-serif text-xl mb-3">Rohit Jangir</p>
          <p className="text-white/60 text-sm mb-5">
            Building Businesses,
            <br />
            Empowering Entrepreneurs.
          </p>
          <Link
            to="/pitch"
            className="inline-block px-5 py-2 border border-white/30 rounded-full text-sm hover:bg-white hover:text-navy transition-colors"
          >
            Contact US
          </Link>
        </div>

        <div>
          <p className="text-white/50 text-sm mb-4">Quick Links</p>
          <ul className="space-y-3 text-sm text-white/80">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-teal">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white/50 text-sm mb-4">Opportunities</p>
          <ul className="space-y-3 text-sm text-white/80">
            {opportunities.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-teal">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white/50 text-sm mb-4">Connect</p>
          <p className="text-sm text-white/80 mb-5">connect@rohitjangir.com</p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
              <span
                key={i}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors cursor-pointer"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
