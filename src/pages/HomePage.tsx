import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import VisionCTA from "../components/common/VisionCTA";

import HomeHero from "../components/home/HomeHero";
import AboutIntro from "../components/home/AboutIntro";
import AchievementStrip from "../components/home/AchievementStrip";
import LeadershipQuote from "../components/home/LeadershipQuote";
import JourneySection from "../components/home/JourneySection";
import ExpertiseSection from "../components/home/ExpertiseSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#18212b]">
      <Header />

      <main>
        <HomeHero />

        <AboutIntro />

        <AchievementStrip />

        <LeadershipQuote />

        <JourneySection />

        <ExpertiseSection />

        <VisionCTA />
      </main>

      <Footer />
    </div>
  );
}