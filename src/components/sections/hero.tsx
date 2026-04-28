"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-400/10 dark:bg-brand-500/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-accent-400/10 dark:bg-accent-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-brand-600 dark:text-brand-400 text-sm font-semibold mb-8 border border-brand-100/50 dark:border-brand-800/50 shadow-sm"
          >
            <Sparkles size={16} />
            <span>The Future of Enterprise Learning</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 tracking-tight text-slate-900 dark:text-white leading-[1.05]"
          >
            Transform Your Team with <span className="text-gradient">AI-First Learning</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl"
          >
            Empower your workforce with industry-leading programs in Data, AI, and Product. Build a culture of continuous innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="#cta"
              className="group bg-brand-600 hover:bg-brand-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-600/20 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Get a Free Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-900 dark:text-white px-10 py-5 rounded-2xl font-bold text-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
            >
              Explore Programs
            </Link>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-24 w-full max-w-5xl relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-1000 animate-gradient-x"></div>
            <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[2.5rem] p-4 md:p-10 shadow-3xl overflow-hidden aspect-[16/9] flex items-center justify-center">
               <div className="grid grid-cols-3 gap-6 w-full h-full opacity-40 dark:opacity-20 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
               </div>
               <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
                  <div className="text-4xl md:text-6xl font-bold font-heading text-slate-300 dark:text-slate-700 text-center uppercase tracking-tighter select-none">
                    Enterprise Dashboard
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
