import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ShieldCheck, Heart, Sparkles } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal content box */}
          <motion.div 
            className="glass w-full max-w-3xl rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(3,0,20,0.4)] border border-slate-200/50 dark:border-white/10 flex flex-col relative z-10 max-h-[90vh] bg-white dark:bg-[#08051a]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors clickable"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Banner/Header pattern */}
            <div className={`h-48 sm:h-56 w-full relative overflow-hidden bg-slate-900 bg-gradient-to-tr ${project.themeColor}`}>
              <div className="absolute inset-0 bg-grid-white/[0.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#08051a] to-transparent" />
              <div className="absolute bottom-6 left-6 sm:left-8">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-slate-800 dark:text-white border border-white/20 mb-2 inline-block">
                  Case Study
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 dark:text-white font-heading">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Body Info Scroll area */}
            <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar space-y-6 flex-grow">
              
              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-white/10 pb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-glowPurple" />
                  <span>Overview</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Core Features / Details */}
              {project.features && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-white/10 pb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-glowBlue" />
                    <span>Key Features</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 text-slate-600 dark:text-slate-400">
                        <span className="text-glowPurple font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white border-b border-slate-100 dark:border-white/10 pb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-glowPink" />
                  <span>Technology Stack</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 bg-slate-50 dark:bg-black/20 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-3 items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                <span>Code Beyond Limits Series</span>
              </span>

              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-200 font-bold px-4 py-2.5 rounded-xl text-xs transition-all clickable"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-glowPurple to-glowBlue hover:opacity-90 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md clickable"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Showcase</span>
                  </a>
                )}
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
