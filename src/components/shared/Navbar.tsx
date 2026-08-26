import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Ventures", to: "/ventures" },
  { label: "Pitch", to: "/pitch" },
  { label: "Investor", to: "/investor" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="max-w-content mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="Rohit Jangir" className="h-8 md:h-9 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[15px] text-navy">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-teal transition-colors ${isActive ? "text-teal" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/mentorship"
          className="hidden lg:inline-block px-6 py-2.5 rounded-full border border-navy text-sm font-medium hover:bg-navy hover:text-white transition-colors"
        >
          Book Mentorship
        </Link>

        <button className="lg:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-navy text-base py-3 border-b border-black/5 last:border-0"
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/mentorship"
            onClick={() => setOpen(false)}
            className="px-6 py-2.5 rounded-full border border-navy text-sm font-medium text-center"
          >
            Book Mentorship
          </Link>
        </div>
      )}
    </header>
  );
}
