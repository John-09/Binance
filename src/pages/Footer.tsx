
const Footer = () => {
    return(
        <>
              <footer className="bg-[#181A1F] text-white pt-16 pb-8 px-4 md:px-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Community Column */}
            <div>
              <h3 className="font-medium mb-6">Community</h3>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <a href="#" className="bg-[#1e2329] p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                  </svg>
                </a>
                <a href="#" className="bg-[#1e2329] p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="bg-[#1e2329] p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="bg-[#1e2329] p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <a href="#" className="bg-[#1e2329] p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a href="#" className="bg-[#1e2329] p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
                <a href="#" className="bg-[#1e2329] p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* About Us Column */}
            <div>
              <h3 className="font-medium mb-6">About Us</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">About</a></li>
                <li><a href="#" className="hover:text-yellow-300">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-300">Announcements</a></li>
                <li><a href="#" className="hover:text-yellow-300">News</a></li>
                <li><a href="#" className="hover:text-yellow-300">Press</a></li>
                <li><a href="#" className="hover:text-yellow-300">Legal</a></li>
                <li><a href="#" className="hover:text-yellow-300">Terms</a></li>
                <li><a href="#" className="hover:text-yellow-300">Privacy</a></li>
                <li><a href="#" className="hover:text-yellow-300">Building Trust</a></li>
                <li><a href="#" className="hover:text-yellow-300">Blog</a></li>
                <li><a href="#" className="hover:text-yellow-300">Community</a></li>
                <li><a href="#" className="hover:text-yellow-300">Risk Warning</a></li>
                <li><a href="#" className="hover:text-yellow-300">Notices</a></li>
                <li><a href="#" className="hover:text-yellow-300">Downloads</a></li>
                <li><a href="#" className="hover:text-yellow-300">Desktop Application</a></li>
              </ul>
            </div>
            
            {/* Products Column */}
            <div>
              <h3 className="font-medium mb-6">Products</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">Exchange</a></li>
                <li><a href="#" className="hover:text-yellow-300">Buy Crypto</a></li>
                <li><a href="#" className="hover:text-yellow-300">Pay</a></li>
                <li><a href="#" className="hover:text-yellow-300">Academy</a></li>
                <li><a href="#" className="hover:text-yellow-300">Live</a></li>
                <li><a href="#" className="hover:text-yellow-300">Tax</a></li>
                <li><a href="#" className="hover:text-yellow-300">Gift Card</a></li>
                <li><a href="#" className="hover:text-yellow-300">Launchpool</a></li>
                <li><a href="#" className="hover:text-yellow-300">Auto-Invest</a></li>
                <li><a href="#" className="hover:text-yellow-300">ETH Staking</a></li>
                <li><a href="#" className="hover:text-yellow-300">NFT</a></li>
                <li><a href="#" className="hover:text-yellow-300">BABT</a></li>
                <li><a href="#" className="hover:text-yellow-300">Research</a></li>
                <li><a href="#" className="hover:text-yellow-300">Charity</a></li>
              </ul>
            </div>
            
            {/* Business Column */}
            <div>
              <h3 className="font-medium mb-6">Business</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">P2P Merchant Application</a></li>
                <li><a href="#" className="hover:text-yellow-300">P2Pro Merchant Application</a></li>
                <li><a href="#" className="hover:text-yellow-300">Listing Application</a></li>
                <li><a href="#" className="hover:text-yellow-300">Institutional & VIP Services</a></li>
                <li><a href="#" className="hover:text-yellow-300">Labs</a></li>
                <li><a href="#" className="hover:text-yellow-300">Binance Connect</a></li>
              </ul>

              <h3 className="font-medium mb-6 mt-8">Learn</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">Learn & Earn</a></li>
                <li><a href="#" className="hover:text-yellow-300">Browse Crypto Prices</a></li>
                <li><a href="#" className="hover:text-yellow-300">Bitcoin Price</a></li>
                <li><a href="#" className="hover:text-yellow-300">Ethereum Price</a></li>
                <li><a href="#" className="hover:text-yellow-300">Browse Crypto Price Predictions</a></li>
                <li><a href="#" className="hover:text-yellow-300">Bitcoin Price Prediction</a></li>
                <li><a href="#" className="hover:text-yellow-300">Ethereum Price Prediction</a></li>
                <li><a href="#" className="hover:text-yellow-300">Ethereum Upgrade (Pectra)</a></li>

                <li><a href="#" className="hover:text-yellow-300">Buy Bitcoin</a></li>

                <li><a href="#" className="hover:text-yellow-300">Buy BNB</a></li>

                <li><a href="#" className="hover:text-yellow-300">Buy XRP</a></li>

                <li><a href="#" className="hover:text-yellow-300">Buy Dogecoin</a></li>

                <li><a href="#" className="hover:text-yellow-300">Buy Ethereum</a></li>

                <li><a href="#" className="hover:text-yellow-300">Buy Tradable Altcoins</a></li>

              </ul>
            </div>
            
            {/* Service Column */}
            <div>
              <h3 className="font-medium mb-6">Service</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">Affiliate</a></li>
                <li><a href="#" className="hover:text-yellow-300">Referral</a></li>
                <li><a href="#" className="hover:text-yellow-300">BNB</a></li>
                <li><a href="#" className="hover:text-yellow-300">OTC Trading</a></li>
                <li><a href="#" className="hover:text-yellow-300">Historical Market Data</a></li>
                <li><a href="#" className="hover:text-yellow-300">Trading Insight</a></li>
                <li><a href="#" className="hover:text-yellow-300">Proof of Reserves</a></li>
              </ul>
              
              <h3 className="font-medium mb-6 mt-8">Support</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-300">24/7 Chat Support</a></li>
                <li><a href="#" className="hover:text-yellow-300">Support Center</a></li>
                <li><a href="#" className="hover:text-yellow-300">Product Feedback & Suggestions</a></li>
                <li><a href="#" className="hover:text-yellow-300">Fees</a></li>
                <li><a href="#" className="hover:text-yellow-300">APIs</a></li>
                <li><a href="#" className="hover:text-yellow-300">Trading Rules</a></li>
                <li><a href="#" className="hover:text-yellow-300">Binance Airdrop Portal</a></li>
                <li><a href="#" className="hover:text-yellow-300">Law Enforcement Requests</a></li>

              </ul>
            </div>
          </div>
          
          {/* Footer Bottom Section */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-0 space-y-3 md:space-y-0">
              <div className="text-sm text-gray-400 md:mr-8 text-center">
                Binance© 2025
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="text-sm text-gray-400 hover:text-white">Cookie Preferences</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
        
        </>
    )

}

export default Footer