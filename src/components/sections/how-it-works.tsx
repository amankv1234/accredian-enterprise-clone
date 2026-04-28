"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "We understand your organization's unique needs and skill gaps.",
    icon: <Search className="text-brand-600" size={28} />,
  },
  {
    title: "Customization",
    description: "We tailor our curriculum and delivery to match your objectives.",
    icon: <PenTool className="text-accent-500" size={28} />,
  },
  {
    title: "Deployment",
    description: "Seamless integration of your team into our learning platform.",
    icon: <Rocket className="text-brand-600" size={28} />,
  },
  {
    title: "ROI Analysis",
    description: "Regular assessments and reporting to ensure tangible ROI.",
    icon: <BarChart className="text-accent-500" size={28} />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900 dark:text-white"
          >
            Our <span className="text-brand-600">Premium</span> Process
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A structured approach to ensure your organization's success at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-500/20 via-accent-500/20 to-brand-500/20 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative z-10 group"
            >
              <div className="w-24 h-24 rounded-full glass dark:glass-dark flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 border-2 border-brand-500/20">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
