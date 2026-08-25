import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "What is a Payment Gateway?",
    a: "A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers. The term includes not only the physical card-reading devices found in brick-and-mortar retail stores but also the payment processing portals found in online stores.",
  },
  {
    q: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    a: "No, you do not need to pay Instapay when there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
  {
    q: "What platforms does ACME payment gateway support?",
    a: "ACME payment gateway supports a wide variety of platforms including Shopify, WooCommerce, Magento, and custom built websites via our robust REST APIs.",
  },
  {
    q: "Does ACME provide international payments support?",
    a: "Yes, we support payments in over 100+ international currencies allowing you to seamlessly accept payments from customers globally.",
  },
  {
    q: "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
    a: "We do not charge any setup fee or annual maintenance fees. You only pay a small, transparent transaction fee for each successful payment processed.",
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
