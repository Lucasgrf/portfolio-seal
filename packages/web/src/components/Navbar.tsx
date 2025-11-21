import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const transition: Transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] as const };

export const Navbar = () => {
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
                    LUCAS ROCHA<span className="text-emerald-400">.</span>
                </div>

                <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    {['Work', 'About', 'Services', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                            {item}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 text-white p-2"
                    aria-label="Toggle menu"
                >
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
