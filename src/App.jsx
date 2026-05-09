// src/App.jsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useTheme } from './hooks/useTheme';
import Loader   from './components/Loader';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Journey  from './components/Journey';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

/**
 * Root application component.
 * Orchestrates loading screen → main portfolio layout.
 */
export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main portfolio */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen font-body"
        >
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
