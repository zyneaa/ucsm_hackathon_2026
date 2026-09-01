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
            PIONEERING AI INNOVATION AT MYANMAR'S LEADING COMPUTER STUDIES UNIVERSITIES
          </p>

          {/* White Highlight Block 1 */}
          <div className="bg-[#ffffff] text-[#0D0B1F] p-6 sm:p-8 md:p-10 shadow-md w-full">
            <h2 className="font-stretch-95% font-bold text-lg sm:text-xl md:text-2xl tracking-wide mb-3 md:mb-4">
              What is a Hackathon?
            </h2>
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              At its core, a hackathon is an invention marathon. It is a high-energy, 24-hour continuous event where students form teams of six to siven members to brainstorm, design, and build a working software prototype from scratch.
            </p>
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed">
              Unlike traditional exams or long-term projects, a hackathon simulates the fast-paced environment of the tech industry. Students are provided with power, high-speed Wi-Fi, mentorship, and meals. In return, they must collaborate under extreme time pressure to turn a raw idea into a functional, deployable technological solution by the time the clock runs out. It is the ultimate test of coding ability, interdisciplinary teamwork, and rapid problem-solving.
            </p>
          </div>

          {/* White Highlight Block 2 */}
          <div className="bg-[#ffffff] text-[#0D0B1F] p-6 sm:p-8 md:p-10 shadow-md w-full">
            <h2 className="font-stretch-95% font-bold text-lg sm:text-xl md:text-2xl tracking-wide mb-3 md:mb-4">
              Our Legacy: The History of UCSM
            </h2>
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              For nearly three decades, the <span className='font-bold'>University of Computer Studies, Mandalay (UCSM)</span>  has stood as a cornerstone of computing and technological education in Myanmar. Established with the vision of nurturing highly skilled IT professionals, UCSM has consistently adapted to the rapidly evolving landscape of global technology.
            </p>
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed">
              From early computer science foundations to modern software engineering, our alumni have gone on to shape Myanmar’s digital infrastructure. Today, as we commemorate our 28th Anniversary, UCSM remains committed to academic excellence, bridging the gap between theoretical research and practical, industry-ready application.
            </p>
          </div>

          {/* White Highlight Block 3 */}
          <div className="bg-[#ffffff] text-[#0D0B1F] p-6 sm:p-8 md:p-10 shadow-md w-full">
            <h2 className="font-stretch-95% font-bold text-lg sm:text-xl md:text-2xl tracking-wide mb-3 md:mb-4">
              Why the UCSM AI Hackathon 2026?
            </h2>
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              Many university competitions focus purely on writing code. To mark our 29th anniversary, we realized we needed to do more than just test programming skills—we needed to challenge our students to build the future.
            </p>
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              We created the UCSM AI Hackathon 2026 to transition our students from being consumers of technology to creators of impact. By specifically centering this competition around Artificial Intelligence and introducing the "AI for Myanmar" Grand Challenge, we are asking teams to tackle real-world problems affecting our nation.
            </p>
            <p className="font-mono text-xs sm:text-sm md:text-base font-bold mb-2">
              Our mission for this event is to:
            </p>
            <ul className="font-mono text-xs sm:text-sm md:text-base leading-relaxed list-disc list-inside space-y-2 mb-3 md:mb-4">
              <li><span className="font-bold">Drive Real-World Impact:</span> Encourage practical AI solutions for critical sectors like Agriculture, Healthcare, Education, and Smart Cities.</li>
              <li><span className="font-bold">Build Industry-Ready Skills:</span> Push students to integrate complex AI libraries (like TensorFlow, PyTorch, and LLMs) into working prototypes.</li>
              <li><span className="font-bold">Bridge the Gap:</span> Connect our brightest minds directly with industry leaders, technical mentors, and potential employers.</li>
            </ul>
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed">
              Ultimately, this hackathon is not just about who can write the best code in 24 hours. It is about empowering the next generation of UCSM innovators to build AI solutions for tomorrow.
            </p>
          </div>

          {/* Three Monospace Keywords */}
          <div className="grid grid-cols-3 text-center font-mono text-xs sm:text-sm md:text-base tracking-widest text-[#ffffff] pt-2">
            <div>Code.</div>
            <div>Create.</div>
            <div>Innovate.</div>
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
            Code
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
            Create
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
            Innovate
          </span>
        </div>

      </div>
    </motion.div>
  );
};