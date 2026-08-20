import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import Hero from "../components/home/Hero";
import LogoStrip from "../components/home/LogoStrip";
import RightChoice from "../components/home/RightChoice";
import Partnerships from "../components/home/Partnerships";
import CaseStudies from "../components/home/CaseStudies";
import Testimonials from "../components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <LogoStrip />

        <section id="about">
          <RightChoice />
        </section>

        <Partnerships />

        <CaseStudies />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}