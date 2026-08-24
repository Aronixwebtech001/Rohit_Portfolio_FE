import investorIllustration from "../../assets/images/investor-hero.jpg";

export default function InvestorHero() {
  return (
    <section className="bg-[#DCE4E6]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] mb-4 leading-tight whitespace-nowrap">
            Investing in Scalable Innovation
          </h1>
          <p className="text-navy/60 text-[15px] max-w-md leading-relaxed">
            We partner with ambitious founders building high-growth technology businesses. Our
            strategic capital and operational expertise help transform early-stage potential into
            long-term market leadership.
          </p>
        </div>
        <div className="flex justify-end">
          <img
            src={investorIllustration}
            alt="Investment growth illustration"
            className="w-full max-w-sm rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
