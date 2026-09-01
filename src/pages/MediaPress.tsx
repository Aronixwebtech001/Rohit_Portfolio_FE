export default function MediaPress() {
  return (
    <>
      <main>
        {/* MEDIA & IMPACT HERO */}
        <section className="w-full bg-white block pt-[80px] md:pt-[100px] p-0 overflow-hidden">
          <img 
            src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208377/images/media/media.png.png"
            alt="Media Hero" 
            decoding="async" 
            className="w-full h-auto block m-0 p-0"
          />
        </section>

        <section className="bg-white pb-20">
          
          {/* AWARDS */}
          <div className="max-w-[1200px] mx-auto px-5 pt-10 pb-5">
            <h2 className="font-forum text-[2.5rem] font-normal mb-[50px] text-center text-[#1f2937]">
              Awards & Recognition
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[60px] max-w-[1140px] mx-auto justify-center">
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl pb-[30px] text-center transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208378/images/media/AARU_MOBILITY_AWARD.png.png"
                  alt="Award Trophy Icon" 
                  loading="lazy" 
                  decoding="async"
                  className="w-full h-auto mt-0 mb-5 object-cover"
                />
                <h4 className="font-outfit text-[1.1rem] font-semibold mb-2 text-[#1f2937] leading-[1.4] px-5">
                  Outstanding Contribution to Corporate Travel & Transport<br/>2025
                </h4>
              </div>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl pb-[30px] text-center transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208392/images/media/AWARD_JFAM.png.png"
                  alt="Award Trophy Icon" 
                  loading="lazy" 
                  decoding="async"
                  className="w-full h-auto mt-0 mb-5 object-cover"
                />
                <h4 className="font-outfit text-[1.1rem] font-semibold mb-2 text-[#1f2937] leading-[1.4] px-5">
                  Best Tech-Driven Construction & Design Firm<br/>2025
                </h4>
              </div>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl pb-[30px] text-center transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208386/images/media/awt_award.png.png"
                  alt="Award Trophy Icon" 
                  loading="lazy" 
                  decoding="async"
                  className="w-full h-auto mt-0 mb-5 object-cover"
                />
                <h4 className="font-outfit text-[1.1rem] font-semibold mb-2 text-[#1f2937] leading-[1.4] px-5">
                  Most Innovative Branding & Digital Marketing Company in Delhi NCR<br/>2025
                </h4>
              </div>
            </div>
          </div>

          {/* PRESS */}
          <section className="bg-[#F9FAFB] py-20 px-5 mt-10">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="font-forum text-[2.5rem] font-normal mb-[50px] text-center text-[#1f2937]">
                Press & Media Coverage
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
                <a 
                  href="https://aaru-mobility-frontend.vercel.app/blog/right-car-rental-partner/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#eaeaea] rounded-xl py-[15px] px-[20px] relative no-underline border border-[#E5E7EB] min-h-[70px] flex flex-col justify-center transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 group"
                >
                  <div className="absolute right-[20px] top-1/2 -translate-y-1/2">
                    <img 
                      src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208380/images/media/External%20Link.png.png"
                      alt="External Link Icon" 
                      loading="lazy" 
                      decoding="async"
                      className="w-5 h-5 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                  <h4 className="ml-2 mr-[35px] font-outfit text-base font-semibold text-[#1f2937] leading-[1.4] mb-1">
                    Why Choosing the Right Car Rental Partner Changes Everything
                  </h4>
                </a>

                <a 
                  href="https://aaru-mobility-frontend.vercel.app/blog/wedding-car-big-day/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#eaeaea] rounded-xl py-[15px] px-[20px] relative no-underline border border-[#E5E7EB] min-h-[70px] flex flex-col justify-center transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 group"
                >
                  <div className="absolute right-[20px] top-1/2 -translate-y-1/2">
                    <img 
                      src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208380/images/media/External%20Link.png.png"
                      alt="External Link" 
                      decoding="async" 
                      loading="lazy"
                      className="w-5 h-5 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                  <h4 className="ml-2 mr-[35px] font-outfit text-base font-semibold text-[#1f2937] leading-[1.4] mb-1">
                    The Wedding Car That Almost Didn't Arrive And Why Your Big Day Deserves Better
                  </h4>
                </a>

                <a 
                  href="https://aaru-mobility-frontend.vercel.app/blog/school-bus-changed-everything"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#eaeaea] rounded-xl py-[15px] px-[20px] relative no-underline border border-[#E5E7EB] min-h-[70px] flex flex-col justify-center transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 group"
                >
                  <div className="absolute right-[20px] top-1/2 -translate-y-1/2">
                    <img 
                      src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208380/images/media/External%20Link.png.png"
                      alt="External Link" 
                      decoding="async" 
                      loading="lazy"
                      className="w-5 h-5 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                  <h4 className="ml-2 mr-[35px] font-outfit text-base font-semibold text-[#1f2937] leading-[1.4] mb-1">
                    The School Bus That Changed Everything
                  </h4>
                </a>

                <a 
                  href="https://www.aarumobility.com/blog/delivery-saved-business-logistics"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#eaeaea] rounded-xl py-[15px] px-[20px] relative no-underline border border-[#E5E7EB] min-h-[70px] flex flex-col justify-center transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 group"
                >
                  <div className="absolute right-[20px] top-1/2 -translate-y-1/2">
                    <img 
                      src="https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208380/images/media/External%20Link.png.png"
                      alt="External Link" 
                      decoding="async" 
                      loading="lazy"
                      className="w-5 h-5 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                  <h4 className="ml-2 mr-[35px] font-outfit text-base font-semibold text-[#1f2937] leading-[1.4] mb-1">
                    The Delivery That Saved a Business
                  </h4>
                </a>

              </div>
            </div>
          </section>

          {/* IMPACT */}
          <div className="py-20 px-5 max-w-[1200px] mx-auto">
            <h2 className="font-forum text-[2.5rem] font-normal mb-[50px] text-center text-[#1f2937]">
              Aaru Care Foundation Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-[60px_40px] rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)]">
                <img 
                  src="https://img.icons8.com/ios/50/1a2a32/open-book.png" 
                  alt="Education Impact Icon"
                  loading="lazy" 
                  decoding="async"
                  className="w-11 h-11 mb-[25px] object-contain"
                />
                <h3 className="font-outfit text-[clamp(1.8rem,3vw,2.2rem)] text-[#1a2a32] mb-3 font-semibold">500+</h3>
                <p className="font-outfit text-[0.95rem] text-[#1a2a32] font-normal m-0">Students Educated</p>
              </div>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-[60px_40px] rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)]">
                <img 
                  src="https://img.icons8.com/ios/50/1a2a32/hospital.png" 
                  alt="Healthcare Impact Icon"
                  loading="lazy" 
                  decoding="async"
                  className="w-11 h-11 mb-[25px] object-contain"
                />
                <h3 className="font-outfit text-[clamp(1.8rem,3vw,2.2rem)] text-[#1a2a32] mb-3 font-semibold">100+</h3>
                <p className="font-outfit text-[0.95rem] text-[#1a2a32] font-normal m-0">Free Medical Camps</p>
              </div>

              <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-[60px_40px] rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)]">
                <img 
                  src="https://img.icons8.com/ios/50/1a2a32/like--v1.png" 
                  alt="Social Welfare Icon"
                  loading="lazy" 
                  decoding="async"
                  className="w-11 h-11 mb-[25px] object-contain"
                />
                <h3 className="font-outfit text-[clamp(1.8rem,3vw,2.2rem)] text-[#1a2a32] mb-3 font-semibold">&#x20B9;2Cr+</h3>
                <p className="font-outfit text-[0.95rem] text-[#1a2a32] font-normal m-0">Social Investment</p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
