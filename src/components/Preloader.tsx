"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6"
        >
          {/* Grain on loader too */}
          <div className="grain-overlay opacity-10" />

          <div className="relative w-full max-w-sm text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <h2 className="text-editorial text-5xl tracking-tighter mb-2">HINDIA</h2>
              <p className="text-technical text-maroon uppercase tracking-[0.4em] text-[8px]">Loading Soundscapes</p>
            </motion.div>

            <div className="space-y-4">
              <p className="text-[10px] font-mono opacity-40 italic">"Evaluasi diri, menari dengan bayangan."</p>
              
              {/* Progress Bar */}
              <div className="w-full h-[1px] bg-foreground/10 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-maroon"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center text-[8px] font-mono opacity-30 uppercase tracking-widest">
                <span>Frequency: 44.1kHz</span>
                <span>{progress}%</span>
                <span>Bitrate: 24-bit</span>
              </div>
            </div>
          </div>

          {/* Decorative Corner Borders */}
          <div className="absolute top-10 left-10 w-20 h-[1px] bg-foreground/10" />
          <div className="absolute top-10 left-10 w-[1px] h-20 bg-foreground/10" />
          
          <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-foreground/10" />
          <div className="absolute bottom-10 right-10 w-[1px] h-20 bg-foreground/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
