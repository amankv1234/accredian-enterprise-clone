"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
  };
  onClick: () => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="relative group cursor-pointer flex flex-col h-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <div className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest">
            {course.category}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-grow line-clamp-3">
          {course.description}
        </p>

        {/* Action Area */}
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 text-brand-600 dark:text-brand-400 font-bold text-sm group/btn">
            <span className="relative">
              Explore Program
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover/btn:w-full"></span>
            </span>
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <Plus size={24} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
