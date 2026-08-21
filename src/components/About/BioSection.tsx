import portrait from "../../assets/images/rect-43.png";
import { Sparkles } from "lucide-react";

const stats = [
  "5+ years of entrepreneurial journey",
  "15+ industry awards and recognition",
  "Founded 5+ successful companies",
  "Led projects worth ₹50+ crores",
];

export default function BioSection() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start mb-12">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-card shadow-md">
            <img src={portrait} alt="Rohit Jangir" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-3xl mb-1">Rohit Jangir</h2>
            <p className="text-teal text-sm mb-5 font-medium italic">
              Entrepreneur, Innovator &amp; Investor
            </p>
            <p className="text-muted text-sm leading-relaxed mb-4">
              With over 5 years of experience in building businesses from the ground up, I've
              transformed ideas into thriving ventures across multiple industries. My journey
              began with a passion for innovation and a commitment to creating meaningful impact.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              With over 5 years of experience in building businesses from the ground up, I've
              transformed ideas into thriving ventures across multiple industries. My journey
              began with a passion for innovation and a commitment to creating meaningful impact.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-black/5 pt-8">
          {stats.map((s) => (
            <p key={s} className="text-sm text-muted flex items-center gap-2">
              <Sparkles size={14} className="text-teal shrink-0" />
              <span>{s}</span>
              <span className="text-teal ml-1">&rarr;</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
