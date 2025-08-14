'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, getCurrentLocale, setCurrentLocale, getTranslation, defaultLocale, type Translations } from '@/lib/i18n';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Translations) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocale(getCurrentLocale());
    setMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    setCurrentLocale(newLocale);
  };

  const t = (key: keyof Translations): string => {
    return getTranslation(locale, key);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="min-h-screen" />;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
