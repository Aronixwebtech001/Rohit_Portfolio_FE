import { StepData } from "../../types";
import { ChevronRight } from "lucide-react";

interface StepperProps {
  title: string;
  steps: StepData[];
}

export default function Stepper({ title, steps }: StepperProps) {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">{title}</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center">
              {/* Step */}
              <div className="flex flex-col items-center text-center w-48 md:w-56">
                <div className="w-20 h-20 rounded-full border-4 border-[#F1F3F4] bg-white flex items-center justify-center text-2xl font-serif text-navy mb-5 shadow-sm">
                  {step.number}
                </div>
                <p className="font-serif text-lg text-navy mb-2">{step.title}</p>
                {step.description && (
                  <p className="text-muted text-sm leading-relaxed px-4">{step.description}</p>
                )}
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center mx-2 mt-[-5rem]">
                  <div className="w-12 border-t-2 border-black/10" />
                  <ChevronRight size={20} className="text-black/30 -ml-2" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
