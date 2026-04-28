"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, BarChart3, Zap, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    title: "Industry-Ready Content",
    description: "Curated curriculum designed by experts from top tech companies.",
    icon: <BookOpen className="text-brand-600" size={24} />,
  },
  {
    title: "Expert Mentorship",
    description: "1-on-1 sessions with industry leaders to guide your employees.",
    icon: <Users className="text-accent-500" size={24} />,
  },
  {
    title: "Analytics Dashboard",
    description: "Track progress and ROI with detailed enterprise-grade reporting.",
    icon: <BarChart3 className="text-brand-600" size={24} />,
  },
  {
    title: "Flexible Learning",
    description: "On-demand and live sessions that fit into your team's busy schedule.",
    icon: <Zap className="text-accent-500" size={24} />,
  },
  {
    title: "Certified Excellence",
    description: "Industry-recognized certifications to boost your team's credibility.",
    icon: <ShieldCheck className="text-brand-600" size={24} />,
  },
  {
    title: "Global Community",
    description: "Access to a global network of professionals and alumni.",
    icon: <Globe className="text-accent-500" size={24} />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900 dark:text-white"
          >
            Why Choose <span className="text-brand-600">Accredian</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We provide a comprehensive learning ecosystem that ensures your team stays ahead in the rapidly evolving digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-8 border border-brand-100 dark:border-brand-500/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
