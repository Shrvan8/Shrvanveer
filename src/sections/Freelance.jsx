import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, TrendingUp, MessageSquare } from 'lucide-react';

const Freelance = () => {
  const highlights = [
    {
      title: 'Client-Focused Development',
      desc: 'Translating business objectives into clean, functional code. Building customized modules tailored precisely to client requirements and target users.',
      icon: Users,
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-glowBlue/40'
    },
    {
      title: 'Practical Project Execution',
      desc: 'Managing full project lifecycles from wireframing to staging, deployment, and testing. Delivering responsive layouts and scalable backend schemas.',
      icon: Target,
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] group-hover:border-glowPurple/40'
    },
    {
      title: 'Problem Solving & Architecture',
      desc: 'Creating optimal structures, resolving database concurrency problems, and resolving client-side speed bottlenecks to deliver high performance.',
      icon: Zap,
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] group-hover:border-glowPink/40'
    },
    {
      title: 'Continuous Real-World Learning',
      desc: 'Adapting quickly to diverse tech stacks. Freelancing has trained me to adopt new APIs, payment gateways, and CSS frameworks on demand.',
      icon: TrendingUp,
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:border-emerald-500/40'
    },
    {
      title: 'Professional Communication',
      desc: 'Ensuring transparent code progress, presenting clear sprint updates, setting expectations, and establishing strong client trust.',
      icon: MessageSquare,
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:border-amber-500/40'
    }
  ];

  return (
    <section id="freelance" className="py-24 relative px-6">
      {/* Background glow spot */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-glowBlue/5 rounded-full blur-[100px] pointer-events-none" />

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
            Real-World <span className="bg-gradient-to-r from-glowPurple to-glowBlue bg-clip-text text-transparent">Execution</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto mb-4"
          >
            Delivering practical value and client-focused software as an independent developer.
          </motion.p>
          <motion.div 
            className="w-16 h-[3px] bg-gradient-to-r from-glowPurple to-glowBlue mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Narrative / Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div 
            className="lg:col-span-5 text-left space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-1 px-3.5 rounded bg-glowPurple/15 text-glowPurple dark:bg-glowPurple/10 dark:text-violet-300 border border-glowPurple/20 text-xs font-bold w-fit tracking-wider uppercase">
              Freelancing Practice
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white leading-tight font-heading">
              Transforming client challenges into production code.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Working as a freelance developer along with my MCA course keeps me linked to industry-standard demands. It forces me to construct highly optimized, accessible user interfaces, write clean APIs, configure databases, and deployment schemas under strict schedules.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className={`glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 relative group transition-all duration-300 hover:-translate-y-1 ${item.glowColor} ${
                    idx === highlights.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-glowPurple group-hover:text-glowBlue group-hover:bg-glowBlue/10 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left space-y-1.5 flex-grow">
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Freelance;
