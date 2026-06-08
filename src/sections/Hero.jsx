import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = ({ onDownloadResume }) => {
  const words = [
    'Building Web Experiences',
    'Creating Modern Applications',
    'Learning New Technologies',
    'Solving Real-World Problems'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const word = words[currentWordIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
        setTypingSpeed(45);
      }, typingSpeed);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
        setTypingSpeed(90);
      }, typingSpeed);
    }

    // Finished typing word, wait before starting delete
    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } 
    // Finished deleting word, transition to next word
    else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      {/* Light glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-glowPurple/15 dark:bg-glowPurple/10 blur-[80px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-glowBlue/15 dark:bg-glowBlue/10 blur-[80px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Content */}
        <motion.div 
          className="lg:col-span-7 text-left flex flex-col justify-center order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-slate-200/50 dark:border-white/10 text-xs font-semibold text-glowPurple dark:text-violet-300 w-fit mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-glowPurple animate-ping" />
            <span>Code Beyond Limits</span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2 leading-none"
          >
            <span className="text-slate-800 dark:text-white">Shrvan Gunwant Veer</span>
          </motion.h1>

          {/* Headline / Role */}
          <motion.div 
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-glowPurple via-glowPink to-glowBlue bg-clip-text text-transparent"
          >
            {currentText}
            <span className="text-glowPurple dark:text-violet-400 animate-pulse font-light ml-0.5">|</span>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl mb-3"
          >
            Building Digital Solutions That Matter.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-500 dark:text-slate-500 font-normal max-w-xl mb-8 leading-relaxed"
          >
            Transforming ideas into digital experiences through code, creativity, and continuous learning. I am an MCA student at MIT-WPU Pune, specializing in full-stack applications and client-centered web development.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <a
              href="#projects"
              className="glow-btn inline-flex items-center gap-2 bg-gradient-to-r from-glowPurple to-glowBlue hover:from-glowPurple/90 hover:to-glowBlue/90 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-glowPurple/25 hover:shadow-glowPurple/40 transform hover:-translate-y-0.5 transition-all duration-200 clickable"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>

            <button
              onClick={onDownloadResume}
              className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-glowPurple/40 dark:hover:border-glowBlue/40 text-slate-700 dark:text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 clickable"
            >
              <Download className="w-4.5 h-4.5 text-glowBlue" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-glowPurple/40 dark:hover:border-glowBlue/40 text-slate-700 dark:text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 clickable"
            >
              <Mail className="w-4.5 h-4.5 text-glowPurple" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Connect</span>
            <div className="w-10 h-[1px] bg-slate-200 dark:bg-white/10" />
            <div className="flex gap-4">
              <a
                href="https://github.com/Shrvan8"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 hover:border-glowPurple/50 dark:hover:border-glowBlue/50 text-slate-500 hover:text-glowPurple dark:text-slate-400 dark:hover:text-glowBlue flex items-center justify-center transition-all clickable"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shrvan-veer-1881b3322"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 hover:border-glowPurple/50 dark:hover:border-glowBlue/50 text-slate-500 hover:text-glowPurple dark:text-slate-400 dark:hover:text-glowBlue flex items-center justify-center transition-all clickable"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image with Futuristic Circle */}
        <motion.div 
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative group flex items-center justify-center w-[290px] sm:w-[360px] h-[290px] sm:h-[360px] animate-float">
            
            {/* Spinning Outer Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-glowPurple via-glowPink to-glowBlue opacity-70 blur-md group-hover:scale-105 transition-transform duration-500 animate-[spin_12s_linear_infinite]" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-glowPurple via-glowPink to-glowBlue group-hover:scale-105 transition-transform duration-500 animate-[spin_8s_linear_infinite]" />

            {/* Inner Dark Background */}
            <div className="absolute inset-[3px] rounded-full bg-[#050212] z-10" />

            {/* Glassmorphic border ring */}
            <div className="absolute inset-[6px] rounded-full border border-white/10 z-20" />

            {/* Glowing spot lights */}
            <div className="absolute top-0 right-1/4 w-12 h-12 rounded-full bg-glowBlue/40 blur-md z-30 animate-pulse" />
            <div className="absolute bottom-6 left-1/4 w-14 h-14 rounded-full bg-glowPurple/40 blur-md z-30 animate-pulse" style={{ animationDelay: '1.5s' }} />

            {/* Profile Picture Container */}
            <div className="absolute inset-[10px] rounded-full overflow-hidden z-40 bg-[#0c0721] glass-card flex items-center justify-center">
              <img
                src={profileImg}
                alt="Shrvan Gunwant Veer"
                className="w-full h-full object-cover transition-all duration-750 group-hover:scale-108 group-hover:brightness-105"
              />
            </div>
            
            {/* Interactive floating HUD tag */}
            <div className="absolute -bottom-4 z-50 glass-card px-4 py-2 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(3,0,20,0.4)] flex items-center gap-2.5 backdrop-blur-md transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Available for Freelance</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
