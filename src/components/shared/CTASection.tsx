import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden text-center"
      style={{ padding: "100px 5%", background: "#485E68" }}
    >
      {/* Background Video — faint, visible on hover */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-10 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
        src="https://res.cloudinary.com/dqfuozgjq/video/upload/v1773208450/images/about/bg.mp4.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-[1] flex flex-col items-center w-full">
        <ScrollReveal>
          <h2
            className="font-serif font-normal text-white text-center w-full mb-[25px] leading-[1.2]"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Ready to Transform Your Vision?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p
            className="max-w-[800px] mx-auto text-white text-center font-sans font-light leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", marginBottom: 40 }}
          >
            Whether you're looking for investment, mentorship, or collaboration,
            let's explore how we can create something extraordinary together.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex justify-center gap-5 flex-wrap w-full">
            <Link
              to="/investor"
              className="inline-flex items-center justify-center min-w-[140px] py-3 px-[30px] rounded-md text-base font-semibold no-underline transition-all duration-300
                bg-white text-accent border-[1.5px] border-white
                hover:bg-transparent hover:text-white"
            >
              Investors
            </Link>
            <Link
              to="/pitch"
              className="inline-flex items-center justify-center min-w-[140px] py-3 px-[30px] rounded-md text-base font-semibold no-underline transition-all duration-300
                bg-transparent text-white border-[1.5px] border-white
                hover:bg-white hover:text-accent"
            >
              Pitch Your Idea
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
