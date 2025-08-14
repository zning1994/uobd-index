'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Monitor, 
  Building, 
  Home, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface Link {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  isDubaiSpecific?: boolean;
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  links: Link[];
}

interface CategoryGridProps {
  categories: Category[];
}

const iconMap = {
  globe: Globe,
  monitor: Monitor,
  building: Building,
  home: Home,
};

export function CategoryGrid({ categories }: CategoryGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {categories.map((category) => {
        const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Globe;
        const dubaiLinks = category.links.filter(link => link.isDubaiSpecific).length;
        
        return (
          <motion.div
            key={category.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              {/* Dubai Badge */}
              {dubaiLinks > 0 && (
                <div className="absolute top-4 right-4">
                  <div className="bg-uob-secondary/10 text-uob-secondary text-xs px-2 py-1 rounded-full font-medium">
                    {dubaiLinks} Dubai
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-uob-primary/10 rounded-lg mb-4 group-hover:bg-uob-primary/20 transition-colors">
                <IconComponent className="h-6 w-6 text-uob-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-uob-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                {/* Links Count */}
                <div className="text-xs text-muted-foreground mb-4">
                  {category.links.length} {category.links.length === 1 ? 'link' : 'links'}
                </div>

                {/* Quick Links Preview */}
                <div className="space-y-2 mb-4">
                  {category.links.slice(0, 3).map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-xs text-muted-foreground hover:text-foreground transition-colors group/link"
                    >
                      <span className="truncate flex-1 mr-2">{link.title}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ))}
                  {category.links.length > 3 && (
                    <div className="text-xs text-muted-foreground">
                      +{category.links.length - 3} more
                    </div>
                  )}
                </div>
              </div>

              {/* View All Button */}
              <Link
                href={`/category/${category.id}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-uob-primary/5 hover:bg-uob-primary/10 text-uob-primary rounded-lg transition-colors text-sm font-medium group/btn"
              >
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
