"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Accredian has transformed how we think about data at our company. The ROI was evident within months of implementation.",
    author: "Sarah Johnson",
    role: "Head of L&D, TechCorp",
    rating: 5,
    image: "/images/imagehuman.png"
  },
  {
    quote: "The personalized mentorship for our senior leaders was exactly what we needed to scale our AI initiatives across the globe.",
    author: "David Chen",
    role: "CTO, Global Retail Solutions",
    rating: 5,
    image: "/images/imagehuman.png"
  },
  {
    quote: "Highly recommended for any organization looking to stay competitive in the digital age. The curriculum is world-class.",
    author: "Michael Brown",
    role: "VP of Engineering, Innovate Inc",
    rating: 5,
    image: "/images/imagehuman.png"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-bold border border-brand-500/20 mb-6"
          >
            Success Stories
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900 dark:text-white"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            See how enterprise leaders are transforming their organizations with our advanced learning solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none transition-all duration-300 relative"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-500 text-brand-500" />
                ))}
              </div>
              
              <Quote className="text-brand-500/10 dark:text-brand-500/5 absolute top-10 right-10" size={80} />
              
              <p className="text-xl text-slate-700 dark:text-slate-200 mb-10 leading-relaxed relative z-10 font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-50 dark:border-slate-800 pt-8 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-500/20">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-lg">{testimonial.author}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 font-semibold uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
