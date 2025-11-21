import { Reveal } from './Reveal';

export const About = () => {
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
                                I am a Software Engineering student with experience in Java backend development, building desktop systems and APIs, applying Clean Architecture, SOLID, and design patterns.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                I have experience with Spring Boot, relational and NoSQL databases, GitFlow, CI/CD, and agile methodologies (Scrum/Kanban). I am looking for an internship to apply my knowledge in backend development, contribute to scalable solutions, and evolve in collaborative teams oriented towards engineering best practices.
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed mt-6">
                                <strong>Tech Stack:</strong> Java, Python, SQL, JavaScript, Spring Boot, JavaFX, JPA/Hibernate, Swing, Maven, JUnit, Mockito, MySQL, PostgreSQL, MongoDB, Docker.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
