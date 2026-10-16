import React from "react";

const ventureLogos = [
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208329/images/ventures/aaru-care-logo.png.png", alt: "AARU CARE FOUNDATION" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208336/images/ventures/aaru.png.png", alt: "AARU" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208322/images/ventures/aaru-log.png.png", alt: "AARU LOG" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208337/images/ventures/awt.png.png", alt: "AWT" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208315/images/ventures/aaru-mobility.png.png", alt: "AARU MOBILITY" },
  { src: "https://res.cloudinary.com/dqfuozgjq/image/upload/v1773208325/images/ventures/jfam-logo.png.png", alt: "JFAM" },
];

export default function PartnerLogos() {
  return (
    <>
      <style>{`
        #ventures {
            position: relative;
            overflow: hidden;
            min-height: 280px;
            display: flex;
            align-items: center;
            margin-top: -6rem;
            z-index: 31;
        }

        #ventures h2 {
            display: none;
        }

        #ventures::before,
        #ventures::after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 100px;
            background: #1C323A;
            z-index: 5;
        }

        #ventures::before {
            top: 0;
            clip-path: polygon(0 60%, 50% 85%, 100% 60%, 150% 100%, 0 100%);
        }

        #ventures::after {
            bottom: 0;
            clip-path: polygon(0 0, 150% 0, 100% 35%, 50% 15%, 0 35%);
        }

        .ventures-wrapper {
            width: 100vw;
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            padding: 0;
            position: relative;
            z-index: 10;
            overflow: hidden;
        }

        .ventures-track {
            display: flex;
            align-items: center;
            width: max-content;
            gap: 4rem;
            animation: scrollVentures 40s linear infinite;
            padding-left: 2rem;
        }

        .venture-logo {
            height: clamp(50px, 10vw, 120px);
            width: auto;
            max-width: none;
            object-fit: contain;
            transition: all 0.3s ease;
            filter: none;
            opacity: 1;
            display: block;
            flex-shrink: 0;
        }

        .venture-logo:hover {
            transform: scale(1.1);
            filter: grayscale(0);
            opacity: 1;
        }

        @keyframes scrollVentures {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
        }

        @media (max-width: 1024px) {
            #ventures {
                min-height: auto !important;
                margin-top: 0 !important;
                padding: 2rem 0 !important;
                background: #FFFFFF !important;
                border-top: 1px solid #E5E7EB !important;
                border-bottom: 1px solid #E5E7EB !important;
            }
            #ventures::before,
            #ventures::after {
                display: none !important;
            }
            .ventures-track {
                gap: 3.5rem !important;
                animation: scrollVentures 25s linear infinite !important;
                padding-left: 0 !important;
            }
            .venture-logo {
                height: 45px !important;
                max-height: 48px !important;
                filter: none !important;
                opacity: 1 !important;
                pointer-events: none;
                user-select: none;
                -webkit-user-drag: none;
            }
        }

        @media (max-width: 640px) {
            #ventures {
                padding: 1.5rem 0 !important;
            }
            .ventures-track {
                gap: 2.2rem !important;
                animation: scrollVentures 18s linear infinite !important;
            }
            .venture-logo {
                height: 38px !important;
                max-height: 40px !important;
            }
        }
      `}</style>

      <section id="ventures">
        <h2>My Ventures</h2>

        <div className="ventures-wrapper">
          <div className="ventures-track" id="venturesTrack">
            {/* Render 4 times for a perfectly seamless continuous loop on all screens */}
            {[...ventureLogos, ...ventureLogos, ...ventureLogos, ...ventureLogos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                className="venture-logo"
                alt={logo.alt}
                decoding="async"
                loading="lazy"
                width={120}
                height={50}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
