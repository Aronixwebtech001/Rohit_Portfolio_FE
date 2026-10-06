import ScrollReveal from "../shared/ScrollReveal";

export default function VenturesHero() {
  return (
    <section className="flex w-full h-auto m-0 overflow-hidden bg-[#f0f2f5] pt-[64px] sm:pt-[72px] lg:pt-[80px]">
      <ScrollReveal className="w-full">
        <img
          src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208328/images/ventures/baner_02_copy.jpg.jpg"
          alt="Rohit Jangir Ventures Portfolio Overview"
          className="w-full h-auto block object-cover object-top sm:object-center"
          style={{ maxHeight: "50vh" }}
          loading="eager"
        />
      </ScrollReveal>
    </section>
  );
}
