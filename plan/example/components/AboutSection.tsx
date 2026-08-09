import React from 'react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#0D0B1F] text-white py-20 px-6 md:px-16 min-h-screen flex flex-col justify-between border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Header & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16">
          
          {/* Left Vertical "ABOUT US" Title */}
          <div className="lg:col-span-2 flex justify-start lg:justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:writing-vertical font-seasons text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest uppercase text-white whitespace-nowrap"
            >
              ABOUT US
            </motion.div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-10 space-y-8">
            
            {/* Title Banner */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-seasons tracking-wider uppercase text-white leading-tight"
            >
              PIONEERING AI INNOVATION AT MYANMAR'S LEADING COMPUTER SCIENCE UNIVERSITY
            </motion.h2>

            {/* White Text Box 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white text-[#0D0B1F] p-6 md:p-8 font-mono-plex text-xs sm:text-sm md:text-base leading-relaxed tracking-wider uppercase shadow-md"
            >
              THE UCSM AI HACKATHON 2026 IS THE FLAGSHIP ANNUAL INNOVATION EVENT MARKING 29 YEARS OF ACADEMIC EXCELLENCE AT THE UNIVERSITY OF COMPUTER STUDIES, MANDALAY (UCSM).
            </motion.div>

            {/* White Text Box 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white text-[#0D0B1F] p-6 md:p-8 font-mono-plex text-xs sm:text-sm md:text-base leading-relaxed tracking-wider uppercase shadow-md"
            >
              FOR NEARLY THREE DECADES, UCSM HAS BEEN A CORNERSTONE OF COMPUTING EDUCATION IN MYANMAR. THIS 24-HOUR CONTINUOUS ON-SITE CHALLENGE MOVES BEYOND TRADITIONAL CODING TO FOSTER INTERDISCIPLINARY TEAMWORK AND DEPLOYABLE AI SOLUTIONS.
            </motion.div>

            {/* Tagline Words */}
            <div className="flex justify-between items-center font-mono-plex text-xs sm:text-sm md:text-base text-white/80 pt-4 px-4 sm:px-12">
              <span className="lowercase hover:text-white transition-colors cursor-default">brain storm</span>
              <span className="lowercase hover:text-white transition-colors cursor-default">build</span>
              <span className="lowercase hover:text-white transition-colors cursor-default">summit</span>
            </div>

          </div>
        </div>

        {/* 3 Bottom Feature/Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          
          {/* Card 1: 29 YEARS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-[#0D0B1F] border border-white/10 aspect-[4/3] overflow-hidden group flex items-center justify-center p-6"
          >
            <img
              src="/2.jpg"
              alt="29 Years"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover filter contrast-150 brightness-50 opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <h3 className="relative z-10 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-seasons uppercase tracking-wider text-white text-center drop-shadow-md">
              29 YEARS
            </h3>
          </motion.div>

          {/* Card 2: 24 HOURS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#0D0B1F] border border-white/10 aspect-[4/3] overflow-hidden group flex items-center justify-center p-6"
          >
            <img
              src="/2.jpg"
              alt="24 Hours"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover filter contrast-150 brightness-50 opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <h3 className="relative z-10 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-seasons uppercase tracking-wider text-white text-center drop-shadow-md">
              24 HOURS
            </h3>
          </motion.div>

          {/* Card 3: 5 TRACKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-[#0D0B1F] border border-white/10 aspect-[4/3] overflow-hidden group flex items-center justify-center p-6"
          >
            <img
              src="/2.jpg"
              alt="5 Tracks"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover filter contrast-150 brightness-50 opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
            <h3 className="relative z-10 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-seasons uppercase tracking-wider text-white text-center drop-shadow-md">
              5 TRACKS
            </h3>
          </motion.div>

        </div>

      </div>

      {/* Footer copyright */}
      <div className="mt-20 pt-8 border-t border-white/10 text-center font-seasons text-xs sm:text-sm text-white/60 tracking-widest uppercase">
        2026 UNIVERSITY OF COMPUTER STUDIES, MANDALAY (UCSM). ALL RIGHTS RESERVED.
      </div>
    </section>
  );
};
