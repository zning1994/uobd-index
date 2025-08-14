'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, MapPin } from 'lucide-react';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search query:', searchQuery);
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
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Your curated gateway to essential UoB services, academic resources, 
            and Dubai campus-specific information. Everything you need, organized and accessible.
          </motion.p>

          {/* Search Box */}
          {/* <motion.div
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
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-uob-primary focus:border-transparent transition-all duration-200 shadow-lg"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-6 bg-uob-primary text-white rounded-lg hover:bg-uob-primary/90 transition-colors font-medium"
              >
                Search
              </motion.button>
            </form>
          </motion.div> */}

          {/* Quick Access Pills */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {['MyUoB', 'Canvas', 'Dubai Timetables', 'IT Support'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
