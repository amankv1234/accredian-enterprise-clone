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
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer flex flex-col rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={course.id <= 4}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Category Badge on Image */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider">
            {course.category}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
          {course.description}
        </p>

        {/* Action Area */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm group/btn">
            <span className="group-hover/btn:mr-1 transition-all">Explore Program</span>
            <ArrowRight size={18} className="text-brand-600 group-hover/btn:translate-x-1 transition-transform" />
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <Plus size={20} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
