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
      className="w-full relative overflow-x-hidden flex flex-col items-center"
    >
      {/* Remove min-h for mobile, set top padding to 0 on mobile */}
      <div className="w-full pt-0 sm:pt-6 pb-6 flex flex-col justify-between mx-auto">
        
        {/* Main Hero Grid Container */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full pt-2 pb-2 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative"
        >
          {/* Left Column Text Content */}
          <motion.div 
            variants={fadeUp} 
            className="w-full lg:w-1/2 z-10 relative space-y-4 shrink-0"
          >
            <div className="font-mono text-xs sm:text-sm md:text-base tracking-[0.25em] text-[#ffffff]/80 uppercase pl-1">
              UCSM . September 12
            </div>

            <div className="font-serif tracking-tight text-[#ffffff] uppercase text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-[9.5rem] leading-[0.85] space-y-2">
              <motion.div variants={fadeUp}>WHERE</motion.div>
              
              {/* CODE Highlight Box */}
              <motion.div variants={fadeUp} className="relative my-2 sm:my-3 py-1 flex items-center">
                <div className="absolute inset-y-0 -left-[10vw] w-[150vw] bg-[#ffffff] z-0 pointer-events-none" />
                <span className="font-serif font-normal tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-[9.5rem] text-[#0D0B1F] block relative z-10 pl-0">
                  CODE
                </span>
              </motion.div>

              <motion.div variants={fadeUp}>BECOMES</motion.div>
              <motion.div variants={fadeUp}>REALITY</motion.div>
            </div>
          </motion.div>

          {/* Right Column Graphic */}
          <motion.div
            variants={fadeUp}
            className="z-20 pointer-events-none w-full lg:w-1/2 shrink-0 flex justify-center lg:justify-end"
          >
            <img 
              src={HomeImage} 
              alt="Pixelated Dither Graphic" 
              className="w-full max-w-[700px] xl:max-w-[850px] h-auto object-contain select-none relative z-20"
            />
          </motion.div>

        </motion.div>

        {/* Bottom Subtitle Caption */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pt-4 pb-2 text-center z-20"
        >
          <p className="font-serif text-xs sm:text-sm md:text-base tracking-wider sm:tracking-widest uppercase text-[#ffffff]/80 max-w-5xl mx-auto leading-relaxed px-2">
            CELEBRATING 29 YEARS OF ACADEMIC EXCELLENCE &amp; TECHNOLOGICAL INNOVATION THROUGH ARTIFICIAL INTELLIGENCE
          </p>
        </motion.div>
      </div>

      {/* Grand Challenge Section */}
      <div className="w-full">
        <GrandChallenge />
      </div>
    </motion.div>
  );
};