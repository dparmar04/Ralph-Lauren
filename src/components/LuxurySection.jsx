import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function LuxurySection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (!swiperInstance) return;
    const updateState = () => {
      setIsStart(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    };
    updateState();
    swiperInstance.on("slideChange", updateState);
    return () => {
      swiperInstance.off("slideChange", updateState);
    };
  }, [swiperInstance]);

  const slides = [
    { image: '/img1.png', label: 'Purple Label' },
    { image: '/img2.png', label: 'Collection' },
    { image: '/img3.png', label: "Men’s" },
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-10" style={{ fontFamily: 'LeJeune' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center text-center md:text-left gap-12 w-full">
        {/* Text Section */}
        <div className="md:w-1/3 w-full !font-LeJeune text-[#041e3a] ">
          <p className="text-xl tracking-widest">The World</p>
          <h1 className="text-5xl font-serif font-medium mt-1">of Luxury</h1>
          <p className="mt-6 text-gray-600 max-w-xs leading-relaxed">
            Explore seasonal collections, iconic accessories, and more.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative md:w-2/3 w-full">
          {/* Nav Arrows */}
          <button
            ref={prevRef}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md transition ${isStart ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <BsArrowLeft size={20} />
          </button>

          <button
            ref={nextRef}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md transition ${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <BsArrowRight size={20} />
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            speed={600}
            breakpoints={{
              768: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 2.4,
              },
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden group w-full">
                  {/* Fixed height wrapper */}
                  <div className="w-full h-[420px] min-h-[420px]">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-md">
                    {item.label}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Optional underline */}
          <div className="mt-6 h-[2px] bg-gray-200 w-full relative">
            <div className="absolute left-0 w-[33%] h-full bg-gray-800 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LuxurySection;