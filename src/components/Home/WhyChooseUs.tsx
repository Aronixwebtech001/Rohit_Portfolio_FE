import { Check } from "lucide-react";
import handshake from "../../assets/images/rect-40064.png";

const points = [
  "End to end planning and optimisation of daily bus routes and scheduling.",
  "Dedicated fleet operations handled by experienced transport professionals.",
  "Bus leasing and ownership options tailored to the institutions.",
  "Reduced administrative workload with complete transport support.",
  "Reliable, safe and cost efficient mobility solutions.",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Why we're the right choice</h2>
          <ul className="space-y-4">
            {points.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-sm text-muted">
                <Check size={16} className="text-teal mt-0.5 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
          <img src={handshake} alt="Partnership handshake" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
