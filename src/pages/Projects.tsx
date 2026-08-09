import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import ProjectBannerImg from '../assets/Projects.jpg';

const projectsData: Project[] = [
  {
    id: 1,
    groupName: 'GROUP 1',
    projectName: 'AgriSense Myanmar - AI Crop Health & Irrigation',
    track: 'Agriculture',
    members: ['Aung Naing', 'May Thu', 'Kyaw Zwa', 'Thida Soe', 'Min Lwin'],
    shortIntro:
      'AI-powered crop health diagnostics and smart irrigation management tool built for Myanmar farming communities.',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    link: 'https://github.com/ucsm-hackathon/agrisense-myanmar',
  },
  {
    id: 2,
    groupName: 'GROUP 2',
    projectName: 'MediVision AI - Rural Diagnostics & Triage',
    track: 'Healthcare',
    members: ['Tin Win', 'Khin San', 'Aung Kyaw', 'Nilar Myint', 'Htoo Aung'],
    shortIntro:
      'Affordable AI-driven medical imaging diagnostics and triage system designed for underserved rural clinics.',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    link: 'https://github.com/ucsm-hackathon/medivision-ai',
  },
];

const TRACKS = ['All', 'Agriculture', 'Healthcare', 'Education', 'Smart City', 'FinTech'];

export const Projects: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedTrack === 'All'
      ? projectsData
      : projectsData.filter((p) => p.track === selectedTrack);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-6 md:px-10 lg:px-16 py-8 md:py-12 flex flex-col justify-between min-h-[calc(100vh-140px)] text-[#ffffff]"
    >
      {/* ProjectImg */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 bg-[#0D0B1F]">
            <img
                src={ProjectBannerImg}
                alt="Projects Hero Banner"
                className="w-full h-full object-cover"
            />

            <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0D0B1F] px-10 sm:px-16 py-4 z-10 border-t border-x border-white/10">
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.2em] text-white text-center whitespace-nowrap">
                PROJECTS
                </h1>
            </div>
        </div>

      {/* Main Container */}
      <div className="relative left-1/2 -translate-x-1/2 bg-[#ffffff] text-[#0D0B1F] p-8 md:p-16 shadow-2xl flex flex-col items-center w-[90vw]">
        {/* title */}
        <p className="font-serif text-sm sm:text-base md:text-lg tracking-widest text-[#0D0B1F] uppercase text-center mb-8">
          SHOWCASING INNOVATIVE AI SOLUTIONS BUILT BY OUR TALENTED PARTICIPANTS
        </p>

        {/* Track Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs sm:text-sm border-b border-[#0D0B1F]/10 pb-6 w-full max-w-4xl">
          {TRACKS.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTrack(t)}
              className={`px-3 py-1.5 transition-colors cursor-pointer ${
                selectedTrack === t
                  ? 'bg-[#0D0B1F] text-white font-semibold'
                  : 'bg-transparent text-[#0D0B1F]/70 hover:text-[#0D0B1F] border border-[#0D0B1F]/20'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Project Cards  */}
        <div className="w-full max-w-4xl space-y-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0D0B1F] text-[#ffffff] p-8 md:p-12 space-y-5 shadow-md"
            >
              {/* GroupNumber */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-sm md:text-base tracking-widest uppercase text-[#ffffff]/70">
                  {project.groupName}
                </span>
                <span className="font-mono text-xs px-2.5 py-1 bg-white/10 border border-white/20 text-[#ffffff]/90 uppercase tracking-widest">
                  {project.track}
                </span>
              </div>

              {/* ProjectName */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-wide uppercase text-white">
                {project.projectName}
              </h2>

              {/* Team Members  */}
              <div className="flex flex-wrap gap-4 font-mono text-sm md:text-base text-[#ffffff]/80 pt-1 pb-2">
                {project.members.map((member, index) => (
                  <span key={index}>{member}</span>
                ))}
              </div>

              {/* Short Intro */}
              <p className="font-mono text-sm sm:text-base leading-relaxed text-[#ffffff]/90 text-justify">
                {project.shortIntro}
              </p>

              {/* Link + View Details */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm md:text-base text-[#ffffff] underline underline-offset-4 hover:opacity-75 transition-opacity"
                >
                  {project.link}
                </a>

                <button
                  onClick={() => setActiveProject(project)}
                  className="font-mono text-sm text-[#ffffff]/70 hover:text-white uppercase tracking-wider cursor-pointer transition-colors"
                >
                  [ View Details ]
                </button>
              </div>
            </motion.div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-[#0D0B1F]/70 font-mono text-sm">
              No projects found for the "{selectedTrack}" track yet.
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B1F]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D0B1F] text-white border border-white/20 max-w-xl w-full p-6 md:p-8 space-y-6 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white font-mono text-xs cursor-pointer"
              >
                [ CLOSE X ]
              </button>

              <h3 className="text-2xl font-serif uppercase text-white tracking-wider pr-10">
                {activeProject.projectName}
              </h3>

              <div className="font-mono text-xs text-white/80 space-y-3 border-y border-white/10 py-4">
                <p>
                  <span className="text-white font-semibold uppercase tracking-wider">Track: </span>
                  {activeProject.track}
                </p>
                <p>
                  <span className="text-white font-semibold uppercase tracking-wider">Team Members: </span>
                  {activeProject.members.join(', ')}
                </p>
                <p className="text-white font-semibold uppercase tracking-wider">Full Summary:</p>
                <p className="leading-relaxed text-white/70">{activeProject.description}</p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0D0B1F] font-mono text-xs px-5 py-2.5 uppercase tracking-wider font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Open Repository
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};