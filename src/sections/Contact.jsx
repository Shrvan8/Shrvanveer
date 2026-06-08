import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Sparkles, CheckCircle2, Loader2, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    
    // Simulate futuristic transmission delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialCards = [
    {
      name: 'Email Direct',
      value: 'shrvanveer4@gmail.com',
      href: 'mailto:shrvanveer4@gmail.com',
      icon: Mail,
      theme: 'from-blue-500/10 to-glowBlue/20 hover:border-glowBlue/40 text-glowBlue'
    },
    {
      name: 'LinkedIn Connections',
      value: 'shrvan-veer-1881b3322',
      href: 'https://www.linkedin.com/in/shrvan-veer-1881b3322',
      icon: Linkedin,
      theme: 'from-purple-500/10 to-glowPurple/20 hover:border-glowPurple/40 text-glowPurple'
    },
    {
      name: 'GitHub Repository',
      value: 'github.com/Shrvan8',
      href: 'https://github.com/Shrvan8',
      icon: Github,
      theme: 'from-pink-500/10 to-glowPink/20 hover:border-glowPink/40 text-glowPink'
    }
  ];

  return (
    <section id="contact" className="py-24 relative px-6 overflow-hidden">
      {/* Background glowing rings */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-glowBlue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-24 w-80 h-80 bg-glowPurple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-5xl font-extrabold mb-4 font-heading text-slate-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact <span className="bg-gradient-to-r from-glowPurple to-glowBlue bg-clip-text text-transparent">Center</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto mb-4"
          >
            Initiate a connection. Let's collaborate to build something beyond limits.
          </motion.p>
          <motion.div 
            className="w-16 h-[3px] bg-gradient-to-r from-glowPurple to-glowBlue mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Social connection cards (Left) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white font-heading mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-glowPurple animate-pulse" />
              <span>Let's Connect</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              I am open to freelance projects, collaboration roles, or junior developer opportunities. Feel free to reach out via the secure form or use any of the direct coordinates.
            </p>

            <div className="space-y-4">
              {socialCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={idx}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`glass-card p-5 rounded-2xl border border-slate-200/50 dark:border-white/5 flex justify-between items-center bg-gradient-to-tr ${card.theme} transition-all duration-300 hover:-translate-y-0.5 group clickable`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="flex gap-4 items-center">
                      <div className="p-3 rounded-xl bg-white dark:bg-black/20 text-inherit shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left space-y-0.5">
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{card.name}</p>
                        <p className="text-sm font-extrabold text-slate-700 dark:text-slate-200 group-hover:text-glowBlue dark:group-hover:text-glowBlue transition-colors duration-200">{card.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-glowBlue transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Form (Right) */}
          <motion.div 
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-200/50 dark:border-white/5 relative bg-white/40 dark:bg-black/10 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        placeholder="Shrvan Veer"
                        className="w-full bg-slate-50 dark:bg-[#07041c] border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3.5 outline-none text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-glowPurple focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        placeholder="shrvanveer4@gmail.com"
                        className="w-full bg-slate-50 dark:bg-[#07041c] border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3.5 outline-none text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-glowPurple focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Your Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      placeholder="Hi Shrvan, let's talk about the project requirements..."
                      className="w-full bg-slate-50 dark:bg-[#07041c] border border-slate-200 dark:border-white/5 rounded-xl px-4 py-3.5 outline-none text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:border-glowPurple focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="glow-btn w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-glowPurple to-glowBlue text-white font-bold px-6 py-4 rounded-xl shadow-lg shadow-glowPurple/15 hover:shadow-glowPurple/25 transform hover:-translate-y-0.5 transition-all duration-200 clickable"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Signal...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  className="py-12 flex flex-col items-center text-center space-y-4"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  </motion.div>
                  
                  <div className="space-y-1.5">
                    <h4 className="text-xl font-extrabold text-slate-800 dark:text-white font-heading">
                      Transmission Successful!
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                      Thank you for reaching out. Your signal has been received, and I will reply to you as soon as possible.
                    </p>
                  </div>

                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 hover:border-glowPurple/30 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-all clickable"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="pt-12 mt-12 border-t border-slate-200/50 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Shrvan Gunwant Veer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-glowPurple transition-colors clickable">About</a>
            <a href="#projects" className="hover:text-glowPurple transition-colors clickable">Projects</a>
            <a href="#skills" className="hover:text-glowPurple transition-colors clickable">Skills</a>
            <a href="#contact" className="hover:text-glowPurple transition-colors clickable">Contact</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
