// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

/**
 * Hero section with animated intro, profile image, social links, and CTA buttons.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-slate-950 bg-slate-50"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-[600px] h-[600px] bg-indigo-600 -top-32 -left-32 animation-delay-2000" />
        <div className="blob w-[500px] h-[500px] bg-cyan-500 bottom-0 right-0 animation-delay-4000" />
        <div className="blob w-[400px] h-[400px] bg-purple-600 top-1/2 left-1/2" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span
                className="px-4 py-1.5 rounded-full text-xs font-mono font-medium border"
                style={{
                  background: 'rgba(99,102,241,0.1)',
                  borderColor: 'rgba(99,102,241,0.3)',
                  color: '#818cf8',
                }}
              >
                🚀 Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text block sm:inline">{personalInfo.name}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="font-mono text-sm sm:text-base dark:text-cyan-400 text-indigo-600 mb-6 leading-relaxed">
              {personalInfo.tagline}
            </motion.p>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg dark:text-slate-400 text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Building modern, responsive web experiences with clean code and a
              passion for great UI. Based in{' '}
              <span className="dark:text-indigo-400 text-indigo-600 font-medium">{personalInfo.location}</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                    <a
                      href="/Leela_Chouhan.pdf"
                      download="Leela_Chouhan.pdf"
                      className="btn-glow flex items-center gap-2"
                    >
                      <Download size={16} />
                      Download Resume
                    </a>
              <button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-glow"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: Github,   url: personalInfo.github,   label: 'GitHub'   },
                { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Twitter,  url: personalInfo.twitter,  label: 'Twitter'  },
              ].map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center dark:bg-white/5 bg-white border dark:border-white/10 border-slate-200 dark:text-slate-400 text-slate-600 dark:hover:text-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500/50 hover:border-indigo-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #a855f7, #6366f1)',
                  padding: '3px',
                  borderRadius: '50%',
                }}
              />
              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1">
                <div
                  className="w-full h-full rounded-full overflow-hidden border-2"
                  style={{ borderColor: 'rgba(99,102,241,0.3)' }}
                >
                  {/* Profile image — shows initials if image not found */}
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback avatar */}
                  <div
                    className="w-full h-full items-center justify-center text-6xl font-display font-bold text-white"
                    style={{
                      display: 'none',
                      background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                    }}
                  >
                    LC
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-white"
                style={{ background: 'linear-gradient(135deg,#6366f1,#4f46e5)', boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                ⚛️ React Dev
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-4 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-white"
                style={{ background: 'linear-gradient(135deg,#22d3ee,#0891b2)', boxShadow: '0 0 20px rgba(34,211,238,0.5)' }}
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              >
                🌐 MERN Stack
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs dark:text-slate-500 text-slate-400 font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          >
            <ArrowDown size={16} className="dark:text-indigo-400 text-indigo-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
