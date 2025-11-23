import { Server, Database, Layers } from 'lucide-react';
import { Reveal } from './Reveal';
import { useLanguage } from '../context/LanguageContext';

export const Services = () => {
    const { t } = useLanguage();

    const icons = {
        backend: Server,
        database: Database,
        architecture: Layers,
    };

    return (
        <section id="services" className="py-32 relative">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-16 text-center">
                        {t.services.title}
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.services.items.map((service, index) => {
                        const Icon = icons[service.icon as keyof typeof icons];

                        return (
                            <Reveal key={index} delay={index * 0.2}>
                                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group h-full">
                                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-emerald-500/10">
                                        <Icon className="text-emerald-400" size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-zinc-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
