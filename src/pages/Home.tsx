import React from 'react';
import { motion } from 'framer-motion';
import HomeImage from '../assets/Home.png';
import { GrandChallenge } from '../components/GrandChallenge';

export const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-2 py-2 md:py-12 flex flex-col justify-between min-h-[calc(100vh-140px)] relative overflow-x-clip"
    >
      {/* Main Container */}
      <div className="relative my-auto py-2 flex flex-col lg:flex-row items-center justify-start">
        
        {/* Left Column Text Content */}
        <div className="max-w-xl lg:max-w-2xl z-20 relative space-y-4 shrink-0">
          
          <div className="font-mono text-xs md:text-sm tracking-[0.25em] text-[#ecebf3]/80 uppercase pl-1">
            UCSM . September 3
          </div>

          {/* Left section */}
          <div className="font-serif tracking-tight text-[#ecebf3] uppercase text-6xl sm:text-7xl lg:text-8xl leading-[0.9] space-y-2">
            <div>WHERE</div>
            
            {/* Banner Highlight Box for CODE (Flush left with 'CODE', stretching full-screen right) */}
                <div className="relative my-3 py-2 flex items-center">
                {/* White strip starting exactly at the left edge of CODE and stretching right */}
                <div className="absolute inset-y-0 left-0 w-[200vw] bg-[#ecebf3] z-0" />
                
                {/* Dark Text over White Strip */}
                <span className="font-serif font-normal tracking-tight text-6xl sm:text-7xl lg:text-8xl text-[#0b0b14] block relative z-10 pl-0">
                    CODE
                </span>
                </div>

            <div>BECOMES</div>
            <div>REALITY</div>
          </div>
        </div>

        {/* Right section */}
        <div className="z-30 pointer-events-none hidden md:block -ml-16 lg:-ml-28 mt-6 lg:mt-0 w-[480px] lg:w-[580px] shrink-0">
          <img 
            src={HomeImage} 
            alt="Pixelated Dither Graphic" 
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>

      {/* Bottom Subtitle Caption */}
      <div className="pt-8 pb-4 text-center  z-20">
        <p className="font-serif text-xs md:text-sm tracking-widest uppercase text-[#ecebf3]/80 max-w-4xl mx-auto leading-relaxed">
          CELEBRATING 29 YEARS OF ACADEMIC EXCELLENCE &amp; TECHNOLOGICAL INNOVATION THROUGH ARTIFICIAL INTELLIGENCE
        </p>
      </div>
        {/* Grand Challenge Section */}
        <GrandChallenge />
    </motion.div>
  );
};