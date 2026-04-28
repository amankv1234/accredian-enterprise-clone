"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-[100]"
        >
          <Link
            href="#cta"
            className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
          >
            <MessageSquare size={20} className="group-hover:animate-bounce" />
            <span className="font-bold">Consult an Expert</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
