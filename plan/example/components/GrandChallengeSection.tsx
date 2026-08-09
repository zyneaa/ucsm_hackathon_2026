import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Track } from '../types';

const TRACKS_DATA: Track[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    label: 'agriculture',
    image: '/3.jpg',
    description: 'Empowering Myanmar farming communities with AI crop diagnostics, yield prediction, climate resilience modeling, and smart market access tools.',
    prizes: ['$1,500 First Place', 'AgriTech Seed Incubation', 'Cloud Compute Credits'],
    mentors: ['Dr. Aung Kyaw (AgriAI Lead)', 'Daw May Thu (Smart Farming Specialist)']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    label: 'healthcare',
    image: '/4.jpg',
    description: 'Developing affordable AI triage systems, medical imaging diagnostics, tele-health chatbots in native languages, and maternal health monitoring.',
    prizes: ['$1,500 First Place', 'HealthTech Innovation Grant', 'Direct Mentorship'],
    mentors: ['Dr. Tin Win (Digital Health Director)', 'U Than Htoo (AI BioMedical Researcher)']
  },
  {
    id: 'education',
    name: 'Education',
    label: 'education',
    image: '/5.jpg',
    description: 'Creating localized AI tutors, accessible learning tools for remote schools, adaptive curricula, and automated grading for regional dialects.',
    prizes: ['$1,500 First Place', 'EdTech Fellowship', 'UCSM Lab Access'],
    mentors: ['Prof. Khin San (Dean of CS)', 'U Kyaw Zwa (EdTech Pioneer)']
  },
  {
    id: 'smart-city',
    name: 'Smart City',
    label: 'smart city',
    image: '/6.jpg',
    description: 'Smart urban planning AI, real-time traffic management for Mandalay, automated waste processing visual recognition, and energy grid optimization.',
    prizes: ['$1,500 First Place', 'Mandalay Smart City Partnership', 'Hardware Grants'],
    mentors: ['U Min Lwin (Urban AI Engineer)', 'Daw Thida Soe (IoT & Smart Cities)']
  },
  {
    id: 'fintech',
    name: 'FinTech',
    label: 'fintech',
    image: '/7.jpg',
    description: 'AI-driven microfinance scoring for rural entrepreneurs, fraud prevention algorithms, native OCR document verification, and peer-to-peer security.',
    prizes: ['$1,500 First Place', 'FinTech Incubator Entry', 'Bank API Sandbox Access'],
    mentors: ['U Aung Naing (FinTech Architect)', 'Daw Nilar Myint (Risk AI Lead)']
  }
];

export const GrandChallengeSection: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <section className="bg-white text-[#0D0B1F] py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Pattern Header Banner (1.jpg) */}
        <div className="w-full max-w-4xl mb-12 overflow-hidden shadow-sm border border-[#0D0B1F]/10">
          <img
            src="/1.jpg"
            alt="Woodblock Floral Pattern Header"
            referrerPolicy="no-referrer"
            className="w-full h-28 md:h-36 object-cover filter contrast-125 brightness-95"
          />
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-seasons tracking-wider uppercase leading-tight">
            THE GRAND CHALLENGE
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-seasons tracking-widest uppercase font-normal">
            AI FOR MYANMAR
          </h3>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono-plex text-xs sm:text-sm md:text-base text-[#0D0B1F]/70 max-w-3xl mb-16 px-4"
        >
          Build real-world solutions for Agriculture, Healthcare, Education, Smart City, and FinTech
        </motion.p>

        {/* 5 Track Grid */}
        <div className="w-full max-w-5xl space-y-8 mb-20">
          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {TRACKS_DATA.slice(0, 3).map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedTrack(track)}
                className="bg-[#0D0B1F] text-white group cursor-pointer overflow-hidden border border-[#0D0B1F] transition-transform hover:-translate-y-1 relative aspect-square flex flex-col justify-between p-4"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={track.image}
                    alt={track.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-125 brightness-105 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Tag Overlay */}
                <div className="relative z-10 flex justify-end">
                  <span className="font-mono-plex text-xs tracking-widest lowercase px-2.5 py-1 bg-[#0D0B1F]/80 text-white border border-white/20">
                    {track.label}
                  </span>
                </div>

                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0B1F]/80 p-2 text-left">
                  <p className="font-mono-plex text-xs text-white/80">Click to view details &rarr;</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 2 Centered Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {TRACKS_DATA.slice(3, 5).map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedTrack(track)}
                className="bg-[#0D0B1F] text-white group cursor-pointer overflow-hidden border border-[#0D0B1F] transition-transform hover:-translate-y-1 relative aspect-square flex flex-col justify-between p-4"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={track.image}
                    alt={track.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-125 brightness-105 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Tag Overlay */}
                <div className="relative z-10 flex justify-start items-end">
                  <span className="font-mono-plex text-xs tracking-widest lowercase px-2.5 py-1 bg-[#0D0B1F]/80 text-white border border-white/20">
                    {track.label}
                  </span>
                </div>

                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0B1F]/80 p-2 text-left">
                  <p className="font-mono-plex text-xs text-white/80">Click to view details &rarr;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-1 pt-4 border-t border-[#0D0B1F]/10 w-full max-w-3xl"
        >
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-seasons tracking-wider uppercase text-[#0D0B1F]">
            UCSM AI HACKATHON
          </h4>
          <p className="text-2xl sm:text-3xl md:text-4xl font-seasons tracking-widest text-[#0D0B1F]">
            2026
          </p>
        </motion.div>

      </div>

      {/* Track Details Modal */}
      <AnimatePresence>
        {selectedTrack && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B1F]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0D0B1F] text-white border border-white/20 max-w-lg w-full p-6 md:p-8 space-y-6 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedTrack(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white font-mono-plex text-sm cursor-pointer"
              >
                [ CLOSE X ]
              </button>

              <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                <img
                  src={selectedTrack.image}
                  alt={selectedTrack.name}
                  className="w-16 h-16 object-cover border border-white/20"
                />
                <div>
                  <h3 className="text-2xl font-seasons uppercase tracking-wider text-white">
                    {selectedTrack.name} Track
                  </h3>
                  <p className="font-mono-plex text-xs text-white/70 lowercase">
                    {selectedTrack.label}
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-mono-plex text-xs md:text-sm text-white/80">
                <div>
                  <h4 className="text-white font-semibold uppercase tracking-wider mb-1">Challenge Focus:</h4>
                  <p className="leading-relaxed">{selectedTrack.description}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold uppercase tracking-wider mb-1">Track Prizes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    {selectedTrack.prizes.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold uppercase tracking-wider mb-1">Key Mentors:</h4>
                  <p className="text-white/70">{selectedTrack.mentors.join(', ')}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedTrack(null)}
                  className="w-full bg-white text-[#0D0B1F] font-mono-plex text-xs uppercase tracking-widest py-3 hover:bg-[#0D0B1F]/10 transition-colors cursor-pointer"
                >
                  Explore Track Projects
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
