import { Github, Linkedin, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <Reveal>
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12">Let's work together</h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <a
                            href="mailto:lucasgabrielrf.contato@gmail.com"
                            className="text-2xl md:text-4xl text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-2 mb-16 inline-block"
                        >
                            lucasgabrielrf.contato@gmail.com
                        </a>
                    </Reveal>

                    <div className="flex gap-8">
                        <Reveal delay={0.3}>
                            <div className="flex gap-4">
                                {[
                                    { Icon: Github, label: 'GitHub', href: 'https://github.com/lucasgrf' },
                                    { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucasgrf' },
                                    { Icon: Mail, label: 'Email', href: 'mailto:lucasgabrielrf.contato@gmail.com' }
                                ].map(({ Icon, label, href }, i) => (
                                    <a
                                        key={i}
                                        href={href}
                                        className="p-3 rounded-full bg-zinc-900 text-white hover:bg-white hover:text-black transition-all duration-300"
                                        aria-label={label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
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
