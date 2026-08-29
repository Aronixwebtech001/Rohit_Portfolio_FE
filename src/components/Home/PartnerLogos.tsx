import { useEffect, useRef, useCallback } from "react";
import ScrollReveal from "../shared/ScrollReveal";

const ventureLogos = [
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208329/images/ventures/aaru-care-logo.png.png", alt: "AARU CARE FOUNDATION" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208336/images/ventures/aaru.png.png", alt: "AARU" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208322/images/ventures/aaru-log.png.png", alt: "AARU LOG" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208337/images/ventures/awt.png.png", alt: "AWT" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208315/images/ventures/aaru-mobility.png.png", alt: "AARU MOBILITY" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208325/images/ventures/jfam-logo.png.png", alt: "JFAM" },
];

export default function PartnerLogos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const currentXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastTimeRef = useRef(0);

  const getLoopWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const items = Array.from(track.querySelectorAll(".venture-logo-item"));
    const origCount = ventureLogos.length;
    if (items.length <= origCount) return 0;
    const first = items[0].getBoundingClientRect().left;
    const cloneStart = items[origCount].getBoundingClientRect().left;
    return cloneStart - first;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone items for seamless loop
    const origItems = Array.from(track.querySelectorAll(".venture-logo-item"));
    for (let i = 0; i < 2; i++) {
      origItems.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.classList.add("cloned");
        track.appendChild(clone);
      });
    }

    let loopWidth = getLoopWidth();

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isDraggingRef.current && loopWidth > 0) {
        const speed = window.innerWidth <= 768 ? 0.6 : 1.2;
        const move = speed * (dt / 16.66);
        currentXRef.current -= move;
        if (currentXRef.current <= -loopWidth) {
          currentXRef.current += loopWidth;
        }
      }

      track.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Wait for images to load
    const images = track.querySelectorAll("img");
    let loaded = 0;
    const checkReady = () => {
      loaded++;
      if (loaded >= images.length) {
        loopWidth = getLoopWidth();
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    images.forEach((img) => {
      if (img.complete) checkReady();
      else {
        img.addEventListener("load", checkReady);
        img.addEventListener("error", checkReady);
      }
    });

    const onResize = () => {
      loopWidth = getLoopWidth();
    };
    window.addEventListener("resize", onResize);

    // Drag handlers
    let startX = 0;
    let dragStartShift = 0;

    const startDrag = (e: MouseEvent | TouchEvent) => {
      isDraggingRef.current = true;
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
      dragStartShift = currentXRef.current;
      track.style.cursor = "grabbing";
      lastTimeRef.current = performance.now();
    };

    const doDrag = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const diff = x - startX;
      currentXRef.current = dragStartShift + diff;
      if (currentXRef.current > 0) currentXRef.current -= loopWidth;
      if (Math.abs(currentXRef.current) >= loopWidth) currentXRef.current += loopWidth;
      track.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
    };

    const stopDrag = () => {
      isDraggingRef.current = false;
      track.style.cursor = "grab";
      lastTimeRef.current = performance.now();
    };

    track.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
    track.addEventListener("touchstart", startDrag, { passive: true });
    document.addEventListener("touchmove", doDrag, { passive: false });
    document.addEventListener("touchend", stopDrag);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", onResize);
      track.removeEventListener("mousedown", startDrag);
      document.removeEventListener("mousemove", doDrag);
      document.removeEventListener("mouseup", stopDrag);
      track.removeEventListener("touchstart", startDrag);
      document.removeEventListener("touchmove", doDrag);
      document.removeEventListener("touchend", stopDrag);
    };
  }, [getLoopWidth]);

  return (
    <section className="bg-navy py-8 md:py-10 overflow-hidden">
      <ScrollReveal className="text-center mb-6">
        <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-white">My Ventures</h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-16 md:gap-24 will-change-transform cursor-grab"
            style={{ backfaceVisibility: "hidden", perspective: 1000 }}
          >
            {ventureLogos.map((logo, i) => (
              <div key={i} className="venture-logo-item flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none"
                  loading="eager"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
