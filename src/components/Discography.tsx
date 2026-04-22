"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { SiSpotify, SiYoutube, SiApplemusic } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";

const albums = [
  {
    id: "01",
    title: "Doves, '25 on Blank Canvas",
    year: "2025",
    image: "/Doves, '25 on Blank Canvas.png",
    tracks: 12,
    links: [
      { name: "Spotify", icon: SiSpotify, href: "#" },
      { name: "Apple Music", icon: SiApplemusic, href: "#" },
      { name: "YouTube", icon: SiYoutube, href: "#" },
    ]
  },
  {
    id: "02",
    title: "Lagipula Hidup Akan Berakhir",
    year: "2023",
    image: "/lagipula hidup akan berakhir.png",
    tracks: 5,
    links: [
      { name: "Spotify", icon: SiSpotify, href: "#" },
      { name: "Apple Music", icon: SiApplemusic, href: "#" },
    ]
  },
  {
    id: "03",
    title: "Menari dengan Bayangan",
    year: "2019",
    image: "/menari dengan bayangan.png",
    tracks: 8,
    links: [
      { name: "Spotify", icon: SiSpotify, href: "#" },
      { name: "YouTube", icon: SiYoutube, href: "#" },
    ]
  },
];

export default function Discography() {
  const [hoveredAlbum, setHoveredAlbum] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedAlbum, setSelectedAlbum] = useState<typeof albums[0] | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="tour" className="py-32 px-6 bg-foreground/[0.02] relative" onMouseMove={handleMouseMove}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-technical text-maroon mb-4 block uppercase tracking-widest">Katalog</span>
            <h2 className="text-5xl md:text-8xl text-editorial">DISKOGRAFI</h2>
          </div>
          <p className="text-technical max-w-[200px] text-right opacity-40 uppercase">
            Klik entri untuk mengakses kanal distribusi digital.
          </p>
        </div>

        <div className="border-t border-foreground/10">
          {albums.map((album, index) => (
            <div
              key={album.id}
              className="group border-b border-foreground/10 py-12 flex items-center justify-between cursor-none relative"
              onMouseEnter={() => setHoveredAlbum(index)}
              onMouseLeave={() => setHoveredAlbum(null)}
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="flex items-center gap-12">
                <span className="text-technical opacity-40">{album.id}</span>
                <h3 className="text-4xl md:text-6xl text-editorial transition-all group-hover:pl-8 group-hover:text-maroon">
                  {album.title}
                </h3>
              </div>

              <div className="flex items-center gap-12">
                <div className="hidden md:block text-right">
                  <p className="text-technical uppercase">Dirilis</p>
                  <p className="text-xl text-editorial">{album.year}</p>
                </div>
                <div className="p-4 rounded-full border border-foreground/10 group-hover:bg-maroon group-hover:border-maroon transition-colors">
                  <Play size={24} className="fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Preview */}
      <AnimatePresence>
        {hoveredAlbum !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{
              position: "fixed",
              left: mousePosition.x + 20,
              top: mousePosition.y + 20,
              pointerEvents: "none",
              zIndex: 100,
            }}
            className="w-64 aspect-square overflow-hidden rounded-xl doc-border shadow-2xl"
          >
            <img
              src={albums[hoveredAlbum].image}
              alt={albums[hoveredAlbum].title}
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Album Modal */}
      <AnimatePresence>
        {selectedAlbum && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAlbum(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-2xl bg-background border border-foreground/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-3xl"
            >
              <div className="w-full md:w-1/2 aspect-square">
                <img src={selectedAlbum.image} alt={selectedAlbum.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-technical text-maroon">{selectedAlbum.year}</p>
                      <h3 className="text-4xl text-editorial">{selectedAlbum.title}</h3>
                    </div>
                    <button onClick={() => setSelectedAlbum(null)} className="p-2 hover:bg-foreground/5 rounded-full transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                  <p className="text-sm opacity-60 mb-8">
                    Edisi Standar. Mencakup {selectedAlbum.tracks} trek yang telah melalui proses mastering. Distribusi melalui Core Records Global.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-technical uppercase">Dengarkan Sekarang</p>
                  {selectedAlbum.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between p-4 bg-foreground/5 border border-foreground/5 rounded-xl hover:bg-foreground/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <link.icon size={20} />
                        <span className="font-mono text-sm">{link.name}</span>
                      </div>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
