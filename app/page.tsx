'use client';

import { useState, useMemo } from 'react';
import { HeroSection } from '@/components/hero-section';
import { FeaturedLinks } from '@/components/featured-links';
import { CategorizedLinks } from '@/components/categorized-links';
import linksData from '@/data/links.json';
import i18nMap from '@/data/links.i18n.json';
import { useI18n } from '@/components/i18n-provider';

export default function HomePage() {
  const { categories: rawCategories } = linksData;
  const { locale } = useI18n();
  const i18n: any = (i18nMap as any)[locale] || {};
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showDubaiOnly, setShowDubaiOnly] = useState(false);

  // Prepare categories with localized content
  const categories = useMemo(() => {
    return rawCategories.map(cat => {
      const localizedCat = i18n.categories?.[cat.id] || {};
      return {
        ...cat,
        title: localizedCat.title || cat.title,
        description: localizedCat.description || cat.description,
        links: cat.links.map(link => {
          const localizedLink = i18n.links?.[link.id] || {};
          return {
            ...link,
            title: localizedLink.title || link.title,
            description: localizedLink.description || link.description,
            tags: localizedLink.tags || link.tags,
          };
        }),
      };
    });
  }, [rawCategories, i18n]);

  // Get all links for search/filter (flat list)
  const allLinks = useMemo(() => {
    return categories.flatMap(category => 
      category.links.map(link => ({
        ...link,
        category: category.title,
      }))
    );
  }, [categories]);

  // Filter links based on search criteria
  const filteredLinks = useMemo(() => {
    let filtered = allLinks;

    // Text search
    if (searchQuery.trim()) {
      const term = searchQuery.toLowerCase();
      filtered = filtered.filter(link => {
        const englishSource = linksData.categories
          .flatMap(c => c.links)
          .find(l => l.id === link.id);
        const zhSource = (i18nMap as any).zh?.links?.[link.id] || null;
        const arSource = (i18nMap as any).ar?.links?.[link.id] || null;

        const fields = [
          link.title,
          link.description,
          link.category,
          englishSource?.title,
          englishSource?.description,
          ...(englishSource?.tags || []),
          zhSource?.title,
          zhSource?.description,
          ...(zhSource?.tags || []),
          arSource?.title,
          arSource?.description,
          ...(arSource?.tags || []),
        ];

        return fields.some(f => (f || '').toString().toLowerCase().includes(term));
      });
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

  // Check if search is active (text search always shows flat list)
  const isSearching = searchQuery.trim() !== '';

  // Filter categories for display (when using category filter or dubai filter)
  const displayCategories = useMemo(() => {
    if (!selectedCategory && !showDubaiOnly) return categories;
    
    return categories.filter(cat => {
      if (selectedCategory && cat.title !== selectedCategory) return false;
      if (showDubaiOnly) {
        return cat.links.some(link => link.isDubaiSpecific);
      }
      return true;
    }).map(cat => ({
      ...cat,
      links: showDubaiOnly 
        ? cat.links.filter(link => link.isDubaiSpecific)
        : cat.links,
    }));
  }, [categories, selectedCategory, showDubaiOnly]);

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
        resultCount={isSearching ? filteredLinks.length : displayCategories.reduce((sum, cat) => sum + cat.links.length, 0)}
        totalCount={allLinks.length}
      />
      
      {/* Links Display */}
      {isSearching ? (
        // When text searching: show flat list of results
        <FeaturedLinks links={filteredLinks} />
      ) : (
        // Otherwise: show categorized view (with optional category/dubai filter applied)
        <CategorizedLinks categories={displayCategories} />
      )}
    </div>
  );
}

// Metadata is handled in layout.tsx for client components
