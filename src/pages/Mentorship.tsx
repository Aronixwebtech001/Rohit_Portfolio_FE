import MentorshipHero from "../components/Mentorship/MentorshipHero";
import WhyMentorship from "../components/Mentorship/WhyMentorship";
import PricingPackages from "../components/Mentorship/PricingPackages";
import TopicsSection from "../components/Mentorship/TopicsSection";
import Stepper from "../components/shared/Stepper";
import CTASection from "../components/shared/CTASection";

const steps = [
  { number: 1, title: "Choose Package", description: "Select the mentorship package that suits your needs" },
  { number: 2, title: "Book Session", description: "Make payment and schedule your preferred time" },
  { number: 3, title: "Prepare", description: "Share your challenges and goals beforehand" },
  { number: 4, title: "Meet & Grow", description: "Get personalized guidance and actionable insights" },
];

export default function Mentorship() {
  return (
    <>
      <MentorshipHero />
      <WhyMentorship />
      <PricingPackages />
      <TopicsSection />
      <Stepper title="How It Works" steps={steps} />
      <CTASection />
    </>
  );
}
