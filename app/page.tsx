'use client';

import { useState, useMemo } from 'react';
import { HeroSection } from '@/components/hero-section';
import { CategoryGrid } from '@/components/category-grid';
import { QuickStats } from '@/components/quick-stats';
import { FeaturedLinks } from '@/components/featured-links';
import linksData from '@/data/links.json';
import zhData from '@/data/links.i18n.json';
import { getCurrentLocale } from '@/lib/i18n';

export default function HomePage() {
  const { categories } = linksData;
  const i18n = zhData.zh;
  const locale = getCurrentLocale();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showDubaiOnly, setShowDubaiOnly] = useState(false);

  // Get all links for Quick Access
  const allLinks = categories.flatMap(category => {
    const categoryTitle = category.title;
    const localizedCategoryTitle = locale === 'zh' && i18n.categories[category.id]?.title
      ? i18n.categories[category.id].title
      : categoryTitle;
    return category.links.map(link => {
      const localized = locale === 'zh' && i18n.links[link.id] ? i18n.links[link.id] : null;
      return {
        ...link,
        title: localized?.title || link.title,
        description: localized?.description || link.description,
        tags: localized?.tags || link.tags,
        category: localizedCategoryTitle
      };
    });
  });

  // Filter links based on search criteria
  const filteredLinks = useMemo(() => {
    let filtered = allLinks;

    // Text search
    if (searchQuery.trim()) {
      const term = searchQuery.toLowerCase();
      filtered = filtered.filter(link => {
        // 原文与本地化并存：在上面已合并为展示语言；这里额外对英文别名做兜底匹配
        const englishSource = linksData.categories
          .flatMap(c => c.links)
          .find(l => l.id === link.id);
        const enTitle = englishSource?.title || '';
        const enDesc = englishSource?.description || '';
        const enTags = englishSource?.tags || [];
        const fields = [link.title, link.description, link.category, enTitle, enDesc, ...link.tags, ...enTags];
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
