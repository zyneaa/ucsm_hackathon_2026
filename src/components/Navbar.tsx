import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type{ PageSection } from '../types';

interface NavbarProps {
  activeTab: PageSection;
  setActiveTab: (tab: PageSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="w-full bg-[#0D0B1F] text-[#ecebf3] py-2 px-6  relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Home,Projects*/}
        <nav className="hidden md:flex items-center space-x-12">
          <button
            onClick={() => setActiveTab('home')}
            className={`text-sm font-serif tracking-wide transition-opacity ${
              activeTab === 'home' ? 'opacity-100 font-semibold' : 'opacity-60 hover:opacity-100'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`text-sm font-serif tracking-wide transition-opacity ${
              activeTab === 'projects' ? 'opacity-100 font-semibold' : 'opacity-60 hover:opacity-100'
            }`}
          >
            Projects
          </button>
        </nav>

        {/* NavTitle */}
        <div 
          onClick={() => setActiveTab('home')}
          className="cursor-pointer text-center flex flex-col items-center justify-center space-y-0.5 mx-auto md:mx-0"
        >
          <span className="text-xs font-serif tracking-widest text-[#ecebf3]/70 uppercase">UCSM</span>
          <span className="text-sm font-serif tracking-widest uppercase text-[#ecebf3]">AI HACKATHON</span>
          <span className="text-xs font-serif tracking-widest text-[#ecebf3]/70">2026</span>
        </div>

        {/* AboutUs,ContactUs Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          <button
            onClick={() => setActiveTab('about')}
            className={`text-sm font-serif tracking-wide transition-opacity ${
              activeTab === 'about' ? 'opacity-100 font-semibold' : 'opacity-60 hover:opacity-100'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`text-sm font-serif tracking-wide transition-opacity ${
              activeTab === 'contact' ? 'opacity-100 font-semibold' : 'opacity-60 hover:opacity-100'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-[#ecebf3] focus:outline-none absolute right-6"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0b0b14] border-t border-white/10 mt-6 pt-4 pb-2 flex flex-col space-y-4 px-2">
          <button
            onClick={() => { setActiveTab('home'); setIsMobileOpen(false); }}
            className={`text-left text-sm py-2 ${activeTab === 'home' ? 'text-white font-bold' : 'text-[#ecebf3]/70'}`}
          >
            Home
          </button>
          <button
            onClick={() => { setActiveTab('projects'); setIsMobileOpen(false); }}
            className={`text-left text-sm py-2 ${activeTab === 'projects' ? 'text-white font-bold' : 'text-[#ecebf3]/70'}`}
          >
            Projects
          </button>
          <button
            onClick={() => { setActiveTab('about'); setIsMobileOpen(false); }}
            className={`text-left text-sm py-2 ${activeTab === 'about' ? 'text-white font-bold' : 'text-[#ecebf3]/70'}`}
          >
            About Us
          </button>
          <button
            onClick={() => { setActiveTab('contact'); setIsMobileOpen(false); }}
            className={`text-left text-sm py-2 ${activeTab === 'contact' ? 'text-white font-bold' : 'text-[#ecebf3]/70'}`}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};