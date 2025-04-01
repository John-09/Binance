import React from 'react';
import DesktopImage from '../assets/desktop.png';
import LiteImage from '../assets/phoneImage.svg';
import ProImage from '../assets/pro.svg';
import QR from '../assets/qr-code.png';
import macos from '../assets/apple-icon binance.png';
import linux from '../assets/icons8-linux-26.png';

interface MiddlePageProps {
  activeTab: 'Desktop' | 'Lite' | 'Pro';
  setActiveTab: React.Dispatch<React.SetStateAction<'Desktop' | 'Lite' | 'Pro'>>;
}

const MiddlePage: React.FC<MiddlePageProps> = ({ activeTab, setActiveTab }) => {
  return (
    <>

      <section className="py-20 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          {/* Phone/Trading Platform Image */}
          <div className="relative flex justify-center items-center h-[450px] md:h-[500px]">
            {activeTab === 'Desktop' && (
              <img src={DesktopImage} alt="Desktop Trading Platform" className="w-[90%] max-h-full object-contain " />
            )}
            {activeTab === 'Lite' && (
              <img src={LiteImage} alt="Lite Trading Platform" className="w-[90%] max-h-full object-contain" />
            )}
            {activeTab === 'Pro' && (
              <img src={ProImage} alt="Pro Trading Platform" className="w-[90%] max-h-full object-contain" />
            )}
          </div>

          {/* Tabs */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-8 border-b border-gray-700 cursor-pointer">
              <button
                className={`pb-2 px-4 cursor-pointer ${activeTab === 'Desktop' ? 'border-b-2 border-[#f0b90b] text-white' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Desktop')}
              >
                Desktop
              </button>
              <button
                className={`pb-2 px-4 cursor-pointer ${activeTab === 'Lite' ? 'border-b-2 border-[#f0b90b] text-white' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Lite')}
              >
                Lite
              </button>
              <button
                className={`pb-2 px-4 cursor-pointer ${activeTab === 'Pro' ? 'border-b-2 border-[#f0b90b] text-white' : 'text-gray-400'}`}
                onClick={() => setActiveTab('Pro')}
              >
                Pro
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-16">
          <h2 className="text-[40px] font-bold mb-6 text-[#EAECEF]" style={{ fontFamily: 'Arial, sans-serif' }}>Trade on the go. Anywhere, anytime.</h2>


          <div className="mb-6 flex items-center">
            <div className="bg-[#1e2329] p-2 inline-block rounded-lg">
              <div className="bg-white p-4 rounded-lg">
                <img
                  src={QR}
                  alt="QR Code"
                  className="w-30 h-30"
                />
              </div>
            </div>
            <div className="ml-6 flex flex-col">
              <p className="text-gray-400 text-lg mb-2">Scan to Download App</p>
              <p className="text-white text-lg">iOS and Android</p>
            </div>
          </div>


          <div className="flex justify-around mt-8 max-w-md">
            <div className="flex flex-col items-center p-3 rounded-lg hover:bg-[#2A2E37] hover:border hover:border-gray-700 cursor-pointer">
              <div className="bg-[#1e2329] p-4 rounded-full mb-2">
                <img src={macos} alt="macOS" className="w-7 h-7" />
              </div>
              <span>MacOS</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-lg hover:bg-[#2A2E37] hover:border hover:border-gray-700 cursor-pointer">
              <div className="bg-[#1e2329] p-4 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-7 h-7"
                >
                  <path d="M3 5.1L10.5 4v7.8H3V5.1zM10.5 12.9v7.9L3 19V12.9h7.5zM11.6 3.8l9.9-1.4v9.3h-9.9V3.8zM21.5 12.9v9.2l-9.9-1.4v-7.8h9.9z" />
                </svg>
              </div>
              <span>Windows</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-lg hover:bg-[#2A2E37] hover:border hover:border-gray-700 cursor-pointer">
              <div className="bg-[#1e2329] p-4 rounded-full mb-2">
                <img src={linux} alt="linux" className="w-7 h-7" />
              </div>
              <span>Linux</span>
            </div>
          </div>

          <button className="mt-8 flex items-center pt-20 cursor-pointer">
            More Download Options
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default MiddlePage