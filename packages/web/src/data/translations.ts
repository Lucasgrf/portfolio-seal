export const translations = {
    en: {
        nav: {
            work: 'Work',
            about: 'About',
            services: 'Services',
            contact: 'Contact',
        },
        hero: {
            role1: 'SOFTWARE',
            role2: 'ENGINEER',
            description: 'Software Engineering student focused on Backend Development with Java, Spring Boot, and Clean Architecture. Building scalable solutions and evolving with agile methodologies.',
            cta: 'See Selected Work',
            scroll: 'Scroll',
        },
        about: {
            title: 'About Me',
            bio1: 'I am a Software Engineering student with experience in Java backend development, building desktop systems and APIs, applying Clean Architecture, SOLID, and design patterns.',
            bio2: 'I have experience with Spring Boot, relational and NoSQL databases, GitFlow, CI/CD, and agile methodologies (Scrum/Kanban). I am looking for an internship to apply my knowledge in backend development, contribute to scalable solutions, and evolve in collaborative teams oriented towards engineering best practices.',
            techStack: 'Tech Stack:',
        },
        services: {
            title: 'My Services',
            items: [
                {
                    title: 'Backend Development',
                    description: 'Building robust and scalable server-side applications using Java, Spring Boot, and Node.js. Focus on performance, security, and clean code.',
                    icon: 'backend'
                },
                {
                    title: 'Database Design',
                    description: 'Designing efficient database schemas and managing data integrity with PostgreSQL, MySQL, and MongoDB. Optimization for high-performance queries.',
                    icon: 'database'
                },
                {
                    title: 'System Architecture',
                    description: 'Planning and implementing scalable system architectures using Clean Architecture principles, Microservices, and cloud-ready solutions.',
                    icon: 'architecture'
                }
            ]
        },
        showcase: {
            title: 'Selected Work',

            projects: [
                { id: 1, title: 'Loans App', category: 'Java / Spring Boot / JavaFX', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop' },
                { id: 2, title: 'Game Strategy with Algorithms Sort', category: 'Java / Algorithms / CLI', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop' },
                { id: 3, title: 'App Management Hospital(MVP)', category: 'JavaFX / PostgreSQL', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2828&auto=format&fit=crop' },
                { id: 4, title: 'Not-To-Do Tracker', category: 'Java / MongoDB', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop' }
            ]
        },
        contact: {
            title: "Let's work together",
            emailLabel: 'Email',
            githubLabel: 'GitHub',
            linkedinLabel: 'LinkedIn',
        },
        footer: {
            rights: 'All rights reserved.',
        }
    },
    pt: {
        nav: {
            work: 'Projetos',
            about: 'Sobre',
            services: 'Serviços',
            contact: 'Contato',
        },
        hero: {
            role1: 'ENGENHEIRO DE',
            role2: 'SOFTWARE',
            description: 'Estudante de Engenharia de Software focado em Desenvolvimento Backend com Java, Spring Boot e Clean Architecture. Construindo soluções escaláveis e evoluindo com metodologias ágeis.',
            cta: 'Ver Projetos',
            scroll: 'Rolar',
        },
        about: {
            title: 'Sobre Mim',
            bio1: 'Sou estudante de Engenharia de Software com experiência em desenvolvimento backend Java, construindo sistemas desktop e APIs, aplicando Clean Architecture, SOLID e padrões de projeto.',
            bio2: 'Tenho experiência com Spring Boot, bancos de dados relacionais e NoSQL, GitFlow, CI/CD e metodologias ágeis (Scrum/Kanban). Busco um estágio para aplicar meu conhecimento em desenvolvimento backend, contribuir para soluções escaláveis e evoluir em equipes colaborativas orientadas às melhores práticas de engenharia.',
            techStack: 'Tech Stack:',
        },
        services: {
            title: 'Meus Serviços',
            items: [
                {
                    title: 'Desenvolvimento Backend',
                    description: 'Construção de aplicações robustas e escaláveis usando Java, Spring Boot e Node.js. Foco em performance, segurança e código limpo.',
                    icon: 'backend'
                },
                {
                    title: 'Design de Banco de Dados',
                    description: 'Modelagem de esquemas eficientes e gestão de integridade de dados com PostgreSQL, MySQL e MongoDB. Otimização para consultas de alta performance.',
                    icon: 'database'
                },
                {
                    title: 'Arquitetura de Sistemas',
                    description: 'Planejamento e implementação de arquiteturas escaláveis usando princípios de Clean Architecture, Microsserviços e soluções prontas para nuvem.',
                    icon: 'architecture'
                }
            ]
        },
        showcase: {
            title: 'Projetos Selecionados',

            projects: [
                { id: 1, title: 'App de Empréstimos', category: 'Java / Spring Boot / JavaFX', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop' },
                { id: 2, title: 'Estratégia de Jogo com Algoritmos', category: 'Java / Algoritmos / CLI', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop' },
                { id: 3, title: 'Gestão Hospitalar (MVP)', category: 'JavaFX / PostgreSQL', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2828&auto=format&fit=crop' },
                { id: 4, title: 'Rastreador de Tarefas', category: 'Java / MongoDB', image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop' }
            ]
        },
        contact: {
            title: 'Vamos trabalhar juntos',
            emailLabel: 'Email',
            githubLabel: 'GitHub',
            linkedinLabel: 'LinkedIn',
        },
        footer: {
            rights: 'Todos os direitos reservados.',
        }
    }
};

export type Language = 'en' | 'pt';
