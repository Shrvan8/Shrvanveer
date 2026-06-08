import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ value, suffix = '', label, desc, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    // If target value is not a number, just show it immediately
    const target = parseInt(value, 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animateCount = (timestamp) => {
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      // Ease out quad
      const easedProgress = percentage * (2 - percentage);
      const current = Math.floor(easedProgress * target);

      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, value]);

  return (
    <motion.div
      ref={cardRef}
      className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 relative group overflow-hidden transition-all duration-300 hover:border-glowPurple/30 dark:hover:border-glowBlue/30 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] hover:-translate-y-1 flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background neon hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-glowPurple/5 to-glowBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 text-glowPurple group-hover:text-glowBlue group-hover:bg-glowBlue/10 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-extrabold font-heading text-slate-800 dark:text-white flex items-baseline gap-0.5 mb-1">
          <span>{count}</span>
          <span className="text-glowPurple dark:text-violet-400 font-bold">{suffix}</span>
        </h3>
        <p className="font-semibold text-sm text-slate-700 dark:text-slate-200 mb-1">{label}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{desc}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
