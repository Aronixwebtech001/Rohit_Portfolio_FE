import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "What is a Payment Gateway?",
    a: "A payment gateway is a service that authorizes and processes payments for online and offline businesses, securely transferring transaction data between a customer and a merchant.",
  },
  {
    q: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    a: "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
  {
    q: "What platforms does ACME payment gateway support?",
    a: "ACME supports web, iOS, Android, and most major e-commerce platforms out of the box.",
  },
  {
    q: "Does ACME provide international payments support?",
    a: "Yes, ACME supports international payments across multiple currencies and regions.",
  },
  {
    q: "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
    a: "No setup fee or annual maintenance fee is charged — you only pay per successful transaction.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-14">Common Queries Answered</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white rounded-2xl p-2">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setActive(i)}
                className={`w-full flex items-center justify-between text-left px-5 py-4 rounded-xl text-sm ${
                  active === i ? "bg-cream font-medium" : "text-muted"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${active === i ? "bg-navy" : "bg-black/20"}`}
                  />
                  {f.q}
                </span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8">
            <h3 className="font-serif text-lg mb-4">{faqs[active].q}</h3>
            <p className="text-muted text-sm leading-relaxed">{faqs[active].a}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
