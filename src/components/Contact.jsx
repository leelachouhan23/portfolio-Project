

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // =========================
  // EMAILJS FUNCTIONALITY
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('loading');

    try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,

          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
            title: 'Portfolio Contact',
          },

          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

      setStatus('success');

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setStatus('idle');
      }, 4000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  const socials = [
    {
      icon: Github,
      url: personalInfo.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      url: personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      url: personalInfo.twitter,
      label: 'Twitter',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 dark:bg-slate-900 bg-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob w-80 h-80 bg-indigo-600 bottom-0 left-0 opacity-10" />
        <div className="blob w-72 h-72 bg-cyan-500 top-0 right-0 opacity-10" />
      </div>

      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-indigo-500 dark:text-indigo-400 text-sm mb-3">
            05. SAY HELLO
          </p>

          <h2 className="section-title dark:text-white text-slate-900">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div
            className="w-16 h-1 mx-auto rounded-full mt-4"
            style={{
              background:
                'linear-gradient(90deg,#6366f1,#22d3ee)',
            }}
          />

          <p className="dark:text-slate-400 text-slate-500 mt-4 max-w-xl mx-auto text-sm">
            I'm currently open to new opportunities.
            Whether you have a project, a question,
            or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* LEFT SIDE */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: personalInfo.location,
                href: null,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-2xl border dark:border-white/5 border-slate-200 dark:bg-slate-800/40 bg-slate-50"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        'linear-gradient(135deg,#6366f1,#22d3ee)',
                    }}
                  >
                    <Icon size={16} className="text-white" />
                  </div>

                  <div>
                    <p className="text-xs font-mono dark:text-slate-500 text-slate-400">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="dark:text-slate-300 text-slate-700 text-sm hover:text-indigo-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="dark:text-slate-300 text-slate-700 text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs font-mono dark:text-slate-500 text-slate-400 mb-3">
                FIND ME ON
              </p>

              <div className="flex gap-3">
                {socials.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border dark:border-white/10 border-slate-200 dark:text-slate-400 text-slate-600 dark:hover:text-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500/50 hover:border-indigo-400 transition-all hover:-translate-y-1"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border dark:border-white/5 border-slate-200 dark:bg-slate-800/40 bg-slate-50 backdrop-blur-xl space-y-5"
              style={{
                boxShadow:
                  '0 0 60px rgba(99,102,241,0.05)',
              }}
            >
              {/* NAME */}
              <div>
                <label className="block text-xs font-mono dark:text-slate-400 text-slate-500 mb-2">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Leela Chouhan"
                  className="w-full px-4 py-3 rounded-xl border dark:border-white/10 border-slate-200 dark:bg-slate-900/60 bg-white dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs font-mono dark:text-slate-400 text-slate-500 mb-2">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border dark:border-white/10 border-slate-200 dark:bg-slate-900/60 bg-white dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs font-mono dark:text-slate-400 text-slate-500 mb-2">
                  MESSAGE
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Leela, I'd love to connect about..."
                  className="w-full px-4 py-3 rounded-xl border dark:border-white/10 border-slate-200 dark:bg-slate-900/60 bg-white dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={
                  status === 'loading' ||
                  status === 'success'
                }
                className="btn-glow w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' && (
                  <svg
                    className="w-4 h-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-25"
                    />

                    <path
                      d="M4 12a8 8 0 018-8"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                )}

                {status === 'success' && (
                  <CheckCircle2 size={16} />
                )}

                {status === 'idle' && (
                  <Send size={16} />
                )}

                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : 'Send Message'}
              </button>

              {/* STATUS MESSAGE */}
              <p className="text-xs dark:text-slate-600 text-slate-400 text-center font-mono">
                {status === 'success'
                  ? '✅ Message sent successfully!'
                  : status === 'error'
                  ? '❌ Failed to send message.'
                  : '📌 Feel free to contact me anytime.'}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

