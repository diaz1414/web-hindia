"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Tour", href: "/#tour" },
  { name: "Store", href: "/#store" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-3",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-full w-full max-w-md"
            : "bg-transparent w-full max-w-7xl"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-editorial text-xl tracking-tighter">HINDIA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-technical hover:opacity-100 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-foreground/5 rounded-full transition-colors">
            <ShoppingBag size={18} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-maroon rounded-full" />
          </button>

          <button
            className="md:hidden p-2 relative z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-[100] md:hidden flex flex-col p-8 pt-32 pointer-events-auto"
          >
            <div className="grain-overlay opacity-10" />
            
            <div className="flex flex-col gap-4 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="text-technical text-[10px] opacity-30 font-mono italic">0{i + 1}</span>
                    <span className="text-editorial text-7xl tracking-tighter group-hover:text-maroon transition-colors uppercase leading-none">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer metadata for Mobile Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pt-8 border-t border-foreground/10 flex justify-between items-end"
            >
              <div className="space-y-1">
                <p className="text-technical text-[8px] opacity-40 uppercase tracking-widest">Coordinates</p>
                <p className="text-technical text-[10px] uppercase">-6.2088° S, 106.8456° E</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-technical text-[8px] opacity-40 uppercase tracking-widest">Local Time</p>
                <p className="text-technical text-[10px] uppercase font-mono">
                  {new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} WIB
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
