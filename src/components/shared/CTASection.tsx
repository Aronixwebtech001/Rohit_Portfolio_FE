import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-navy-dark text-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Transform Your Vision?</h2>
        <p className="text-white/60 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
          Whether you're looking for investment, mentorship, or collaboration, let's explore how
          we can create something extraordinary together.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/investor"
            className="px-7 py-3 rounded-full border border-white/30 text-sm font-medium hover:bg-white hover:text-navy transition-colors"
          >
            Investors
          </Link>
          <Link
            to="/pitch"
            className="px-7 py-3 rounded-full border border-white/30 text-sm font-medium hover:bg-white hover:text-navy transition-colors"
          >
            Pitch Your Idea
          </Link>
        </div>
      </div>
    </section>
  );
}
