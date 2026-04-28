"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

interface CourseModalProps {
  course: any;
  isOpen: boolean;
  onClose: () => void;
}

export function CourseModal({ course, isOpen, onClose }: CourseModalProps) {
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[3rem] shadow-4xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-20"
            >
              <X size={24} className="text-slate-900 dark:text-white" />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="lg:w-2/5 h-64 lg:h-auto relative">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white dark:to-slate-900 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent lg:hidden" />
              </div>

              {/* Content Side */}
              <div className="lg:w-3/5 p-8 md:p-12">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-bold mb-6">
                  {course.category.toUpperCase()}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-slate-900 dark:text-white">
                  {course.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  {course.detailedDescription}
                </p>

                <div className="space-y-4 mb-10">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs">Skills You'll Master</h4>
                  <div className="flex flex-wrap gap-3">
                    {course.skills.map((skill: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={16} className="text-green-500" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-600/20 flex items-center justify-center gap-2">
                    Enroll Now
                    <ArrowRight size={20} />
                  </button>
                  <button className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                    Download Curriculum
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
