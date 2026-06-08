import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Braces, Layers, Database, GitBranch, Github, Smartphone, Cpu, Layout, Server, DatabaseZap, Terminal
} from 'lucide-react';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
  ];

  const skills = [
    // Frontend
    { name: 'HTML', category: 'frontend', level: 95, icon: Layout, color: 'from-orange-500/20 to-orange-600/30 text-orange-400' },
    { name: 'CSS', category: 'frontend', level: 90, icon: Layers, color: 'from-blue-500/20 to-blue-600/30 text-blue-400' },
    { name: 'JavaScript', category: 'frontend', level: 92, icon: Braces, color: 'from-yellow-500/20 to-yellow-600/30 text-yellow-400' },
    { name: 'React', category: 'frontend', level: 88, icon: Code2, color: 'from-cyan-500/20 to-cyan-600/30 text-cyan-400' },
    // Backend
    { name: 'Java', category: 'backend', level: 85, icon: Server, color: 'from-red-500/20 to-red-600/30 text-red-400' },
    { name: 'Python', category: 'backend', level: 80, icon: Cpu, color: 'from-indigo-500/20 to-indigo-600/30 text-indigo-400' },
    { name: 'Node.js', category: 'backend', level: 78, icon: Server, color: 'from-emerald-500/20 to-emerald-600/30 text-emerald-400' },
    // Database
    { name: 'SQL', category: 'database', level: 85, icon: Database, color: 'from-purple-500/20 to-purple-600/30 text-purple-400' },
    { name: 'MySQL', category: 'database', level: 88, icon: DatabaseZap, color: 'from-sky-500/20 to-sky-600/30 text-sky-400' },
    { name: 'MongoDB', category: 'database', level: 82, icon: Database, color: 'from-green-500/20 to-green-600/30 text-green-400' },
    // Tools
    { name: 'Git', category: 'tools', level: 86, icon: GitBranch, color: 'from-amber-600/20 to-amber-700/30 text-amber-500' },
    { name: 'GitHub', category: 'tools', level: 90, icon: Github, color: 'from-slate-500/20 to-slate-600/30 text-slate-400' },
    { name: 'Android Studio', category: 'tools', level: 75, icon: Smartphone, color: 'from-lime-500/20 to-lime-600/30 text-lime-400' },
    { name: 'VS Code', category: 'tools', level: 95, icon: Terminal, color: 'from-sky-600/20 to-sky-700/30 text-sky-400' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative px-6">
      {/* Background soft glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] rounded-full bg-glowPurple/5 dark:bg-glowPurple/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-5xl font-extrabold mb-4 font-heading text-slate-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical <span className="bg-gradient-to-r from-glowPurple to-glowBlue bg-clip-text text-transparent">Nodes</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-[3px] bg-gradient-to-r from-glowPurple to-glowBlue mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-300 clickable shadow-sm ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-glowPurple to-glowBlue border-transparent text-white shadow-[0_4px_15px_rgba(139,92,246,0.25)]'
                  : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:border-glowPurple/30 dark:hover:border-glowBlue/30 hover:text-glowPurple dark:hover:text-glowBlue'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Nodes Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 relative group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-glowPurple/30 dark:hover:border-glowBlue/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] flex flex-col justify-between"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glowing background spot on hover */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-tr from-glowPurple/5 to-glowBlue/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                        {skill.name}
                      </span>
                    </div>

                    {/* Progress Bar Label */}
                    <div className="flex justify-between items-center text-xs font-semibold mb-2">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="text-glowPurple dark:text-violet-400">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Animated Proficiency Bar */}
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-glowPurple to-glowBlue rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
