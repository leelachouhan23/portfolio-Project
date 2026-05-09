// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Journey',    href: '#journey'    },
  { label: 'Contact',    href: '#contact'    },
];

/**
 * Sticky navbar with dark/light toggle and mobile hamburger menu.
 */
export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 dark:bg-slate-950/90 bg-white/90 backdrop-blur-xl shadow-lg shadow-black/10 border-b dark:border-white/5 border-slate-200/60'
            : 'py-5 bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); handleNav('#hero'); }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-display font-bold text-white transition-transform group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #6366f1, #22d3ee)', boxShadow: '0 0 15px rgba(99,102,241,0.4)' }}
            >
              LC
            </div>
            <span className="font-display font-bold text-lg hidden sm:block dark:text-white text-slate-900">
              Leela<span className="gradient-text"> Chouhan</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="nav-link dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 text-sm font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center dark:bg-white/5 bg-slate-100 dark:hover:bg-white/10 hover:bg-slate-200 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark
                ? <Sun size={16} className="text-amber-400" />
                : <Moon size={16} className="text-indigo-600" />
              }
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center dark:bg-white/5 bg-slate-100"
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <X size={16} className="dark:text-white text-slate-900" />
                : <Menu size={16} className="dark:text-white text-slate-900" />
              }
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 dark:bg-slate-950/95 bg-white/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
            <motion.ul
              className="absolute top-20 left-4 right-4 rounded-2xl dark:bg-slate-900 bg-slate-50 border dark:border-white/10 border-slate-200 p-4 space-y-1"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl dark:text-slate-300 text-slate-700 dark:hover:bg-white/5 hover:bg-slate-100 hover:text-indigo-500 transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
