import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectCard = ({ project, onOpenDetails }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize coordinates (-1 to 1) and calculate rotation degrees (max 10deg)
    const factorX = y / (box.height / 2);
    const factorY = x / (box.width / 2);
    
    setRotate({
      x: -factorX * 10,
      y: factorY * 10,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenDetails(project)}
      className="glass-card rounded-2xl border border-slate-200/50 dark:border-white/5 cursor-pointer relative group overflow-hidden transition-all duration-300 hover:border-glowPurple/30 dark:hover:border-glowBlue/30 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] flex flex-col h-full select-none"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow Panel background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr ${project.themeColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} 
      />

      {/* Decorative Header Graphics */}
      <div className="h-44 w-full relative overflow-hidden bg-slate-900 flex items-center justify-center border-b border-slate-200/50 dark:border-white/5">
        {/* Glowing pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
        <div className={`absolute w-36 h-36 rounded-full bg-gradient-to-tr ${project.themeColor} blur-2xl opacity-40 group-hover:scale-125 transition-transform duration-500`} />
        
        {/* Project abstract symbol */}
        <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <Layers className="w-8 h-8" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-extrabold text-slate-800 dark:text-white font-heading group-hover:text-glowPurple dark:group-hover:text-glowBlue transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-white/5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-slate-500 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className="text-glowPurple dark:text-violet-300 flex items-center gap-1 group-hover:underline">
              <span>View Specifications</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()} // prevent opening modal
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center hover:scale-105 transition-all clickable"
                title="View GitHub Repository"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
