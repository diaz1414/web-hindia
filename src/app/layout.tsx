import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HINDIA | Official Portfolio",
  description: "Experience the immersive world of HINDIA. Retro-modern aesthetic, cinematic soundscapes.",
};

import { StoreProvider } from "@/context/StoreContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${serif.variable} ${mono.variable} antialiased bg-background text-foreground`}
      >
        <StoreProvider>
          <div className="grain-overlay" />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
