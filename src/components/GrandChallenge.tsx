import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import ChallengeHeaderImg from '../assets/grand.jpg';
import AgricultureImg from '../assets/Agriculture.jpg';
import HealthcareImg from '../assets/HealthCare.jpg';
import EducationImg from '../assets/Education.jpg';
import SmartCityImg from '../assets/SmartCity.jpg';
import FintechImg from '../assets/FinTech.jpg';
import type { Track } from '../types';

const TRACKS_DATA: Track[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    label: 'agriculture',
    image: AgricultureImg,
    description: 'Empowering Myanmar farming communities with AI crop diagnostics, yield prediction, climate resilience modeling, and smart market access tools.',
    prizes: ['$1,500 First Place', 'AgriTech Seed Incubation', 'Cloud Compute Credits'],
    mentors: ['Dr. Aung Kyaw (AgriAI Lead)', 'Daw May Thu (Smart Farming Specialist)']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    label: 'healthcare',
    image: HealthcareImg,
    description: 'Developing affordable AI triage systems, medical imaging diagnostics, tele-health chatbots in native languages, and maternal health monitoring.',
    prizes: ['$1,500 First Place', 'HealthTech Innovation Grant', 'Direct Mentorship'],
    mentors: ['Dr. Tin Win (Digital Health Director)', 'U Than Htoo (AI BioMedical Researcher)']
  },
  {
    id: 'education',
    name: 'Education',
    label: 'education',
    image: EducationImg,
    description: 'Creating localized AI tutors, accessible learning tools for remote schools, adaptive curricula, and automated grading for regional dialects.',
    prizes: ['$1,500 First Place', 'EdTech Fellowship', 'UCSM Lab Access'],
    mentors: ['Prof. Khin San (Dean of CS)', 'U Kyaw Zwa (EdTech Pioneer)']
  },
  {
    id: 'smart-city',
    name: 'Smart City',
    label: 'smart city',
    image: SmartCityImg,
    description: 'Smart urban planning AI, real-time traffic management for Mandalay, automated waste processing visual recognition, and energy grid optimization.',
    prizes: ['$1,500 First Place', 'Mandalay Smart City Partnership', 'Hardware Grants'],
    mentors: ['U Min Lwin (Urban AI Engineer)', 'Daw Thida Soe (IoT & Smart Cities)']
  },
  {
    id: 'fintech',
    name: 'FinTech',
    label: 'fintech',
    image: FintechImg,
    description: 'AI-driven microfinance scoring for rural entrepreneurs, fraud prevention algorithms, native OCR document verification, and peer-to-peer security.',
    prizes: ['$1,500 First Place', 'FinTech Incubator Entry', 'Bank API Sandbox Access'],
    mentors: ['U Aung Naing (FinTech Architect)', 'Daw Nilar Myint (Risk AI Lead)']
  }
];

export const GrandChallenge: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <div className="w-full pt-8 pb-4 md:py-12">
      <div className="relative left-1/2 -translate-x-1/2 bg-[#ffffff] text-[#0D0B1F] p-8 md:p-20 shadow-2xl rounded-xs flex flex-col items-center text-center w-[90vw]">
        
        {/* Header Image 
            Need to modify Header Image, I didn't find a suitable one in zip file*/}
        <div className="w-full max-w-5xl h-56 sm:h-72 md:h-96 overflow-hidden mb-8 bg-[#0D0B1F]">
          <img 
            src={ChallengeHeaderImg} 
            alt="Traditional Ornament Banner" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider text-[#0D0B1F] leading-tight">
          THE GRAND CHALLENGE
        </h2>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-[#0D0D1F] mt-1 mb-4">
          AI FOR MYANMAR
        </h3>

        {/* Subtitle description */}
        <p className="font-mono text-xs sm:text-sm tracking-wide text-[#0D0D1F]/80 w-full uppercase mb-8">
          Build real-world solutions for Agriculture, Healthcare, Education, Smart City, and FinTech
        </p>

        {/* 3Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl mb-6 md:mb-8">
          
          {/* Agriculture */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={AgricultureImg} 
              alt="Agriculture Track" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 font-mono text-sm text-white tracking-widest lowercase bg-[#0D0B1F]/70 px-1.5 py-0.5">
              agriculture
            </span>
          </div>

          {/* Healthcare */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={HealthcareImg} 
              alt="Healthcare Track" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-25 left-0 origin-top-left -rotate-90 font-mono text-sm bg-[#0D0B1F]/70 text-white tracking-widest lowercase py-0.5 whitespace-nowrap">
              healthcare
            </span>
          </div>

          {/* Education */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={EducationImg} 
              alt="Education Track" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-2 left-2 font-mono text-sm text-white tracking-widest lowercase bg-[#0D0B1F]/70 px-1.5 py-0.5">
              education
            </span>
          </div>
        </div>

        {/* 2photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 w-full max-w-[840px] mb-12">
          
          {/* Smart City */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={SmartCityImg} 
              alt="Smart City Track" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-8 left-2 font-mono text-sm text-white tracking-widest lowercase bg-[#0D0B1F]/70 px-1.5 py-0.5">
              smart city
            </span>
          </div>

          {/* Fintech */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={FintechImg} 
              alt="FinTech Track" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 font-mono text-sm text-white tracking-widest lowercase bg-[#0D0B1F]/70 px-1.5 py-0.5">
              fintech
            </span>
          </div>
        </div>

        <div className="pt-6 w-full max-w-sm">
          <p className="font-serif text-4xl sm:text-2xl uppercase tracking-widest text-[#0D0D1F]">
            UCSM AI HACKATHON
          </p>
          <p className="font-serif text-4xl sm:text-3xl tracking-widest text-[#0D0D1F] mt-1">
            2026
          </p>
        </div>

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
                className="absolute top-4 right-4 text-white/70 hover:text-white font-mono text-sm cursor-pointer"
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
                  <h3 className="text-2xl font-serif uppercase tracking-wider text-white">
                    {selectedTrack.name} Track
                  </h3>
                  <p className="font-mono text-xs text-white/70 lowercase">
                    {selectedTrack.label}
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs md:text-sm text-white/80">
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};