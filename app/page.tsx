import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}