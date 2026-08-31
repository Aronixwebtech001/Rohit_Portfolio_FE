import ScrollReveal from "../shared/ScrollReveal";

export default function VenturesHero() {
  return (
    <section className="flex w-full h-auto m-0 overflow-hidden bg-[#f0f2f5]" style={{ padding: "60px 0 0 0" }}>
      <ScrollReveal className="w-full">
        <img
          src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208328/images/ventures/baner_02_copy.jpg.jpg"
          alt="Rohit Jangir Ventures Portfolio Overview"
          className="w-full h-auto block object-cover object-center"
          style={{ maxHeight: "50vh" }}
          fetchPriority="high"
        />
      </ScrollReveal>
    </section>
  );
}
