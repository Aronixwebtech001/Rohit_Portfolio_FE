import ScrollReveal from "../shared/ScrollReveal";

export default function ProfileHero() {
  return (
    <section
      className="about-hero w-full overflow-hidden bg-[#1C323A] flex justify-center min-h-auto pt-[64px] sm:pt-[72px] lg:pt-[80px]"
    >
      <ScrollReveal className="w-full hero-inner m-0">
        <img
          src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208449/images/about/hero_bg.jpeg.jpg"
          alt="Rohit Jangir's Entrepreneurial Journey"
          className="hero-image block w-full h-auto object-cover object-top sm:object-center"
          style={{ maxHeight: "50vh" }}
          loading="eager"
          decoding="async"
        />
      </ScrollReveal>
    </section>
  );
}
