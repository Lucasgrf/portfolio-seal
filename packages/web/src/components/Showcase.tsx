import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
}

const PROJECTS: Project[] = [
    { id: 1, title: 'Loans App', category: 'Java / Spring Boot / JavaFX', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop' },
    { id: 2, title: 'Game Strategy with Algorithms Sort', category: 'Java / Algorithms / CLI', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop' },
    { id: 3, title: 'App Management Hospital(MVP)', category: 'JavaFX / PostgreSQL', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2828&auto=format&fit=crop' },
    { id: 4, title: 'Not-To-Do Tracker', category: 'Java / MongoDB', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop' }
];

export const Showcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play carousel with pause functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % PROJECTS.length);
        }, 8000); // Change every 8 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    // Resume auto-play after 30 seconds of pause
    useEffect(() => {
        if (!isPaused) return;

        const timeout = setTimeout(() => {
            setIsPaused(false);
        }, 30000); // Resume after 30 seconds

        return () => clearTimeout(timeout);
    }, [isPaused]);

    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index);
        setIsPaused(true); // Pause auto-play
    };

    const handlePrevious = () => {
        setActiveIndex((current) => (current - 1 + PROJECTS.length) % PROJECTS.length);
        setIsPaused(true); // Pause auto-play
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % PROJECTS.length);
        setIsPaused(true); // Pause auto-play
    };

    const activeProject = PROJECTS[activeIndex];

    return (
        <section id="work" className="py-32 bg-zinc-950">
            <div className="container mx-auto px-6">
                <Reveal>
                    <div className="flex items-end justify-between mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Selected Work</h2>
                        <span className="hidden md:block text-zinc-500">2021 - 2024</span>
                    </div>
                </Reveal>

                {/* Split View Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side - Thumbnails Grid */}
                    <div className="lg:col-span-4">
                        <div className="grid grid-cols-2 gap-4">
                            {PROJECTS.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer ${index === activeIndex ? 'ring-2 ring-emerald-500' : ''
                                        }`}
                                    onClick={() => handleThumbnailClick(index)}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={`absolute inset-0 transition-colors duration-300 z-10 ${index === activeIndex ? 'bg-transparent' : 'bg-black/50'
                                        }`} />

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Active Indicator */}
                                    {index === activeIndex && (
                                        <motion.div
                                            className="absolute inset-0 border-2 border-emerald-500 rounded-lg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4 mt-6 justify-center">
                            <button
                                onClick={handlePrevious}
                                className="p-3 rounded-full bg-zinc-800 text-white hover:bg-emerald-500 transition-colors"
                                aria-label="Previous project"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full bg-zinc-800 text-white hover:bg-emerald-500 transition-colors"
                                aria-label="Next project"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Large Display */}
                    <div className="lg:col-span-8">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            {/* Large Project Image */}
                            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-zinc-900 mb-6">
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            </div>

                            {/* Project Details */}
                            <div className="space-y-4">
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                                >
                                    {activeProject.title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-emerald-400 text-sm uppercase tracking-widest"
                                >
                                    {activeProject.category}
                                </motion.p>

                                {/* Progress Indicator */}
                                <div className="flex gap-2 mt-6">
                                    {PROJECTS.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex
                                                ? 'bg-emerald-500 flex-1'
                                                : 'bg-zinc-700 w-8'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
