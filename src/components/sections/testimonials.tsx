"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Accredian has transformed how we think about data at our company. The ROI was evident within months.",
    author: "Sarah Johnson",
    role: "Head of L&D, TechCorp",
    rating: 5,
  },
  {
    quote: "The personalized mentorship for our senior leaders was exactly what we needed to scale our AI initiatives.",
    author: "David Chen",
    role: "CTO, Global Retail Solutions",
    rating: 5,
  },
  {
    quote: "Highly recommended for any organization looking to stay competitive in the digital age.",
    author: "Michael Brown",
    role: "VP of Engineering, Innovate Inc",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900 dark:text-white"
          >
            Trusted by <span className="text-gradient">World's Best</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">See what enterprise leaders are saying about us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] glass dark:glass-dark relative border border-slate-200 dark:border-slate-800"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-500 text-brand-500" />
                ))}
              </div>
              
              <Quote className="text-brand-500/10 dark:text-brand-500/5 absolute top-10 right-10" size={80} />
              
              <p className="text-xl italic text-slate-700 dark:text-slate-200 mb-10 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.author}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
