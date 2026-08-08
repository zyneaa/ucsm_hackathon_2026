import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../assets/AboutUs.jpg';

export const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-6 py-8 md:py-12 flex flex-col justify-between min-h-[calc(100vh-140px)] text-[#ecebf3]"
    >
      {/* Upper Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 my-auto w-full">
        
        <div className="relative shrink-0 w-16 h-64 md:h-80 flex items-center justify-center">
          <h1 className="absolute font-serif text-4xl md:text-5xl uppercase tracking-widest -rotate-90 whitespace-nowrap text-[#ecebf3]">
            ABOUT US
          </h1>
        </div>

        <div className="flex-1 space-y-3 w-full">
          
          {/* Top Subtitle */}
          <p className="font-serif text-lg md:text-sm tracking-wider text-[#ecebf3] uppercase">
            PIONEERING AI INNOVATION AT MYANMAR'S LEADING COMPUTER SCIENCE UNIVERSITY
          </p>

          {/* White Highlight Block 1 */}
          <div className="bg-[#ecebf3] text-[#0b0b14] p-6 shadow-md w-full">
            <p className="font-mono text-xs md:text-sm leading-relaxed uppercase tracking-wide">
              THE UCSM AI HACKATHON 2026 IS THE FLAGSHIP ANNUAL INNOVATION EVENT MARKING 29 YEARS OF ACADEMIC EXCELLENCE AT THE UNIVERSITY OF COMPUTER STUDIES, MANDALAY (UCSM).
            </p>
          </div>

          {/* White Highlight Block 2 */}
          <div className="bg-[#ecebf3] text-[#0b0b14] p-6 shadow-md w-full">
            <p className="font-mono text-xs md:text-sm leading-relaxed uppercase tracking-wide">
              FOR NEARLY THREE DECADES, UCSM HAS BEEN A CORNERSTONE OF COMPUTING EDUCATION IN MYANMAR. THIS 24-HOUR CONTINUOUS ON-SITE CHALLENGE MOVES BEYOND TRADITIONAL CODING TO FOSTER INTERDISCIPLINARY TEAMWORK AND DEPLOYABLE AI SOLUTIONS.
            </p>
          </div>

          {/* Three Monospace Keywords */}
          <div className="grid grid-cols-3 text-center font-mono text-xs md:text-sm tracking-widest text-[#ecebf3] pt-2">
            <div>brainstorm</div>
            <div>build</div>
            <div>submit</div>
          </div>
        </div>
      </div>

      {/* Bottom Section : 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 h-48 md:h-56 w-full">
        
        {/* Card 1 */}
        <div className="relative overflow-hidden flex items-center justify-center bg-[#0D0B1F]">
          <img 
            src={AboutImage} 
            alt="Artwork Graphic" 
            className="absolute top-0 left-0 h-full w-[100%] md:w-[308%] max-w-none object-cover opacity-30 grayscale filter contrast-125 object-left"
          />
          <span className="relative z-10 font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase text-white drop-shadow-lg text-center p-4">
            29 YEARS
          </span>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden flex items-center justify-center bg-[#0D0B1F]">
          <img 
            src={AboutImage} 
            alt="Artwork Graphic" 
            className="absolute top-0 left-0 md:-left-[104%] h-full w-[100%] md:w-[308%] max-w-none object-cover opacity-30 grayscale filter contrast-125"
          />
          <span className="relative z-10 font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase text-white drop-shadow-lg text-center p-4">
            24 HOURS
          </span>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden flex items-center justify-center bg-[#0D0B1F]">
          <img 
            src={AboutImage} 
            alt="Artwork Graphic" 
            className="absolute top-0 left-0 md:-left-[208%] h-full w-[100%] md:w-[308%] max-w-none object-cover opacity-30 grayscale filter contrast-125"
          />
          <span className="relative z-10 font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase text-white drop-shadow-lg text-center p-4">
            5 TRACKS
          </span>
        </div>

      </div>
    </motion.div>
  );
};