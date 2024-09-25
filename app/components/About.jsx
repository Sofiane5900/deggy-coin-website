import React from 'react';
import Image from 'next/image';
import deggyMascot from '../asset/deggy-nobg.png'; // Path to the DEGGY mascot image

const About = () => {
  return (
    <section id="about" className="py-16 text-center">
      <div className="container mx-auto px-6">
        {/* Hero Text */}
        <h1 className="text-5xl md:text-9xl font-bold text-black bebas">
          WELCOME TO DEGGY
        </h1>
        <p className="mt-4 text-black text-base md:text-lg">
          Deggy the Degenerate Gnome thrives in the wild world of meme coins, embracing reckless speculation and bold financial moves. His token, Deggy Coin, rewards those brave enough to hold on through the wild swings. 
          With Deggy, it's all about embracing the thrill of the degenerate path!
        </p>

        {/* Mascot Image */}
        <div className="mt-8 flex justify-center">
          <Image 
            src={deggyMascot} 
            alt="Deggy Mascot" 
            width={200} 
            height={200} 
            className="rounded-full md:w-80 md:h-80 w-48 h-48" // Responsive width and height
          />
        </div>

        {/* Contract and CTA */}
        <div className="mt-8 bg-white inline-block rounded-full px-4 md:px-6 py-2 md:py-3 border-4 border-yellow-950 shadow-lg">
          <span className="font-semibold text-black text-sm md:text-base">
            <span className='mali-bold'>CA: </span>3wbw9kLiPQ9HTUyqK2n9HAnJi85VEwAJwwAP964gCQJf
          </span>
          <button className="ml-2 md:ml-4 bg-yellow-950 text-white px-3 md:px-4 py-1 md:py-2 rounded-full hover:scale-105 transition-transform">
            Copy
          </button>
        </div>
      </div>

      {/* About Team */}
      <div className="py-8 text-center">
        <ul className='text-xl md:text-2xl mb-4'>- Total Supply 1,000,000,000</ul>
        <ul className='text-xl md:text-2xl mb-4'>- 12% Development Team</ul>
        <ul className='text-xl md:text-2xl'>- 5% Marketing and Burn</ul>
      </div>

      {/* Bottom Branding Bar */}
      <div className="absolute left-0 right-0 mt-4 bg-yellow-950 py-3">
        <p className="text-white tracking-widest molly text-center">
          •  DEGGY  •  DEGGY  •  DEGGY • DEGGY  •  DEGGY  •  DEGGY •  DEGGY  •  DEGGY  •  DEGGY • DEGGY  •  DEGGY  •  DEGGY
          • DEGGY  •  DEGGY  •  DEGGY • DEGGY  •  DEGGY  •  DEGGY •  DEGGY  •  DEGGY   •  DEGGY • DEGGY  •  DEGGY 
          • DEGGY  
        </p>
      </div>
    </section>
  );
};

export default About;
