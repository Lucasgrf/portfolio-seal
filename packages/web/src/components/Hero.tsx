import { motion, useScroll, useTransform, type Transition } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CodeWindow } from './CodeWindow';

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

export const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const { t } = useLanguage();

    return (
        <section className="h-[100dvh] w-full flex flex-col justify-center overflow-hidden relative pt-20">
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div style={{ y }} className="flex flex-col gap-2" variants={staggerContainer} initial="initial" animate="animate">
                        <div className="overflow-hidden">
                            <motion.h1 variants={fadeInUp} transition={transition} className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-white leading-[0.9]">
                                {t.hero.role1}
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                variants={fadeInUp}
                                transition={transition}
                                className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 animate-text-gradient"
                            >
                                {t.hero.role2}
                            </motion.h1>
                        </div>


                        <motion.div variants={fadeInUp} transition={{ ...transition, delay: 0.5 }} className="mt-8 max-w-lg text-zinc-400 text-lg md:text-xl leading-relaxed">
                            <p>{t.hero.description}</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} transition={{ ...transition, delay: 0.7 }} className="mt-8">
                            <button
                                onClick={() => {
                                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
                            >
                                {t.hero.cta} <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </button>
                        </motion.div>
                    </motion.div>

                    <div className="hidden lg:flex justify-center items-center perspective-1000">
                        <CodeWindow />
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">{t.hero.scroll}</span>
            </motion.div>
        </section>
    );
};
