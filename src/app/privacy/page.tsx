import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-40">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <span className="text-technical text-maroon mb-4 block">Data Protocol</span>
        <h1 className="text-5xl md:text-7xl text-editorial mb-12">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-maroon max-w-none space-y-10 opacity-80 font-light">
          <section>
            <h2 className="text-2xl text-editorial opacity-100 mb-4">1. Information Collection</h2>
            <p>
              We collect minimal technical data required to maintain the immersive experience. This includes session duration, interaction heatmaps, and terminal preferences. We do not harvest emotional data without explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-editorial opacity-100 mb-4">2. Cookies & Tracking</h2>
            <p>
              Small data fragments (Cookies) are used to store your preference for "Mute/Unmute" states and cart contents. These fragments expire after 7 cycles of the moon.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-editorial opacity-100 mb-4">3. Third Party Encryption</h2>
            <p>
              Payment processing is handled via external encrypted gateways (Stripe/PayPal). Your financial data never enters the HINDIA local database.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-editorial opacity-100 mb-4">4. Your Rights</h2>
            <p>
              You have the right to request a complete purge of your digital footprint from our servers. Contact sys-admin@hindia.com for manual extraction.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
