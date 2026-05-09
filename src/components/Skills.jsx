// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = ['Frontend', 'Backend', 'Language', 'Tools', 'CS Fundamentals'];

/**
 * Skills section with animated progress bars grouped by category.
 */
export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 dark:bg-slate-950 bg-slate-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-indigo-500 dark:text-indigo-400 text-sm mb-3">02. WHAT I KNOW</p>
          <h2 className="section-title dark:text-white text-slate-900">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg,#6366f1,#22d3ee)' }} />
        </motion.div>

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="group p-5 rounded-2xl border dark:border-white/5 border-slate-200 dark:bg-slate-900/60 bg-white hover:border-indigo-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <h3 className="font-display font-semibold dark:text-white text-slate-900 text-sm">{skill.name}</h3>
                  <span className="text-xs font-mono dark:text-slate-500 text-slate-400">{skill.category}</span>
                </div>
                <span className="ml-auto text-sm font-mono font-bold gradient-text">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 dark:bg-slate-800 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #6366f1, #22d3ee)' }}
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category legend */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {categories.map(cat => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full text-xs font-mono border dark:border-white/10 border-slate-200 dark:text-slate-400 text-slate-500"
            >
              {cat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
