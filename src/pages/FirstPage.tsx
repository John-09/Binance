import React, { useState, useRef, useEffect } from 'react';
// import {Google} from 'lucide-react'
// import QR from '../assets/qr-code.png'
import macos from '../assets/apple-icon binance.png'
import Google from '../assets/icons8-google-48.png'
import Footer from './Footer';
import FAQ from './FAQ';
import MiddlePage from './MiddlePage';
import Header from './Header';
import CoinListing from './CoinListing';
import NewsSection from './NewsSection';

const FirstPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Desktop' | 'Lite' | 'Pro'>('Lite');
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState<string | null>(null);
  const [count, setCount] = useState(260000000);
  const finalCount = 267192045;
  const animationDuration = 1000; // 5 seconds
  // const countRef = useRef(null);
  const animationRef = useRef<any>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMarketTab, setActiveMarketTab] = useState<'Popular' | 'New Listing'>('Popular');



  useEffect(() => {
    const startTime = Date.now();
    const startCount = count;
    const difference = finalCount - startCount;

    const updateCount = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < animationDuration) {
        // Calculate the new count based on elapsed time
        const newCount = Math.floor(startCount + (difference * (elapsed / animationDuration)));
        setCount(newCount);
        animationRef.current = requestAnimationFrame(updateCount);
      } else {
        setCount(finalCount);
      }
    };

    animationRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#181A1F] text-white">
      {/* Header/Navigation */}
      <Header
        hoveredMenu={hoveredMenu}
        setHoveredMenu={setHoveredMenu}
        hoveredSubmenu={hoveredSubmenu}
        setHoveredSubmenu={setHoveredSubmenu}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />


      <main className="flex flex-col md:flex-row p-12">

        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#f0b90b] leading-tight">
            {count.toLocaleString()}
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            USERS<br />TRUST US
          </h1>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <input
              type="text"
              placeholder="Email/Phone number"
              className="w-72 text-lg bg-[#1e2329] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-[#f0b90b]"
            />
            <button className="bg-[#f0b90b] text-black font-medium px-8 py-2 rounded-md hover:bg-[#f0b90b]/90 cursor-pointer">
              Sign Up
            </button>
          </div>

          <div className="mt-28">
            <div className="flex gap-4 mb-3">
              <p className="text-sm text-gray-400">Or Continue With</p>
              <span className="text-sm text-gray-500"></span>
              <p className="text-sm text-gray-400">Download App</p>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:border-[#2A2E37] cursor-pointer">
                <img src={Google} alt="Google" className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:border-[#2A2E37] cursor-pointer">
                <img src={macos} alt="Apple" className="w-5 h-5" />
              </button>
              <div className='pl-9'>
                {/* <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:border-[#2A2E37] cursor-pointer">
                <img src={QR} alt="QR Code" className="w-5 h-5" />
              </button> */}

                <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:border-[#2A2E37] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <rect x="7" y="7" width="3" height="3"></rect>
                    <rect x="14" y="7" width="3" height="3"></rect>
                    <rect x="7" y="14" width="3" height="3"></rect>
                    <rect x="14" y="14" width="3" height="3"></rect>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2 p-8 md:p-16">
          <CoinListing
            activeMarketTab={activeMarketTab}
            setActiveMarketTab={setActiveMarketTab}
          />


          <NewsSection />
        </div>
      </main>


      <div className="fixed bottom-6 right-6">
        <button className="bg-[#f0b90b] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>

      <MiddlePage activeTab={activeTab} setActiveTab={setActiveTab} />

      <FAQ activeFaq={activeFaq} setActiveFaq={setActiveFaq} />


      <section className="py-16 bg-[#1F2329] text-center">
        <h2 className="text-4xl font-bold mb-8">Start earning today</h2>
        <div className="flex justify-center">
          <button className="bg-[#f0b90b] text-black font-medium px-8 py-3 rounded-md hover:bg-[#f0b90b]/90 cursor-pointer">
            Sign Up Now
          </button>
        </div>
      </section>


      <Footer />


      <div className="fixed bottom-6 right-6">
        <button className="bg-[#f0b90b] w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FirstPage;