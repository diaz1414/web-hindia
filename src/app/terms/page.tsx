import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-40">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <span className="text-technical text-maroon mb-4 block">Legal Document</span>
        <h1 className="text-5xl md:text-7xl text-editorial mb-12">Terms of Service</h1>
        
        <div className="prose prose-invert prose-maroon max-w-none space-y-10 opacity-80 font-light">
          <section>
            <h2 className="text-2xl text-editorial opacity-100 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing the HINDIA digital environment, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. This document constitutes a technical agreement between the User and Technical Solutions Ltd.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-editorial opacity-100 mb-4">2. Digital Content</h2>
            <p>
              All audio, visual, and technical data presented on this platform are protected under international intellectual property protocols. Unauthorized reproduction, modification, or distribution of "HINDIA" assets will trigger automated legal response systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-editorial opacity-100 mb-4">3. E-Commerce & Tickets</h2>
            <p>
              Merchandise and ticket purchases are finalized upon cryptographic confirmation. HINDIA is not responsible for emotional fluctuations caused by high-fidelity audio output. Tickets are non-transferable unless explicitly stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-editorial opacity-100 mb-4">4. Limitation of Liability</h2>
            <p>
              Technical Solutions Ltd shall not be liable for any indirect, incidental, or sensory damages arising from your use of the platform. The "HINDIA" experience is provided "as is" with all its intentional flaws and distortions.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
