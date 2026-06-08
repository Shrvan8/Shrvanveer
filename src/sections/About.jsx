import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, FolderGit2, Cpu, Globe, Flame, Heart, BookOpen, Compass } from 'lucide-react';
import StatCard from '../components/StatCard';

const About = () => {
  const stats = [
    { value: '4', suffix: '+', label: 'Major Projects', desc: 'Built modern web & Android apps', icon: FolderGit2 },
    { value: '1', suffix: 'st', label: 'MCA Student', desc: 'MIT-WPU, Expected Grad: 2027', icon: GraduationCap },
    { value: '100', suffix: '%', label: 'Full Stack Focus', desc: 'Specialized in frontend & backend systems', icon: Cpu },
    { value: '3', suffix: '+', label: 'Freelance Works', desc: 'Delivered client-centric practical solutions', icon: Globe },
    { value: '24', suffix: '/7', label: 'Continuous Learner', desc: 'Always innovating and building projects', icon: Flame },
  ];

  return (
    <section id="about" className="py-24 relative px-6 bg-slate-50/30 dark:bg-black/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-5xl font-extrabold mb-4 font-heading text-slate-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Behind the <span className="bg-gradient-to-r from-glowPurple to-glowBlue bg-clip-text text-transparent">Code</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-[3px] bg-gradient-to-r from-glowPurple to-glowBlue mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Narrative Story (Left) */}
          <motion.div 
            className="lg:col-span-7 text-left space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-glowPurple" />
              <span>The Journey of a Full Stack Developer</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              I am Shrvan Gunwant Veer, a passionate software developer and Master of Computer Applications (MCA) student at MIT World Peace University (MIT-WPU), Pune. My journey in technology began during my Bachelor of Computer Applications (BCA) at Modern College of Arts, Science and Commerce, Pune, where I discovered the thrill of writing code and building digital systems.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              For me, programming is not just about writing lines of code; it is about crafting practical solutions to real-world problems. Along with my academic curriculum, I have actively taken on freelance development projects, helping clients turn their visions into premium, responsive web applications. This practical work has refined my understanding of software development, client communication, and fast-paced agile execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-slate-200/50 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 flex gap-3">
                <div className="text-glowPurple"><BookOpen className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Design Philosophy</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Apple-inspired visual precision, functional micro-animations, and glassmorphism standards.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/50 dark:border-white/5 bg-slate-100/30 dark:bg-white/5 flex gap-3">
                <div className="text-glowBlue"><Heart className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Professional Goals</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Continuously innovate, build scalable software architectures, and join a high-performing product team.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Grid (Right) */}
          <motion.div 
            className="lg:col-span-5 text-left bg-gradient-to-tr from-slate-100/50 to-white/50 dark:from-[#09061d] dark:to-[#0f0a2e] p-8 rounded-3xl border border-slate-200/50 dark:border-white/5 shadow-xl shadow-slate-900/5 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glowing gradient backdrops */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-glowBlue/10 rounded-full blur-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-glowPurple/10 rounded-full blur-xl pointer-events-none" />

            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 border-b border-slate-200 dark:border-white/10 pb-3 font-heading uppercase tracking-wider">
              Profile Summary
            </h3>

            <ul className="space-y-5 relative z-10 text-sm font-medium">
              <li className="flex justify-between items-center py-0.5">
                <span className="text-slate-500">Full Name</span>
                <span className="text-slate-800 dark:text-slate-200 text-right">Shrvan Gunwant Veer</span>
              </li>
              <li className="flex justify-between items-center py-0.5">
                <span className="text-slate-500">Current Role</span>
                <span className="text-slate-800 dark:text-slate-200 text-right">MCA Student | Full Stack Dev</span>
              </li>
              <li className="flex justify-between items-center py-0.5">
                <span className="text-slate-500">Location</span>
                <span className="text-slate-800 dark:text-slate-200 text-right">Pune, Maharashtra, India</span>
              </li>
              <li className="flex justify-between items-center py-0.5">
                <span className="text-slate-500">Specialization</span>
                <span className="text-glowPurple dark:text-violet-300 text-right">MERN Stack, Java, Android</span>
              </li>
              <li className="flex justify-between items-center py-0.5">
                <span className="text-slate-500">Academics</span>
                <span className="text-slate-800 dark:text-slate-200 text-right">MIT World Peace University</span>
              </li>
              <li className="flex justify-between items-center py-0.5">
                <span className="text-slate-500">Email</span>
                <a href="mailto:shrvanveer4@gmail.com" className="text-glowBlue hover:underline text-right">
                  shrvanveer4@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              desc={stat.desc}
              icon={stat.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
