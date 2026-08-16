import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PageSection } from '../types';

interface NavbarProps {
  activeTab: PageSection;
  setActiveTab: (tab: PageSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#0D0B1F]/90 backdrop-blur-md py-4 px-6 md:px-12">
      <nav className="hidden md:flex justify-between items-center w-[90vw] mx-auto text-sm md:text-base font-serif tracking-wider">
        
        {/* Home, Projects */}
        <button
          onClick={() => setActiveTab('home')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeTab === 'home' ? 'text-white border-b border-white pb-0.5' : 'text-white/90'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeTab === 'projects' ? 'text-white border-b border-white pb-0.5' : 'text-white/90'
          }`}
        >
          Projects
        </button>

        {/* NavTitle */}
        <button
          onClick={() => setActiveTab('home')}
          className="text-center group cursor-pointer"
        >
          <span className="block text-xs md:text-sm tracking-[0.2em] font-serif uppercase text-white group-hover:text-white/80 transition-colors">
            UCSM
          </span>
          <span className="block text-xs md:text-sm tracking-[0.25em] font-serif uppercase text-white group-hover:text-white/80 transition-colors">
            AI HACKATHON
          </span>
          <span className="block text-xs md:text-sm tracking-[0.2em] font-serif uppercase text-white/80">
            2026
          </span>
        </button>

        {/* About Us, Contact Us */}
        <button
          onClick={() => setActiveTab('about')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeTab === 'about' ? 'text-white border-b border-white pb-0.5' : 'text-white/90'
          }`}
        >
          About Us
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeTab === 'contact' ? 'text-white border-b border-white pb-0.5' : 'text-white/90'
          }`}
        >
          Contact Us
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-[#ffffff] focus:outline-none absolute right-6"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0D0B1F]/95 backdrop-blur-md mt-4 pt-4 pb-2 flex flex-col space-y-4 px-2">
          <button
            onClick={() => { setActiveTab('home'); setIsMobileOpen(false); }}
            className={`text-left text-base py-2 font-serif tracking-wider ${activeTab === 'home' ? 'text-white border-b border-white pb-0.5 w-fit' : 'text-white/70'}`}
          >
            Home
          </button>
          <button
            onClick={() => { setActiveTab('projects'); setIsMobileOpen(false); }}
            className={`text-left text-base py-2 font-serif tracking-wider ${activeTab === 'projects' ? 'text-white border-b border-white pb-0.5 w-fit' : 'text-white/70'}`}
          >
            Projects
          </button>
          <button
            onClick={() => { setActiveTab('about'); setIsMobileOpen(false); }}
            className={`text-left text-base py-2 font-serif tracking-wider ${activeTab === 'about' ? 'text-white border-b border-white pb-0.5 w-fit' : 'text-white/70'}`}
          >
            About Us
          </button>
          <button
            onClick={() => { setActiveTab('contact'); setIsMobileOpen(false); }}
            className={`text-left text-base py-2 font-serif tracking-wider ${activeTab === 'contact' ? 'text-white border-b border-white pb-0.5 w-fit' : 'text-white/70'}`}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};