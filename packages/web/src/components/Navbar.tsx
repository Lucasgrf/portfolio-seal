import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const transition: Transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] as const };

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, toggleLanguage, language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: t.nav.work, href: '#work' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.services, href: '#services' },
        { label: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="text-xl font-bold tracking-tighter text-white z-50">
                    LUCAS FERREIRA<span className="text-emerald-400">.</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8 text-sm font-medium text-zinc-400">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="hover:text-white transition-colors duration-300">
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <motion.button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-emerald-500/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ rotate: language === 'en' ? 0 : 180 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Globe size={16} />
                        </motion.div>
                        <span className="text-xs font-medium uppercase w-4 text-center">{language}</span>
                    </motion.button>
                </div>

                <div className="flex items-center gap-4 md:hidden z-50">
                    <motion.button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ rotate: language === 'en' ? 0 : 180 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Globe size={20} />
                        </motion.div>
                    </motion.button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: '-100%' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '-100%' }}
                            transition={transition}
                            className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-bold tracking-tighter text-zinc-300 hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
