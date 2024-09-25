import React from 'react';
import Image from 'next/image';
import { FaRocket, FaBullhorn, FaListAlt } from 'react-icons/fa';
import Phase1 from '../asset/1.webp';
import Phase2 from '../asset/2.webp';
import Phase3 from '../asset/3.webp';

const Plan = () => {
  return (
    <section id="plan" className=" mt-10 text-center bg-yellow-50">
      <div className="container mx-auto px-6">
        {/* Hero Text */}
        <h1 className="text-9xl font-extrabold text-black mb-10 bebas">
          Explore Deggy's Plan
        </h1>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
          {/* Phase 1 */}
          <div className=" p-8 rounded-lg shadow-xl border-4 border-yellow-950 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
            <Image src={Phase1} width={200} height={200} className="mb-4 rounded-full border-2 border-yellow-950" />
            <h2 className="text-4xl font-bold mb-4 text-yellow-950">Phase 1</h2>
            <h3 className="text-2xl font-semibold mb-2 text-black">Launch Deggy</h3>
            <p className="text-black text-center">
              Set Deggy free to the world so we can degen together and start building our community!
            </p>
          </div>

          {/* Phase 2 */}
          <div className=" p-8 rounded-lg shadow-xl border-4 border-yellow-950 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
            <Image src={Phase2} width={200} height={200} className="mb-4 rounded-full border-2 border-yellow-950" />
            <h2 className="text-4xl font-bold mb-4 text-yellow-950">Phase 2</h2>
            <h3 className="text-2xl font-semibold mb-2 text-black">Marketing & Burn</h3>
            <p className="text-black text-center">
              As market cap grows, we'll engage in strategic marketing and token burns while adding utility through trading education and live sessions.
            </p>
          </div>

          {/* Phase 3 */}
          <div className=" p-8 rounded-lg shadow-xl border-4 border-yellow-950 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
            <Image src={Phase3} width={200} height={200} className="mb-4 rounded-full border-2 border-yellow-950" />
            <h2 className="text-4xl font-bold mb-4 text-yellow-950">Phase 3</h2>
            <h3 className="text-2xl font-semibold mb-2 text-black">CEX Listings & NFTs</h3>
            <p className="text-black text-center">
              We're aiming for centralized exchange listings, launching NFTs, and throwing a degenerate yacht party!
            </p>
          </div>
        </div>
        <div className="absolute left-0 right-0 mt-20 bg-yellow-950 py-3">
        <p className="text-white tracking-widest molly text-center">
        •  DEGGY  •  DEGGY  •  DEGGY • DEGGY  •  DEGGY  •  DEGGY •  DEGGY  •  DEGGY  •  DEGGY • DEGGY  •  DEGGY  •  DEGGY
        • DEGGY  •  DEGGY  •  DEGGY • DEGGY  •  DEGGY  •  DEGGY •  DEGGY  •  DEGGY   •  DEGGY • DEGGY  •  DEGGY 
        • DEGGY  
        </p>
  </div>
      </div>
    </section>
  );
};

export default Plan;
