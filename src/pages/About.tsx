import ProfileHero from "../components/About/ProfileHero";
import BioSection from "../components/About/BioSection";
import MediaImpactSection from "../components/About/MediaImpactSection";
import QuoteBanner from "../components/About/QuoteBanner";
import JourneyTimeline from "../components/About/JourneyTimeline";
import ExpertiseSection from "../components/About/ExpertiseSection";
import CTASection from "../components/shared/CTASection";

export default function About() {
  return (
    <>
      <ProfileHero />
      <BioSection />
      <MediaImpactSection />
      <QuoteBanner />
      <JourneyTimeline />
      <ExpertiseSection />
      <CTASection />
    </>
  );
}
