import { Check } from "lucide-react";
import meetingPhoto from "../../assets/images/mentorship/image2.jpg";

const topics = [
  {
    group: "Strategy",
    items: ["Business Model Development", "Market Strategy and Positioning", "Product Market Fit"],
  },
  {
    group: "Leadership",
    items: ["Team Building", "Financial Planning", "Leadership Development"],
  },
  {
    group: "Growth",
    items: ["Fundraising Strategy", "Growth Marketing", "Scaling Operations"],
  },
  {
    group: "Operations",
    items: ["Operational Framework Design", "Financial Planning", "Process Optimization"],
  },
];

export default function TopicsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl mb-8">Topics I Can Help You With</h2>
          <div className="grid grid-cols-2 gap-6">
            {topics.map((t) => (
              <div key={t.group} className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm">
                <p className="font-serif text-lg mb-4">{t.group}</p>
                <ul className="space-y-3">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <Check size={16} className="text-teal mt-0.5 shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3]">
          <img src={meetingPhoto} alt="Team meeting" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
