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
    // add more slides as needed
  ];

  return (
    <section className="px-6 sm:px-12 py-16 bg-white">

      <div className="flex flex-col md:flex-row justify-between md:items-start md:gap-10">

        <div className="hidden md:flex md:flex-col w-full max-w-xs">
          <p className="text-sm uppercase tracking-widest">The World</p>
          <h2 className="text-4xl font-semibold">of Luxury</h2>
          <p className="mt-4 text-gray-600">
            Explore seasonal collections, iconic accessories, and more
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-1/2">
          {/* Custom Nav Buttons */}
          <button
            ref={prevRef}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-5 rounded-full hover:bg-gray-800 transition-all ${isStart ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
          >
            <BsArrowLeft size={25} />
          </button>

          <button
            ref={nextRef}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-5 rounded-full hover:bg-gray-800 transition-all ${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
          >
            <BsArrowRight size={25} />
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 3.2,
                slidesPerGroup: 2
              },
              1024: {
                slidesPerView: 4.2,
                slidesPerGroup: 4
              },
              1280: {
                slidesPerView: 5.2,
                slidesPerGroup: 4
              },
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-[full] lg:h-[350px] overflow-hidden group">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={`outfit-${index}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default LuxurySection;