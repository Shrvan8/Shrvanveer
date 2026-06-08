import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const steps = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      school: 'MIT World Peace University (MIT-WPU), Pune',
      period: '2024 - 2027 (Expected)',
      location: 'Pune, Maharashtra, India',
      details: 'Focusing on advanced computing methodologies, cloud architectures, advanced database structures, and practical software design. Actively engaging in full-stack project building and research.',
      icon: GraduationCap,
      highlights: ['Advanced Software Engineering', 'Full Stack Development Practices', 'Cloud Computing Technologies', 'Database Architecture & Security']
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Modern College of Arts, Science and Commerce, Pune',
      period: 'Graduated',
      location: 'Pune, Maharashtra, India',
      details: 'Completed foundational training in Computer Applications, covering core Object-Oriented programming languages, basic system analyses, and web technologies.',
      icon: BookOpen,
      highlights: ['Object Oriented Programming', 'Database Management Systems', 'Web Fundamentals (HTML/CSS/JS)', 'Data Structures']
    }
  ];

  return (
    <section id="education" className="py-24 relative px-6 bg-slate-50/30 dark:bg-black/10">
      {/* Glow spots */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-glowPurple/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl sm:text-5xl font-extrabold mb-4 font-heading text-slate-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Academic <span className="bg-gradient-to-r from-glowPurple to-glowBlue bg-clip-text text-transparent">Timeline</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-[3px] bg-gradient-to-r from-glowPurple to-glowBlue mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical central timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 -translate-x-1/2 z-0" />
          
          {/* Glowing active scroll progress overlay */}
          <motion.div 
            className="absolute left-4 sm:left-1/2 top-0 w-[2px] bg-gradient-to-b from-glowPurple via-glowPink to-glowBlue -translate-x-1/2 z-10 origin-top shadow-[0_0_8px_rgba(139,92,246,0.5)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ height: '100%' }}
          />

          {/* Steps */}
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.id} 
                  className={`relative flex flex-col sm:flex-row items-stretch justify-between z-20 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Outer point circle */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-slate-100 dark:bg-[#07031c] border-2 border-slate-300 dark:border-white/10 -translate-x-1/2 flex items-center justify-center transition-all duration-300 hover:border-glowPurple z-30 shadow-sm">
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-glowPurple to-glowBlue shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-pulse" />
                  </div>

                  {/* Empty spacer block to balance grid */}
                  <div className="hidden sm:block w-[45%]" />

                  {/* Content card */}
                  <motion.div 
                    className="ml-10 sm:ml-0 w-full sm:w-[45%] glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-white/5 relative group hover:border-glowPurple/30 dark:hover:border-glowBlue/30 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] transition-all duration-300 text-left"
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Glowing highlight indicator */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-glowPurple/5 to-glowBlue/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-bold text-glowPurple dark:text-violet-300">
                      <span className="flex items-center gap-1 bg-glowPurple/10 px-2.5 py-1 rounded-md border border-glowPurple/20">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{step.period}</span>
                      </span>
                      <span className="flex items-center gap-1 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{step.location}</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 dark:text-white font-heading leading-snug group-hover:text-glowPurple dark:group-hover:text-glowBlue transition-colors duration-200 mb-1">
                      {step.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                      {step.school}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {step.details}
                    </p>

                    {/* Course highlights tags */}
                    <div className="border-t border-slate-100 dark:border-white/5 pt-4">
                      <p className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500 tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-glowBlue" />
                        <span>Key Subjects & Focus</span>
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {step.highlights.map((h, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-slate-600 dark:text-slate-400"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
