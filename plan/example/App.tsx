import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GrandChallengeSection } from './components/GrandChallengeSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <div className="min-h-screen bg-[#0D0B1F] text-white selection:bg-white selection:text-[#0D0B1F] font-mono-plex">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <HeroSection />
        <GrandChallengeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
