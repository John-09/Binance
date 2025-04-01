import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <div className="bg-[#1e2329] rounded-3xl p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium">News</h2>
        <a href="#" className="text-sm text-gray-400 flex items-center">
          View All News <span className="ml-1">›</span>
        </a>
      </div>

      <div>
        <div className="py-2">
          <a href="#" className="hover:text-[#858F9C] cursor-pointer">
            Tether Mints Additional 1 Billion USDT on Tron Network
          </a>
        </div>
        <div className="py-2">
          <a href="#" className="hover:text-[#858F9C] cursor-pointer">
            CoinDesk 20 Index Experiences Decline with No Assets Trading Higher
          </a>
        </div>
        <div className="py-2">
          <a href="#" className="hover:text-[#858F9C] cursor-pointer">
            BlackRock CEO Warns of Dollar's Reserve Currency Risk
          </a>
        </div>
        <div className="py-2">
          <a href="#" className="hover:text-[#858F9C] cursor-pointer">
            Tether Launches Cross-Chain Stablecoin USDT on Unichain
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;