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
      className="w-full pt-0 sm:pt-6 pb-8 md:pb-12 flex flex-col justify-between text-[#ffffff] overflow-x-hidden"
    >
      {/* Upper Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 my-auto w-full">
        
        {/* Title Container: Horizontal on mobile, rotated vertical on desktop */}
        <div className="relative shrink-0 w-full md:w-20 md:h-96 flex items-center justify-center py-2 md:py-0">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-widest text-[#ffffff] whitespace-nowrap static md:absolute md:-rotate-90">
            ABOUT US
          </h1>
        </div>

        <div className="flex-1 space-y-4 md:space-y-3 w-full">
          
          {/* Top Subtitle */}
          <p className="font-serif text-sm sm:text-base md:text-lg tracking-wider text-[#ffffff] uppercase leading-snug text-center md:text-left">
            PIONEERING AI INNOVATION AT MYANMAR'S LEADING COMPUTER SCIENCE UNIVERSITY
          </p>

          {/* White Highlight Block 1 */}
          <div className="bg-[#ffffff] text-[#0D0B1F] p-6 sm:p-8 md:p-10 shadow-md w-full">
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed uppercase tracking-wide">
              THE UCSM AI HACKATHON 2026 IS THE FLAGSHIP ANNUAL INNOVATION EVENT MARKING 29 YEARS OF ACADEMIC EXCELLENCE AT THE UNIVERSITY OF COMPUTER STUDIES, MANDALAY (UCSM).
            </p>
          </div>

          {/* White Highlight Block 2 */}
          <div className="bg-[#ffffff] text-[#0D0B1F] p-6 sm:p-8 md:p-10 shadow-md w-full">
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed uppercase tracking-wide">
              FOR NEARLY THREE DECADES, UCSM HAS BEEN A CORNERSTONE OF COMPUTING EDUCATION IN MYANMAR. THIS 24-HOUR CONTINUOUS ON-SITE CHALLENGE MOVES BEYOND TRADITIONAL CODING TO FOSTER INTERDISCIPLINARY TEAMWORK AND DEPLOYABLE AI SOLUTIONS.
            </p>
          </div>

          {/* Three Monospace Keywords */}
          <div className="grid grid-cols-3 text-center font-mono text-xs sm:text-sm md:text-base tracking-widest text-[#ffffff] pt-2">
            <div>brainstorm</div>
            <div>build</div>
            <div>submit</div>
          </div>
        </div>
      </div>

      {/* Bottom Section : 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 w-full">
        
        {/* Card 1 */}
        <div className="relative overflow-hidden flex items-center justify-center bg-[#0D0B1F] h-40 sm:h-48 md:h-72">
          <img 
            src={AboutImage} 
            alt="Artwork Graphic" 
            className="absolute top-0 left-0 h-full w-full md:w-[308%] max-w-none object-cover opacity-30 grayscale filter contrast-125 object-center md:object-left"
          />
          <span className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-white drop-shadow-lg text-center p-4">
            29 YEARS
          </span>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden flex items-center justify-center bg-[#0D0B1F] h-40 sm:h-48 md:h-72">
          <img 
            src={AboutImage} 
            alt="Artwork Graphic" 
            className="absolute top-0 left-0 md:-left-[104%] h-full w-full md:w-[308%] max-w-none object-cover opacity-30 grayscale filter contrast-125 object-center"
          />
          <span className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-white drop-shadow-lg text-center p-4">
            24 HOURS
          </span>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden flex items-center justify-center bg-[#0D0B1F] h-40 sm:h-48 md:h-72">
          <img 
            src={AboutImage} 
            alt="Artwork Graphic" 
            className="absolute top-0 left-0 md:-left-[208%] h-full w-full md:w-[308%] max-w-none object-cover opacity-30 grayscale filter contrast-125 object-center"
          />
          <span className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase text-white drop-shadow-lg text-center p-4">
            5 TRACKS
          </span>
        </div>

      </div>
    </motion.div>
  );
};