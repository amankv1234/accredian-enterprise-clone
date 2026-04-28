"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/counter";

const stats = [
  { label: "Partner Organizations", value: 500, suffix: "+" },
  { label: "Upskilled Professionals", value: 50000, suffix: "+" },
  { label: "Course Categories", value: 25, suffix: "+" },
  { label: "Completion Rate", value: 92, suffix: "%" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-slate-50/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[3rem] p-12 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-6xl font-bold font-heading text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
