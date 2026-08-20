import CaseStudyHero from "../components/CaseStudy/CaseStudyHero";
import StatsSection from "../components/CaseStudy/StatsSection";
import ClientLogosGrid from "../components/CaseStudy/ClientLogosGrid";
import FAQSection from "../components/CaseStudy/FAQSection";
import CTASection from "../components/shared/CTASection";

export default function CaseStudy() {
  return (
    <>
      <CaseStudyHero />
      <StatsSection />
      <ClientLogosGrid />
      <FAQSection />
      <CTASection />
    </>
  );
}
