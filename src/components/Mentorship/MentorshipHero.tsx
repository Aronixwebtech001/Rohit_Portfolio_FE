import heroImage from "../../assets/images/investor-hero.jpg";

export default function MentorshipHero() {
  return (
    <section className="bg-[#DCE4E6]">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
          Make Something
          <br />
          Different
        </h1>
        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-card flex items-center justify-center">
          <img src={heroImage} alt="Mentorship" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
