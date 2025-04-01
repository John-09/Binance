import React from 'react';

interface CoinListingProps {
  activeMarketTab: 'Popular' | 'New Listing';
  setActiveMarketTab: React.Dispatch<React.SetStateAction<'Popular' | 'New Listing'>>;
}

const CoinListing: React.FC<CoinListingProps> = ({ activeMarketTab, setActiveMarketTab }) => {
  return (
    <div className="bg-[#1e2329] rounded-3xl p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4 cursor-pointer">
          <button 
            className={`pb-1 cursor-pointer ${activeMarketTab === 'Popular' ? 'text-white border-b-2 border-[#f0b90b] font-medium' : 'text-gray-400'}`}
            onClick={() => setActiveMarketTab('Popular')}
          >
            Popular
          </button>
          <button 
            className={`pb-1 cursor-pointer ${activeMarketTab === 'New Listing' ? 'text-white border-b-2 border-[#f0b90b] font-medium' : 'text-gray-400'}`}
            onClick={() => setActiveMarketTab('New Listing')}
          >
            New Listing
          </button>
        </div>
        <a href="#" className="text-sm text-gray-400 flex items-center">
          View All 350+ Coins <span className="ml-1">›</span>
        </a>
      </div>
      
      {/* Crypto List */}
      <div>
        {activeMarketTab === 'Popular' && (
          <>
            {/* BTC */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#f3ba2f] rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-xs">₿</span>
                </div>
                <div>
                  <span className="font-medium">BTC</span>
                  <span className="text-gray-400 text-sm ml-2">Bitcoin</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$83,150.78</span>
                <span className="text-green-500">+0.38%</span>
              </div>
            </div>
            
            {/* ETH */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#627eea] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">Ξ</span>
                </div>
                <div>
                  <span className="font-medium">ETH</span>
                  <span className="text-gray-400 text-sm ml-2">Ethereum</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$1,833.33</span>
                <span className="text-green-500">+1.02%</span>
              </div>
            </div>
            
            {/* BNB */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#f3ba2f] rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-xs">B</span>
                </div>
                <div>
                  <span className="font-medium">BNB</span>
                  <span className="text-gray-400 text-sm ml-2">BNB</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$604.00</span>
                <span className="text-red-500">-0.03%</span>
              </div>
            </div>
            
            {/* XRP */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#23292f] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">X</span>
                </div>
                <div>
                  <span className="font-medium">XRP</span>
                  <span className="text-gray-400 text-sm ml-2">XRP</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$2.10</span>
                <span className="text-red-500">-1.77%</span>
              </div>
            </div>
            
            {/* SOL */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <div>
                  <span className="font-medium">SOL</span>
                  <span className="text-gray-400 text-sm ml-2">Solana</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$126.41</span>
                <span className="text-green-500">+1.45%</span>
              </div>
            </div>
          </>
        )}

        {activeMarketTab === 'New Listing' && (
          <>
            {/* GUN */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1e2329] rounded-full flex items-center justify-center mr-3">
                  <img src="https://via.placeholder.com/30" alt="GUN" className="w-6 h-6 rounded-full" />
                </div>
                <div>
                  <span className="font-medium">GUN</span>
                  <span className="text-gray-400 text-sm ml-2">GUNZ</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$0.06535</span>
                <span className="text-red-500">-35.82%</span>
              </div>
            </div>
            
            {/* BANANAS31 */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1e2329] rounded-full flex items-center justify-center mr-3">
                  <img src="https://via.placeholder.com/30" alt="BANANAS31" className="w-6 h-6 rounded-full" />
                </div>
                <div>
                  <span className="font-medium">BANANAS31</span>
                  <span className="text-gray-400 text-sm ml-2">Banana</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$0.005483</span>
                <span className="text-red-500">-0.36%</span>
              </div>
            </div>
            
            {/* BROCCOLI714 */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1e2329] rounded-full flex items-center justify-center mr-3">
                  <img src="https://via.placeholder.com/30" alt="BROCCOLI714" className="w-6 h-6 rounded-full" />
                </div>
                <div>
                  <span className="font-medium">BROCCOLI714</span>
                  <span className="text-gray-400 text-sm ml-2">CZ'S</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$0.03988</span>
                <span className="text-red-500">-26.26%</span>
              </div>
            </div>
            
            {/* MUBARAK */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1e2329] rounded-full flex items-center justify-center mr-3">
                  <img src="https://via.placeholder.com/30" alt="MUBARAK" className="w-6 h-6 rounded-full" />
                </div>
                <div>
                  <span className="font-medium">MUBARAK</span>
                  <span className="text-gray-400 text-sm ml-2">Mubarak</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$0.0468</span>
                <span className="text-red-500">-17.75%</span>
              </div>
            </div>
            
            {/* TUT */}
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#1e2329] rounded-full flex items-center justify-center mr-3">
                  <img src="https://via.placeholder.com/30" alt="TUT" className="w-6 h-6 rounded-full" />
                </div>
                <div>
                  <span className="font-medium">TUT</span>
                  <span className="text-gray-400 text-sm ml-2">Tutorial</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-4">$0.03594</span>
                <span className="text-red-500">-20.04%</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CoinListing;