'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, MapPin } from 'lucide-react';
import { useI18n } from './i18n-provider';

interface FeaturedLink {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  isDubaiSpecific?: boolean;
  category: string;
}

interface FeaturedLinksProps {
  links: FeaturedLink[];
}

export function FeaturedLinks({ links }: FeaturedLinksProps) {
  const { t } = useI18n();
  
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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
                    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-uob-primary/10 text-uob-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Star className="h-4 w-4" />
            <span>{t('featured.badge')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-foreground mb-4"
          >
            {t('featured.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t('featured.subtitle')}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {links.map((link) => (
            <motion.a
              key={link.id}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-uob-primary transition-colors">
                      {link.title}
                    </h3>
                    {link.isDubaiSpecific && (
                      <div className="flex items-center space-x-1 bg-uob-secondary/10 text-uob-secondary px-2 py-1 rounded-full text-xs font-medium">
                        <MapPin className="h-3 w-3" />
                        <span>Dubai</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {link.description}
                  </p>
                  <div className="text-xs text-uob-primary/70 font-medium">
                    {link.category}
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-uob-primary transition-colors flex-shrink-0 ml-2" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {link.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {link.tags.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                    +{link.tags.length - 3}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
