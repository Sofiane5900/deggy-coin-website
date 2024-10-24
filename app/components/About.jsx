"use client";

import React from 'react';
import Logo from '../asset/logo.png';
import Image from 'next/image';

const About = () => {
  const contractAddress = "3wbw9kLiPQ9HTUyqK2n9HAnJi85VEwAJwwAP964gCQJf";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        alert("Contract Address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section id="about" className="py-16 text-center relative">
      <div className="container mx-auto px-6">
        {/* Hero Text */}
        <h1 className="text-5xl md:text-9xl font-bold text-white bebas" style={{ textShadow: '4px 4px 0 #000' }}>
          WELCOME TO RUG PULL ROYAL
        </h1>
        
        <p className="mt-4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-base md:text-lg blockhead">
          Rug Pull Royal Coin reigns supreme in the unpredictable world of meme coins, 
          where high risks meet even higher rewards. In a kingdom where only the bold survive, 
          $RPR Coin challenges you to outwit the chaos and emerge victorious.
          Whether you&#39;re here for the thrill or the fortune, Rug Pull Royal embraces the daring spirit of the meme coin arena. Hold on tight—loyalty to the crown might just be your key to riches!
        </p>

        {/* Mascot Image */}
        <div className="mt-8 flex justify-center">
          <Image 
            src={Logo}
            alt="RPR Mascot"
            className="rounded-full border-4 border-yellow-300 shadow-md md:w-80 md:h-80 w-48 h-48"
          />
        </div>

        {/* Contract and CTA */}
        <div className="mt-8 bg-white inline-block rounded-full px-4 md:px-6 py-2 md:py-3 border-4 border-yellow-300">
          <span className="font-semibold text-black text-sm md:text-base" style={{ textShadow: '1px 1px 0 #FFF' }}>
            <span>CA: </span>{contractAddress}
          </span>
          <button 
            className="ml-2 md:ml-4 bg-yellow-300 text-white px-3 md:px-4 py-1 md:py-2 rounded-full hover:scale-105 transition-transform border-2  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] "
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
      </div>

      {/* About Team */}
      <div className="py-8 text-center text-white" style={{ textShadow: '2px 2px 0 #000' }}>
        <ul className="text-xl md:text-2xl mb-4">- Total Supply 1,000,000,000</ul>
        <ul className="text-xl md:text-2xl mb-4">- Strong Development Team</ul>
        <ul className="text-xl md:text-2xl">- 5% Marketing and Burn</ul>
      </div>

      {/* Bottom Branding Bar */}
      <div className="absolute left-[50%] right-[50%] bottom-0 w-screen ml-[-50vw] mr-[-50vw] bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-3 border-t-4 border-yellow-950">
        <div className="whitespace-nowrap overflow-hidden">
          <p className="text-white tracking-widest molly text-center font-bold text-lg md:text-xl animate-scroll" style={{ textShadow: '2px 2px 0 #000' }}>
            • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR 
            • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR 
            • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR • RPR
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
