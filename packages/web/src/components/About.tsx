import { Reveal } from './Reveal';
import profileImage from '../assets/profile.png';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-12 md:mb-16">{t.about.title}</h2>
                </Reveal>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
                    <div className="md:w-5/12 lg:w-1/3 shrink-0">
                        <Reveal>
                            <div className="w-full aspect-[3/4] md:aspect-auto md:h-full relative rounded-lg overflow-hidden group">
                                <img
                                    src={profileImage}
                                    alt="Lucas Gabriel"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </Reveal>
                    </div>

                    <div className="md:w-7/12 lg:w-2/3 flex flex-col justify-center gap-12 py-2">
                        <Reveal delay={0.2}>
                            <p className="text-2xl md:text-3xl font-medium leading-tight text-zinc-200">
                                {t.about.bio1}
                            </p>
                        </Reveal>

                        <div className="flex flex-col gap-6 mt-8 md:mt-0">
                            <Reveal delay={0.3}>
                                <p className="text-lg text-zinc-400 leading-relaxed">
                                    {t.about.bio2}
                                </p>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg text-zinc-200 font-bold mb-4">{t.about.techStack}</h3>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Languages</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {[
                                                        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                                                        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                                                        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                                                        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                                                        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }, // Using MySQL icon for generic SQL representation or just skip generic SQL
                                                    ].map((tech, index) => (
                                                        <div key={tech.name} className="group relative flex items-center justify-center p-3 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all duration-300">
                                                            <img src={tech.icon} alt={tech.name} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />

                                                            {/* Custom Tooltip */}
                                                            <div className={`absolute bottom-full mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 border border-white/10 shadow-xl ${index === 0 ? 'left-0' : 'left-1/2 -translate-x-1/2'}`}>
                                                                {tech.name}
                                                                <div className={`absolute top-full border-4 border-transparent border-t-zinc-800 ${index === 0 ? 'left-7 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Frameworks</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {[
                                                        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
                                                        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                                                        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                                                        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                                                        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                                                    ].map((tech, index) => (
                                                        <div key={tech.name} className="group relative flex items-center justify-center p-3 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all duration-300">
                                                            <img src={tech.icon} alt={tech.name} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />

                                                            {/* Custom Tooltip */}
                                                            <div className={`absolute bottom-full mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 border border-white/10 shadow-xl ${index === 0 ? 'left-0' : 'left-1/2 -translate-x-1/2'}`}>
                                                                {tech.name}
                                                                <div className={`absolute top-full border-4 border-transparent border-t-zinc-800 ${index === 0 ? 'left-7 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Tools & Databases</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {[
                                                        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                                                        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                                                        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                                                        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                                                        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                                                    ].map((tech, index) => (
                                                        <div key={tech.name} className="group relative flex items-center justify-center p-3 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-emerald-500/50 hover:bg-zinc-800 transition-all duration-300">
                                                            <img src={tech.icon} alt={tech.name} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />

                                                            {/* Custom Tooltip */}
                                                            <div className={`absolute bottom-full mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 border border-white/10 shadow-xl ${index === 0 ? 'left-0' : 'left-1/2 -translate-x-1/2'}`}>
                                                                {tech.name}
                                                                <div className={`absolute top-full border-4 border-transparent border-t-zinc-800 ${index === 0 ? 'left-7 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
