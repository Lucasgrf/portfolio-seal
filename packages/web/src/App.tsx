import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Showcase } from './components/Showcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
