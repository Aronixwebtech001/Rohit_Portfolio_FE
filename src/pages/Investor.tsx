import InvestorHero from "../components/Investor/InvestorHero";
import InvestmentThesis from "../components/Investor/InvestmentThesis";
import InvestorForm from "../components/Investor/InvestorForm";
import Stepper from "../components/shared/Stepper";
import CTASection from "../components/shared/CTASection";

const steps = [
  { number: 1, title: "Submit Enquiry" },
  { number: 2, title: "Initial Discussion" },
  { number: 3, title: "Proposal & Documentation" },
  { number: 4, title: "Investment Confirmation" },
];

export default function Investor() {
  return (
    <>
      <InvestorHero />
      <InvestmentThesis />
      <InvestorForm />
      <Stepper title="How to Invest?" steps={steps} />
      <CTASection />
    </>
  );
}
