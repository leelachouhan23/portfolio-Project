// src/components/Loader.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Full-screen loading animation shown on first render.
 * Disappears after ~2.2s.
 */
export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 35);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: '#070714' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="blob w-96 h-96 bg-indigo-600 top-1/4 left-1/4 animation-delay-2000" />
          <div className="blob w-80 h-80 bg-cyan-500 bottom-1/4 right-1/4" />
        </div>

        <div className="relative z-10 text-center">
          {/* Logo mark */}
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl font-display font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
              boxShadow: '0 0 40px rgba(99,102,241,0.6)',
            }}
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            LC
          </motion.div>

          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Leela Chouhan
          </h2>
          <p className="text-slate-400 text-sm mb-8 font-mono">
            Frontend Developer
          </p>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
                boxShadow: '0 0 10px rgba(34,211,238,0.6)',
              }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-slate-500 text-xs mt-3 font-mono">{progress}%</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
