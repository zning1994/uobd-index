'use client';

import { useState, useMemo } from 'react';
import { HeroSection } from '@/components/hero-section';
import { CategoryGrid } from '@/components/category-grid';
import { QuickStats } from '@/components/quick-stats';
import { FeaturedLinks } from '@/components/featured-links';
import linksData from '@/data/links.json';

export default function HomePage() {
  const { categories } = linksData;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showDubaiOnly, setShowDubaiOnly] = useState(false);

  // Get all links for Quick Access
  const allLinks = categories.flatMap(category => 
    category.links.map(link => ({ ...link, category: category.title }))
  );

  // Filter links based on search criteria
  const filteredLinks = useMemo(() => {
    let filtered = allLinks;

    // Text search
    if (searchQuery.trim()) {
      const searchTerm = searchQuery.toLowerCase();
      filtered = filtered.filter(link => 
        link.title.toLowerCase().includes(searchTerm) ||
        link.description.toLowerCase().includes(searchTerm) ||
        link.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        link.category.toLowerCase().includes(searchTerm)
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(link => link.category === selectedCategory);
    }

    // Dubai-specific filter
    if (showDubaiOnly) {
      filtered = filtered.filter(link => link.isDubaiSpecific);
    }

    return filtered;
  }, [allLinks, searchQuery, selectedCategory, showDubaiOnly]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showDubaiOnly={showDubaiOnly}
        setShowDubaiOnly={setShowDubaiOnly}
        categories={categories.map(cat => cat.title)}
        resultCount={filteredLinks.length}
        totalCount={allLinks.length}
      />
      
      {/* Quick Stats */}
      {/* <QuickStats data={linksData.metadata} /> */}
      
      {/* Featured Links */}
      <FeaturedLinks links={filteredLinks} />
      
      {/* Category Grid */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find all the important links and resources organized by category for easy access.
            </p>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section> */}
    </div>
  );
}

// Metadata is handled in layout.tsx for client components
