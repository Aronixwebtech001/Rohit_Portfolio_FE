import type { ArticleCard } from "../../types";

const articles: ArticleCard[] = Array.from({ length: 6 }).map(() => ({
  image: "",
  title: "10 Essential Steps to Launch Your Startup",
  excerpt: "A comprehensive guide to turning your idea into a successful business venture.",
}));

export default function ArticlesGrid() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">Latest Articles &amp; Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-black/5">
              <div className="aspect-[4/3] bg-card" />
              <div className="p-5">
                <h3 className="font-serif text-lg mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-muted mb-4">{a.excerpt}</p>
                <span className="text-sm font-medium text-navy">Read More &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
