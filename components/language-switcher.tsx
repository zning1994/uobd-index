'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useI18n } from './i18n-provider';
import { locales, type Locale } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const localeNames: Record<Locale, string> = {
    en: 'English',
    zh: '中文',
  };

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-1 p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{localeNames[locale]}</span>
      </motion.button>
      
      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 py-2 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[80px] z-50">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => setLocale(loc)}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors ${
              locale === loc ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
            }`}
          >
            {localeNames[loc]}
          </button>
        ))}
      </div>
    </div>
  );
}
