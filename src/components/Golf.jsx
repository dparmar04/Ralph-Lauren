import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShopNowBtn from './ShopNowBtn';

function Golf() {
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
      className="rlx-showcase relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end md:justify-end px-4 sm:px-10 overflow-hidden my-15"
      style={{
        backgroundImage: "url('/BG4.png')",
      }}
    >
      {/* Responsive Mobile Background */}
      <style>
        {`
          @media (max-width: 768px) {
            .rlx-showcase {
              background-image: url('/mobbg4.png') !important;
            }
          }
        `}
      </style>

      {/* Text content */}
      <div className="max-w-md flex flex-col items-center md:text-left text-white md:mr-20">
        <p className="text-sm md:text-base mb-3 leading-relaxed text-center">
          A sophisticated offering of performance-driven classics made for an active lifestyle
        </p>
        <ShopNowBtn title='shop men' />
      </div>

      {/* Optional: bottom-left label like "Billy Horschel" */}
      <div className="absolute bottom-5 left-5 text-white text-xs tracking-widest opacity-80 hidden sm:block">
        <p>BILLY HORSCHER</p>
        <p>RLX AMBASSADOR</p>
      </div>
    </section>
  );
}

export default Golf;
