import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail } from 'lucide-react';
import sponsorsData from '../data/sponsors.json';
import partnerHeader from '../assets/PartnerHeader.png';
import type { PageSection, Sponsor } from '../types';

interface PartnerProps {
  setActiveTab: (tab: PageSection) => void;
}

const sponsors = sponsorsData as {
  diamond: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
};

const DiamondCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => (
  <motion.a
    href={sponsor.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 bg-[#0D0B1F] p-6 sm:p-8 w-full transition-colors cursor-pointer"
  >
    <div className="shrink-0 w-full sm:w-72 md:w-80 lg:w-96 bg-white p-5 self-stretch flex items-center justify-center">
      <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
    </div>
    <div className="flex-1 w-full space-y-3 text-left">
      <p className="font-mono text-xs uppercase tracking-widest text-white">Diamond Partner</p>
      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-white group-hover:text-white transition-colors">
        {sponsor.name}
      </h3>
      <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-white/70">
        Special Thank to {sponsor.name}
      </p>
      <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed whitespace-pre-line">
        {sponsor.fullDescription}
      </p>
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white underline underline-offset-4 group-hover:text-white transition-colors pt-1">
        Visit site <ExternalLink size={14} />
      </span>
    </div>
  </motion.a>
);

const BronzeCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => (
  <motion.a
    href={sponsor.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group flex flex-col items-center gap-4 bg-[#0D0B1F] p-5 sm:p-6 transition-colors cursor-pointer"
  >
    <div className="w-[90%] bg-white p-3">
      <img src={sponsor.logo} alt={sponsor.name} className="w-full h-auto object-contain" />
    </div>
    <h4 className="font-serif text-lg sm:text-xl uppercase tracking-wider text-white text-left group-hover:text-white transition-colors w-full">
      {sponsor.name}
    </h4>
    {/* <p className="font-mono text-[11px] sm:text-xs text-white/60 leading-relaxed text-left w-full">
      {sponsor.description}
    </p>
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/80 underline underline-offset-4 group-hover:text-white transition-colors mt-auto">
      Visit site <ExternalLink size={12} />
    </span> */}
  </motion.a>
);

export const Partner: React.FC<PartnerProps> = ({ setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-2 sm:pt-4 pb-8 md:pb-12 space-y-8 sm:space-y-12 text-[#ffffff]"
    >
      {/* Heading over header graphic */}
      <div className="relative w-full flex justify-center">
        <img
          src={partnerHeader}
          alt="Partners decorative graphic"
          className="w-auto max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain opacity-40 pointer-events-none select-none"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2 px-4">
          <div className="w-full font-serif uppercase text-white leading-none">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest">
              OUR
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest ml-[1.55em]">
              PARTNERS
            </span>
          </div>
          
        </div>
      </div>

      {/* Diamond */}
      <section className="space-y-4 w-full">
        <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-white border-b border-white/20 pb-2">
          ◆ Diamond partner
        </h2>
        {sponsors.diamond.map((s) => (
          <DiamondCard key={s.id} sponsor={s} />
        ))}
      </section>

      {/* Bronze */}
      <section className="space-y-4 w-full">
        <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-white border-b border-white/20 pb-2">
          ◆ Bronze Partners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {sponsors.bronze.map((s) => (
            <BronzeCard key={s.id} sponsor={s} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-8 sm:pt-12 border-t border-white/10 text-center space-y-4"
      >
        <p className="font-mono text-sm sm:text-base text-white/80 lowercase">
          interested in becoming a partner?
        </p>
        <a
          href="mailto:sawmonmyatoo@gmail.com"
          className="inline-flex items-center gap-2 bg-white text-[#0D0B1F] border border-white font-mono text-xs uppercase px-6 py-3 font-semibold hover:bg-[#0D0B1F] hover:text-white transition-colors cursor-pointer"
        >
          <Mail size={14} /> Contact Us
        </a>
        <div>
          <button
            onClick={() => setActiveTab('contact')}
            className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors cursor-pointer underline underline-offset-4"
          >
            or reach out via the contact page
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
