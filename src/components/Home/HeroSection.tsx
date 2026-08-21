import portrait from "../../assets/images/rect-43.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-[#DCE4E6] overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 relative z-10">
        <div className="max-w-[55%]">
          <p className="uppercase tracking-[0.25em] text-xs text-muted mb-4">
            Entrepreneur &nbsp;|&nbsp; Innovator &nbsp;|&nbsp; Investor
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-5 leading-[1.1]">
            ROHIT JANGIR
          </h1>
          <p className="text-muted leading-relaxed mb-8 max-w-md text-[15px]">
            Founder &amp; CEO of multiple companies across Mobility, Technology, Construction, and
            Social Impact. On a mission to empower people with ideas, innovation, and integrity.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/pitch"
              className="px-7 py-3 rounded-lg bg-navy text-white text-sm font-medium hover:bg-navy-dark transition-colors"
            >
              Pitch Your Idea
            </Link>
            <Link
              to="/mentorship"
              className="px-7 py-3 rounded-lg border border-navy text-sm font-medium hover:bg-navy hover:text-white transition-colors"
            >
              Book 1:1 Consultant
            </Link>
          </div>
        </div>
      </div>

      {/* Full-bleed portrait — absolute right, fills hero height */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[42%]">
        <img
          src={portrait}
          alt="Rohit Jangir"
          className="w-full h-full object-cover object-top"
        />
        {/* Soft gradient fade on left edge */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#DCE4E6] to-transparent" />
      </div>

      {/* Wave SVG divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#0F1B21"
          />
        </svg>
      </div>
    </section>
  );
}
