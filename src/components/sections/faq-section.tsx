"use client";

import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { QueryForm } from "@/components/ui/query-form";

const faqs = [
  {
    question: "What programs do you offer?",
    answer: "We offer a wide range of specialized programs in Data Science, Artificial Intelligence, Product Management, Digital Transformation, and Executive Leadership, all tailored for corporate environments."
  },
  {
    question: "How does the platform work?",
    answer: "The platform integrates live sessions, on-demand learning modules, and 1-on-1 mentorship. Organizations can track employee progress through a dedicated analytics dashboard."
  },
  {
    question: "Is there certification?",
    answer: "Yes, every program comes with industry-recognized certifications that validate the skills acquired by your team, helping them boost their professional credibility."
  },
  {
    question: "What industries are covered?",
    answer: "We cover a diverse set of industries including FinTech, Healthcare, Retail, Manufacturing, and specialized tech sectors, with curriculum adapted to specific vertical challenges."
  },
  {
    question: "How can I enroll?",
    answer: "Organizations can enroll their teams by requesting a free demo. Our learning specialists will then help customize a roadmap and set up the enterprise environment."
  },
  {
    question: "Is there customer support?",
    answer: "Absolutely! We provide 24/7 dedicated support for enterprise clients, including technical assistance and learning guidance for both managers and employees."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 relative bg-white dark:bg-slate-950 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-bold border border-brand-500/20 mb-6"
          >
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900 dark:text-white"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our enterprise learning platform and transformation strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion items={faqs} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <QueryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
