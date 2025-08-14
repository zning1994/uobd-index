'use client';

import { motion } from 'framer-motion';
import { Search, Sparkles, MapPin, X, Filter } from 'lucide-react';
import { useI18n } from './i18n-provider';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  showDubaiOnly: boolean;
  setShowDubaiOnly: (show: boolean) => void;
  categories: string[];
  resultCount: number;
  totalCount: number;
}

export function HeroSection({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  showDubaiOnly,
  setShowDubaiOnly,
  categories,
  resultCount,
  totalCount
}: HeroSectionProps) {
  const { t } = useI18n();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by parent component through state
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setShowDubaiOnly(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-uob-primary/5 via-background to-uob-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Simplified floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 right-16 w-2 h-2 bg-uob-primary/10 rounded-full" />
        <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-uob-secondary/10 rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
          >
            {t('hero.title').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-uob-primary to-uob-secondary bg-clip-text text-transparent">
              {t('hero.title').split(' ').slice(-1)}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-muted-foreground mb-4 leading-relaxed"
          >
            {t('hero.subtitle')}
            </motion.p>

          {/* Search Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground mb-4"
          >
            {searchQuery || selectedCategory || showDubaiOnly ? (
              <span>{t('hero.showing')} {resultCount} {t('hero.of')} {totalCount} {t('hero.links')}</span>
            ) : (
              <span>{t('hero.browseAll')} {totalCount} {t('hero.links')}</span>
            )}
          </motion.div>

          {/* Search Box with Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Search Box */}
              <form onSubmit={handleSearch} className="flex-1 min-w-0">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('hero.searchPlaceholder')}
                    className="w-full pl-12 pr-12 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-uob-primary focus:border-transparent transition-all duration-200"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </form>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 items-center">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-uob-primary min-w-[140px]"
                >
                  <option value="">{t('hero.allCategories')}</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Clear Filters */}
                {(searchQuery || selectedCategory || showDubaiOnly) && (
                  <button
                    onClick={clearFilters}
                    className="px-3 py-3 text-sm text-uob-primary hover:text-uob-primary/80 transition-colors border border-uob-primary/20 rounded-lg hover:bg-uob-primary/5"
                  >
                    {t('hero.clear')}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
