import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CoinListingProps {
  activeMarketTab: 'Popular' | 'New Listing';
  setActiveMarketTab: React.Dispatch<React.SetStateAction<'Popular' | 'New Listing'>>;
}

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CoinListing: React.FC<CoinListingProps> = ({ activeMarketTab, setActiveMarketTab }) => {
  const [popularCoins, setPopularCoins] = useState<Coin[]>([]);
  const [newListingCoins, setNewListingCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);

        // Fetch popular coins (top by market cap)
        const popularResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 5,
              page: 1,
              sparkline: false,
              price_change_percentage: '24h'
            }
          }
        );


        const newListingResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'volume_desc',
              per_page: 100,
              page: 3,
              sparkline: false,
              price_change_percentage: '24h'
            }
          }
        );

        const filteredNewListings = newListingResponse.data
          .filter((coin: any) => !popularResponse.data.some((popular: any) => popular.id === coin.id))
          .slice(0, 5);

        setPopularCoins(popularResponse.data);
        setNewListingCoins(filteredNewListings);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching coin data:', err);
        setError('Failed to load coin data. Please try again later.');
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

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

      <div>
        {loading ? (
          <div className="py-10 text-center">
            <p className="text-gray-400">Loading coins...</p>
          </div>
        ) : error ? (
          <div className="py-10 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        ) : (
          <>
            {activeMarketTab === 'Popular' && (
              <>
                {popularCoins.map((coin) => (
                  <div key={coin.id} className="flex items-center justify-between py-2 cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                      </div>
                      <div>
                        <span className="font-medium">{coin.symbol.toUpperCase()}</span>
                        <span className="text-gray-400 text-sm ml-2">{coin.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-4">${coin.current_price.toLocaleString()}</span>
                      <span className={coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}>
                        {coin.price_change_percentage_24h >= 0 ? "+" : ""}
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeMarketTab === 'New Listing' && (
              <>
                {newListingCoins.map((coin) => (
                  <div key={coin.id} className="flex items-center justify-between py-2 cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                      </div>
                      <div>
                        <span className="font-medium">{coin.symbol.toUpperCase()}</span>
                        <span className="text-gray-400 text-sm ml-2">{coin.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-4">${coin.current_price.toLocaleString()}</span>
                      <span className={coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}>
                        {coin.price_change_percentage_24h >= 0 ? "+" : ""}
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CoinListing;