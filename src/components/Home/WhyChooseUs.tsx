import ScrollReveal from "../shared/ScrollReveal";

const checklistItems = [
  "Maximum efficiency with expert schedules.",
  "Professional fleet management you can trust.",
  "We handle the operations you save the time.",
  "Safe, premium and cost effective mobility.",
  "Custom rental plans built for your scale.",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white" style={{ padding: "5rem 0" }}>
      <div className="max-w-content mx-auto px-[5%] flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
        {/* Left: Checklist */}
        <ScrollReveal direction="left" className="flex-1 flex flex-col justify-start">
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-navy mb-10 leading-[1.0] font-normal text-left">
            Why we're the right choice
          </h2>
          <ul className="list-none p-0 m-0 space-y-5">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-[clamp(1rem,2vw,1.15rem)] text-black leading-relaxed">
                <span className="flex-shrink-0 text-xl text-black font-bold">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Right: Video */}
        <ScrollReveal direction="up" className="flex-none w-full lg:w-[clamp(300px,45vw,600px)] flex items-center">
          <div className="relative rounded-[18px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] w-full aspect-video min-h-[220px] sm:min-h-[280px] bg-black">
            <video
              src="https://res.cloudinary.com/dqfuozgjq/video/upload/q_auto,w_900/v1773208355/images/ventures/global/why.mp4.mp4"
              poster="https://res.cloudinary.com/dqfuozgjq/video/upload/so_0,w_900,f_jpg,q_auto/v1773208355/images/ventures/global/why.mp4.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover block"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
