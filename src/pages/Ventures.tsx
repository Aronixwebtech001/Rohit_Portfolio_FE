import VenturesHero from "../components/Ventures/VenturesHero";
import PortfolioStats from "../components/Ventures/PortfolioStats";
import VenturesDiagram from "../components/Ventures/VenturesDiagram";
import CTASection from "../components/shared/CTASection";

export default function Ventures() {
  return (
    <>
      <VenturesHero />
      <PortfolioStats />
      <VenturesDiagram />
      <CTASection />
    </>
  );
}
