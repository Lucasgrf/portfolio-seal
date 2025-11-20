import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence, type Transition } from 'framer-motion';
import { Menu, X, ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const PROJECTS: Project[] = [
  { id: 1, title: 'Nebula Dashboard', category: 'Fintech / UX', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
  { id: 2, title: 'Aura Identity', category: 'Branding / WebGL', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop' },
  { id: 3, title: 'Kinetic Commerce', category: 'E-commerce / 3D', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop' },
  { id: 4, title: 'Echo Audio', category: 'Product / Sound', image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2340&auto=format&fit=crop' }
];

const transition: Transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] as const };

const fadeInUp = {
  initial: { y: 80, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Reveal = ({
  children,
  width = 'fit-content',
  delay = 0
}: {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-75px' });

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-white z-50">
          JOHN DOE<span className="text-emerald-400">.</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          {['Work', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={transition}
              className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {['Work', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-zinc-300 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="h-[100dvh] w-full flex flex-col justify-center overflow-hidden relative bg-zinc-950 pt-40">
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div style={{ y }} className="flex flex-col gap-2" variants={staggerContainer} initial="initial" animate="animate">
          <div className="overflow-hidden">
            <motion.h1 variants={fadeInUp} transition={transition} className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
              DIGITAL
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 variants={fadeInUp} transition={transition} className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-zinc-500 leading-[0.9]">
              EXPERIENCE
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 variants={fadeInUp} transition={transition} className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
              DESIGNER
            </motion.h1>
          </div>

          <motion.div variants={fadeInUp} transition={{ ...transition, delay: 0.5 }} className="mt-8 max-w-lg text-zinc-400 text-lg md:text-xl leading-relaxed">
            <p>I help brands stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.</p>
          </motion.div>

          <motion.div variants={fadeInUp} transition={{ ...transition, delay: 0.7 }} className="mt-8">
            <button className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
              See Selected Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/3">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">About Me</h2>
              <div className="w-full h-[400px] bg-zinc-900 rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600">[Portrait Placeholder]</div>
              </div>
            </Reveal>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center gap-8">
            <Reveal delay={0.2}>
              <p className="text-2xl md:text-3xl font-medium leading-tight text-zinc-200">
                I am a creative developer based in the digital cloud. I combine code and design to build immersive web experiences.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mt-6">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  return (
    <section id="work" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Selected Work</h2>
            <span className="hidden md:block text-zinc-500">2021 - 2024</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index % 2 === 0 ? 0 : 0.2}>
              <div className="group cursor-pointer">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-zinc-900">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />

                  <div className="absolute bottom-6 right-6 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-white text-black p-4 rounded-full">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl text-white font-medium tracking-tight group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-sm uppercase tracking-widest">{project.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12">Let's work together</h2>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="mailto:hello@example.com"
              className="text-2xl md:text-4xl text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-2 mb-16 inline-block"
            >
              hello@johndoe.dev
            </a>
          </Reveal>

          <div className="flex gap-8">
            <Reveal delay={0.3}>
              <div className="flex gap-4">
                {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 rounded-full bg-zinc-900 text-white hover:bg-white hover:text-black transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-600 text-sm">Copyright 2024 John Doe. All rights reserved.</p>
        <p className="text-zinc-600 text-sm flex items-center gap-1">Designed & Built with love.</p>
      </div>
    </footer>
  );
};

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
