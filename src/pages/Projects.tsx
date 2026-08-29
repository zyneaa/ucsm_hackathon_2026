import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import ProjectBannerImg from '../assets/Projects.jpg';

const projectsData: Project[] = [
  {
    "id": 1,
    "groupName": "GROUP 1",
    "projectName": "GCNB",
    "members": [
      { "name": "Yan Naing Tun", "year": "Fifth Year" },
      { "name": "Nyein Nyein Myint", "year": "Fourth Year" },
      { "name": "Ei Thazin Aung", "year": "Third Year" },
      { "name": "Phyu Thant Hnin", "year": "Second Year" },
      { "name": "Thiha Soe", "year": "First Year" },
      { "name": "Ma Wai Phyo Ei", "year": "First Year" },
      { "name": "Khin Nyein Aye", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/gcnb.pdf"
  },
  {
    "id": 2,
    "groupName": "GROUP 2",
    "projectName": "Code 4 Earth",
    "members": [
      { "name": "Hlaing Phyo", "year": "Fifth Year" },
      { "name": "Min Ko Ko", "year": "Fourth Year" },
      { "name": "May Myat Noe", "year": "Third Year" },
      { "name": "Hein Wai Yan Oo", "year": "First Year" },
      { "name": "Ingyinn Phyu", "year": "First Year" },
      { "name": "Myat Hmu Thar", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/code-4-earth.pdf"
  },
  {
    "id": 3,
    "groupName": "GROUP 3",
    "projectName": "Beyond Binary",
    "members": [
      { "name": "Than Htike Soe", "year": "Fifth Year" },
      { "name": "Mg Aung Min Thu", "year": "Fourth Year" },
      { "name": "San Dar Lin", "year": "Third Year" },
      { "name": "Swam Min Aung", "year": "First Year" },
      { "name": "Thet Htar San", "year": "First Year" },
      { "name": "May Myat Noe Kyaw", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/beyond-binary.pdf"
  },
  {
    "id": 4,
    "groupName": "GROUP 4",
    "projectName": "NextGen Power",
    "members": [
      { "name": "Aung Bone Pyae Sone", "year": "Fifth Year" },
      { "name": "Hay Marn Saung", "year": "Third Year" },
      { "name": "Swe Khaing Win", "year": "Third Year" },
      { "name": "Kyal Sin Min Khant", "year": "First Year" },
      { "name": "Phyo Thura Kyaw", "year": "First Year" },
      { "name": "Ma Zin Win Htike", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/nextgen-power.pdf"
  },
  {
    "id": 5,
    "groupName": "GROUP 5",
    "projectName": "Green Code",
    "members": [
      { "name": "Kyaw Naing Moe", "year": "Fifth Year" },
      { "name": "Htun Lin Aung", "year": "Fourth Year" },
      { "name": "Aye Nyein Su Wai", "year": "Fourth Year" },
      { "name": "Myat Su Htwe", "year": "Third Year" },
      { "name": "Tint Naing Htoo", "year": "First Year" },
      { "name": "May Thu Lwin", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/green-code.pdf"
  },
  {
    "id": 6,
    "groupName": "GROUP 6",
    "projectName": "Green Palse",
    "members": [
      { "name": "Kaung Htet Zaw", "year": "Fifth Year" },
      { "name": "Su Yamin Thwe", "year": "Fourth Year" },
      { "name": "Htet Wai Naing", "year": "Third Year" },
      { "name": "Ya Min Nwe", "year": "Third Year" },
      { "name": "Wai Yan Oo", "year": "First Year" },
      { "name": "Hsu Pyae Pyae Maung", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/team_6.pdf"
  },
  {
    "id": 7,
    "groupName": "GROUP 7",
    "projectName": "Green Minds",
    "members": [
      { "name": "Khant Zin Hein", "year": "Fifth Year" },
      { "name": "May Thazin Phoo", "year": "Third Year" },
      { "name": "May Kyal Sin Oo", "year": "First Year" },
      { "name": "Aung Thu", "year": "First Year" },
      { "name": "Thet Htar Khin Khin", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/green-minds.pdf"
  },
  {
    "id": 8,
    "groupName": "GROUP 8",
    "projectName": "404",
    "members": [
      { "name": "Mya Yoon Wai", "year": "Fifth Year" },
      { "name": "Kaung Myat Thu", "year": "Fourth Year" },
      { "name": "Thet Hnin Wai", "year": "Third Year" },
      { "name": "Pyae Khant", "year": "Second Year" },
      { "name": "Min Khant Chaw", "year": "First Year" },
      { "name": "Ma Yoon Eaindary Phyo", "year": "First Year" },
      { "name": "Yin Maw Tun", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/team_8.pdf"
  },
  {
    "id": 9,
    "groupName": "GROUP 9",
    "projectName": "ICONIX",
    "members": [
      { "name": "Htet Oo Wai Yan", "year": "Fifth Year" },
      { "name": "Thiri Min Zaw", "year": "Fourth Year" },
      { "name": "Saw Yan Naing Moe", "year": "Third Year" },
      { "name": "Ma Myint Myat Kyi", "year": "Second Year" },
      { "name": "Hein Yar Zar", "year": "First Year" },
      { "name": "Myat Noe Shwe Sin", "year": "First Year" },
      { "name": "Moe Myat Myat Khaing", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/iconix.pdf"
  },
  {
    "id": 10,
    "groupName": "GROUP 10",
    "projectName": "Gaia",
    "members": [
      { "name": "Ye Naing Win", "year": "Fifth Year" },
      { "name": "Nway Thadar Htoo", "year": "Fourth Year" },
      { "name": "Yan Naing Lin", "year": "Third Year" },
      { "name": "Ei Mon Ko", "year": "Second Year" },
      { "name": "Myint Myat Htun", "year": "First Year" },
      { "name": "Thet Htar Su", "year": "First Year" },
      { "name": "Yamin Eain", "year": "First Year" }
    ],
    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    "pdfUrl": "/pdfs/gaia.pdf"
  }
]

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center pt-0 sm:pt-6 pb-12 text-[#ffffff]"
    >
      {/* Hero Banner Container */}
      <div className="relative w-full h-56 sm:h-80 md:h-96 bg-[#0D0B1F]">
        <img
          src={ProjectBannerImg}
          alt="Projects Hero Banner"
          className="w-full h-full object-cover"
        />

        {/* PROJECTS Title Badge overlapping the bottom boundary */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0D0B1F] px-8 sm:px-16 py-3 sm:py-4 z-10 border border-white/10">
          <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl uppercase tracking-[0.2em] text-white text-center whitespace-nowrap">
            PROJECTS
          </h1>
        </div>
      </div>

      {/* Main Content Container - Matches 90vw fluid width */}
      <div className="bg-[#ffffff] text-[#0D0B1F] pt-14 sm:pt-16 pb-12 px-4 sm:px-12 md:px-16 shadow-2xl flex flex-col items-center w-full">
        {/* Subtitle */}
        <p className="font-serif text-xs sm:text-base md:text-lg tracking-widest text-[#0D0B1F] uppercase text-center mb-8 max-w-4xl">
          SHOWCASING INNOVATIVE AI SOLUTIONS BUILT BY OUR TALENTED PARTICIPANTS
        </p>

        {/* Project Cards Grid */}
        <div className="w-full space-y-6 min-h-[300px]">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0D0B1F] text-[#ffffff] p-6 sm:p-8 md:p-12 space-y-5 shadow-md w-full"
            >
              {/* Group Number & Track */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase text-[#ffffff]/70">
                  {project.groupName}
                </span>
              </div>

              {/* Project Name */}
              <h2 className="font-serif text-xl sm:text-3xl md:text-4xl tracking-wide uppercase text-white">
                {project.projectName}
              </h2>

              {/* Team Members */}
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 font-mono text-xs sm:text-sm md:text-base text-[#ffffff]/80 pt-1 pb-2">
                {project.members.map((member, index) => (
                  <span key={index} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-white mr-1.5 sm:mr-2"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
                      <path d="M12 7.5V9" />
                      <path d="M7.5 12H9" />
                      <path d="M16.5 12H15" />
                      <path d="M12 16.5V15" />
                      <path d="m8 8 1.88 1.88" />
                      <path d="M14.12 9.88 16 8" />
                      <path d="m8 16 1.88-1.88" />
                      <path d="M14.12 14.12 16 16" />
                    </svg>
                    <span className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#ffffff]/40">
                        {member.year}
                      </span>
                      <span>{member.name}</span>
                    </span>
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-mono text-xs sm:text-base leading-relaxed text-[#ffffff]/90 text-justify">
                {project.description}
              </p>

              {/* Links & Details */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm md:text-base text-[#ffffff] underline underline-offset-4 hover:opacity-75 transition-opacity whitespace-nowrap"
                >
                  [ View PDF ]
                </a>
              </div>
            </motion.div>
          ))}
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
                className="absolute top-4 right-4 p-2 md:p-0 text-white/70 hover:text-white font-mono text-xs cursor-pointer"
              >
                [ CLOSE X ]
              </button>

              <h3 className="text-xl sm:text-2xl font-serif uppercase text-white tracking-wider pr-10">
                {activeProject.projectName}
              </h3>

              <div className="font-mono text-xs text-white/80 space-y-3 border-y border-white/10 py-4">
                <p>
                  <span className="text-white font-semibold uppercase tracking-wider">Team Members: </span>
                  {activeProject.members.map((m) => m.name).join(', ')}
                </p>
                <p className="text-white font-semibold uppercase tracking-wider">Full Summary:</p>
                <p className="leading-relaxed text-white/70">{activeProject.description}</p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <a
                  href={activeProject.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white/40 text-white font-mono text-xs px-5 py-2.5 uppercase tracking-wider font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Open PDF
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};