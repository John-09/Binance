import React from 'react';
import BinaryIcon from '../assets/download.png';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  hoveredMenu: string | null;
  setHoveredMenu: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredSubmenu: string | null;
  setHoveredSubmenu: React.Dispatch<React.SetStateAction<string | null>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}


const Header: React.FC<HeaderProps> = ({
  hoveredMenu,
  setHoveredMenu,
  hoveredSubmenu,
  setHoveredSubmenu,
  showSearch,
  setShowSearch,
  searchQuery,
  setSearchQuery
}) => {

  return (
    <>

      <header className="flex items-center justify-between px-6 py-2 fixed top-0 left-0 right-0 z-50 bg-[#181A1F]">
        <div className="flex items-center">
          <img src={BinaryIcon} alt="Binance" className="h-14 mr-8 text-[#f0b90b] cursor-pointer" />

          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-sm hover:text-[#f0b90b]">Buy Crypto</a></li>
              <li><a href="#" className="text-sm hover:text-[#f0b90b]">Markets</a></li>
              <li className="relative">
                <a
                  href="#"
                  className="text-sm hover:text-[#f0b90b] flex items-center"
                  onMouseEnter={() => setHoveredMenu('trade')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  Trade <span className="ml-1">▾</span>
                </a>
                <AnimatePresence>
                  {hoveredMenu === 'trade' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 bg-[#1e2329] rounded-lg shadow-lg p-4 w-[600px] grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setHoveredMenu('trade')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <div>
                        <h3 className="text-gray-400 text-xs mb-3 uppercase">Basic</h3>
                        <ul className="space-y-2">
                          <li
                            className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                            onMouseEnter={() => setHoveredSubmenu('spot')}
                            onMouseLeave={() => setHoveredSubmenu(null)}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10" />
                                  <path d="M8 12h8" />
                                  <path d="M12 8v8" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium text-sm">Spot</span>
                                <p className="text-xs text-gray-400">Buy and sell on the Spot market with advanced tools</p>
                              </div>
                            </div>
                            {hoveredSubmenu === 'spot' && (
                              <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </motion.div>
                            )}
                          </li>
                          <li
                            className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                            onMouseEnter={() => setHoveredSubmenu('margin')}
                            onMouseLeave={() => setHoveredSubmenu(null)}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M12 2v20M2 12h20" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium text-sm">Margin</span>
                                <p className="text-xs text-gray-400">Increase your profits with leverage</p>
                              </div>
                            </div>
                            {hoveredSubmenu === 'margin' && (
                              <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </motion.div>
                            )}
                          </li>
                          <li
                            className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                            onMouseEnter={() => setHoveredSubmenu('p2p')}
                            onMouseLeave={() => setHoveredSubmenu(null)}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium text-sm">P2P</span>
                                <p className="text-xs text-gray-400">Buy & sell cryptocurrencies using bank transfer and 800+ options</p>
                              </div>
                            </div>
                            {hoveredSubmenu === 'p2p' && (
                              <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </motion.div>
                            )}
                          </li>
                          <li
                            className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                            onMouseEnter={() => setHoveredSubmenu('convert')}
                            onMouseLeave={() => setHoveredSubmenu(null)}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M17 1l4 4-4 4" />
                                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                                  <path d="M7 23l-4-4 4-4" />
                                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium text-sm">Convert & Block Trade</span>
                                <p className="text-xs text-gray-400">The easiest way to trade at all sizes</p>
                              </div>
                            </div>
                            {hoveredSubmenu === 'convert' && (
                              <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </motion.div>
                            )}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-xs mb-3 uppercase">Advanced</h3>
                        <ul className="space-y-2">
                          <li
                            className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                            onMouseEnter={() => setHoveredSubmenu('tradingBots')}
                            onMouseLeave={() => setHoveredSubmenu(null)}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                  <line x1="3" y1="9" x2="21" y2="9" />
                                  <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium text-sm">Trading Bots</span>
                                <p className="text-xs text-gray-400">Trade smarter with our various automated strategies - easy, fast and reliable</p>
                              </div>
                            </div>
                            {hoveredSubmenu === 'tradingBots' && (
                              <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </motion.div>
                            )}
                          </li>
                          <li
                            className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                            onMouseEnter={() => setHoveredSubmenu('copyTrading')}
                            onMouseLeave={() => setHoveredSubmenu(null)}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium text-sm">Copy Trading</span>
                                <p className="text-xs text-gray-400">Follow the most popular traders</p>
                              </div>
                            </div>
                            {hoveredSubmenu === 'copyTrading' && (
                              <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </motion.div>
                            )}
                          </li>
                          <li
                            className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                            onMouseEnter={() => setHoveredSubmenu('apis')}
                            onMouseLeave={() => setHoveredSubmenu(null)}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                  <line x1="2" y1="12" x2="22" y2="12" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium text-sm">APIs</span>
                                <p className="text-xs text-gray-400">Unlimited opportunities with one key</p>
                              </div>
                            </div>
                            {hoveredSubmenu === 'apis' && (
                              <motion.div
                                initial={{ x: -5, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </motion.div>
                            )}
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="text-sm hover:text-[#f0b90b] flex items-center"
                  onMouseEnter={() => setHoveredMenu('futures')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  Futures <span className="ml-1">▾</span>
                </a>
                <AnimatePresence>
                  {hoveredMenu === 'futures' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 bg-[#1e2329] rounded-lg shadow-lg p-4 w-[500px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setHoveredMenu('futures')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <ul className="space-y-4">
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('usdtFutures')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <span className="text-[#f0b90b] font-bold text-xs">$</span>
                            </div>
                            <div>
                              <span className="font-medium text-sm">USDT-M Futures</span>
                              <p className="text-xs text-gray-400">Contracts settled in USDT and USDC</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'usdtFutures' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('coinFutures')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <span className="text-[#f0b90b] font-bold text-xs">₿</span>
                            </div>
                            <div>
                              <span className="font-medium text-sm">COIN-M Futures</span>
                              <p className="text-xs text-gray-400">Contracts settled in cryptocurrency</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'coinFutures' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('options')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <span className="text-[#f0b90b] font-bold text-xs">O</span>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Options</span>
                              <p className="text-xs text-gray-400">USDT Options with limited downside and affordable entry</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'options' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="text-sm hover:text-[#f0b90b] flex items-center"
                  onMouseEnter={() => setHoveredMenu('earn')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  Earn <span className="ml-1">▾</span>
                </a>
                <AnimatePresence>
                  {hoveredMenu === 'earn' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 bg-[#1e2329] rounded-lg shadow-lg p-4 w-[500px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setHoveredMenu('earn')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <ul className="space-y-4">
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('overview')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Overview</span>
                              <p className="text-xs text-gray-400">One-stop portal for all Earn products</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'overview' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('simpleEarn')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Simple Earn</span>
                              <p className="text-xs text-gray-400">Earn passive income on 300+ crypto assets with flexible and locked terms</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'simpleEarn' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('advancedEarn')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Advanced Earn</span>
                              <p className="text-xs text-gray-400">Maximize your returns with our advanced yield investment products</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'advancedEarn' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('loans')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="6" width="20" height="12" rx="2" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M6 12h.01M18 12h.01" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Loans</span>
                              <p className="text-xs text-gray-400">Access quick and easy loans with competitive rates</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'loans' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="text-sm hover:text-[#f0b90b] flex items-center"
                  onMouseEnter={() => setHoveredMenu('square')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  Square <span className="ml-1">▾</span>
                </a>
                <AnimatePresence>
                  {hoveredMenu === 'square' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 bg-[#1e2329] rounded-lg shadow-lg p-4 w-[500px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setHoveredMenu('square')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <ul className="space-y-4">
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('squareMain')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Square</span>
                              <p className="text-xs text-gray-400">Stay informed with everything crypto</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'squareMain' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('academy')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Academy (Learn & Earn)</span>
                              <p className="text-xs text-gray-400">Earn crypto by learning about blockchain</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'academy' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('blog')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Blog</span>
                              <p className="text-xs text-gray-400">Expand your knowledge and get the latest insights</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'blog' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                        <li
                          className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                          onMouseEnter={() => setHoveredSubmenu('research')}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                            </div>
                            <div>
                              <span className="font-medium text-sm">Research</span>
                              <p className="text-xs text-gray-400">Institutional-grade analysis, in-depth insights, and more</p>
                            </div>
                          </div>
                          {hoveredSubmenu === 'research' && (
                            <motion.div
                              initial={{ x: -5, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                              </svg>
                            </motion.div>
                          )}
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="text-sm hover:text-[#f0b90b] flex items-center"
                  onMouseEnter={() => setHoveredMenu('more')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  More <span className="ml-1">▾</span>
                </a>
                <AnimatePresence>
                  {hoveredMenu === 'more' && (
                    <motion.div
                      className="absolute top-full right-0 mt-1 bg-[#1e2329] rounded-lg shadow-lg p-4 w-[600px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setHoveredMenu('more')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <ul className="space-y-4">
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('vip')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">VIP & Institutional</span>
                                  <p className="text-xs text-gray-400">Your trusted digital asset platform for VIPs and institutions</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'vip' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('affiliate')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Affiliate</span>
                                  <p className="text-xs text-gray-400">Earn up to 50% commission per trade from referrals</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'affiliate' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('referral')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Referral Program</span>
                                  <p className="text-xs text-gray-400">Invite friends to earn either a commission rebate or a one-time reward</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'referral' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('launchpool')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Launchpool</span>
                                  <p className="text-xs text-gray-400">Discover and gain access to new token launches</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'launchpool' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('megadrop')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Megadrop</span>
                                  <p className="text-xs text-gray-400">Lock your BNB and complete Web3 quests for boosted airdrop rewards</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'megadrop' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('miningPool')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Mining Pool</span>
                                  <p className="text-xs text-gray-400">Mine more rewards by connecting to the pool</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'miningPool' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-4">
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('pay')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Pay</span>
                                  <p className="text-xs text-gray-400">Send, receive and spend crypto</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'pay' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('nft')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                    <path d="M18 14h-8" />
                                    <path d="M15 18h-5" />
                                    <path d="M10 6h8v4h-8z" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">NFT</span>
                                  <p className="text-xs text-gray-400">Explore NFTs from creators worldwide</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'nft' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('fanToken')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Fan Token</span>
                                  <p className="text-xs text-gray-400">Discover an all-new fandom and unlock unlimited fan experiences</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'fanToken' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('wallet')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Binance Wallet</span>
                                  <p className="text-xs text-gray-400">Access and Navigate Web3 Effortlessly</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'wallet' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('bnbChain')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">BNB Chain</span>
                                  <p className="text-xs text-gray-400">The most popular blockchain to build your own dApp</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'bnbChain' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                            <li
                              className="flex items-center justify-between p-2 hover:bg-[#2b3139] rounded-md cursor-pointer"
                              onMouseEnter={() => setHoveredSubmenu('charity')}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-[#2b3139] rounded-full flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                  </svg>
                                </div>
                                <div>
                                  <span className="font-medium text-sm">Charity</span>
                                  <p className="text-xs text-gray-400">Blockchain empowers charity to be more transparent, efficient, and traceable</p>
                                </div>
                              </div>
                              {hoveredSubmenu === 'charity' && (
                                <motion.div
                                  initial={{ x: -5, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </motion.div>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>

        </div>

        <div className="flex items-center space-x-4">
          <button
            className="text-white cursor-pointer hover:text-gray-300"
            onClick={() => setShowSearch(!showSearch)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <AnimatePresence>
            {showSearch && (
              <motion.div
                className="absolute top-10 right-70 w-[400px] bg-[#1e2329] rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-[#2A3039] rounded-md px-3 py-2 flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent border-none outline-none text-white w-full"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button
                    className="ml-2 text-gray-400 hover:text-white"
                    onClick={() => setShowSearch(false)}
                  >
                    Cancel
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Hot Trading</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 hover:bg-[#2b3139] rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-3">1</span>
                        <div className="w-6 h-6 bg-[#2b3139] rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs">G</span>
                        </div>
                        <span>GUN/USDT</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span>$0.06526</span>
                        <span className="text-red-500 text-sm">-40.10%</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-2 hover:bg-[#2b3139] rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-3">2</span>
                        <div className="w-6 h-6 bg-[#f3ba2f] rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs text-black">₿</span>
                        </div>
                        <span>BTC/USDT</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span>$83,648.32</span>
                        <span className="text-green-500 text-sm">+2.27%</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-2 hover:bg-[#2b3139] rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-3">3</span>
                        <div className="w-6 h-6 bg-[#f3ba2f] rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs text-black">B</span>
                        </div>
                        <span>BNB/USDT</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span>$613.70</span>
                        <span className="text-green-500 text-sm">+3.13%</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-2 hover:bg-[#2b3139] rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">4</span>
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs text-white">S</span>
                        </div>
                        <span>SOL/USDT</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span>$127.54</span>
                        <span className="text-green-500 text-sm">+2.97%</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-2 hover:bg-[#2b3139] rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-3">5</span>
                        <div className="w-6 h-6 bg-[#23292f] rounded-full flex items-center justify-center mr-2">
                          <span className="text-xs text-white">X</span>
                        </div>
                        <span>XRP/USDT</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span>$2.15</span>
                        <span className="text-green-500 text-sm">+3.91%</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mt-6 mb-2">Earn</h3>
                  <div className="flex space-x-4">
                    <div className="bg-[#2A3039] p-4 rounded-lg cursor-pointer hover:bg-[#2b3139]">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-[#26a17b] rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs">$</span>
                        </div>
                        <span>USDT</span>
                      </div>
                      <div className="text-sm text-gray-400">Max APR</div>
                      <div className="text-green-500 text-xl">600.00%</div>
                    </div>

                    <div className="bg-[#2A3039] p-4 rounded-lg cursor-pointer hover:bg-[#2b3139]">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-[#26a17b] rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs">$</span>
                        </div>
                        <span>USDT</span>
                      </div>
                      <div className="text-sm text-gray-400">Max APR</div>
                      <div className="text-green-500 text-xl">349.97%</div>
                    </div>

                    <div className="bg-[#2A3039] p-4 rounded-lg cursor-pointer hover:bg-[#2b3139]">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-[#f3ba2f] rounded-full flex items-center justify-center mr-2">
                          <span className="text-black text-xs">₿</span>
                        </div>
                        <span>BTC</span>
                      </div>
                      <div className="text-sm text-gray-400">Max APR</div>
                      <div className="text-green-500 text-xl">346.50%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <a href="#" className="text-sm bg-[#2A3039] text-gray-300 hover:text-white px-4 py-1 rounded-md cursor-pointer">Log In</a>
          <a href="#" className="text-sm bg-[#f0b90b] text-black px-4 py-1 rounded-md hover:bg-[#f0b90b]/90 cursor-pointer">Sign Up</a>
          <button className="text-white cursor-pointer hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <button className="text-white cursor-pointer hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}


export default Header