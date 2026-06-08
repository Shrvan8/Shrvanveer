import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Freelance from './sections/Freelance';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Shrvan_Veer_Resume.pdf';
    link.download = 'Shrvan_Veer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-slate-800 dark:text-slate-300 font-sans transition-colors duration-300">
        
        {/* Interactive 3D Canvas Particles */}
        <Background3D />
        
        {/* Custom lagging mouse cursor */}
        <CustomCursor />
        
        {/* Navigation Headboard */}
        <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        
        {/* Command Terminal Overlay (Ctrl+K) */}
        <CommandPalette 
          isOpen={isCommandPaletteOpen} 
          setIsOpen={setIsCommandPaletteOpen} 
          onDownloadResume={handleDownloadResume} 
        />
        
        {/* Main Content Sections */}
        <main className="relative z-10 w-full overflow-hidden">
          <Hero onDownloadResume={handleDownloadResume} />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <About />
            <Skills />
            <Projects />
            <Freelance />
            <Education />
            <Contact />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
