import React from 'react';

import ChallengeHeaderImg from '../assets/grand.jpg';
import AgricultureImg from '../assets/Agriculture.jpg';
import HealthcareImg from '../assets/HealthCare.jpg';
import EducationImg from '../assets/Education.jpg';
import SmartCityImg from '../assets/SmartCity.jpg';
import FintechImg from '../assets/FinTech.jpg';

export const GrandChallenge: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 md:py-12">
      <div className="bg-[#ecebf3] text-[#0b0b14] p-8 md:p-12 shadow-2xl rounded-xs flex flex-col items-center text-center w-full">
        
        {/* Header Image 
            Need to modify Header Image, I didn't find a suitable one in zip file*/}
        <div className="w-full max-w-3xl h-44 sm:h-52 md:h-60 overflow-hidden mb-8 bg-[#0b0b14]">
          <img 
            src={ChallengeHeaderImg} 
            alt="Traditional Ornament Banner" 
            className="w-full h-full object-cover grayscale contrast-150"
          />
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-[#0b0b14] leading-tight">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mb-6 md:mb-8">
          
          {/* Agriculture */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={AgricultureImg} 
              alt="Agriculture Track" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-90"
            />
            <span className="absolute bottom-2 right-2 font-mono text-xs text-white tracking-widest lowercase bg-black/60 px-1.5 py-0.5">
              agriculture
            </span>
          </div>

          {/* Healthcare */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={HealthcareImg} 
              alt="Healthcare Track" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-90"
            />
            <span className="absolute top-25 left-0 origin-top-left -rotate-90 font-mono text-xs bg-black/60 text-white tracking-widest lowercase py-0.5 whitespace-nowrap">
              healthcare
            </span>
          </div>

          {/* Education */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={EducationImg} 
              alt="Education Track" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-90"
            />
            <span className="absolute bottom-2 left-2 font-mono text-xs text-white tracking-widest lowercase bg-black/60 px-1.5 py-0.5">
              education
            </span>
          </div>
        </div>

        {/* 2photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl mb-12">
          
          {/* Smart City */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={SmartCityImg} 
              alt="Smart City Track" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-90"
            />
            <span className="absolute bottom-8 left-2 font-mono text-xs text-white tracking-widest lowercase bg-black/60 px-1.5 py-0.5">
              smart city
            </span>
          </div>

          {/* Fintech */}
          <div className="relative aspect-square bg-[#0D0D1F] overflow-hidden group">
            <img 
              src={FintechImg} 
              alt="FinTech Track" 
              className="w-full h-full object-cover grayscale contrast-125 opacity-90"
            />
            <span className="absolute bottom-2 right-2 font-mono text-xs text-white tracking-widest lowercase bg-black/60 px-1.5 py-0.5">
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
    </div>
  );
};