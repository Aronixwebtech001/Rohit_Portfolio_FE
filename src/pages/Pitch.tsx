import PitchHero from "../components/Pitch/PitchHero";
import WhatILookFor from "../components/Pitch/WhatILookFor";
import PitchForm from "../components/Pitch/PitchForm";
import Stepper from "../components/shared/Stepper";
import CTASection from "../components/shared/CTASection";

const steps = [
  { number: 1, title: "Submit Pitch" },
  { number: 2, title: "Initial Review" },
  { number: 3, title: "Meeting" },
  { number: 4, title: "Partnership" },
];

export default function Pitch() {
  return (
    <>
      <PitchHero />
      <WhatILookFor />
      <PitchForm />
      <Stepper title="The Investment Process" steps={steps} />
      <CTASection />
    </>
  );
}
