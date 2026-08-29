import { Link } from "react-router-dom";
import ScrollReveal from "../components/shared/ScrollReveal";
import CTASection from "../components/shared/CTASection";

import mentorImage from "../assets/images/mentorship/image2.jpg";
import resourceImage from "../assets/images/case-study/image6.jpg";

const resources = [
  {
    title: "Building a High Performance Team Culture",
    desc: "Learn the 10 core principles for building a team that stays aligned and grows the business autonomously.",
    link: "/article?id=team-culture",
    image: mentorImage,
    btnText: "Read Team Culture Article →"
  },
  {
    title: "10 Essential Steps to Launch Your Startup",
    desc: "A comprehensive guide to turning your idea into a successful business venture.",
    link: "/article?id=startup",
    image: resourceImage,
    btnText: "Master Startup Launch Steps →"
  }
];

export default function Resources() {
  return (
    <>
      <div className="pt-20"></div>

      {/* HERO SECTION */}
      <section className="bg-bg-light">
        <ScrollReveal className="w-full">
          <img 
            src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208423/images/resources/RESOURCES.png.png" 
            alt="Resources" 
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            loading="lazy"
          />
        </ScrollReveal>
      </section>

      {/* RESOURCES SECTION */}
      <section className="py-16 md:py-24 bg-white" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy">Latest Articles & Insights</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link to={resource.link} className="block group h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                    <div className="h-[240px] overflow-hidden">
                      <img 
                        src={resource.image} 
                        alt={resource.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="font-serif text-xl text-navy mb-3 group-hover:text-accent transition-colors">{resource.title}</h3>
                      <p className="text-[#4A5568] text-sm leading-relaxed mb-6 flex-1">{resource.desc}</p>
                      <span className="text-navy font-semibold text-sm group-hover:text-accent transition-colors">{resource.btnText}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
