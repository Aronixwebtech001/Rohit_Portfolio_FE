import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "What were the primary challenges in designing the 18,000 sq.ft office space?",
    a: "The main challenges included balancing an open, collaborative environment with the need for focused, quiet work zones, ensuring optimal natural light distribution across a deep floor plan, and completing the project within a strict three-month timeline without compromising quality.",
  },
  {
    q: "How did JFAM integrate sustainability into the office design?",
    a: "We prioritized eco-friendly materials, energy-efficient HVAC systems, and automated lighting controls. Additionally, we incorporated biophilic design elements such as indoor greenery and maximized natural light to reduce energy consumption and boost employee well-being.",
  },
  {
    q: "What was the approach to technology integration in the workspace?",
    a: "The office was equipped with smart conference rooms featuring seamless AV integration, high-density Wi-Fi networks, and IoT-based environmental controls. This ensures a frictionless experience for both in-house teams and remote collaborations.",
  },
  {
    q: "Did the project adhere to the initial budget constraints?",
    a: "Yes, through meticulous value engineering and direct sourcing of materials, we managed to deliver the project 5% under the allocated budget while maintaining all premium finishes and functional requirements.",
  },
  {
    q: "How has the new office design impacted employee productivity?",
    a: "Post-occupancy surveys indicated a 24% increase in reported employee satisfaction and a noticeable boost in collaborative productivity, directly attributed to the versatile layout and enhanced environmental comfort.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">Common Queries Answered</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Question list */}
          <div className="bg-white rounded-2xl p-2 shadow-sm">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setActive(i)}
                className={`w-full flex items-center justify-between text-left px-5 py-4 rounded-xl text-sm transition-colors ${
                  active === i
                    ? "bg-cream font-medium text-navy"
                    : "text-muted hover:bg-cream/50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                      active === i ? "bg-navy" : "bg-black/15"
                    }`}
                  />
                  <span className="line-clamp-2">{f.q}</span>
                </span>
                <ChevronRight
                  size={16}
                  className={`shrink-0 ml-2 transition-transform ${
                    active === i ? "text-navy" : "text-muted/50"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Answer panel */}
          <div className="bg-white rounded-2xl p-8 shadow-sm min-h-[200px]">
            <h3 className="font-serif text-lg mb-4 text-navy">{faqs[active].q}</h3>
            <p className="text-muted text-sm leading-relaxed">{faqs[active].a}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
