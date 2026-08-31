import InvestorHero from "../components/Investor/InvestorHero";
import InvestmentThesis from "../components/Investor/InvestmentThesis";
import InvestorForm from "../components/Investor/InvestorForm";
import HowToInvest from "../components/Investor/HowToInvest";
import CTASection from "../components/shared/CTASection";

export default function Investor() {
  return (
    <>
      <InvestorHero />
      <InvestmentThesis />
      <InvestorForm />
      <HowToInvest />
      <CTASection />
    </>
  );
}
