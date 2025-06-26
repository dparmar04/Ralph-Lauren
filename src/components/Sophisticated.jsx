import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Sophisticated() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { scale: 1.1, transformOrigin: 'center center' },
      {
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sophisticated overflow-hidden relative min-h-screen flex items-end sm:items-center justify-start bg-cover bg-no-repeat bg-top text-white px-6 sm:px-16 pb-14 sm:pb-0 my-15"
      style={{
        backgroundImage: `url('/BG5.jpg')`,
      }}
    >
      {/* Mobile background override */}
      <style>
        {`
          @media (max-width: 768px) {
            .sophisticated {
              background-image: url('/bg5-mob.jpg') !important;
            }
          }
        `}
      </style>

      {/* Text Content */}
      <div className="max-w-md sm:max-w-2xl">
        <p className="text-sm uppercase tracking-widest font-medium mb-2">Polo Ralph Lauren</p>
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4 tracking-wider">
          Sophisticated <br /> Sportswear
        </h1>
        <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
          A versatile wardrobe for weekday commutes <br /> and weekend commitments
        </p>
        <button className="px-6 py-2 cursor-pointer text-sm font-medium border border-white hover:bg-white hover:text-black transition-all duration-300">
          EXPLORE NOW
        </button>
      </div>
    </section>
  );
}

export default Sophisticated;
