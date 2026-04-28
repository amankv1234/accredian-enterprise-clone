"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, Phone, User, Mail, MessageSquare, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const courses = [
  "Data Science Elite",
  "AI & Machine Learning",
  "Product Management",
  "Digital Transformation",
  "Executive Leadership",
  "Cybersecurity Strategy"
];

export function QueryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    courseInterest: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", courseInterest: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit. Please check your inputs.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl text-center"
      >
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="text-green-600 dark:text-green-400" size={40} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Query Received!</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Thank you for reaching out. Our learning specialist will contact you on your provided email within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all"
        >
          Send Another Query
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
    >
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Still Have Questions?</h3>
        <p className="text-slate-500 dark:text-slate-400">Fill out the form below and we'll get back to you shortly.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors" size={20} />
            <input
              type="text"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 outline-none focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all dark:text-white"
            />
          </div>
          <div className="relative group">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors" size={20} />
            <input
              type="email"
              required
              placeholder="Business Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 outline-none focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-600 transition-colors" size={20} />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 outline-none focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all dark:text-white"
            />
          </div>
          <div className="relative group">
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
            <select
              value={formData.courseInterest}
              onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 outline-none focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all dark:text-white appearance-none cursor-pointer"
            >
              <option value="" disabled>Select Course Interest</option>
              {courses.map(course => <option key={course} value={course}>{course}</option>)}
            </select>
          </div>
        </div>

        <div className="relative group">
          <MessageSquare className="absolute left-5 top-6 text-slate-400 group-focus-within:text-brand-600 transition-colors" size={20} />
          <textarea
            required
            rows={4}
            placeholder="Your Message / Query"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full pl-14 pr-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 outline-none focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 transition-all dark:text-white resize-none"
          />
          <div className="absolute bottom-4 right-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {formData.message.length} characters
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <Send size={20} />
              Submit My Query
            </>
          )}
        </button>

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-red-500 bg-red-50 dark:bg-red-900/20 p-5 rounded-2xl text-sm font-medium"
          >
            <AlertCircle size={20} />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
