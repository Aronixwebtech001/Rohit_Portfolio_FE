import { Check } from "lucide-react";
import handshake from "../../assets/images/final/home-handshake.png";

const points = [
  "End to end planning and optimisation of daily bus routes and scheduling.",
  "Dedicated fleet operations handled by experienced transport professionals.",
  "Bus leasing and ownership options tailored to the institutions.",
  "Reduced your administrative workload with complete transport support.",
  "Reliable, safe and cost efficient mobility solutions.",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-snug">
            Why we're the right choice
          </h2>
          <ul className="space-y-5">
            {points.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-[15px] text-muted">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center">
                  <Check size={13} className="text-teal" />
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
          <img src={handshake} alt="Partnership handshake" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
