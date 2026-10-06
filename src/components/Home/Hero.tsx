export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[385px] overflow-hidden bg-[#d6e0e4]"
    >
      <div className="relative mx-auto h-full max-w-[1440px]">

        {/* Hero Content */}
        <div className="absolute left-[4.5%] top-[83px] z-10 max-w-[430px]">

          <div className="flex gap-2 text-[7px] tracking-[0.05em] text-[#24353b]">
            <span>ENTREPRENEUR</span>
            <i>|</i>
            <span>INNOVATOR</span>
            <i>|</i>
            <span>INVESTOR</span>
          </div>

          <h1 className="mt-2 font-display text-[38px] leading-[0.9] text-[#18292f]">
            ROHIT JANGIR
          </h1>

          <p className="mt-4 max-w-[360px] text-[8.5px] leading-[1.65] text-[#25373d]">
            Founder &amp; CEO of multiple companies across Mobility,
            Technology, Construction, and Social Impact. On a mission to
            empower people with ideas, innovation, and integrity.
          </p>

          <div className="mt-5 flex gap-4">
            <a
              href="#pitch"
              className="rounded-[5px] bg-[#193740] px-4 py-2 text-[8px] text-white"
            >
              Pitch Your Idea
            </a>

            <a
              href="#mentorship"
              className="rounded-[5px] border border-[#26383d] px-4 py-2 text-[8px]"
            >
              Book 1:1 Consultant
            </a>
          </div>
        </div>

        {/* Rohit image */}
        <img
          src="/assets/hero-rohit.png"
          alt="Rohit Jangir"
          className="absolute bottom-[110px] right-[3%] h-[345px] w-auto "
        />
      </div>

      {/* Bottom wave */}
      <div
        className="absolute bottom-[-1px] left-0 right-0 h-[22px] bg-[#193740]"
        style={{
          clipPath:
            "polygon(0 10%,18% 48%,42% 68%,65% 54%,82% 70%,100% 20%,100% 100%,0 100%)",
        }}
      />
    </section>
  );
}