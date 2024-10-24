import React from 'react';
import { FaWallet, FaExchangeAlt } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import Image from 'next/image';
import Logo from '../asset/logo.png';

const Buy = () => {
  return (
    <section id="buy" className="py-16 mt-10 text-center bg-yellow-50">
      <div className="container mx-auto px-6">
        {/* Hero Text */}
        <h1 className="text-9xl font-extrabold text-black mb-10 bebas">
          HOW TO BUY ?
        </h1>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
          {/* Step 1 */}
          <div className="bg-yellow-400 p-6 rounded-lg shadow-lg border-4 border-yellow-950 text-left min-h-[400px] w-full flex flex-col card-hover transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-950">STEP 1</h2>
            <FaWallet size={48} className="text-yellow-950 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center text-black">CREATE A WALLET</h3>
            <p className="text-black text-center flex-grow">
              Download Phantom or your wallet of choice from the app store or Google Play for free. Desktop users, download the Google Chrome extension by going to Phantom.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-yellow-400 p-6 rounded-lg shadow-lg border-4 border-yellow-950 text-left min-h-[400px] w-full flex flex-col card-hover transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-950">STEP 2</h2>
            <SiSolana size={48} className="text-yellow-950 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center text-black">GET SOME SOL</h3>
            <p className="text-black text-center flex-grow">
              Have SOL in your wallet to switch to $DEGGY. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-yellow-400 p-6 rounded-lg shadow-lg border-4 border-yellow-950 text-left min-h-[400px] w-full flex flex-col card-hover transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-950">STEP 3</h2>
            <FaExchangeAlt size={48} className="text-yellow-950 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-center text-black">GO TO JUPITER</h3>
            <p className="text-black text-center flex-grow">
              Connect to Jupiter. Connect your wallet in Chrome. Paste the $DEGGY token address, select $DEGGY, and confirm. When Phantom prompts you for a wallet signature, sign.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-yellow-400 p-6 rounded-lg shadow-lg border-4 border-yellow-950 text-left min-h-[400px] w-full flex flex-col card-hover transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-4 text-center text-yellow-950">STEP 4</h2>
            <Image alt="logo" src={Logo} width={56} height={56} className="text-yellow-950 mx-auto mb-4 rounded-full border-2 border-yellow-950" />
            <h3 className="text-xl font-bold mb-2 text-center text-black">BUY $DEGGY</h3>
            <p className="text-black text-center flex-grow">
              Switch SOL for $DEGGY. We have Zero taxes so you don’t need to worry about buying with a specific slippage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
