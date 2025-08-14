'use client';

import { motion } from 'framer-motion';
import { Link as LinkIcon, MapPin, Calendar, TrendingUp } from 'lucide-react';

interface QuickStatsProps {
  data: {
    totalLinks: number;
    dubaiSpecificLinks: number;
    lastUpdated: string;
    version: string;
  };
}

export function QuickStats({ data }: QuickStatsProps) {
  const stats = [
    {
      icon: LinkIcon,
      label: 'Total Links',
      value: data.totalLinks.toString(),
      color: 'text-uob-primary',
      bgColor: 'bg-uob-primary/10',
    },
    {
      icon: MapPin,
      label: 'Dubai Specific',
      value: data.dubaiSpecificLinks.toString(),
      color: 'text-uob-secondary',
      bgColor: 'bg-uob-secondary/10',
    },
    {
      icon: Calendar,
      label: 'Last Updated',
      value: new Date(data.lastUpdated).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      }),
      color: 'text-uob-accent',
      bgColor: 'bg-uob-accent/10',
    },
    {
      icon: TrendingUp,
      label: 'Version',
      value: `v${data.version}`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
    },
  ];

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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="bg-background border border-border rounded-lg p-4 text-center"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 ${stat.bgColor} rounded-lg mb-3`}>
                  <IconComponent className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
