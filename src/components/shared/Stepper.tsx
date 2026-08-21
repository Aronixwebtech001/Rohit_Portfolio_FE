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
              <div className="flex flex-col items-center text-center w-40 md:w-44">
                <div className="w-16 h-16 rounded-full border-2 border-card bg-white flex items-center justify-center text-xl font-serif text-navy mb-4 shadow-sm">
                  {step.number}
                </div>
                <p className="font-medium text-sm text-navy mb-1">{step.title}</p>
                {step.description && (
                  <p className="text-muted text-xs leading-relaxed px-2">{step.description}</p>
                )}
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center mx-2 mt-[-3rem]">
                  <div className="w-8 border-t border-dashed border-muted/40" />
                  <ChevronRight size={16} className="text-muted/50 -ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
