import React from 'react';

function ShopNowBtn({ title = "Shop Now", className = "", bg }) {
  return (
    <button
      className={`relative tracking-wider font-Poppins uppercase text-xs text-white w-max group ${className}`}
    >
      {title}
      <span className={`block h-0.5 w-full bg-white mt-2 transition-all duration-300 group-hover:w-1/2 ${bg}`}></span>
    </button>
  );
}

export default ShopNowBtn;
