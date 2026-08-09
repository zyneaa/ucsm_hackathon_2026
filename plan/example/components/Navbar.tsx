import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0D0B1F]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 transition-all">
      <nav className="max-w-7xl mx-auto flex items-center justify-between text-sm md:text-base font-seasons tracking-wider">
        <button
          onClick={() => scrollToSection('home')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeSection === 'home' ? 'text-white border-b border-white pb-0.5' : 'text-white/90'
          }`}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection('projects')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeSection === 'projects' ? 'text-white border-b border-white pb-0.5' : 'text-white/90'
          }`}
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection('home')}
          className="text-center group cursor-pointer"
        >
          <span className="block text-xs md:text-sm tracking-[0.2em] font-seasons uppercase text-white group-hover:text-white/80 transition-colors">
            UCSM
          </span>
          <span className="block text-xs md:text-sm tracking-[0.25em] font-seasons uppercase text-white group-hover:text-white/80 transition-colors">
            AI HACKATHON
          </span>
          <span className="block text-xs md:text-sm tracking-[0.2em] font-seasons uppercase text-white/80">
            2026
          </span>
        </button>

        <button
          onClick={() => scrollToSection('about')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeSection === 'about' ? 'text-white border-b border-white pb-0.5' : 'text-white/90'
          }`}
        >
          About Us
        </button>

        <button
          onClick={() => scrollToSection('contact')}
          className={`hover:text-white transition-colors cursor-pointer ${
            activeSection === 'contact' ? 'text-white border-b border-white pb-0.5' : 'text-white/90'
          }`}
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
};
