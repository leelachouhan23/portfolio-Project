// src/components/Journey.jsx
import { motion } from 'framer-motion';
import { timeline } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Learning journey section with a vertical animated timeline.
 */
export default function Journey() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="journey" className="py-24 dark:bg-slate-950 bg-slate-50 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-indigo-500 dark:text-indigo-400 text-sm mb-3">04. MY PATH</p>
          <h2 className="section-title dark:text-white text-slate-900">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg,#6366f1,#22d3ee)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(180deg, #6366f1, #22d3ee, transparent)' }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={isVisible ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative flex gap-6 pl-16"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 + 0.3 }}
              >
                {/* Icon bubble */}
                <div
                  className={`absolute left-0 top-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}
                  style={{ boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
                >
                  {item.icon}
                </div>

                {/* Content card */}
                <div className="flex-1 pb-4">
                  <div
                    className="p-5 rounded-2xl border dark:border-white/5 border-slate-200 dark:bg-slate-900/60 bg-white hover:border-indigo-500/20 transition-all duration-300 group"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-bold dark:text-white text-slate-900 text-base">{item.title}</h3>
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-mono flex-shrink-0"
                        style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8' }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs font-mono dark:text-indigo-400 text-indigo-600 mb-2">{item.org}</p>
                    <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
