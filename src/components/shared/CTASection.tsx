import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-[#465A5F] text-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Transform Your Vision?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Whether you're looking for investment, mentorship, or collaboration, let's explore how we
          can create something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/investor"
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-white text-[#465A5F] text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Investors
          </Link>
          <Link
            to="/pitch"
            className="w-full sm:w-auto px-8 py-3 rounded-md border border-white/70 text-sm font-medium hover:bg-white hover:text-[#465A5F] transition-colors"
          >
            Pitch Your Idea
          </Link>
        </div>
      </div>
    </section>
  );
}
