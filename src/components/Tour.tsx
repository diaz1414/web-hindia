"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Ticket, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const gigs = [
  { date: "AUG 12", city: "Jakarta", venue: "Istora Senayan", status: "Tersedia" },
  { date: "AUG 15", city: "Bandung", venue: "Sabilulungan", status: "Tiket Menipis" },
  { date: "AUG 18", city: "Yogyakarta", venue: "Jogja Expo Center", status: "Habis Terjual" },
  { date: "SEP 02", city: "Surabaya", venue: "Grand City", status: "Tersedia" },
  { date: "SEP 05", city: "Bali", venue: "Atlas Beach Club", status: "Tersedia" },
];

export default function Tour() {
  const [selectedGig, setSelectedGig] = useState<typeof gigs[0] | null>(null);
  const [step, setStep] = useState(1); // 1: Info, 2: Success

  const handleBuy = (gig: typeof gigs[0]) => {
    if (gig.status === "Sold Out") return;
    setSelectedGig(gig);
    setStep(1);
  };

  const completePurchase = () => {
    setStep(2);
    setTimeout(() => {
      setSelectedGig(null);
      setStep(1);
    }, 3000);
  };

  return (
    <section id="tour" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-technical text-maroon mb-4 block uppercase tracking-widest">Pertunjukan Langsung</span>
            <h2 className="text-5xl md:text-8xl text-editorial uppercase">Jadwal Tour</h2>
          </div>
          <div className="p-6 border border-foreground/10 rounded-2xl md:max-w-xs bg-foreground/[0.02]">
            <p className="text-sm opacity-60">
              Seluruh pertunjukan mengikuti protokol kesehatan yang berlaku. Tiket digital akan dikirimkan melalui surel terenkripsi.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-technical border-b border-foreground/10 uppercase tracking-widest">
                <th className="pb-6 px-4">Tanggal</th>
                <th className="pb-6 px-4">Lokasi</th>
                <th className="pb-6 px-4 hidden md:table-cell">Tempat</th>
                <th className="pb-6 px-4">Status</th>
                <th className="pb-6 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {gigs.map((gig, i) => (
                <tr
                  key={i}
                  className="group border-b border-foreground/5 hover:bg-foreground/[0.02] transition-colors"
                >
                  <td className="py-10 px-4 text-xl font-mono">{gig.date}</td>
                  <td className="py-10 px-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-maroon" />
                      <span className="text-2xl text-editorial">{gig.city}</span>
                    </div>
                  </td>
                  <td className="py-10 px-4 hidden md:table-cell opacity-60 font-light">{gig.venue}</td>
                  <td className="py-10 px-4">
                    <span className={cn(
                      "text-technical px-3 py-1 rounded-full border uppercase tracking-tighter",
                      gig.status === "Habis Terjual" ? "border-red-900/50 text-red-500" : "border-foreground/10"
                    )}>
                      {gig.status}
                    </span>
                  </td>
                  <td className="py-10 px-4 text-right">
                    <button
                      onClick={() => handleBuy(gig)}
                      disabled={gig.status === "Sold Out"}
                      className={cn(
                        "text-technical px-8 py-3 rounded-full transition-all flex items-center gap-2 ml-auto",
                        gig.status === "Sold Out"
                          ? "bg-foreground/5 opacity-20 cursor-not-allowed"
                          : "bg-maroon text-white hover:scale-105 active:scale-95"
                      )}
                    >
                      <Ticket size={16} />
                      {gig.status === "Sold Out" ? "Ditutup" : "Beli Tiket"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {selectedGig && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGig(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />
            <motion.div
              layoutId="checkout"
              className="relative w-full max-w-lg bg-background border border-foreground/10 rounded-[2.5rem] p-12 shadow-3xl overflow-hidden"
            >
              {step === 1 ? (
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-technical text-maroon uppercase tracking-widest">Proses Transaksi</span>
                      <h3 className="text-3xl text-editorial mt-2">Pemesanan Aman</h3>
                    </div>
                    <button onClick={() => setSelectedGig(null)} className="p-2 hover:bg-foreground/5 rounded-full transition-colors">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-6 mb-10">
                    <div className="flex justify-between p-4 border border-foreground/10 rounded-2xl bg-foreground/[0.02]">
                      <div>
                        <p className="text-xs opacity-40 uppercase mb-1">Acara</p>
                        <p className="font-mono">{selectedGig.city} — {selectedGig.venue}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs opacity-40 uppercase mb-1">Tanggal</p>
                        <p className="font-mono text-maroon">{selectedGig.date}.2026</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="opacity-60 font-mono">Entri Standar x1</span>
                        <span className="font-mono">IDR 450.000</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="opacity-60 font-mono">Biaya Layanan</span>
                        <span className="font-mono">IDR 25.000</span>
                      </div>
                      <div className="h-[1px] w-full bg-foreground/10" />
                      <div className="flex justify-between items-center text-xl">
                        <span className="text-editorial">Total</span>
                        <span className="text-editorial text-maroon">IDR 475.000</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={completePurchase}
                    className="w-full py-5 bg-foreground text-background font-mono text-xs uppercase tracking-widest rounded-2xl hover:bg-white transition-colors"
                  >
                    Konfirmasi & Beli
                  </button>
                  <p className="text-center text-[10px] opacity-30 mt-6 uppercase tracking-tighter">
                    Transaksi dienkripsi dengan protokol SSL 256-bit.
                  </p>
                </div>
              ) : (
                <div className="text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <CheckCircle2 size={40} className="text-green-500" />
                  </motion.div>
                  <h3 className="text-3xl text-editorial mb-4">Transmisi Berhasil</h3>
                  <p className="text-sm opacity-60 font-mono mb-8 px-10">
                    Tiket digital untuk {selectedGig.city} telah masuk dalam antrean pengiriman. Silakan periksa surel terenkripsi Anda segera.
                  </p>
                  <p className="text-technical opacity-40">MENUTUP OTOMATIS DALAM 3 dtk...</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// End of file
