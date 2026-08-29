import { Link } from "react-router-dom";
import ScrollReveal from "../components/shared/ScrollReveal";

const expertise = [
  {
    icon: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208582/images/jfam/EXPERTISE-CARD-1.png.png",
    title: "General contracting",
    desc: "We manage the entire construction process, ensuring every project is completed on time, within budget, and to the highest standards.",
    count: "1"
  },
  {
    icon: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208574/images/jfam/EXPERTISE-CARD-2.png.png",
    title: "Design & build",
    desc: "Our integrated design & build approach streamlines construction by handling architectural planning and a smooth workflow from concept to completion.",
    count: "2"
  },
  {
    icon: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208574/images/jfam/EXPERTISE-CARD-2.png.png", // Reusing image as per original if needed, or placeholder
    title: "Project Management",
    desc: "Comprehensive project management services ensuring seamless execution from inception to final delivery.",
    count: "3"
  }
];

export default function JFAM() {
  return (
    <>
      <div className="pt-20"></div>

      {/* HERO */}
      <section className="relative w-full min-h-[80vh] bg-[#F8F9FA] overflow-hidden flex flex-col justify-center py-20 px-[5%]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208595/images/jfam/Home%20Image.png.png" 
            alt="JFAM Inspired Interior Space" 
            className="w-full h-full object-cover"
            fetchPriority="high" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-content mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-12">
          
          <ScrollReveal direction="left" className="flex-1 w-full max-w-[600px]">
            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white leading-[1.1] mb-8">
              DESIGNING SPACES<br />THAT INSPIRE &amp; ENDURE
            </h1>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-[400px]">
              <img 
                src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208579/images/jfam/jfam-hero1.png.png" 
                alt="small" 
                className="w-16 h-16 object-cover rounded-lg mb-4" 
              />
              <p className="text-white text-sm leading-relaxed">
                The company delivers end-to-end solutions, blending creativity with technical expertise.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex-1 flex flex-col items-end gap-6 w-full max-w-[400px]">
            <div className="rounded-2xl overflow-hidden border-4 border-white/20">
              <img 
                src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208571/images/jfam/Mask%20group.png.png" 
                alt="workspace" 
                className="w-full h-auto object-cover"
              />
            </div>
            <a 
              href="https://www.jfam.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-white hover:text-navy transition-colors duration-300"
            >
              Visit JFAM Official Site
              <span className="text-xl">→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24 bg-white" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          <ScrollReveal direction="left" className="flex-1">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy mb-6">About Company</h2>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-10">
              JFAM is a Delhi-based interior design and architecture studio dedicated to
              creating thoughtfully designed spaces that balance aesthetics, functionality,
              and long-term value.
            </p>
            <div className="flex flex-wrap items-center gap-8 opacity-60 grayscale">
              <img src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208584/images/jfam/IBM-LOGO.svg.svg" alt="IBM" className="h-8 object-contain" />
              <img src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208572/images/jfam/MAVERICK.svg.svg" alt="Maverick" className="h-8 object-contain" />
              <img src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208580/images/jfam/HP.svg.svg" alt="HP" className="h-8 object-contain" />
              <img src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208586/images/jfam/HL.svg.svg" alt="HL" className="h-8 object-contain" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex-1 grid grid-cols-2 gap-8">
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-serif text-4xl text-navy font-bold mb-2">08+</h3>
              <span className="text-sm text-[#4A5568] uppercase tracking-wider">Years of experience</span>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-serif text-4xl text-navy font-bold mb-2">500+</h3>
              <span className="text-sm text-[#4A5568] uppercase tracking-wider">Projects completed</span>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-serif text-4xl text-navy font-bold mb-2">98%</h3>
              <span className="text-sm text-[#4A5568] uppercase tracking-wider">Client satisfaction</span>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-serif text-4xl text-navy font-bold mb-2">15+</h3>
              <span className="text-sm text-[#4A5568] uppercase tracking-wider">Cities served</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-16 md:py-24 bg-bg-light" style={{ padding: "80px 5%" }}>
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-[clamp(1.6rem,4vw,2.5rem)] text-navy">Our Expertise in commercial construction</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>
            
            {expertise.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden mb-8 relative bg-white">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/20"></div>
                </div>
                <div className="bg-white px-8 py-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex-1 w-full relative pt-12 mt-[-40px] z-[-1]">
                  <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold font-serif text-xl z-20">
                    {item.count}
                  </div>
                  <h4 className="font-serif text-xl text-navy mb-4">{item.title}</h4>
                  <p className="text-sm text-[#4A5568] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
