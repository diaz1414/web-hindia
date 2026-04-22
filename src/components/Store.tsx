"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Plus, Eye } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { cn } from "@/lib/utils";

const products = [
  {
    id: "p1",
    name: "HC OVERSIZED HOODIE",
    price: 649000,
    images: ["/merch_hoodie.png", "/album_1.png"],
    category: "Pakaian",
    description: "Hoodie oversized katun berat premium. Cetakan marun di bagian depan."
  },
  {
    id: "p2",
    name: "PROTO-TYPE VINYL",
    price: 599000,
    images: ["/album_1.png", "/scrapbook_1.png"],
    category: "Musik",
    description: "Vinyl 12 inci edisi terbatas. Wax marun transparan."
  },
  {
    id: "p3",
    name: "STUDIO LOGO TEE",
    price: 349000,
    images: ["/scrapbook_2.png", "/merch_hoodie.png"],
    category: "Pakaian",
    description: "Kaos studio box esensial. Detail teknis yang mendalam."
  },
  {
    id: "p4",
    name: "DOCUMENTARY POSTER SET",
    price: 199000,
    images: ["/scrapbook_1.png", "/scrapbook_2.png"],
    category: "Lainnya",
    description: "Set isi 5 cetakan A3 berkualitas tinggi pada kertas bertekstur."
  },
];

export default function Store() {
  const { addToCart } = useStore();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="store" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-technical text-maroon mb-4 block uppercase tracking-widest">Arsip Fisik</span>
            <h2 className="text-5xl md:text-8xl text-editorial uppercase">Store</h2>
          </div>
          <div className="text-right">
            <p className="text-technical opacity-40 uppercase">Pengiriman Diproses</p>
            <p className="text-2xl font-mono">02 / MGG</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-foreground/5 doc-border mb-6">
                {/* Product Images */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-700 grayscale",
                    hoveredProduct === product.id ? "opacity-0" : "opacity-100"
                  )}
                />
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  )}
                />

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button
                    onClick={() => addToCart({ ...product, image: product.images[0] })}
                    className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <Plus size={20} />
                  </button>
                  <button className="p-4 bg-background border border-foreground/10 rounded-full hover:scale-110 transition-transform">
                    <Eye size={20} />
                  </button>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono px-2 py-1 bg-background/80 backdrop-blur-md rounded-md border border-foreground/10">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl text-editorial tracking-tight">{product.name}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-mono opacity-60">
                    IDR {mounted ? product.price.toLocaleString("id-ID") : "---"}
                  </p>
                  <div className="h-[1px] flex-1 mx-4 bg-foreground/5" />
                  <span className="text-[10px] font-mono opacity-20 uppercase">Stok: Menipis</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
