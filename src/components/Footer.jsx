// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

/**
 * Footer with copyright, social icons, and back-to-top button.
 */
export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socials = [
    { icon: Github,   url: personalInfo.github,   label: 'GitHub'   },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="relative dark:bg-slate-950 bg-slate-100 border-t dark:border-white/5 border-slate-200 py-10">
      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg"
        style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)', boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}
        whileHover={{ y: -3, boxShadow: '0 0 30px rgba(99,102,241,0.6)' }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + copyright */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-bold text-white"
            style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)' }}
          >
            LC
          </div>
          <p className="text-xs dark:text-slate-500 text-slate-500 font-mono">
            © {new Date().getFullYear()} {personalInfo.name}. Made with{' '}
            <Heart size={10} className="inline text-rose-500" /> in Jashpur, CG
          </p>
        </div>

        {/* Social links */}
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg flex items-center justify-center dark:bg-white/5 bg-white border dark:border-white/10 border-slate-200 dark:text-slate-500 text-slate-400 dark:hover:text-indigo-400 hover:text-indigo-600 transition-all hover:-translate-y-0.5"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
