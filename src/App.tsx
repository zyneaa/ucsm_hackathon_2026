import { useState } from 'react';
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
    <div className="min-h-screen flex flex-col justify-between overflow-x-clip selection:bg-white selection:text-[#0D0B1F] subpixel-antialiased">
      <main className="flex-grow flex items-center">
        <div className="max-w-screen mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && <Home key="home" />}
            {activeTab === 'about' && <About key="about" />}
            {activeTab === 'projects' && <Projects key="projects" />}
            {activeTab === 'contact' && <Contacts key="contact" />}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
