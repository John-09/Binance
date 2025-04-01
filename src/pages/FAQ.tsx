
interface FAQProps {
  activeFaq: number;
  setActiveFaq: React.Dispatch<React.SetStateAction<number>>;
}

const FAQ: React.FC<FAQProps> = ({ activeFaq, setActiveFaq }) => {
  return (
    <>
      <section className="py-20 px-4 md:px-16 bg-[#181A1F]">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Item 1 */}
          <div className="mb-4">
            <div
              className="flex justify-between items-center py-4 px-2 border-b border-gray-800 cursor-pointer hover:bg-[#1e2329]/30"
              onClick={() => setActiveFaq(activeFaq === 1 ? 0 : 1)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 mr-4">1</div>
                <h3 className="text-lg font-medium">What is a cryptocurrency exchange?</h3>
              </div>
              <button
                className={`${activeFaq === 1 ? 'bg-[#f0b90b]' : 'bg-[#1e2329]'} rounded-full w-6 h-6 flex items-center justify-center cursor-pointer`}
              >
                <span className={`${activeFaq === 1 ? 'text-black' : 'text-white'} font-bold`}>
                  {activeFaq === 1 ? '-' : '+'}
                </span>
              </button>
            </div>
            {activeFaq === 1 && (
              <div className="py-4 px-2 pl-14">
                <p className="text-gray-400">
                  <span className="text-[#f0b90b]">Cryptocurrency</span> exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like <span className="text-[#f0b90b]">Bitcoin</span>, <span className="text-[#f0b90b]">Ethereum</span>, and <span className="text-[#f0b90b]">Tether</span>. The Binance exchange is the largest crypto exchange by trade volume.
                </p>
              </div>
            )}
          </div>


          <div className="mb-4">
            <div
              className="flex justify-between items-center py-4 px-2 border-b border-gray-800 cursor-pointer hover:bg-[#1e2329]/30"
              onClick={() => setActiveFaq(activeFaq === 2 ? 0 : 2)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 mr-4">2</div>
                <h3 className="text-lg font-medium">What products does Binance provide?</h3>
              </div>
              <button
                className={`${activeFaq === 2 ? 'bg-[#f0b90b]' : 'bg-[#1e2329]'} rounded-full w-6 h-6 flex items-center justify-center cursor-pointer`}
              >
                <span className={`${activeFaq === 2 ? 'text-black' : 'text-white'} font-bold`}>
                  {activeFaq === 2 ? '-' : '+'}
                </span>
              </button>
            </div>
            {activeFaq === 2 && (
              <div className="py-4 pl-14">
                <div className="text-gray-400  rounded-lg">
                  <p>
                    Binance is the world's leading cryptocurrency exchange, catering to 235 million registered users in over 180 countries. With low fees and over 350 cryptocurrencies to trade, Binance is the preferred exchange to trade Bitcoin, Altcoins, and other virtual assets.
                  </p>

                  <p className="mt-4">With Binance, users can:</p>

                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Trade hundreds of cryptocurrencies on{" "}
                      <span className="text-yellow-400 ">Spot</span>,{" "}
                      <span className="text-yellow-400">Margin</span>, and{" "}
                      <span className="text-yellow-400">Futures</span> markets.
                    </li>
                    <li>
                      Buy and sell cryptocurrencies with{" "}
                      <span className="text-yellow-400">Binance P2P</span>.
                    </li>
                    <li>
                      Earn interest on your crypto with{" "}
                      <span className="text-yellow-400">Binance Earn</span>.
                    </li>
                    <li>
                      Buy or earn new tokens on{" "}
                      <span className="text-yellow-400">Binance Launchpad</span>.
                    </li>
                    <li>
                      Trade, stake, and loan NFTs on{" "}
                      <span className="text-yellow-400">Binance NFT</span> marketplace.
                    </li>
                  </ul>
                </div>


              </div>
            )}
          </div>


          <div className="mb-4">
            <div
              className="flex justify-between items-center py-4 px-2 border-b border-gray-800 cursor-pointer hover:bg-[#1e2329]/30"
              onClick={() => setActiveFaq(activeFaq === 3 ? 0 : 3)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 mr-4">3</div>
                <h3 className="text-lg font-medium">How to buy Bitcoin and other cryptocurrencies on Binance</h3>
              </div>
              <button
                className={`${activeFaq === 3 ? 'bg-[#f0b90b]' : 'bg-[#1e2329]'} rounded-full w-6 h-6 flex items-center justify-center cursor-pointer`}
              >
                <span className={`${activeFaq === 3 ? 'text-black' : 'text-white'} font-bold`}>
                  {activeFaq === 3 ? '-' : '+'}
                </span>
              </button>
            </div>
            {activeFaq === 3 && (
              <div className="py-4 px-2 pl-14">
                <p className="text-gray-400">
                  There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to <span className="text-yellow-400">purchase crypto</span> on Binance. Before getting started, please make sure you’ve completed <span className="text-yellow-400">Identity Verification</span> for your Binance account.
                </p>
              </div>
            )}
          </div>


          <div className="mb-4">
            <div
              className="flex justify-between items-center py-4 px-2 border-b border-gray-800 cursor-pointer hover:bg-[#1e2329]/30"
              onClick={() => setActiveFaq(activeFaq === 4 ? 0 : 4)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 mr-4">4</div>
                <h3 className="text-lg font-medium">How to track cryptocurrency prices</h3>
              </div>
              <button
                className={`${activeFaq === 4 ? 'bg-[#f0b90b]' : 'bg-[#1e2329]'} rounded-full w-6 h-6 flex items-center justify-center cursor-pointer`}
              >
                <span className={`${activeFaq === 4 ? 'text-black' : 'text-white'} font-bold`}>
                  {activeFaq === 4 ? '-' : '+'}
                </span>
              </button>
            </div>
            {activeFaq === 4 && (
              <div className="py-4 px-2 pl-14">
                <p className="text-gray-400">
                  The easiest way to track the latest cryptocurrency prices, trading volumes, trending altcoins, and market cap is the <span className="text-yellow-400">Binance Cryptocurrency Directory.</span> Click on the coins to know historical coin prices, 24-hour trading volume, and the price of cryptocurrencies like <span className="text-yellow-400">Bitcoin, Ethereum, BNB</span> and others in real-time.
                </p>
              </div>
            )}
          </div>


          <div className="mb-4">
            <div
              className="flex justify-between items-center py-4 px-2 border-b border-gray-800 cursor-pointer hover:bg-[#1e2329]/30"
              onClick={() => setActiveFaq(activeFaq === 5 ? 0 : 5)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 mr-4">5</div>
                <h3 className="text-lg font-medium">How to trade cryptocurrencies on Binance</h3>
              </div>
              <button
                className={`${activeFaq === 5 ? 'bg-[#f0b90b]' : 'bg-[#1e2329]'} rounded-full w-6 h-6 flex items-center justify-center cursor-pointer`}
              >
                <span className={`${activeFaq === 5 ? 'text-black' : 'text-white'} font-bold`}>
                  {activeFaq === 5 ? '-' : '+'}
                </span>
              </button>
            </div>
            {activeFaq === 5 && (
              <div className="py-4 px-2 pl-14">
                <p className="text-gray-400">
                  You can trade hundreds of cryptocurrencies on Binance via the <span className="text-yellow-400">Spot, Margin, Futures,</span> and <span className="text-yellow-400">Options</span> markets. To <span className="text-yellow-400">begin trading,</span> users need to register an account, complete identity verification, buy/deposit crypto, and start trading.
                </p>
              </div>
            )}
          </div>


          <div className="mb-4">
            <div
              className="flex justify-between items-center py-4 px-2 border-b border-gray-800 cursor-pointer hover:bg-[#1e2329]/30"
              onClick={() => setActiveFaq(activeFaq === 6 ? 0 : 6)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-700 text-gray-400 mr-4">6</div>
                <h3 className="text-lg font-medium">How to earn from crypto on Binance</h3>
              </div>
              <button
                className={`${activeFaq === 6 ? 'bg-[#f0b90b]' : 'bg-[#1e2329]'} rounded-full w-6 h-6 flex items-center justify-center cursor-pointer`}
              >
                <span className={`${activeFaq === 6 ? 'text-black' : 'text-white'} font-bold`}>
                  {activeFaq === 6 ? '-' : '+'}
                </span>
              </button>
            </div>
            {activeFaq === 6 && (
              <div className="py-4 px-2 pl-14">
                <p className="text-gray-400">
                  Users can earn rewards on more than 180+ cryptocurrencies by using one of the products offered on <span className="text-yellow-400">Binance Earn.</span> Our platform offers dozens of digital assets like <span className="text-yellow-400">Bitcoin, Ethereum,</span> and stablecoins.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}


export default FAQ