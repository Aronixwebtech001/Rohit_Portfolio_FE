import portrait from "../../assets/images/rect-43.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-xs text-muted mb-4">
            Entrepreneur &nbsp;·&nbsp; Innovator &nbsp;·&nbsp; Investor
          </p>
          <h1 className="font-serif text-4xl md:text-5xl mb-5">Rohit Jangir</h1>
          <p className="text-muted leading-relaxed mb-8 max-w-md">
            Founder &amp; CEO of multiple companies across Mobility, Technology, Construction, and
            Social Impact. On a mission to empower people with ideas, innovation, and integrity.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/pitch"
              className="px-6 py-3 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy-dark"
            >
              Pitch Your Idea
            </Link>
            <Link
              to="/mentorship"
              className="px-6 py-3 rounded-full border border-navy text-sm font-medium hover:bg-navy hover:text-white"
            >
              Book 1:1 Consultant
            </Link>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-card aspect-[4/3]">
          <img src={portrait} alt="Rohit Jangir" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
