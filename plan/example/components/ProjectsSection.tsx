import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectGroup } from '../types';

const INITIAL_PROJECTS: ProjectGroup[] = [
  {
    id: 1,
    groupNumber: 'GROUP 1',
    title: 'AgriSense Myanmar - AI Crop Health & Irrigation',
    track: 'Agriculture',
    members: ['Aung Naing', 'May Thu', 'Kyaw Zwa', 'Thida Soe', 'Min Lwin'],
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    link: 'https://github.com/ucsm-hackathon/agrisense-myanmar'
  },
  {
    id: 2,
    groupNumber: 'GROUP 2',
    title: 'MediVision AI - Rural Diagnostics & Triage',
    track: 'Healthcare',
    members: ['Tin Win', 'Khin San', 'Aung Kyaw', 'Nilar Myint', 'Htoo Aung'],
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    link: 'https://github.com/ucsm-hackathon/medivision-ai'
  },
  {
    id: 3,
    groupNumber: 'GROUP 3',
    title: 'Mandalay Smart Grid & Traffic AI',
    track: 'Smart City',
    members: ['Saw Mon', 'Myat Oo', 'Phyo Thu', 'Zin Lin', 'Htet Naing'],
    description: 'Real-time traffic flow prediction and power distribution optimization for Mandalay city urban area using edge computing and neural networks.',
    link: 'https://github.com/ucsm-hackathon/smart-grid-mandalay'
  }
];

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectGroup[]>(INITIAL_PROJECTS);
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectGroup | null>(null);

  // New project form state
  const [newTitle, setNewTitle] = useState('');
  const [newTrack, setNewTrack] = useState('Agriculture');
  const [newMembers, setNewMembers] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newLink, setNewLink] = useState('');

  const filteredProjects = selectedTrack === 'All' 
    ? projects 
    : projects.filter(p => p.track === selectedTrack);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) return;

    const newGroup: ProjectGroup = {
      id: Date.now(),
      groupNumber: `GROUP ${projects.length + 1}`,
      title: newTitle,
      track: newTrack,
      members: newMembers ? newMembers.split(',').map(m => m.trim()) : ['Member 1', 'Member 2', 'Member 3'],
      description: newDescription,
      link: newLink || 'https://github.com/ucsm-hackathon'
    };

    setProjects([...projects, newGroup]);
    setShowAddModal(false);
    setNewTitle('');
    setNewMembers('');
    setNewDescription('');
    setNewLink('');
  };

  return (
    <section id="projects" className="bg-[#0D0B1F] text-white py-16 px-4 sm:px-8 md:px-12 min-h-screen flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Header Banner with Overlaid Box */}
        <div className="relative w-full max-w-5xl mx-auto mb-12 overflow-hidden border border-white/10">
          <img
            src="/1.jpg"
            alt="Projects Banner"
            referrerPolicy="no-referrer"
            className="w-full h-40 md:h-52 object-cover filter contrast-125 brightness-90"
          />
          {/* Overlaid Black Rectangle Title Box */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0D0B1F] border border-white/20 px-8 py-3 md:px-16 md:py-5 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-seasons uppercase tracking-[0.2em] text-white">
                PROJECTS
              </h2>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-seasons tracking-widest uppercase text-white/90">
            SHOWCASING INNOVATIVE AI SOLUTIONS BUILT BY OUR TALENTED PARTICIPANTS
          </h3>
        </div>

        {/* Track Filter Tabs & Add Button */}
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-8 font-mono-plex text-xs sm:text-sm border-b border-white/10 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Agriculture', 'Healthcare', 'Education', 'Smart City', 'FinTech'].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTrack(t)}
                className={`px-3 py-1.5 transition-colors cursor-pointer ${
                  selectedTrack === t 
                    ? 'bg-white text-[#0D0B1F] font-semibold' 
                    : 'bg-[#0D0B1F] text-white/70 hover:text-white border border-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-white text-[#0D0B1F] px-4 py-1.5 font-mono-plex text-xs tracking-wider uppercase font-semibold hover:bg-[#0D0B1F]/10 transition-colors cursor-pointer"
          >
            + Submit Project
          </button>
        </div>

        {/* White Box Container wrapping Project Cards */}
        <div className="bg-white p-6 sm:p-10 md:p-14 max-w-5xl mx-auto space-y-10 border border-[#0D0B1F]/10">
          
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0D0B1F] text-white p-6 md:p-10 space-y-6 border border-[#0D0B1F] shadow-lg"
            >
              {/* Group Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <h4 className="font-mono-plex text-sm md:text-base tracking-widest text-white/80 uppercase">
                  {project.groupNumber}
                </h4>
                <span className="font-mono-plex text-xs px-2.5 py-1 bg-white/10 border border-white/20 text-white/90">
                  {project.track}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="font-mono-plex text-lg md:text-2xl font-bold tracking-wide text-white">
                {project.title}
              </h3>

              {/* Members */}
              <div className="flex flex-wrap gap-4 font-mono-plex text-xs md:text-sm text-white/80">
                {project.members.map((member, i) => (
                  <span key={i}>
                    Member {i + 1}: {member}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-mono-plex text-xs md:text-sm text-white/80 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Project Link */}
              <div className="pt-2 flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono-plex text-xs md:text-sm text-white underline underline-offset-4 hover:text-white/80 transition-colors"
                >
                  project link
                </a>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="font-mono-plex text-xs text-white/70 hover:text-white uppercase tracking-wider cursor-pointer"
                >
                  [ View Details ]
                </button>
              </div>
            </motion.div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-[#0D0B1F]/70 font-mono-plex text-sm">
              No projects found for the "{selectedTrack}" track yet. Be the first to submit!
            </div>
          )}

        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B1F]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D0B1F] text-white border border-white/20 max-w-xl w-full p-6 md:p-8 space-y-6 relative shadow-2xl"
            >
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white font-mono-plex text-xs cursor-pointer"
              >
                [ CLOSE X ]
              </button>

              <h3 className="text-2xl font-seasons uppercase text-white tracking-wider">
                {activeProjectModal.title}
              </h3>

              <div className="font-mono-plex text-xs text-white/80 space-y-3 border-y border-white/10 py-4">
                <p><strong className="text-white">Track:</strong> {activeProjectModal.track}</p>
                <p><strong className="text-white">Team Members:</strong> {activeProjectModal.members.join(', ')}</p>
                <p><strong className="text-white">Full Summary:</strong></p>
                <p className="leading-relaxed text-white/70">{activeProjectModal.description}</p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <a
                  href={activeProjectModal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0D0B1F] font-mono-plex text-xs px-5 py-2.5 uppercase tracking-wider font-semibold hover:bg-[#0D0B1F]/10 transition-colors"
                >
                  Open Repository
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Project Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B1F]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0D0B1F] text-white border border-white/20 max-w-md w-full p-6 md:p-8 space-y-6 relative shadow-2xl"
            >
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white font-mono-plex text-xs cursor-pointer"
              >
                [ CLOSE X ]
              </button>

              <h3 className="text-2xl font-seasons uppercase text-white tracking-wider">
                Submit Hackathon Project
              </h3>

              <form onSubmit={handleAddProject} className="space-y-4 font-mono-plex text-xs">
                <div>
                  <label className="block text-white/70 mb-1">Project Name *</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. AgriSense AI"
                    className="w-full bg-[#0D0B1F] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1">Track *</label>
                  <select
                    value={newTrack}
                    onChange={(e) => setNewTrack(e.target.value)}
                    className="w-full bg-[#0D0B1F] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"
                  >
                    <option value="Agriculture">Agriculture</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Smart City">Smart City</option>
                    <option value="FinTech">FinTech</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 mb-1">Team Members (comma separated)</label>
                  <input
                    type="text"
                    value={newMembers}
                    onChange={(e) => setNewMembers(e.target.value)}
                    placeholder="e.g. Aung Aung, Kyaw Kyaw, Thida"
                    className="w-full bg-[#0D0B1F] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1">Project Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Describe your AI solution..."
                    className="w-full bg-[#0D0B1F] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-white/70 mb-1">Project Repo/Demo Link</label>
                  <input
                    type="url"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full bg-[#0D0B1F] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-[#0D0B1F] py-3 font-semibold uppercase tracking-wider hover:bg-[#0D0B1F]/10 transition-colors cursor-pointer mt-2"
                >
                  Submit Project Entry
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/10 text-center font-seasons text-xs sm:text-sm text-white/70 tracking-widest uppercase">
        2026 UNIVERSITY OF COMPUTER STUDIES, MANDALAY (UCSM). ALL RIGHTS RESERVED.
      </div>
    </section>
  );
};
