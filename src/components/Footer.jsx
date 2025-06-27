import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest, FaXTwitter } from "react-icons/fa6";

const FooterColumn = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-t border-gray-200 py-4 md:border-none md:py-0">
      <button
        className="w-full flex justify-between items-center text-left md:block md:cursor-default py-5"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-sm uppercase tracking-wide md:mb-4">{title}</span>
        <span className="text-xl md:hidden">{open ? '-' : '+'}</span>
      </button>

      <ul className={`mt-2 md:mt-0 md:block ${open ? 'block' : 'hidden'} md:space-y-2 text-sm text-gray-700`}>
        {links.map((link, idx) => (
          <li key={idx} className="mt-2 md:mt-0">
            <a href="#" className="hover:underline">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 text-sm text-gray-800" style={{ fontFamily: 'Poppins' }}>
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 md:gap-8">
        {/* Customer Service */}
        <FooterColumn
          title="Customer Service"
          links={[
            "My Account", "Live Chat", "Customer Support",
            "Shipping & Delivery", "Returns & Exchanges Policy",
            "Start a Free Return or Exchange", "Check Order Status", "Gift Cards"
          ]}
        />

        {/* Company */}
        <FooterColumn
          title="Company"
          links={[
            "About Us", "Careers", "World of RL", "Protecting Our Brands",
            "Global Citizenship & Sustainability", "Commitment to Racial Equity",
            "Satisfaction Guarantee"
          ]}
        />

        {/* More From RL */}
        <FooterColumn
          title="More From RL"
          links={[
            "Personalize Your Experience", "Find a Store", "Download the Ralph Lauren App",
            "Sitemap", "Mobile Marketing", "Book an appointment"
          ]}
        />

        {/* Sign up for Emails */}
        <div className="w-full">
          <p className="font-medium text-sm uppercase tracking-wide mb-3">Sign Up for Emails</p>
          <div className="flex">
            <input
              type="email"
              placeholder="ENTER EMAIL ADDRESS"
              className="w-full border border-gray-400 px-3 py-2 text-sm"
            />
            <button className="bg-gray-900 text-white px-4 py-2 text-sm">SUBMIT</button>
          </div>
          <p className="text-xs mt-3 text-gray-600">
            Click <a href="#" className="underline">here</a> to read Ralph Lauren’s privacy notice. Or <a href="#" className="underline">contact us</a>.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="border-t border-gray-200 py-6 flex justify-center space-x-4">
        <FaInstagram />
        <FaFacebookF />
        <FaYoutube />
        <FaXTwitter />
        <FaPinterest />
      </div>

      {/* Bottom Legal Links */}
      <div className="border-t border-gray-200 py-6 text-center text-xs space-y-2 px-4">
        <div className="space-x-2 md:space-x-4">
          <span>Company Information</span>
          <span className="hidden md:inline">|</span>
          <span>Terms of Use</span>
          <span className="hidden md:inline">|</span>
          <span>Privacy Notice</span>
          <span className="hidden md:inline">|</span>
          <span>California Privacy Notice at Collection</span>
          <span className="hidden md:inline">|</span>
          <span>UK and California Transparency Act</span>
          <span className="hidden md:inline">|</span>
          <span>Do Not Sell My Personal Information</span>
          <span className="hidden md:inline">|</span>
          <span>Accessibility Statement</span>
        </div>
        <p className="mt-2">© COPYRIGHT 2025 RALPH LAUREN MEDIA LLC</p>
      </div>
    </footer>
  );
};

export default Footer;