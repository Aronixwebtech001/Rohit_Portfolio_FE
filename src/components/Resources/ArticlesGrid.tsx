import { ArticleCard } from "../../types";
import { Link } from "react-router-dom";

const articles: ArticleCard[] = [
  {
    image: "",
    title: "10 Essential Steps to Launch Your Startup",
    excerpt: "A comprehensive guide to turning your idea into a successful business venture.",
  },
  {
    image: "",
    title: "Mastering the Art of Fundraising",
    excerpt: "How to pitch investors, build relationships, and secure the capital you need to grow.",
  },
  {
    image: "",
    title: "Building a Winning Team from Scratch",
    excerpt: "Strategies for recruiting, retaining, and empowering top talent in your startup.",
  },
  {
    image: "",
    title: "Digital Marketing on a Bootstrap Budget",
    excerpt: "Cost-effective marketing tactics that drive real results for early-stage businesses.",
  },
  {
    image: "",
    title: "Scaling Operations Without Losing Quality",
    excerpt: "How to grow your business operations while maintaining the standards your customers expect.",
  },
  {
    image: "",
    title: "The Power of Strategic Partnerships",
    excerpt: "Leveraging partnerships to accelerate growth and open new market opportunities.",
  },
];

export default function ArticlesGrid() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif uppercase text-3xl md:text-4xl text-center mb-14 tracking-widest text-navy">
          RESOURCES & TOOLS
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[4/3] bg-card overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-navy/5 to-teal/5 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">{a.excerpt}</p>
                <Link
                  to="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-sm font-medium text-navy hover:text-teal transition-colors"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
