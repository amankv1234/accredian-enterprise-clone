"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please check your input.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 dark:bg-slate-950 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-accent-600/20 z-0 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-3xl">
          <div className="max-w-xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-sm font-bold border border-brand-500/20 mb-6"
            >
              Scale Your Team
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
              Ready to <span className="text-gradient">Elevate</span> Your Team?
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Join forward-thinking companies that are building the next generation of tech talent. Get a personalized learning strategy today.
            </p>
          </div>

          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-4xl relative overflow-hidden"
            >
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="text-green-600 dark:text-green-400" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Request Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">Our learning specialist will contact you shortly.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-brand-600 font-bold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all dark:text-white text-lg"
                      placeholder="Jane Cooper"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 ml-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all dark:text-white text-lg"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        Get Free Strategy
                      </>
                    )}
                  </button>
                  
                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-sm"
                    >
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
