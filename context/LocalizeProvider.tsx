'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

interface LocalizationContextProps {
    locale: string;
    switchLocale: (newLocale: string) => void;
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(undefined);

interface LocalizationProviderProps {
    children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
    const [locale, setLocale] = useState('ar');

    const switchLocale = (newLocale: string) => {
        setLocale(newLocale);
        localStorage.setItem('local', newLocale)
    };

    return (
        <LocalizationContext.Provider value={{ locale, switchLocale }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = (): LocalizationContextProps => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};
