import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Ventures", to: "/ventures" },
  { label: "Pitch", to: "/pitch" },
  { label: "Investor", to: "/investor" },
];

const exploreLinks = [
  { label: "Media & Press", to: "/media" },
  { label: "Resources", to: "/resources" },
  { label: "Case Studies", to: "/case-study" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Scroll listener for fixed navbar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExploreOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 bg-[rgba(249,251,251,0.92)] backdrop-blur-[12px] px-4 sm:px-6 lg:px-10
          ${scrolled
            ? "py-1.5 sm:py-[0.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            : "py-2 sm:py-[0.8rem] lg:py-[0.9rem]"
          }`}
      >
        <nav className="w-full max-w-[1400px] mx-auto flex justify-between items-center h-[48px] sm:h-[50px] relative">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-[1001] h-full after:content-[''] after:absolute after:inset-0 after:z-[2]">
            <img
              src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208366/images/logos/rj-logo-new.png.png"
              alt="Rohit Jangir"
              className="h-[52px] sm:h-[65px] lg:h-[90px] xl:h-[110px] w-auto max-w-[180px] sm:max-w-none object-contain object-left pointer-events-none relative z-[1]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10 list-none m-0 ml-auto mr-6 xl:mr-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative font-medium text-[0.95rem] capitalize py-2 no-underline transition-colors duration-250
                     before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-navy before:transition-[width] before:duration-300
                     hover:text-navy hover:before:w-full
                     ${isActive ? "text-navy before:w-full" : "text-[#4A5568]"}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Explore Dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className="relative font-medium text-[0.95rem] capitalize py-2 no-underline transition-colors duration-250 text-[#4A5568] hover:text-navy bg-transparent border-none cursor-pointer flex items-center gap-1.5"
              >
                Explore
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${exploreOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Panel */}
              <ul
                className={`absolute top-full left-1/2 -translate-x-1/2 bg-[#F9FBFA] min-w-[220px] py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-black/5 list-none m-0 z-[1002] transition-all duration-300
                  ${exploreOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2.5"
                  }`}
              >
                {exploreLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={() => setExploreOpen(false)}
                      className="block px-6 py-[0.7rem] text-[0.9rem] text-[#4A5568] no-underline capitalize transition-all duration-200 hover:bg-[rgba(28,50,58,0.05)] hover:text-navy whitespace-nowrap"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Book Mentorship CTA */}
          <Link
            to="/mentorship"
            className="hidden lg:inline-block py-[10px] px-[24px] text-[0.95rem] font-medium border-2 border-transparent rounded-[30px] bg-[#485E68] text-white no-underline transition-all duration-300 hover:bg-transparent hover:border-[#485E68] hover:text-[#485E68]"
          >
            Book Mentorship
          </Link>

          {/* Hamburger Button */}
          <button
            className="flex lg:hidden flex-col justify-center items-center gap-[5px] w-[44px] h-[44px] cursor-pointer z-[1001] bg-transparent border-none p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile navigation"
          >
            <span
              className={`block w-[26px] h-[3px] bg-black rounded-[10px] transition-all duration-300 ${
                mobileOpen ? "translate-y-[8px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[26px] h-[3px] bg-black rounded-[10px] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[26px] h-[3px] bg-black rounded-[10px] transition-all duration-300 ${
                mobileOpen ? "-translate-y-[8px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 lg:hidden
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMobile}
      />

      {/* Mobile Navigation Panel */}
      <nav
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[360px] sm:max-w-[400px] bg-white z-[1000] pt-20 px-[30px] pb-10 overflow-y-auto transition-transform duration-300 ease-in-out shadow-[-5px_0_30px_rgba(0,0,0,0.2)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-[25px] right-[25px] bg-transparent border-none text-[#666] cursor-pointer p-[5px] flex items-center justify-center transition-all duration-300 hover:text-black hover:scale-110 z-[1002]"
          onClick={closeMobile}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <ul className="list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.to} className="mb-[5px]">
              <NavLink
                to={link.to}
                onClick={closeMobile}
                className="block py-3.5 text-[1.1rem] font-medium text-black no-underline border-b border-[#f0f0f0] transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {/* Mobile Explore Dropdown */}
          <li className="border-b border-[#f0f0f0]">
            <button
              className="flex justify-between items-center w-full py-3.5 text-[1.1rem] font-medium text-black cursor-pointer bg-transparent border-none text-left"
              onClick={() => setMobileExploreOpen(!mobileExploreOpen)}
            >
              Explore
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${mobileExploreOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                mobileExploreOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {exploreLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMobile}
                  className="block py-3 px-5 text-base text-[#666] no-underline transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </li>

          {/* Mobile CTA */}
          <li className="mt-[30px]">
            <Link
              to="/mentorship"
              onClick={closeMobile}
              className="block w-full text-center py-3.5 text-base border border-navy rounded-lg text-navy no-underline font-medium transition-all duration-300 hover:bg-navy hover:text-white"
            >
              Book Mentorship
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
