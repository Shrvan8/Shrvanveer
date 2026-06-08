import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Terminal, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenCommandPalette }) => {
  const { isDark, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Navbar visual change
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled
          ? 'glass py-3 shadow-[0_4px_30px_rgba(3,0,20,0.08)]'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-glowPurple via-glowPink to-glowBlue transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group font-semibold text-lg tracking-tight select-none clickable"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-glowPurple to-glowBlue flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:rotate-12">
            S
          </div>
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent font-extrabold font-heading">
            Shrvan Veer
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-glowPurple dark:text-slate-300 dark:hover:text-glowBlue transition-colors duration-200 text-sm relative group py-1 clickable"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-glowPurple to-glowBlue transition-all duration-350 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action HUD / Controls */}
        <div className="flex items-center gap-4">
          {/* Ctrl+K HUD Indicator */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/40 dark:bg-white/5 hover:border-glowPurple/50 dark:hover:border-glowBlue/50 text-slate-500 dark:text-slate-400 text-xs font-semibold shadow-inner transition-all duration-200 clickable"
            title="Press Ctrl+K"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
            <kbd className="bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-sans border border-slate-300 dark:border-white/10">⌘K</kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/40 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-glowPurple dark:hover:text-glowBlue transition-all duration-200 clickable shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/40 dark:bg-white/5 text-slate-600 dark:text-slate-300 md:hidden clickable"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full glass shadow-lg md:hidden border-t border-slate-200/50 dark:border-white/5">
          <div className="flex flex-col py-4 px-6 gap-4 bg-slate-50/90 dark:bg-[#07041c]/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-glowPurple dark:hover:text-glowBlue py-2 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center justify-center gap-2 py-2.5 mt-2 bg-gradient-to-r from-glowPurple/10 to-glowBlue/10 hover:from-glowPurple/25 hover:to-glowBlue/25 border border-glowPurple/20 text-glowPurple dark:text-violet-300 text-sm font-semibold rounded-lg shadow-sm"
            >
              <Terminal className="w-4 h-4" />
              <span>Terminal CLI (Ctrl+K)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
