import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'StudySync',
      description: 'Educational platform with note management, responsive UI, and modern learning experience.',
      fullDescription: 'StudySync is a state-of-the-art educational platform designed to streamline note management and digital sharing. Built with the MERN stack, it offers students and educators a clean dashboard to organize study materials, upload documents, and manage class schedules. The platform focuses on a seamless, distraction-free reading experience optimized for both desktop and mobile viewports.',
      features: [
        'Responsive dashboard layout',
        'Intuitive note uploading & organization',
        'Advanced category searching and filtering',
        'Interactive learning resource dashboard',
        'Secure token-based user authentication'
      ],
      techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
      themeColor: 'from-blue-600 via-indigo-600 to-glowPurple',
      githubUrl: 'https://github.com/Shrvan8',
      demoUrl: 'https://github.com/Shrvan8'
    },
    {
      id: 2,
      title: 'SpiceVilla Kitchen',
      description: 'QR code-based restaurant menu and ordering system with modern user experience.',
      fullDescription: 'SpiceVilla Kitchen is a contactless digital dining platform. It utilizes table-specific QR codes to load an interactive menu directly onto customers\' smartphones. Dining guests can browse through categorised cuisine catalogs, add items to their digital cart, and submit orders directly to the kitchen. It drastically reduces waiting intervals and optimizes order accuracy.',
      features: [
        'Contactless table-specific QR code scanning',
        'Dynamic digital menu catalog with filters',
        'Live dining cart with total calculation',
        'Kitchen dashboard for live order tracking',
        'Optimized responsive layout for smartphones'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
      themeColor: 'from-orange-500 via-red-500 to-glowPink',
      githubUrl: 'https://github.com/Shrvan8',
      demoUrl: 'https://github.com/Shrvan8'
    },
    {
      id: 3,
      title: 'Flight Booking System',
      description: 'Android application for flight reservation and booking management.',
      fullDescription: 'An intuitive Android mobile application developed in Java for flight searches and booking operations. Designed around user experience, it features a fluid step-by-step reservation process, local database storage for ticket caching, passenger profile management, and interactive notifications. It provides instant ticket confirmations and cancellation workflows.',
      features: [
        'Dynamic flight searching & comparison',
        'Interactive seat reservation layout grid',
        'Passenger database profile management',
        'Local SQLite data caching for offline access',
        'Instant booking notifications'
      ],
      techStack: ['Android Studio', 'Java', 'XML Layouts', 'SQLite Database', 'Firebase'],
      themeColor: 'from-cyan-500 via-blue-600 to-indigo-700',
      githubUrl: 'https://github.com/Shrvan8',
      demoUrl: 'https://github.com/Shrvan8'
    },
    {
      id: 4,
      title: 'Ellora Tea Website',
      description: 'Business website designed for tea product branding and customer engagement.',
      fullDescription: 'Ellora Tea is a premium business branding website created to establish a strong online identity. The site leverages sophisticated design layouts, organic storytelling, and micro-interactions to showcase a catalog of select tea products. Focused on lead generation, it features interactive maps, inquiry forms, and optimized loading speeds for maximum consumer retention.',
      features: [
        'Premium high-end product catalog display',
        'Interactive story cards detailing tea sourcing',
        'Integrated customer inquiry form',
        'Responsive animations powered by GSAP',
        'Search engine optimized (SEO) layout structure'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP Animations', 'Git'],
      themeColor: 'from-emerald-500 via-teal-600 to-glowBlue',
      githubUrl: 'https://github.com/Shrvan8',
      demoUrl: 'https://github.com/Shrvan8'
    }
  ];

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 relative px-6 bg-slate-50/30 dark:bg-black/10">
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
            Cinematic <span className="bg-gradient-to-r from-glowPurple to-glowBlue bg-clip-text text-transparent">Showcases</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-[3px] bg-gradient-to-r from-glowPurple to-glowBlue mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

      </div>
    </section>
  );
};

export default Projects;
