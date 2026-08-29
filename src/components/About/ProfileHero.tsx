import ScrollReveal from "../shared/ScrollReveal";

export default function ProfileHero() {
  return (
    <section className="relative" style={{ paddingTop: 80 }}>
      <ScrollReveal className="w-full">
        <img
          src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208449/images/about/hero_bg.jpeg.jpg"
          alt="Rohit Jangir's Entrepreneurial Journey"
          className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover"
          fetchPriority="high"
        />
      </ScrollReveal>
    </section>
  );
}
