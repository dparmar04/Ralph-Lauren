import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PiPauseCircleLight, PiPlayCircleLight } from "react-icons/pi";

const slides = [
  { image: "/pic1.png", label: "LINEN RELAXED STRAIGHT PANT" },
  { image: "/pic2.png", label: "CLASSIC STRIPED SHIRT" },
  { image: "/pic3.png", label: "WOOL-BLEND COAT" },
];

const AUTO_DURATION = 5000;

export default function StackedCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      const start = Date.now();
      interval = setInterval(() => {
        const elapsed = Date.now() - start;
        setProgress((elapsed / AUTO_DURATION) * 100);
        if (elapsed >= AUTO_DURATION) {
          nextSlide();
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [current, isPlaying]);

  const nextSlide = () => {
    setProgress(0);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const getZIndex = (index) => {
    const relative = (index - current + slides.length) % slides.length;
    return 10 - relative;
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full">
      <div className="relative w-[300px] md:w-[400px] lg:w-[450px] h-[480px] md:h-[500px]">
        {slides.map((slide, index) => {
          const relativeIndex = (index - current + slides.length) % slides.length;
          const offsetX = relativeIndex * -20;
          const scale = 1 - relativeIndex * 0.03;

          return (
            <motion.div
              key={index}
              className="absolute rounded overflow-hidden shadow-lg"
              style={{
                right: offsetX,
                zIndex: getZIndex(index),
                transform: `scale(${scale})`,
              }}
              animate={{ scale }}
              transition={{ duration: 0.5 }}
            >
              {/* Inner container is now fixed to only larger widths */}
              <div className="relative w-[300px] md:w-[400px] lg:w-[450px] h-[480px] md:h-[500px]">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />

                {/* Text stays inside image */}
                <div className="absolute bottom-0 left-0 w-full px-4 py-3 text-white text-xs sm:text-sm tracking-wide uppercase bg-gradient-to-t from-black/60 to-transparent">
                  {slide.label}
                </div>

                {index === current && (
                  <div
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white cursor-pointer"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <PiPauseCircleLight className="text-3xl sm:text-4xl" />
                    ) : (
                      <PiPlayCircleLight className="text-3xl sm:text-4xl" />
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="text-white text-sm tracking-wider mt-4 sm:mt-6">
        {current + 1} <span className="opacity-60">|</span> {slides.length}
      </div>

      {/* Timeline progress */}
      <div className="mt-2 w-[300px] md:w-[350px] h-0.5 bg-white/20 relative">
        <motion.div
          className="h-full bg-white"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        ></motion.div>
      </div>
    </div>
  );
}
