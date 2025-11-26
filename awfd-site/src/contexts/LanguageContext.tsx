import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { getTranslation } from '../data/translations';

export type Language = 'en' | 'pt';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    translations: ReturnType<typeof getTranslation>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>('en');
    const translations = getTranslation(language);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
