import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Cpu, User, GraduationCap, Mail, FileText, Terminal, ArrowRight } from 'lucide-react';

const CommandPalette = ({ isOpen, setIsOpen, onDownloadResume }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    { id: 'about', title: 'About Me', desc: 'Read about Shrvan\'s background and passion', icon: User, action: () => scrollToSection('about') },
    { id: 'skills', title: 'Skills & Tech Stack', desc: 'Frontend, backend, databases, and development tools', icon: Cpu, action: () => scrollToSection('skills') },
    { id: 'projects', title: 'Projects Showcase', desc: 'Explore major full-stack and mobile applications', icon: FolderGit2, action: () => scrollToSection('projects') },
    { id: 'education', title: 'Education Timeline', desc: 'BCA & MCA graduation journey details', icon: GraduationCap, action: () => scrollToSection('education') },
    { id: 'contact', title: 'Contact Center', desc: 'Connect with Shrvan or drop a message', icon: Mail, action: () => scrollToSection('contact') },
    { id: 'resume', title: 'Download Resume', desc: 'Get a copy of Shrvan\'s professional CV', icon: FileText, action: () => onDownloadResume() },
  ];

  const filtered = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(search.toLowerCase()) || 
    cmd.desc.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle palette: Ctrl + K
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Close palette: Escape
      if (e.key === 'Escape') {
        setIsOpen(false);
      }

      if (!isOpen) return;

      // Navigate lists: ArrowDown, ArrowUp, Enter
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filtered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, setIsOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop Blur */}
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <motion.div 
            className="glass w-full max-w-2xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.25)] border border-glowPurple/30 flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-glowPurple/20 bg-black/20">
              <Search className="w-5 h-5 text-glowPurple" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search command or type section name..."
                className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 font-medium text-lg"
              />
              <div className="flex items-center gap-1.5 bg-glowPurple/20 border border-glowPurple/30 text-glowPurple text-xs font-semibold px-2 py-0.5 rounded shadow">
                <span>ESC</span>
              </div>
            </div>

            {/* Terminal HUD info */}
            <div className="bg-black/10 dark:bg-black/40 px-4 py-2 border-b border-glowPurple/10 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-glowBlue" />
                <span>Code Beyond Limits Command Terminal</span>
              </div>
              <div className="flex gap-2">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
              </div>
            </div>

            {/* Command List */}
            <div className="max-h-[350px] overflow-y-auto p-2 no-scrollbar bg-[#ffffff]/60 dark:bg-[#070418]/60">
              {filtered.length > 0 ? (
                filtered.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const active = idx === selectedIndex;
                  return (
                    <div
                      key={cmd.id}
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-150 ${
                        active 
                          ? 'bg-gradient-to-r from-glowPurple/20 to-glowBlue/25 border border-glowPurple/30 shadow-[0_0_12px_rgba(139,92,246,0.15)] translate-x-1' 
                          : 'border border-transparent hover:bg-slate-100/50 dark:hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-lg transition-colors duration-200 ${
                          active ? 'bg-glowPurple text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <p className={`font-semibold text-sm ${active ? 'text-glowPurple dark:text-violet-300' : 'text-slate-800 dark:text-slate-200'}`}>
                            {cmd.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cmd.desc}</p>
                        </div>
                      </div>
                      {active && (
                        <motion.div 
                          initial={{ x: -5, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="flex items-center gap-1 text-glowPurple dark:text-violet-300 font-semibold text-xs"
                        >
                          <span>Execute</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                  <p className="font-semibold text-sm">No commands matching "{search}" found</p>
                  <p className="text-xs mt-1">Try typing 'about', 'skills', or 'projects'</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
