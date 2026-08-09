import React from 'react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#0D0B1F] text-white pt-12 pb-20 px-6 md:px-16 overflow-hidden min-h-[90vh] flex flex-col justify-between">
      {/* Top Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs md:text-sm font-mono-plex tracking-wider text-white/80 uppercase mb-8"
      >
        UCSM . September 3
      </motion.div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto relative">
        
        {/* Left Column: Big Display Typography */}
        <div className="lg:col-span-7 z-10 flex flex-col space-y-2 md:space-y-4">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[105px] font-seasons leading-none tracking-tight text-white uppercase"
          >
            WHERE
          </motion.h1>

          {/* CODE in White Rectangle Box */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0.9 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative -mx-2 md:-mx-6 lg:-mr-32 z-0"
          >
            <div className="bg-white text-[#0D0B1F] px-4 md:px-8 py-1 md:py-2 inline-block w-full max-w-2xl lg:max-w-3xl">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[105px] font-seasons font-normal leading-none tracking-tight uppercase block">
                CODE
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[105px] font-seasons leading-none tracking-tight text-white uppercase"
          >
            BECOMES
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[105px] font-seasons leading-none tracking-tight text-white uppercase"
          >
            REALITY
          </motion.h1>
        </div>

        {/* Right Column: Dithered Royal Dancer Image (2.jpg) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
            <img
              src="/1.jpg"
              alt="UCSM Royal AI Mascot"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter contrast-125 brightness-110 mix-blend-screen"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Subtitle Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 text-center max-w-5xl mx-auto px-4"
      >
        <p className="text-xs sm:text-sm md:text-base font-seasons tracking-[0.25em] leading-relaxed text-white/90 uppercase">
          CELEBRATING 29 YEARS OF ACADEMIC EXCELLENCE &amp; TECHNOLOGICAL INNOVATION THROUGH ARTIFICIAL INTELLIGENCE
        </p>
      </motion.div>
    </section>
  );
};
