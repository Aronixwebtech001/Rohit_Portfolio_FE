import { Star } from "lucide-react";
import type { TestimonialData } from "../../types";

const testimonials: TestimonialData[] = [
  {
    quote:
      "The work they did for our brand was truly amazing. Everything looked great and our customers loved it. Their team is very creative and always delivers on time.",
    name: "Priya Mehta",
    role: "CEO @ Designify India",
  },
  {
    quote:
      "They understood exactly what we needed and made it even better. The content was fresh, engaging and got us really good results. Highly recommend their work.",
    name: "Priya Mehta",
    role: "Founder @ Kreativ Studio",
  },
  {
    quote:
      "Working with their team was a great experience. They are professional, creative and very easy to work with. Our brand has grown a lot since we started working with them.",
    name: "Arjun Kapoor",
    role: "Co-Founder @ BrandBazaar",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-card">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6">
              <div className="flex gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">"{t.quote}"</p>
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
