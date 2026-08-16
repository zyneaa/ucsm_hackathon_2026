import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PageSection } from '../types';

interface NavbarProps {
  activeTab: PageSection;
  setActiveTab: (tab: PageSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  const handleNavClick = (tab: PageSection) => {
    setActiveTab(tab);
    setIsMobileOpen(false);
  };

  const navLinks: { id: PageSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0D0B1F]/90 backdrop-blur-md py-6 px-6 md:px-12 lg:px-16">
      <nav className="hidden md:grid grid-cols-5 items-center w-full max-w-[95vw] lg:max-w-[90vw] mx-auto font-serif">
        
        {/* Leftmost Item: Home */}
        <div className="text-left">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors cursor-pointer text-base lg:text-lg tracking-wider ${
              activeTab === 'home'
                ? 'text-white border-b border-white pb-0.5'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Home
          </button>
        </div>

        {/* Left-Center Item: Projects */}
        <div className="text-left pl-8 lg:pl-12">
          <button
            onClick={() => handleNavClick('projects')}
            className={`transition-colors cursor-pointer text-base lg:text-lg tracking-wider ${
              activeTab === 'projects'
                ? 'text-white border-b border-white pb-0.5'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Projects
          </button>
        </div>

        {/* Center Item: UCSM AI HACKATHON 2026 */}
        <div className="text-center">
          <button
            onClick={() => handleNavClick('home')}
            className="group cursor-pointer focus:outline-none inline-block"
          >
            <span className="block text-xs lg:text-sm tracking-[0.25em] font-serif uppercase text-white group-hover:text-white/80 transition-colors">
              UCSM
            </span>
            <span className="block text-xs lg:text-sm tracking-[0.3em] font-serif uppercase text-white group-hover:text-white/80 transition-colors">
              AI HACKATHON
            </span>
            <span className="block text-[11px] lg:text-xs tracking-[0.25em] font-serif uppercase text-white/80">
              2026
            </span>
          </button>
        </div>

        {/* Right-Center Item: About Us */}
        <div className="text-right pr-8 lg:pr-12">
          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors cursor-pointer text-base lg:text-lg tracking-wider ${
              activeTab === 'about'
                ? 'text-white border-b border-white pb-0.5'
                : 'text-white/80 hover:text-white'
            }`}
          >
            About Us
          </button>
        </div>

        {/* Rightmost Item: Contact Us */}
        <div className="text-right">
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors cursor-pointer text-base lg:text-lg tracking-wider ${
              activeTab === 'contact'
                ? 'text-white border-b border-white pb-0.5'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Mobile Navbar Viewport Header */}
      <div className="flex md:hidden items-center justify-between w-full">
        {/* Brand Header */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none"
        >
          <span className="block text-xs tracking-[0.2em] font-serif uppercase text-white">
            UCSM
          </span>
          <span className="block text-xs tracking-[0.25em] font-serif uppercase text-white">
            AI HACKATHON
          </span>
          <span className="block text-[10px] tracking-[0.2em] font-serif uppercase text-white/80">
            2026
          </span>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
          className="text-white p-2 focus:outline-none z-50"
        >
          {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[73px] h-[calc(100vh-73px)] bg-[#0D0B1F]/98 backdrop-blur-xl md:hidden z-40 flex flex-col justify-between px-6 py-8"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-mono mb-2">
                Navigation
              </span>

              {navLinks.map((link, index) => {
                const isActive = activeTab === link.id;
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left text-2xl font-serif tracking-widest py-2 transition-all flex items-center justify-between border-b border-white/10 ${
                      isActive ? 'text-white font-bold pl-2 border-l-4 border-l-white' : 'text-white/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* {isActive && (
                      <span className="text-xs font-mono tracking-normal bg-white text-[#0D0B1F] px-2 py-0.5 rounded">
                        ACTIVE
                      </span>
                    )} */}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Footer */}
            <div className="pt-6 border-t border-white/10 text-center space-y-1 font-mono text-xs text-white/50">
              <p>UNIVERSITY OF COMPUTER STUDIES, MANDALAY</p>
              <p className="text-white/30">SEPTEMBER 3, 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};