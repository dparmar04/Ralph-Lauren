import React from 'react';
import ShopNowBtn from './ShopNowBtn';
import StackedCarousel from './StackedCarousel';

function Showcase() {

  return (
    <div
      className="showcase relative min-h-screen bg-cover bg-top bg-no-repeat "
      style={{
        backgroundImage: `url('/BG2.png')`,
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            .showcase {
              background-image: url('/BG2-mob.png') !important;
            }
          }
        `}
      </style>
      <div className="py-16 px-4 md:px-10 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-40 md:gap-0">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <img
            src="/Linen.png"
            alt="Linen"
            className="w-[250px] md:w-[300px] lg:w-[350px]"
          />
          <h1 className="text-black md:text-white text-3xl md:text-2xl">
            Men’s Linen Shop
          </h1>
          <ShopNowBtn title={"shop polo"} className='md:!text-white !text-black' bg={"md:!bg-white !bg-black"} />
        </div>

        {/* Right Section */}
        <div className="flex lg:h-screen flex-col items-center gap-6">
          <h1 className="md:hidden flex text-white mt-5 text-3xl md:text-2xl">
            Women's Linen Shop
          </h1>
          <ShopNowBtn
            title={"shop polo"}
            className="md:!text-white "
            bg={"md:!bg-white"}
          />
          <StackedCarousel />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
