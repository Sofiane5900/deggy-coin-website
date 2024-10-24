import React from 'react';
import Logo from '../asset/logo.png';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 p-4 mt-10 rounded-lg shadow-lg flex items-center justify-between border-4 border-yellow-300">
      <div className="flex items-center">
        <div className="relative">
          <Image src={Logo} alt="Logo" width={60} height={60} className="w-12 h-12 rounded-full border-4 border-yellow-300 shadow-lg" />
          <span className="absolute inset-0 w-12 h-12 border-4 border-black rounded-full"></span>
        </div>
        <span className="ml-3 text-4xl font-extrabold text-white" style={{ textShadow: '3px 3px 0 #000' }}>
          RUGPULLROYAL
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#navbar" className="text-white font-bold text-xl hover:underline-offset-4 hover:underline" style={{ textShadow: '2px 2px 0 #000' }}>Home</a>
        <a href="#about" className="text-white font-bold text-xl hover:underline-offset-4 hover:underline" style={{ textShadow: '2px 2px 0 #000' }}>About Us</a>
      
      </div>

      {/* Social Media Icons and Buy button */}
      <div className="flex items-center space-x-4">
        {/* Mobile Icons */}
        <div className="flex space-x-4">
          <a href="https://t.me/RugPullRoyal" className="p-2 border-yellow-300 rounded-full border-4 text-white hover:scale-110 transition-transform duration-75">
            <FaTelegramPlane className="w-6 h-6" />
          </a>
          <a href="https://x.com/bobbob1571707" className="p-2 border-yellow-300 rounded-full border-4 text-white hover:scale-110 transition-transform duration-75">
            <FaXTwitter className="w-6 h-6" />
          </a>
        </div>

        <button className="border-yellow-300 text-white font-bold text-xl px-6 py-2 rounded-full hover:scale-105 border-4 shadow-lg" style={{ textShadow: '2px 2px 0 #000' }}>
          BUY $RPR
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
