'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  ExternalLink, 
  Mail, 
  Github,
  Heart,
  MapPin
} from 'lucide-react';
import { useI18n } from './i18n-provider';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  const quickLinks = [
    { name: 'MyUoB Portal', href: 'https://myuob.bham.ac.uk/', external: true },
    { name: 'Canvas LMS', href: 'https://canvas.bham.ac.uk/', external: true },
    { name: 'Dubai Timetables', href: 'https://dubaitimetables.bham.ac.uk/', external: true },
    { name: 'IT Support', href: 'https://universityofbirmingham.service-now.com/itportal/', external: true },
  ];

  const aboutLinks = [
    { name: 'About This Site', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Contact', href: '/contact' },
    { name: 'Feedback', href: '/feedback' },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-uob-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-uob-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">UoBD</h3>
                <p className="text-xs text-muted-foreground">{t('footer.brandTagline')}</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{t('footer.location')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground"> </h4>
            {/* <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1 group"
                  >
                    <span>{link.name}</span>
                    {link.external && (
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">  </h4>
            {/* <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t('footer.connect')}</h4>
            <div className="space-y-3">
              <a
                href="mailto:i@zning.me"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>{t('footer.sendFeedback')}</span>
              </a>
              <a
                href="https://github.com/zning1994/uobd-index"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2"
              >
                <Github className="h-4 w-4" />
                <span>{t('footer.viewOnGitHub')}</span>
              </a>
            </div>
            
            {/* Version Badge */}
            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 bg-background border border-border rounded-lg px-3 py-2 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-muted-foreground">v2.0.0 • {t('footer.online')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>&copy; {currentYear} ZNing. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{t('footer.madeWith')}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.div>
              <span>{t('footer.for')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
