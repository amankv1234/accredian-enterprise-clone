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
    <section className="py-20 px-6 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-heading text-brand-600 dark:text-brand-400 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
