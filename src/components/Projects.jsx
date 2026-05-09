// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Project card with gradient fallback, tech badges, and live/repo links.
 */
function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden border dark:border-white/5 border-slate-200 dark:bg-slate-900 bg-white hover:border-indigo-500/30 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(99,102,241,0.15)' }}
    >
      {/* Project image / gradient cover */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.style.display = 'none'; }}
        />
        {/* Emoji fallback / overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          {project.emoji}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            onClick={e => project.liveUrl === '#' && e.preventDefault()}
          >
            <ExternalLink size={16} />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            onClick={e => project.repoUrl === '#' && e.preventDefault()}
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold dark:text-white text-slate-900 text-lg mb-2">{project.title}</h3>
        <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-mono border"
              style={{
                background: 'rgba(99,102,241,0.08)',
                borderColor: 'rgba(99,102,241,0.2)',
                color: '#818cf8',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)' }}
            onClick={e => project.liveUrl === '#' && e.preventDefault()}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold border dark:border-white/10 border-slate-200 dark:text-slate-300 text-slate-700 dark:hover:border-indigo-500/50 hover:border-indigo-400 transition-all"
            onClick={e => project.repoUrl === '#' && e.preventDefault()}
          >
            <Github size={13} /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Projects section.
 */
export default function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 dark:bg-slate-900 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-indigo-500 dark:text-indigo-400 text-sm mb-3">03. WHAT I'VE BUILT</p>
          <h2 className="section-title dark:text-white text-slate-900">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: 'linear-gradient(90deg,#6366f1,#22d3ee)' }} />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="dark:text-slate-400 text-slate-500 mb-4 text-sm">Want to see more?</p>
          <a
            href="https://github.com/leelachouhan23?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow inline-flex"
          >
            <Github size={16} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
