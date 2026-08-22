import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { TestimonialData } from "../../types";

interface TestimonialWithAvatar extends TestimonialData {
  avatar: string;
}

const testimonials: TestimonialWithAvatar[] = [
  {
    quote:
      "The work they did for our brand was truly amazing. Everything looked great and our customers loved it. Their team is very creative and always delivers on time.",
    name: "Priya Mehta",
    role: "Founder, CEO @ Designify India",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "They understood exactly what we needed and made it even better. The content was fresh, engaging and got us really good results. Highly recommend their work.",
    name: "Priya Mehta",
    role: "Founder @ Kreativ Studio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&crop=face",
  },
  {
    quote:
      "Working with their team was a great experience. They are professional, creative and very easy to work with. Our brand has grown a lot since we started working with them.",
    name: "Arjun Kapoor",
    role: "Co-Founder @ BrandBazaar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        {/* Heading row with controls */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="font-serif text-3xl md:text-4xl">What Our Clients Say</h2>
          <div className="hidden md:flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-card transition-colors">
              <ArrowLeft size={16} />
            </button>
            <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-card transition-colors">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              {/* Stars — gold/yellow as per reference */}
              <div className="flex gap-1 mb-4" style={{ color: "#F5A623" }}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Dashed divider */}
              <div className="border-t border-dashed border-black/10 mb-4" />

              {/* Quote */}
              <p className="text-sm text-muted leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              {/* Avatar + info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-card shrink-0 overflow-hidden">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="w-2.5 h-2.5 rounded-full bg-navy" />
          <span className="w-2.5 h-2.5 rounded-full bg-black/15" />
        </div>
      </div>
    </section>
  );
}
