// src/components/About.jsx
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  {
    icon: Code2,
    title: "Frontend Focus",
    desc: "Crafting responsive, pixel-perfect UIs with React and Tailwind CSS.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Rocket,
    title: "MERN Stack",
    desc: "Building full-stack apps from database to deployment with MongoDB, Express, React, Node.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Team Player",
    desc: "Experienced coordinating academic programs and mentoring peers at NavGurukul.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    desc: "Pursuing excellence in software development with structured, consistent learning.",
    gradient: "from-amber-500 to-orange-500",
  },
];

/**
 * About section with bio, animated highlight cards, and career goals.
 */
export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 dark:bg-slate-900 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-indigo-500 dark:text-indigo-400 text-sm mb-3">01. WHO I AM</p>
          <h2 className="section-title dark:text-white text-slate-900">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg,#6366f1,#22d3ee)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {personalInfo.about.split('\n\n').map((para, i) => (
              <p key={i} className="dark:text-slate-400 text-slate-600 leading-relaxed text-base mb-4 last:mb-0">
                {para}
              </p>
            ))}

            {/* Career goal box */}
            <div
              className="mt-8 p-5 rounded-2xl border"
              style={{
                background: 'rgba(99,102,241,0.05)',
                borderColor: 'rgba(99,102,241,0.2)',
              }}
            >
              <p className="text-xs font-mono text-indigo-400 mb-2">🎯 CAREER GOAL</p>
              <p className="dark:text-slate-300 text-slate-700 text-sm leading-relaxed">{personalInfo.careerGoal}</p>
            </div>
          </motion.div>

          {/* Highlight cards grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="group p-5 rounded-2xl border dark:border-white/5 border-slate-100 dark:bg-slate-800/60 bg-slate-50 hover:border-indigo-500/30 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.4 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(99,102,241,0.15)' }}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold dark:text-white text-slate-900 text-sm mb-1">{item.title}</h3>
                  <p className="dark:text-slate-400 text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
