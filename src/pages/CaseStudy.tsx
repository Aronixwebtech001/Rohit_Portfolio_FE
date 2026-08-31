import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const caseStudyItems = [
  {
    tab: "Interior",
    title: "Transforming Operations into Scalable and Profitable Enterprises",
    desc: "JFAM empowers businesses with structured leadership, financial discipline, and technology integration, enabling sustainable growth, operational efficiency, and long-term enterprise scalability.",
    img: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208422/images/resources/CASE_STUDY_003.jpg.png"
  },
  {
    tab: "Mobility",
    title: "Driving Seamless Mobility Across India's Growing Infrastructure",
    desc: "Aaru Mobility delivers integrated transportation solutions, combining technology, efficient fleet management, and strategic operations to enable reliable, scalable mobility infrastructure across India.",
    img: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208441/images/resources/Casestudy1.png.png"
  },
  {
    tab: "Real Estate",
    title: "Transforming Infrastructure Through Structured Systems and Strategy",
    desc: "Strategic management, standardized processes, and technology integration enabled efficient operations, stronger brand credibility, and scalable infrastructure growth for long-term development.",
    img: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208435/images/resources/Casestudy2.jpg.jpg"
  },
  {
    tab: "Design System",
    title: "Building Comprehensive Tech Solutions for the Future",
    desc: "Aronix Web Tech drives digital transformation through end-to-end software development, innovative design systems, and robust cloud architectures to help businesses scale globally.",
    img: "/images/design_system.jpg"
  }
];

