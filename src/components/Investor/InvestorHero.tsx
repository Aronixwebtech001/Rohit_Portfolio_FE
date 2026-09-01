import ScrollReveal from "../shared/ScrollReveal";

export default function InvestorHero() {
  return (
    <section
      className="overflow-hidden relative"
      style={{
        backgroundColor: "#E6EBED",
        padding: "100px 0 0px",
        borderBottom: "1px solid #D1D5D8",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1400, padding: "0 4%" }}>
        <div className="flex items-center justify-between gap-10 flex-col lg:flex-row">
          {/* Text */}
          <ScrollReveal direction="left" className="z-[2] flex-[1.2]">
            <div>
              <h1
                className="font-serif text-[#0F1F22] leading-[1.1] font-normal"
                style={{
                  fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                  marginBottom: 25,
                  letterSpacing: "-0.02em",
                }}
              >
                Investing in Scalable Innovation
              </h1>
              <p
                className="font-sans text-[#485E68] font-light leading-[1.6]"
                style={{
                  fontSize: "clamp(1rem, 1.1vw, 1.2rem)",
                  maxWidth: 580,
                }}
              >
                We partner with ambitious founders building high-growth technology businesses. Our strategic
                capital and operational expertise help transform early-stage potential into longterm market
                leadership.
              </p>
            </div>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal direction="right" className="relative z-[1] flex-1 flex justify-end lg:-mr-[70px] lg:mt-[50px]">
            <img
              src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208334/images/ventures/invester_hero.png.png"
              alt="Strategic Investment Illustration"
              className="block h-auto"
              style={{ maxWidth: "115%" }}
              fetchPriority="high"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
