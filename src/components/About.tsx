"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const photos = [
  {
    src: "/hindia2.png",
    alt: "Concert",
    className: "w-full aspect-[4/5] object-cover",
    y: 0,
    caption: "ST-001 / LIVE SESSION",
  },
  {
    src: "/hindia1.png",
    alt: "Studio",
    className: "w-full aspect-square object-cover",
    y: -50,
    caption: "DT-042 / STUDIO GEAR",
  },
  {
    src: "/hindia3.png",
    alt: "Artist",
    className: "w-full aspect-[16/9] object-cover",
    y: 50,
    caption: "PR-999 / PORTRAIT",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          {/* Text Content */}
          <div className="flex-1 sticky top-32">
            <span className="text-technical text-maroon mb-6 block uppercase tracking-widest">Biografi</span>
            <h2 className="text-5xl md:text-7xl text-editorial mb-8 leading-tight">
              Sebuah dokumentasi resonansi digital dan fisik.
            </h2>
            <div className="space-y-6 text-lg opacity-80 font-light leading-relaxed max-w-xl">
              <p>
                HINDIA bukan sekadar alias; ia adalah sebuah kerangka teknis untuk data emosional. Lahir di persimpangan jalanan Jakarta yang bising dan gumam sunyi server studio.
              </p>
              <p>
                Suaranya adalah perpaduan sintesis retro-monofonik dan hiper-fidelitas modern. Setiap pertunjukan adalah kalibrasi waktu nyata antara sejarah dan masa depan.
              </p>
            </div>

            <div className="mt-12 p-8 border border-foreground/10 rounded-2xl bg-foreground/[0.02]">
              <p className="text-technical mb-2 uppercase">Spesifikasi Teknis</p>
              <ul className="text-xs space-y-2 font-mono opacity-50 uppercase">
                <li>• Format: Output Emosional Tanpa Cacat</li>
                <li>• Latensi: Nol (Subjektif)</li>
                <li>• Asal: Koordinat 6.2088° S, 106.8456° E</li>
              </ul>
            </div>
          </div>

          {/* Parallax Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 md:gap-8">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: photo.y }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className={cn(
                  "relative group",
                  i === 2 ? "col-span-2" : "col-span-1"
                )}
              >
                <div className="overflow-hidden rounded-lg doc-border bg-foreground/5">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={cn(photo.className, "transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0")}
                  />
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-technical">{photo.caption}</span>
                  <div className="h-[1px] flex-1 mx-4 bg-foreground/10" />
                  <span className="text-technical">REV.02</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// End of file
