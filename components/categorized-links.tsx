'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MapPin, BookOpen, GraduationCap, Briefcase, Monitor, Home, Globe } from 'lucide-react';
import { useI18n } from './i18n-provider';

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

interface CategorizedLinksProps {
  categories: Category[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'book-open': BookOpen,
  'graduation-cap': GraduationCap,
  'briefcase': Briefcase,
  'monitor': Monitor,
  'home': Home,
  'globe': Globe,
};

export function CategorizedLinks({ categories }: CategorizedLinksProps) {
  const { t, locale } = useI18n();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-10 sm:space-y-14"
        >
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Globe;
            
            return (
              <motion.div
                key={category.id}
                variants={categoryVariants}
                className="space-y-4 sm:space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 pb-3 border-b border-border">
                  <div className="p-2 bg-uob-primary/10 rounded-lg">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-uob-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Links Grid */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  {category.links.map((link, index) => (
                    <motion.a
                      key={link.id}
                      variants={linkVariants}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-uob-primary/30 transition-all duration-300"
                    >
                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-semibold text-foreground group-hover:text-uob-primary transition-colors line-clamp-1">
                              {link.title}
                            </h3>
                            {link.isDubaiSpecific && (
                              <span className="flex-shrink-0 inline-flex items-center gap-0.5 bg-uob-secondary/10 text-uob-secondary px-1.5 py-0.5 rounded text-[10px] font-medium">
                                <MapPin className="h-2.5 w-2.5" />
                                Dubai
                              </span>
                            )}
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-uob-primary transition-colors flex-shrink-0 ml-2" />
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                        {link.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {link.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-[10px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {link.tags.length > 3 && (
                          <span className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-[10px] font-medium">
                            +{link.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
