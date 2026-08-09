import React from 'react';
import { motion, type Variants } from 'framer-motion';
import HomeImage from '../assets/Home.png';
import { GrandChallenge } from '../components/GrandChallenge';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-2 md:px-10 lg:px-16 py-2 md:py-12 flex flex-col justify-between min-h-[calc(100vh-140px)] relative"
    >
      {/* Main Container */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative left-1/2 -translate-x-1/2 w-[90vw] my-auto py-2 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4"
      >
        
        {/* Left Column Text Content */}
        <motion.div variants={fadeUp} className="max-w-2xl lg:max-w-3xl z-20 relative space-y-4 shrink-0">
          
          <div className="font-mono text-sm md:text-base tracking-[0.25em] text-[#ffffff]/80 uppercase pl-1">
            UCSM . September 3
          </div>

          {/* Left section */}
          <div className="font-serif tracking-tight text-[#ffffff] uppercase text-7xl sm:text-8xl lg:text-9xl leading-[0.9] space-y-2">
            <motion.div variants={fadeUp}>WHERE</motion.div>
            
            {/* Banner Highlight Box for CODE (Flush left with 'CODE', stretching full-screen right) */}
                <motion.div variants={fadeUp} className="relative my-3 py-2 flex items-center">
                {/* White strip starting exactly at the left edge of CODE and stretching right */}
                <div className="absolute inset-y-0 left-0 w-[200vw] bg-[#ffffff] z-0" />
                
                {/* Dark Text over White Strip */}
                <span className="font-serif font-normal tracking-tight text-7xl sm:text-8xl lg:text-9xl text-[#0D0B1F] block relative z-10 pl-0">
                    CODE
                </span>
                </motion.div>

            <motion.div variants={fadeUp}>BECOMES</motion.div>
            <motion.div variants={fadeUp}>REALITY</motion.div>
          </div>
        </motion.div>

        {/* Center section */}
        <motion.div
          variants={fadeUp}
          className="z-30 pointer-events-none hidden md:block w-[520px] lg:w-[640px] shrink-0"
        >
          <img 
            src={HomeImage} 
            alt="Pixelated Dither Graphic" 
            className="w-full h-auto object-contain select-none"
          />
        </motion.div>

        {/* Right Column Text Content */}
        <motion.div variants={fadeUp} className="max-w-2xl lg:max-w-3xl z-20 relative space-y-4 shrink-0">
          {/* Invisible spacer to align this column's serif rows with the left column */}
          <div className="font-mono text-sm md:text-base tracking-[0.25em] uppercase pl-1 opacity-0">
            UCSM . September 3
          </div>

          <div className="font-serif tracking-tight text-[#ffffff] uppercase text-7xl sm:text-8xl lg:text-9xl leading-[0.9] space-y-2 text-right">
            <motion.div variants={fadeUp}>WHERE</motion.div>

            {/* IDEA sits on the same white strip line that runs from CODE across the screen */}
            <motion.div variants={fadeUp} className="relative my-3 py-2 flex items-center justify-end">
              <span className="font-serif font-normal tracking-tight text-7xl sm:text-8xl lg:text-9xl text-[#0D0B1F] block relative z-10 pl-6">
                IDEA
              </span>
            </motion.div>

            <motion.div variants={fadeUp}>SHAPE</motion.div>
            <motion.div variants={fadeUp}>FUTURE</motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Subtitle Caption */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pt-8 pb-4 text-center  z-20"
      >
        <p className="font-serif text-sm md:text-base tracking-widest uppercase text-[#ffffff]/80 max-w-4xl mx-auto leading-relaxed">
          CELEBRATING 29 YEARS OF ACADEMIC EXCELLENCE &amp; TECHNOLOGICAL INNOVATION THROUGH ARTIFICIAL INTELLIGENCE
        </p>
      </motion.div>
        {/* Grand Challenge Section */}
        <GrandChallenge />
    </motion.div>
  );
};