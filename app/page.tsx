import { HeroSection } from '@/components/hero-section';
import { CategoryGrid } from '@/components/category-grid';
import { QuickStats } from '@/components/quick-stats';
import { FeaturedLinks } from '@/components/featured-links';
import linksData from '@/data/links.json';

export default function HomePage() {
  const { categories } = linksData;

  // Get featured links (Dubai-specific and essential links)
  const featuredLinks = categories.flatMap(category => 
    category.links.filter(link => 
      link.isDubaiSpecific || link.tags.includes('essential')
    ).map(link => ({ ...link, category: category.title }))
  ).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <HeroSection />
      
      {/* Quick Stats */}
      {/* <QuickStats data={linksData.metadata} /> */}
      
      {/* Featured Links */}
      <FeaturedLinks links={featuredLinks} />
      
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

export const metadata = {
  title: 'Home',
  description: 'Curated links and resources for University of Birmingham Dubai campus students and staff.',
};
