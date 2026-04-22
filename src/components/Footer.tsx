"use client";

import React from "react";
import { SiSpotify, SiInstagram, SiYoutube, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-foreground/10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl text-editorial mb-8">HINDIA</h2>
            <p className="text-sm opacity-60 max-w-sm leading-relaxed mb-8">
              Sebuah dokumentasi resonansi digital dan fisik. Didistribusikan oleh Core Records Global. Seluruh data teknis diproses dalam waktu nyata.
            </p>
            <div className="flex gap-6">
              {[SiSpotify, SiInstagram, SiYoutube, SiX].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 border border-foreground/10 rounded-full hover:bg-maroon hover:border-maroon transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-technical text-maroon mb-6 uppercase tracking-widest">Navigasi</p>
            <ul className="space-y-4 text-sm font-mono opacity-60 uppercase tracking-tighter">
              <li><Link href="/#home" className="hover:opacity-100 transition-opacity">Beranda</Link></li>
              <li><Link href="/#about" className="hover:opacity-100 transition-opacity">Tentang</Link></li>
              <li><Link href="/#tour" className="hover:opacity-100 transition-opacity">Tur</Link></li>
              <li><Link href="/#store" className="hover:opacity-100 transition-opacity">Toko</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-technical text-maroon mb-6 uppercase tracking-widest">Legalitas</p>
            <ul className="space-y-4 text-sm font-mono opacity-60 uppercase tracking-tighter">
              <li><Link href="/terms" className="hover:opacity-100 transition-opacity">Ketentuan Layanan</Link></li>
              <li><Link href="/privacy" className="hover:opacity-100 transition-opacity">Kebijakan Privasi</Link></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Kebijakan Cookie</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono opacity-30 uppercase tracking-[0.2em]">
            © 2026 HINDIA / SOLUSI TEKNIS LTD.
          </p>
          <div className="flex items-center gap-4 text-[10px] font-mono opacity-30">
            <span>VER: 4.1.0-STABIL</span>
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
            <span>SERVER: JKT-01</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
