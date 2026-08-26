import investorIllustration from "../../assets/images/investor-hero.jpg";

export default function InvestorHero() {
  return (
    <section className="bg-[#DCE4E6]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] mb-6 leading-[1.1] text-navy">
            Investing in<br />Scalable Innovation
          </h1>
          <p className="text-muted text-[17px] max-w-lg leading-relaxed">
            We partner with ambitious founders building high-growth technology businesses. Our
            strategic capital and operational expertise help transform early-stage potential into
            long-term market leadership.
          </p>
        </div>
        <div className="flex justify-end">
          <img
            src={investorIllustration}
            alt="Investment growth illustration"
            className="w-full max-w-xl rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
