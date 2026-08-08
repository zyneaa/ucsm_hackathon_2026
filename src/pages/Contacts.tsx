import React from 'react';
import { motion } from 'framer-motion';
import ContactBannerImg from '../assets/ContactUs.png';

export const Contacts: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto px-6 py-8 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-140px)] text-[#ecebf3]"
    >
      <div className="w-full space-y-12">
        {/* Contact Us Image */}
        <div className="w-full h-48 sm:h-64 md:h-72 overflow-hidden bg-[#080810]">
          <img
            src={ContactBannerImg}
            alt="Contact Us Banner"
            className="w-full h-full object-cover grayscale contrast-150 opacity-90"
          />
        </div>

        {/* Left Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
          {/* Left Column: Heading & Subtitle */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-white">
              CONTACT US
            </h1>
            <p className="font-mono text-xs sm:text-sm tracking-wide text-[#ecebf3]/70 lowercase">
              get in touch with the organizing committee
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="font-mono text-xs sm:text-sm text-[#ecebf3]/90 space-y-1 lowercase text-left md:text-left">
            <div>info@ucsms-c.org</div>
            <div>+95 976 2016 492</div>
            <div>building a, ucsm main campus, mandalay</div>
          </div>
        </div>

        {/* Botttom */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white">
            PARTNER WITH US
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-wide text-[#ecebf3]/80 lowercase max-w-2xl leading-relaxed">
            interested in becoming a sponsor like our diamond partner? reach out to sawmonmyatoo@gmail.com
          </p>
        </div>
      </div>
    </motion.div>
  );
};