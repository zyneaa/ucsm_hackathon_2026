import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import ProjectBannerImg from '../assets/grand.jpg';

const projectsData: Project[] = [
  {
    id: 1,
    groupName: 'GROUP 1',
    projectName: 'Project Name',
    members: ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5'],
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    link: 'project link',
  },
  {
    id: 2,
    groupName: 'GROUP 2',
    projectName: 'Project Name',
    members: ['Member 1', 'Member 2', 'Member 3', 'Member 4', 'Member 5'],
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    link: 'project link',
  },
];

export const Projects: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto px-6 py-8 md:py-12 flex flex-col justify-between min-h-[calc(100vh-140px)] text-[#ecebf3]"
    >
      {/* ProjectImg */}
        <div className="relative w-full h-56 sm:h-64 md:h-72 bg-[#0D0B1F]">
            <img
                src={ProjectBannerImg}
                alt="Projects Hero Banner"
                className="w-full h-full object-cover grayscale contrast-150 opacity-80"
            />

            <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0D0B1F] px-8 sm:px-12 py-3 z-10 border-t border-x border-white/10">
                <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.2em] text-white text-center whitespace-nowrap">
                PROJECTS
                </h1>
            </div>
        </div>

      {/* Main Container */}
      <div className="bg-[#ecebf3] text-[#0b0b14] p-6 md:p-10 pt-10 sm:pt-12 shadow-2xl flex flex-col items-center w-full">
        {/* title */}
        <p className="font-serif text-xs sm:text-sm md:text-base tracking-widest text-[#0b0b14] uppercase text-center mb-8">
          SHOWCASING INNOVATIVE AI SOLUTIONS BUILT BY OUR TALENTED PARTICIPANTS
        </p>

        {/* Project Cards  */}
        <div className="w-full space-y-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#0D0B1F] text-[#ecebf3] p-6 md:p-8 space-y-4 shadow-md"
            >
              {/* GroupNumber */}
              <div className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#ecebf3]/70">
                {project.groupName}
              </div>

              {/* ProjectName */}
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl tracking-wide uppercase text-white">
                {project.projectName}
              </h2>

              {/* Team Members  */}
              <div className="flex flex-wrap gap-4 font-mono text-xs md:text-sm text-[#ecebf3]/80 pt-1 pb-2">
                {project.members.map((member, index) => (
                  <span key={index}>{member}</span>
                ))}
              </div>

              {/* Description */}
              <p className="font-mono text-xs sm:text-sm leading-relaxed text-[#ecebf3]/90 text-justify">
                {project.description}
              </p>

              {/* Project Link */}
              <div className="pt-2">
                <a
                  href={project.link}
                  className="font-mono text-xs md:text-sm text-[#ecebf3] underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  {project.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};