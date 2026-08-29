import ScrollReveal from "../shared/ScrollReveal";

export default function QuoteBanner() {
  return (
    <section className="py-16 md:py-24 bg-navy text-center" style={{ padding: "80px 5%" }}>
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal>
          <p className="font-serif text-white text-[clamp(1.2rem,3vw,1.8rem)] leading-relaxed italic mb-6">
            "An idea is only the spark, it is the relentless hard work that turns it into a fire. I don't just
            build businesses to reach a finish line, I design legacies that stand the Test of Time. While
            others focus on the transaction, I am focused on the foundation."
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <span className="text-white/70 text-base font-sans">— Rohit Jangir</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
