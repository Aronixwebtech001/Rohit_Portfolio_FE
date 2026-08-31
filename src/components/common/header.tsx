import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["About", "#about"],
  ["Venture", "#ventures"],
  ["Pitch", "#pitch"],
  ["Investor", "#investor"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 h-[43px] border-b border-black/5 bg-white">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8">

        <a href="#top">
          <img
            src="/assets/logo.png"
            className="w-[111px]"
            alt="Rohit Jangir"
          />
        </a>

        <nav className="hidden items-center gap-7 text-[9px] text-[#11181b] md:flex">
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#0b7285]"
            >
              {label}
            </a>
          ))}

          <a
            href="#mentorship"
            className="rounded-full border border-[#1d2b30] px-4 py-[7px] hover:bg-[#19363e] hover:text-white"
          >
            Book Mentorship
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <nav className="absolute left-0 right-0 top-[43px] flex flex-col gap-4 border-b bg-white px-8 py-5 text-sm md:hidden">
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a href="#mentorship">
            Book Mentorship
          </a>
        </nav>
      )}
    </header>
  );
}