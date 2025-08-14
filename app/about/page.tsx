'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Code, 
  Heart,
  Star,
  Globe,
  Users,
  Shield,
  Zap,
  Github,
  Mail
} from 'lucide-react';

// Metadata will be handled in layout or parent component

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About UoBD Important Websites',
  description: 'Learn about UoBD Important Websites - your gateway to University of Birmingham Dubai resources.',
  url: 'https://uobd.inology.tech/about',
  mainEntity: {
    '@type': 'WebSite',
    name: 'UoBD Important Websites',
    url: 'https://uobd.inology.tech',
    publisher: {
      '@type': 'Organization',
      name: 'University of Birmingham Dubai',
    },
  },
};

export default function AboutPage() {
  const features = [
    {
      icon: Globe,
      title: 'Comprehensive Coverage',
      description: 'Essential links covering academics, student life, and administrative services'
    },
    {
      icon: Zap,
      title: 'Quick Access',
      description: 'One-click access without memorizing complex URLs'
    },
    {
      icon: MapPin,
      title: 'Dubai Campus Focus',
      description: 'Localized resources specifically tailored for Dubai campus students'
    },
    {
      icon: Shield,
      title: 'Official & Secure',
      description: 'All links are verified official university resources'
    },
    {
      icon: Users,
      title: 'Student-Friendly',
      description: 'Clean interface designed based on actual student needs'
    },
    {
      icon: Star,
      title: 'Regularly Updated',
      description: 'Maintained and updated regularly to ensure accuracy'
    }
  ];

  const stats = [
    { number: '20+', label: 'Important Links' },
    { number: '4', label: 'Main Categories' },
    { number: '5', label: 'Dubai Specific' },
    { number: '24/7', label: 'Always Available' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-uob-primary/5 via-background to-uob-secondary/5 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-uob-primary/10 text-uob-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
              >
                <GraduationCap className="h-4 w-4" />
                <span>About Us</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
              >
                UoBD Important{' '}
                <span className="bg-gradient-to-r from-uob-primary to-uob-secondary bg-clip-text text-transparent">
                  Websites
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                A comprehensive link navigation platform designed for University of Birmingham Dubai campus 
                students and staff. Making academic life simpler with essential resources at your fingertips.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-uob-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Why Choose Us?
                </h2>
                <p className="text-lg text-muted-foreground">
                  An intelligent navigation platform designed specifically for UoB Dubai students
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-uob-primary/10 rounded-lg mb-4">
                        <IconComponent className="h-6 w-6 text-uob-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At University of Birmingham Dubai campus, students need to access numerous different 
                  systems and resources. From academic portals to accommodation services, from library 
                  resources to IT support, important links are scattered across different places.
                </p>
                <p>
                  <strong className="text-foreground">UoBD Important Websites</strong> was created to solve this problem.
                  We organize all important links in one place, allowing students to quickly find the resources 
                  they need and focus on learning rather than wasting time searching for the right URLs.
                </p>
                <p>
                  Especially for Dubai campus students, we also provide localized resources including 
                  transport timetables, accommodation services, restaurant menus, and other practical information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Code className="h-12 w-12 text-uob-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Technical Implementation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Modern technology stack ensuring the best user experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Frontend Technology</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Next.js 14 - React server-side rendering framework</li>
                      <li>• TypeScript - Type-safe JavaScript</li>
                      <li>• Tailwind CSS - Utility-first CSS framework</li>
                      <li>• Framer Motion - Smooth animation library</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Deployment & Operations</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• GitHub Pages - Static website hosting</li>
                      <li>• GitHub Actions - Automated deployment</li>
                      <li>• Custom Domain - uobd.inology.tech</li>
                      <li>• SSL Encryption - Secure HTTPS access</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">SEO Optimization</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Static Generation - Better search engine indexing</li>
                      <li>• Structured Data - JSON-LD format</li>
                      <li>• Meta Optimization - Dynamic title and description</li>
                      <li>• Sitemap - Auto-generated sitemap.xml</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">User Experience</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Responsive Design - Perfect for all devices</li>
                      <li>• Dark Mode - Eye-friendly night mode</li>
                      <li>• Fast Loading - Optimized performance</li>
                      <li>• Accessibility - WCAG compliant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contact Us
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Have questions, suggestions, or want to add new links? We'd love to hear your feedback.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href="mailto:i@zning.me"
                  className="inline-flex items-center space-x-2 bg-uob-primary text-white px-6 py-3 rounded-lg hover:bg-uob-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </a>
                <a
                  href="https://github.com/zning1994/uobd-index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub Repository</span>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                  <span>by ZNing for UoB Dubai students</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
