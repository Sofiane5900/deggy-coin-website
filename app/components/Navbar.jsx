import React from 'react';
import Logo from '../asset/Logo.webp';
import Image from 'next/image';
import { FaTelegramPlane} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-yellow-400 p-4 mt-10 rounded-full flex items-center justify-between border-4 border-yellow-950">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={50} height={50} className="w-10 h-10 rounded-full mr-2" />
        <span className="text-3xl font-extrabold text-black" style={{ textShadow: '2px 2px 0 #FFF' }}>DEGGY</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#navbar" className="text-black hover:underline-offset-4 hover:decoration-1 hover:underline font-bold">Home</a>
        <a href="#about" className="text-black hover:underline-offset-4 hover:decoration-1 hover:underline font-bold">About Us</a>
        <a href="#buy" className="text-black hover:underline-offset-4 hover:decoration-1 hover:underline font-bold">How To Buy</a>
        <a href="#plan" className="text-black hover:underline-offset-4 hover:decoration-1 hover:underline font-bold">Roadmap</a>
      </div>

      {/* Social Media Icons and Buy button */}
      <div className="flex items-center space-x-4">
        {/* Mobile Icons */}
        <div className=" flex space-x-4">
          <a href="https://t.me/SNcatSOL" className="p-2 bg-yellow-950 rounded-full border border-black text-white hover:scale-110 transition-transform duration-75">
            <FaTelegramPlane className="w-6 h-6" />
          </a>
          <a href="https://x.com/home" className="p-2 bg-yellow-950 rounded-full border border-black text-white hover:scale-110 transition-transform duration-75">
            <FaXTwitter className="w-6 h-6" />
          </a>
        </div>

        <button className="bg-yellow-950 text-white px-6 py-2 rounded-full hover:scale-105 border-2 border-white">
          BUY DEGGY
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
