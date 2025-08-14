'use client';

import { motion } from 'framer-motion';
import { Search, Sparkles, MapPin, X, Filter } from 'lucide-react';

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
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-2 h-2 bg-uob-primary/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute top-40 right-20 w-3 h-3 bg-uob-secondary/30 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 10
          }}
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-uob-accent/25 rounded-full"
        />
      </div>

      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-uob-primary/10 text-uob-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>University of Birmingham Dubai</span>
            <MapPin className="h-4 w-4" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
          >
            Important{' '}
            <span className="bg-gradient-to-r from-uob-primary to-uob-secondary bg-clip-text text-transparent">
              Websites
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Your curated gateway to essential UoB services, academic resources, 
            and Dubai campus-specific information. Everything you need, organized and accessible.
          </motion.p>

          {/* Search Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-muted-foreground mb-8"
          >
            {searchQuery || selectedCategory || showDubaiOnly ? (
              <span>Showing {resultCount} of {totalCount} links</span>
            ) : (
              <span>Browse all {totalCount} important links</span>
            )}
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for links, services, or categories..."
                  className="w-full pl-12 pr-12 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-uob-primary focus:border-transparent transition-all duration-200 shadow-lg"
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
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 items-center mt-8"
          >
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter:</span>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-uob-primary"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Dubai Filter */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showDubaiOnly}
                onChange={(e) => setShowDubaiOnly(e.target.checked)}
                className="rounded border-border text-uob-primary focus:ring-uob-primary"
              />
              <span className="text-sm text-muted-foreground">Dubai Only</span>
            </label>

            {/* Clear Filters */}
            {(searchQuery || selectedCategory || showDubaiOnly) && (
              <button
                onClick={clearFilters}
                className="text-sm text-uob-primary hover:text-uob-primary/80 transition-colors"
              >
                Clear All
              </button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
