import type { StepData } from "../../types";

interface StepperProps {
  title: string;
  steps: StepData[];
}

export default function Stepper({ title, steps }: StepperProps) {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-20">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">{title}</h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col md:flex-row items-center flex-1 relative">
              <div className="flex flex-col items-center text-center w-full relative z-10">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-[#CFD8DC] flex items-center justify-center text-xl font-serif text-gray-800 mb-4">
                  {step.number}
                </div>
                <p className="font-medium text-xs text-gray-800">{step.title}</p>
                {step.description && (
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed max-w-[120px] mx-auto">{step.description}</p>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center absolute top-8 left-1/2 w-full -translate-y-1/2 z-0 pl-10 pr-10">
                  <div className="flex-1 h-[2px] bg-[#CFD8DC]"></div>
                  <div className="w-2 h-2 border-t-[2px] border-r-[2px] border-[#CFD8DC] transform rotate-45 -ml-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
