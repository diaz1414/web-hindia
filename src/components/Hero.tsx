"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      // Force play if already cached
      if (videoRef.current.readyState >= 2) {
        setIsVideoLoaded(true);
      }
    }
  }, [isMuted]);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[200vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ scale }}
          className="relative w-full h-full overflow-hidden"
        >
          {/* Video Background with Smooth Loading */}
          <motion.video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/poster-hero.jpg"
            onCanPlay={handleVideoLoad}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 0.6 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover grayscale"
          >
            <source src="/hindia-vidio.mp4" type="video/mp4" />
          </motion.video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity, y }}
            className="relative z-10 text-center px-4 pt-40"
          >
            <span className="text-technical mb-6 block tracking-[0.3em] opacity-50 uppercase">Lanskap Suara Eksperimental</span>
            <h1 className="text-6xl md:text-[11rem] lg:text-[15rem] text-editorial leading-[0.8] mb-12 tracking-tighter">
              HINDIA
            </h1>
            <div className="flex items-center justify-center gap-6">
              <div className="h-[1px] w-12 bg-maroon/50" />
              <p className="text-technical tracking-widest uppercase">Est. 2026 / Jakarta</p>
              <div className="h-[1px] w-12 bg-maroon/50" />
            </div>
          </motion.div>

          {/* Vintage Analog Volume Control */}
          <div className="absolute bottom-12 right-12 z-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMuted(!isMuted)}
              className="relative flex items-center justify-center group"
            >
              {/* Outer Crosshair / Guide */}
              <div className="absolute inset-0 border border-foreground/5 rounded-full scale-[1.6] group-hover:border-maroon/20 transition-colors duration-500" />
              <div className="absolute h-[1px] w-4 bg-foreground/10 -left-6" />
              <div className="absolute h-[1px] w-4 bg-foreground/10 -right-6" />

              {/* Button Body */}
              <div className="relative w-14 h-14 bg-background/40 backdrop-blur-xl border border-foreground/20 rounded-full flex items-center justify-center shadow-2xl group-hover:border-maroon/40 transition-all duration-500 overflow-hidden">
                <div className="grain-overlay opacity-20" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMuted ? "muted" : "unmuted"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="relative z-10"
                  >
                    {isMuted ? (
                      <VolumeX size={18} className="text-foreground/40" />
                    ) : (
                      <Volume2 size={18} className="text-maroon" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Status LED Indicator */}
              <div className="absolute -top-1 -right-1 flex flex-col items-center gap-1">
                <div className={`w-2 h-2 rounded-full border border-background transition-all duration-700 ${isMuted ? 'bg-foreground/10 shadow-none' : 'bg-maroon shadow-[0_0_10px_rgba(128,0,0,0.8)]'
                  }`} />
              </div>

              {/* Micro Labels */}
              <span className="absolute -bottom-6 text-[7px] tracking-[0.3em] uppercase opacity-30 font-mono">
                {isMuted ? 'Mute' : 'Live'}
              </span>
            </motion.button>
          </div>

          {/* Technical Borders */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[1px] border-foreground/5 m-8 rounded-[2rem]" />
        </motion.div>
      </div>
    </section>
  );
}
