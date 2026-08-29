import ScrollReveal from "../shared/ScrollReveal";

export default function VenturesHero() {
  return (
    <section className="relative" style={{ paddingTop: 80 }}>
      <ScrollReveal className="w-full">
        <img
          src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208328/images/ventures/baner_02_copy.jpg.jpg"
          alt="Rohit Jangir Ventures Portfolio Overview"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          fetchPriority="high"
        />
      </ScrollReveal>
    </section>
  );
}
