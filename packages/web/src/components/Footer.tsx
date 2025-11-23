import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-zinc-600 text-sm">
                    © {new Date().getFullYear()} Lucas Rocha. {t.footer.rights}
                </p>
            </div>
        </footer>
    );
};
