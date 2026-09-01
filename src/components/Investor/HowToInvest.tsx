import { useEffect, useRef } from "react";

interface TimelineStep {
  number: number;
  label: string;
}

const steps: TimelineStep[] = [
  { number: 1, label: "Submit Enquiry" },
  { number: 2, label: "Initial Discussion" },
  { number: 3, label: "Proposal & Documentation" },
  { number: 4, label: "Investment Confirmation" },
];

export default function HowToInvest() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = wrapper.querySelectorAll(".timeline-step, .timeline-line");
            elements.forEach((el, index) => {
              setTimeout(() => el.classList.add("timeline-visible"), index * 200);
            });
            observer.unobserve(wrapper);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto text-center" style={{ maxWidth: 1400, padding: "0 4%" }}>
        <h2
          className="font-serif text-[#0F1F22] font-normal text-center"
          style={{ fontSize: "3rem", marginBottom: 80 }}
        >
          How to Invest?
        </h2>

        <div
          ref={wrapperRef}
          className="flex flex-col md:flex-row items-center md:items-start justify-center mx-auto"
          style={{ maxWidth: 960 }}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto" style={{ flex: i < steps.length - 1 ? 1 : undefined }}>
              {/* Step */}
              <div
                className="timeline-step flex flex-col items-center relative z-[2] flex-shrink-0"
                style={{ width: 120 }}
              >
                {/* Circle */}
                <div
                  className="step-circle relative flex items-center justify-center rounded-full"
                  style={{
                    width: 120,
                    height: 120,
                    backgroundColor: "#E2E8EC",
                    border: "1px solid #C4D1D6",
                  }}
                >
                  {/* Inner circle */}
                  <div
                    className="absolute rounded-full z-[1]"
                    style={{
                      width: 90,
                      height: 90,
                      backgroundColor: "#F8FBFE",
                      border: "1px solid #DDE4E8",
                    }}
                  />
                  <span
                    className="relative z-[2] font-sans text-[#1a2a32] font-medium"
                    style={{ fontSize: "2.2rem" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Label */}
                <p
                  className="font-sans text-[#485E68] font-normal leading-[1.4] text-center"
                  style={{
                    fontSize: "1rem",
                    width: 180,
                    marginLeft: -30,
                    marginRight: -30,
                    marginTop: 25,
                  }}
                >
                  {step.label}
                </p>
              </div>

              {/* Connector line (not after last step) */}
              {i < steps.length - 1 && (
                <>
                  <div
                    className="timeline-line relative flex-1 hidden md:block"
                    style={{
                      height: 2,
                      backgroundColor: "#A9B8C0",
                      marginTop: 60,
                      minWidth: 40,
                    }}
                  >
                    {/* Arrow */}
                    <div
                      className="arrow absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%) rotate(45deg)",
                        width: 14,
                        height: 14,
                        borderRight: "2px solid #A9B8C0",
                        borderTop: "2px solid #A9B8C0",
                      }}
                    />
                  </div>
                  <div
                    className="timeline-line relative flex-1 md:hidden w-[2px] h-[50px] my-[10px]"
                    style={{
                      backgroundColor: "#A9B8C0",
                    }}
                  >
                    {/* Down Arrow */}
                    <div
                      className="arrow absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%) rotate(135deg)",
                        width: 14,
                        height: 14,
                        borderRight: "2px solid #A9B8C0",
                        borderTop: "2px solid #A9B8C0",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
