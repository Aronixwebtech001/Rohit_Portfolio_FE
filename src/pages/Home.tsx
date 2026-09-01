import HeroSection from "../components/Home/HeroSection";
import PartnerLogos from "../components/Home/PartnerLogos";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import PartnershipsSection from "../components/Home/PartnershipsSection";
import CaseStudiesSection from "../components/Home/CaseStudiesSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import CTASection from "../components/shared/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerLogos />
      <WhyChooseUs />
      <PartnershipsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
