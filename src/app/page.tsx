import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Discography from "@/components/Discography";
import Tour from "@/components/Tour";
import Store from "@/components/Store";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen overflow-x-hidden">
      <Preloader />
      <Navbar />
      
      <Hero />

      <div className="relative z-20 bg-background">
        <About />
        <Discography />
        <Tour />
        <Store />
        <Footer />
      </div>

      {/* Background technical elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-foreground/[0.02]" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-foreground/[0.02]" />
      </div>
    </main>
  );
}
