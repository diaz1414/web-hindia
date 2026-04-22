"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
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
            onLoadedData={handleVideoLoad}
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
              <p className="text-technical tracking-widest uppercase">Est. 2024 / Jakarta</p>
              <div className="h-[1px] w-12 bg-maroon/50" />
            </div>
          </motion.div>

          {/* Controls */}
          <div className="absolute bottom-12 right-12 z-20 flex flex-col items-end gap-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-4 bg-foreground/10 backdrop-blur-md border border-foreground/20 rounded-full hover:bg-foreground/20 transition-all group"
            >
              {isMuted ? <VolumeX size={20} className="group-hover:scale-110 transition-transform" /> : <Volume2 size={20} className="group-hover:scale-110 transition-transform" />}
            </button>
            <div className="text-right">
              <p className="text-technical uppercase">Kontrol Volume</p>
              <p className="text-[10px] opacity-40 uppercase">Sistem Interaktif v1.0</p>
            </div>
          </div>

          {/* Technical Borders */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[1px] border-foreground/5 m-8 rounded-[2rem]" />
        </motion.div>
      </div>
    </section>
  );
}
