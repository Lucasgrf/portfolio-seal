import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Showcase } from './components/Showcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StarBackground } from './components/StarBackground';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-zinc-950 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 font-sans relative">
        <StarBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Showcase />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
