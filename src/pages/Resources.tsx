import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-white block p-0 pt-[80px] md:pt-[100px] mb-0 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208423/images/resources/RESOURCES.png.png" 
          alt="resource" 
          decoding="async" 
          loading="lazy" 
          className="w-full h-auto block m-0 p-0"
        />
      </section>

      {/* RESOURCES SECTION */}
      <section className="bg-white px-4 sm:px-5 py-12 sm:py-16 md:py-20">
        <h2 className="font-forum text-[clamp(2rem,4vw,2.5rem)] font-normal mb-8 sm:mb-[50px] text-center text-[#1f2937]">
          Latest Articles & Insights
        </h2>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          
          {/* CARD 2 */}
          <Link 
            to="/article?id=team-culture" 
            className="bg-white rounded-xl overflow-hidden no-underline text-inherit border border-[#E5E7EB] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex flex-col w-full group"
          >
            <img 
              src="/images/team_culture_ai.jpg" 
              alt="Guide: Building a High Performance Team Culture" 
              loading="lazy"
              decoding="async"
              className="w-full h-[220px] object-cover block"
            />
            <div className="p-6 text-left flex flex-col h-full">
              <h3 className="font-outfit text-xl mb-3 text-[#1f2937] leading-[1.4] font-semibold group-hover:text-[#1f2937]">
                Building a High Performance Team Culture
              </h3>
              <p className="font-outfit text-[0.95rem] text-[#4B5563] leading-[1.6] mb-6 flex-grow">
                Learn the 10 core principles for building a team that stays aligned and grows the business autonomously.
              </p>
              <span className="font-outfit text-[0.9rem] font-medium text-[#374151] flex items-center gap-1.5 transition-colors duration-200 group-hover:text-black">
                Read Team Culture Article &rarr;
              </span>
            </div>
          </Link>

          {/* CARD 1 */}
          <Link 
            to="/article?id=startup" 
            className="bg-white rounded-xl overflow-hidden no-underline text-inherit border border-[#E5E7EB] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex flex-col w-full group"
          >
            <img 
              src="/images/startup_launch_ai.jpg" 
              alt="Guide: Launching Your First Startup" 
              loading="lazy"
              decoding="async"
              className="w-full h-[220px] object-cover block"
            />
            <div className="p-6 text-left flex flex-col h-full">
              <h3 className="font-outfit text-xl mb-3 text-[#1f2937] leading-[1.4] font-semibold group-hover:text-[#1f2937]">
                10 Essential Steps to Launch Your Startup
              </h3>
              <p className="font-outfit text-[0.95rem] text-[#4B5563] leading-[1.6] mb-6 flex-grow">
                A comprehensive guide to turning your idea into a successful business venture.
              </p>
              <span className="font-outfit text-[0.9rem] font-medium text-[#374151] flex items-center gap-1.5 transition-colors duration-200 group-hover:text-black">
                Master Startup Launch Steps &rarr;
              </span>
            </div>
          </Link>

        </div>
      </section>
    </>
  );
}
