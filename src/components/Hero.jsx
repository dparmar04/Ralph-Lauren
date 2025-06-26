import React, { useRef, useState, useEffect } from "react";
import { PiPauseCircle, PiPlayCircle } from "react-icons/pi";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive video
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // you can adjust this breakpoint
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="h-screen w-full overflow-hidden relative">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        src={isMobile ? "/Hero-mob.mp4" : "/Hero-desktop.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Logo + Buttons */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        flex flex-col justify-center items-center z-20
        w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] h-auto text-center"
      >
        <img
          src="/Hero_Logo.svg"
          alt="logo"
          className="w-[200px] md:w-[250px] lg:w-[300px]"
        />
        <div className="flex sm:flex-row justify-center gap-4 mt-8 w-full sm:w-auto text-white">
          <button className="px-6 py-2 border border-white uppercase whitespace-nowrap rounded-full md:text-xs sm:text-base hover:bg-white hover:text-black transition-all duration-300">
            Shop now
          </button>
          <button className="px-6 py-2 border border-white uppercase whitespace-nowrap rounded-full text-xs md:text-xs sm:text-base hover:bg-white hover:text-black transition-all duration-300">
            Explore the Campaign
          </button>
        </div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-5 left-5 z-30"
      >
        {isPlaying ? (
          <PiPauseCircle className="size-8 text-white" />
        ) : (
          <PiPlayCircle className="size-8 text-white" />
        )}
      </button>
    </section>
  );
};

export default Hero;
