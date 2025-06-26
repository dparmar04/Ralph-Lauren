import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiMessageCircle,
  FiSearch,
  FiHeart,
} from "react-icons/fi";
import { PiBagLight } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showBg ? "bg-white shadow text-black" : "bg-transparent text-white"
        }`}
    >
      <div className="px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-LeJeune text-2xl uppercase tracking-widest font-light">
          Ralph Lauren
        </h1>

        {/* Desktop Nav - Hidden below lg (1024px) */}
        <nav className="hidden lg:flex gap-x-8 text-xs font-light text-nowrap">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids & Baby</a>
          <a href="#">Home</a>
          <a href="#">Gifts</a>
          <a href="#">Discover</a>
          <a href="#">Sale</a>
        </nav>

        {/* Right icons & menu toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop icons - Hidden below lg */}
          <div className="hidden lg:flex gap-4 text-sm">
            <FiSearch className="size-5" />
            <FiHeart className="size-5" />
            <PiBagLight className="size-5" />
          </div>

          {/* Mobile menu toggle */}
          <button className="text-inherit text-xl lg:hidden" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto transition-transform duration-500">
          <div className="flex items-center justify-between px-5 h-16 border-b">
            <button onClick={toggleMenu}>
              <FiX className="text-black text-2xl" />
            </button>
            <div className="text-xl font-semibold">Ralph Lauren</div>
            <div className="flex space-x-4">
              <FiMessageCircle className="text-black size-5" />
              <PiBagLight className="text-black size-5" />
            </div>
          </div>

          {/* Matched with desktop nav */}
          <div className="flex flex-col gap-5 px-6 py-6 text-black text-base font-medium">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids & Baby</a>
            <a href="#">Home</a>
            <a href="#">Gifts</a>
            <a href="#">Discover</a>
            <a href="#">Sale</a>
            <div className="border-t border-gray-200 pt-4 flex flex-col gap-y-4">
              <a href="#">Blog</a>
              <a href="#">Order Samples</a>
              <a href="#">Giftcard</a>
              <a href="#">Contact Us</a>
            </div>
          </div>

          <div className="mt-10 px-6 py-4 border-t bg-gray-50 text-sm text-black flex justify-between">
            <span>Access your account</span>
            <span>English ▼</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
