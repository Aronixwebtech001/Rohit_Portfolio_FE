import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "../shared/ScrollReveal";

const testimonials = [
  {
    quote: "Rohit's vision and leadership have been a game-changer for our projects. His ability to see the bigger picture while managing every detail is truly remarkable. Working with him has been an incredible journey.",
    name: "Kanhaiya Singh",
    avatar: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208601/images/testimonial/kanhaiya.jpeg.jpg",
  },
  {
    quote: "I've had the privilege of collaborating with Rohit on multiple ventures. His dedication to innovation and his genuine commitment to empowering people around him make him a standout leader in every sense.",
    name: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Rohit brings a rare combination of strategic thinking and hands-on execution. His mentorship has helped me grow both professionally and personally. He truly walks the talk when it comes to integrity.",
    name: "Samir Ansari",
    avatar: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208603/images/testimonial/samir.jpeg.jpg",
  },
  {
    quote: "What sets Rohit apart is his relentless drive to create impact. Every project he takes on reflects his passion for excellence and his deep understanding of what it takes to build something meaningful.",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval>>();

  const getCardsPerPage = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }, []);

  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const update = () => setCardsPerPage(getCardsPerPage());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [getCardsPerPage]);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const goNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);

  const startAutoScroll = useCallback(() => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(goNext, 4000);
  }, [goNext]);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [startAutoScroll]);

  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    startAutoScroll();
  };

  // Get current visible testimonials
  const startIdx = currentPage * cardsPerPage;
  const visibleTestimonials = testimonials.slice(startIdx, startIdx + cardsPerPage);

  return (
    <section className="bg-white overflow-hidden py-16 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%] w-full">
        <ScrollReveal>
          {/* Header with arrows */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-navy font-normal">What Our Clients Say</h2>
            <div className="flex gap-3 self-end sm:self-auto">
              <button
                onClick={() => { goPrev(); resetAutoScroll(); }}
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full border border-navy flex items-center justify-center text-navy bg-transparent hover:bg-navy/5 transition-all duration-300 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => { goNext(); resetAutoScroll(); }}
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full border border-navy flex items-center justify-center text-white bg-navy hover:bg-navy-light transition-all duration-300 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[30px]"
            style={{ padding: "10px 0" }}
            onMouseEnter={() => clearInterval(autoScrollRef.current)}
            onMouseLeave={startAutoScroll}
          >
            {visibleTestimonials.map((t, i) => (
              <div
                key={startIdx + i}
                className="bg-white rounded-[20px] flex flex-col"
                style={{
                  padding: "30px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  border: "1px solid #f1f5f9",
                  minWidth: 0,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3 text-[#FBBF24] text-xl">
                  {"★★★★★"}
                </div>

                {/* Dotted Divider */}
                <div
                  className="w-full mb-5"
                  style={{
                    borderTop: "1px dotted #cbd5e1",
                  }}
                />

                {/* Quote Box */}
                <div
                  className="flex-1 mb-6 flex items-center"
                  style={{
                    background: "#f8fafc",
                    padding: "25px",
                    borderRadius: "12px",
                    minHeight: "150px",
                  }}
                >
                  <p className="text-[1rem] text-[#475569] leading-relaxed m-0 text-left">
                    "{t.quote}"
                  </p>
                </div>

                {/* User */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-[60px] h-[60px] rounded-full object-cover"
                    loading="lazy"
                  />
                  <h4 className="font-semibold text-[1.3rem] text-[#1a202c]">{t.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-[50px]">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentPage(i); resetAutoScroll(); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                  i === currentPage ? "bg-navy scale-[1.2]" : "bg-[#cbd5e1]"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
