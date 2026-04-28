"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, BarChart3 } from "lucide-react";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-bold mb-8 border border-brand-500/20"
            >
              <Sparkles size={16} />
              <span>The Future of Enterprise Learning</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Transform Your Team with <span className="text-gradient">AI-First Learning</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed"
            >
              Empower your workforce with industry-leading programs in Data, AI, and Product. Build a culture of continuous innovation and strategic excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Link
                href="#cta"
                className="group bg-brand-600 hover:bg-brand-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-600/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Get a Free Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#courses"
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-900 dark:text-white px-10 py-5 rounded-2xl font-bold text-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                Explore Programs
              </Link>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative group w-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-1000 animate-gradient-x"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-3xl bg-slate-100 dark:bg-slate-800 aspect-[4/3]">
              <Image 
                src="/images/og-image.png"
                alt="Enterprise Dashboard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass dark:glass-dark p-6 rounded-3xl border border-white/20 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-500">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">+124% ROI</div>
                  <div className="text-xs text-slate-500">Enterprise Growth</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