const faqs = [
  {
    q: "What was the primary goal of this 2025 investment?",
    a: "The goal was to scale revenue and improve operational efficiency for a high-potential business through a structured 12-month transformation."
  },
  {
    q: "What were the main challenges the business faced initially?",
    a: "The company suffered from inconsistent revenue, a lack of operational structure, and weak financial monitoring."
  },
  {
    q: "What strategy was used to turn the business around?",
    a: "Leadership implemented a five-pillar plan focusing on capital infusion, process standardization, technology integration, and aggressive client acquisition."
  },
  {
    q: "How was the implementation plan structured?",
    a: "The transformation was executed in three phases: financial stabilization, operational transformation, and market expansion via B2B targeting."
  },
  {
    q: "What was the ultimate impact of Rohit Jangir's leadership?",
    a: "His strategic vision shifted the business from a \"survival model\" to a scalable, profitable enterprise focused on long-term value."
  }
];

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <>
      {/* HERO SECTION */}
      <section 
        className="w-full h-[60vh] min-h-[400px] mt-[70px] bg-no-repeat bg-center bg-cover relative flex flex-col justify-center text-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208514/images/case-study/bg.jpeg.png')" }}
      >
        <div className="hero-content"></div>
      </section>

      {/* TABS SECTION */}
      <section className="py-[30px] px-[5%] bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1200px] mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <ul className="flex gap-[60px] justify-start flex-wrap list-none p-0 m-0">
            {caseStudyItems.map((item, index) => (
              <li 
                key={index} 
                onClick={() => setActiveTab(index)}
                className={`text-[0.9rem] pb-[25px] pt-[15px] cursor-pointer font-medium relative whitespace-nowrap uppercase tracking-[0.5px] transition-colors duration-300 ${activeTab === index ? 'text-[#21333e] font-semibold' : 'text-[#94a3b8]'}`}
              >
                <span className="tab-text">{item.tab}</span>
                {activeTab === index && (
                  <div className="absolute bottom-[10px] left-0 w-full h-[3px] bg-[#000000]"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CASE STUDY ITEM SECTION */}
      <section className="py-[40px] bg-[#e9f1f4]">
        <div className="max-w-[1300px] mx-auto px-5">
          {caseStudyItems.map((item, index) => (
            <div 
              key={index}
              className={`${activeTab === index ? 'grid' : 'hidden'} grid-cols-1 lg:grid-cols-2 gap-[50px] items-center bg-white rounded-[30px] p-[40px] lg:p-[60px] animate-[fadeIn_0.5s_ease_forwards]`}
            >
              <div className="item-content">
                <h2 className="font-forum text-[clamp(2rem,3vw,2.5rem)] text-[#21333e] mb-5 leading-[1.2] font-normal">
                  {item.title}
                </h2>
                <p className="text-[1.05rem] text-[#475569] leading-[1.6] mb-[30px] max-w-[90%] font-normal text-justify">
                  {item.desc}
                </p>
              </div>
              <div className="w-full relative rounded-[20px]">
                <div className="w-full h-full bg-transparent rounded-[20px] border border-[#e2e8f0] overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={`Case Study: ${item.tab}`} 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section ref={statsRef} className="py-[60px] px-[5%] bg-white max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] text-center pb-5">
          <div className="relative">
            <h4 className="text-[1.2rem] text-[#21333e] font-medium mb-[30px]">Years Experience</h4>
            <p className="text-[clamp(1.2rem,2vw,1.4rem)] font-medium text-[#21333e] mb-0">
              {statsInView ? <CountUp end={7} duration={2.5} /> : "0"}
            </p>
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[50px] h-[3px] bg-[#000000]"></div>
          </div>
          <div className="relative">
            <h4 className="text-[1.2rem] text-[#21333e] font-medium mb-[30px]">Project Completed</h4>
            <p className="text-[clamp(1.2rem,2vw,1.4rem)] font-medium text-[#21333e] mb-0">
              {statsInView ? <CountUp end={91} duration={2.5} /> : "0"}
            </p>
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[50px] h-[3px] bg-[#000000]"></div>
          </div>
          <div className="relative">
            <h4 className="text-[1.2rem] text-[#21333e] font-medium mb-[30px]">Startup Funding</h4>
            <p className="text-[clamp(1.2rem,2vw,1.4rem)] font-medium text-[#21333e] mb-0">
              ${statsInView ? <CountUp end={100} duration={2.5} /> : "0"}m
            </p>
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[50px] h-[3px] bg-[#000000]"></div>
          </div>
          <div className="relative">
            <h4 className="text-[1.2rem] text-[#21333e] font-medium mb-[30px]">Industries Served</h4>
            <p className="text-[clamp(1.2rem,2vw,1.4rem)] font-medium text-[#21333e] mb-0">
              {statsInView ? <CountUp end={10} duration={2.5} /> : "0"}
            </p>
            <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[50px] h-[3px] bg-[#000000]"></div>
          </div>
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <section className="py-[20px] px-[5%] pb-[40px] text-center">
        <div className="mb-[80px]">
          <h2 className="font-forum text-[clamp(2.5rem,4vw,3.5rem)] text-[#21333e] leading-[1.2] font-normal">
            Relied upon by a Fresh<br />Generation of Companies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] max-w-[1000px] mx-auto">
          {/* Company 1 */}
          <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] group">
            <div className="w-full h-full bg-cover bg-center object-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208508/images/case-study/aaru-mobility.png.png')" }}></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.4)] p-[30px_20px_20px] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-left">
              <h4 className="text-white text-[1.1rem] font-semibold mb-[5px]">AARU Mobility Platform</h4>
              <p className="text-[rgba(255,255,255,0.8)] text-[0.85rem] m-0">Enterprise mobility and logistics management system</p>
            </div>
          </div>

          {/* Company 2 */}
          <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] group">
            <div className="w-full h-full bg-cover bg-center object-cover" style={{ backgroundImage: "url('/images/vision_to_reality.jpg')" }}></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.4)] p-[30px_20px_20px] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-left">
              <h4 className="text-white text-[1.1rem] font-semibold mb-[5px]">Vision to Reality</h4>
              <p className="text-[rgba(255,255,255,0.8)] text-[0.85rem] m-0">Turning Vision into Reality Through Strategic Development</p>
            </div>
          </div>

          {/* Company 3 */}
          <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] group">
            <div className="w-full h-full bg-cover bg-center object-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208517/images/case-study/awt.png.png')" }}></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.4)] p-[30px_20px_20px] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-left">
              <h4 className="text-white text-[1.1rem] font-semibold mb-[5px]">Aronix Web Tech Platform</h4>
              <p className="text-[rgba(255,255,255,0.8)] text-[0.85rem] m-0">Full-stack digital solutions for web, mobile and cloud</p>
            </div>
          </div>

          {/* Company 4 (Video) */}
          <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] group">
            <video 
              className="w-full h-full object-cover" 
              src="https://res.cloudinary.com/dqfuozgjq/video/upload/v1773208504/images/case-study/video%202.mp4.mp4" 
              autoPlay loop muted playsInline aria-hidden="true"
            ></video>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.4)] p-[30px_20px_20px] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-left">
              <h4 className="text-white text-[1.1rem] font-semibold mb-[5px]">EdTech Platform</h4>
              <p className="text-[rgba(255,255,255,0.8)] text-[0.85rem] m-0">Online learning management system</p>
            </div>
          </div>

          {/* Company 5 */}
          <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] group">
            <div className="w-full h-full bg-cover bg-center object-cover" style={{ backgroundImage: "url('https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208512/images/case-study/jfam.jpeg.jpg')" }}></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.4)] p-[30px_20px_20px] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-left">
              <h4 className="text-white text-[1.1rem] font-semibold mb-[5px]">JFAM Construction Platform</h4>
              <p className="text-[rgba(255,255,255,0.8)] text-[0.85rem] m-0">Architecture and construction management system</p>
            </div>
          </div>

          {/* Company 6 (Video) */}
          <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-[4/5] group">
            <video 
              className="w-full h-full object-cover" 
              src="https://res.cloudinary.com/dqfuozgjq/video/upload/v1773208511/images/case-study/video%203.mp4.mp4" 
              autoPlay loop muted playsInline aria-hidden="true"
            ></video>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.4)] p-[30px_20px_20px] translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-left">
              <h4 className="text-white text-[1.1rem] font-semibold mb-[5px]">Luxury Living</h4>
              <p className="text-[rgba(255,255,255,0.8)] text-[0.85rem] m-0">Designed for Comfort & Luxury</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-[40px] px-[5%] bg-white">
        <div className="text-center mb-[30px]">
          <h2 className="font-forum text-[clamp(2.5rem,4vw,3.5rem)] text-[#21333e] font-normal">
            Common Queries Answered
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-[40px] max-w-[1200px] mx-auto">
          {/* FAQ List */}
          <div className="flex-1 flex flex-col">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                onClick={() => setActiveFaq(index)}
                className={`border rounded-lg p-[20px_25px] cursor-pointer transition-all duration-300 mb-[10px] ${activeFaq === index ? 'border-[#e2e8f0] shadow-[0_5px_20px_rgba(0,0,0,0.03)]' : 'border-transparent'}`}
              >
                <div className="flex items-center gap-[15px]">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeFaq === index ? 'bg-[#475569]' : 'bg-[#cbd5e1]'}`}></div>
                  <p className="flex-1 text-[0.95rem] font-medium text-[#21333e] m-0">{faq.q}</p>
                  <span className={`text-[1.5rem] text-[#94a3b8] transition-transform duration-300 ${activeFaq === index ? 'rotate-90' : 'rotate-0'}`}>
                    &#8250;
                  </span>
                </div>
                {/* Mobile Answer Toggle */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-[500px] pt-[15px] pl-[39px]' : 'max-h-0'}`}>
                  <p className="text-[0.95rem] text-[#475569] leading-[1.6] m-0">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop FAQ Answer Panel */}
          <div className="hidden lg:flex flex-[0_0_600px] bg-white p-[40px] border border-[#e2e8f0] rounded-xl items-center justify-center text-center self-center min-h-[340px]">
            <p className="text-[1.05rem] text-[#475569] leading-[1.6] m-0 text-left md:text-center">
              {faqs[activeFaq].a}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
