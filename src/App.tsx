import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { PageSection } from './types';
import { Navbar } from './components/Navbar';
import  {Footer}  from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageSection>('home');

  return (
    <div className="min-h-screen bg-[#0D0B1F] text-[#ecebf3] flex flex-col justify-between selection:bg-white selection:text-[#0b0b14]">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow flex items-center">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <Home key="home" />}
          {activeTab === 'about' && <About key="about" />}
          {activeTab === 'projects' && <Projects key="projects" />}
          {activeTab === 'contact' && <Contacts key="contact" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}