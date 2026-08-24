import React from 'react';
import Sponsor1 from '../assets/sponsor1.png';
import type { PageSection } from '../types';

interface FooterProps {
  setActiveTab: (tab: PageSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="w-full bg-[#0D0B1F] py-3 px-4">
      <div className="flex justify-center items-center gap-6 py-2">
        <p className="hidden sm:block text-sm font-serif tracking-widest text-[#ffffff]/50 uppercase">
          Our sponsors : 
        </p>
        <a href="https://www.mm-ix.net/" target="_blank" rel="noopener noreferrer">
          <img src={Sponsor1} alt="Sponsor 1" className="h-10 w-auto opacity-80" />
        </a>
        <button
          onClick={() => setActiveTab('partner')}
          className="text-sm font-serif tracking-widest text-[#ffffff]/50 uppercase hover:text-white transition-colors cursor-pointer"
        >
          [ View All ]
        </button>
      </div>
      <p className="text-center text-sm font-serif tracking-widest text-[#ffffff]/50 uppercase">
        &copy;2026 UNIVERSITY OF COMPUTER STUDIES, MANDALAY (UCSM). ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};