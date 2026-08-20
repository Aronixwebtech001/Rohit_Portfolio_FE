import VenturesHero from "../components/Ventures/VenturesHero";
import PortfolioStats from "../components/Ventures/PortfolioStats";
import VenturesDiagram from "../components/Ventures/VenturesDiagram";
import MissionVisionSection from "../components/Ventures/MissionVisionSection";
import CTASection from "../components/shared/CTASection";

export default function Ventures() {
  return (
    <>
      <VenturesHero />
      <PortfolioStats />
      <VenturesDiagram />
      <MissionVisionSection />
      <CTASection />
    </>
  );
}
