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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Community Section (moved above Brand Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* WeChat */}
          <div className="flex items-center gap-4 bg-background border border-border rounded-lg p-4">
            <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-muted">
              {/* 请将你的微信二维码图片放到 public/wechat-qr.png */}
              <img src="/wechat-qr.jpg" alt="WeChat QR" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold text-foreground">{t('footer.wechat')}</div>
              <div className="text-sm text-muted-foreground">{t('footer.wechatDesc')}</div>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-background border border-border rounded-lg p-4 hover:bg-accent transition-colors"
          >
            <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-green-500/10 flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-10 h-10 text-green-500" fill="currentColor" aria-hidden>
                <path d="M19.11 17.19c-.33-.17-1.9-.94-2.19-1.05-.29-.11-.5-.17-.72.17-.22.33-.83 1.05-1.02 1.27-.19.22-.37.25-.7.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.14-.68.14-.14.33-.37.5-.56.17-.19.22-.33.33-.56.11-.22.06-.41-.03-.57-.08-.17-.72-1.73-.98-2.37-.26-.62-.52-.53-.72-.54l-.62-.01c-.22 0-.57.08-.87.41-.29.33-1.14 1.11-1.14 2.7 0 1.59 1.17 3.13 1.33 3.35.16.22 2.31 3.53 5.6 4.95.78.34 1.39.54 1.87.69.79.25 1.5.22 2.06.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.62-.39z"/>
                <path d="M26.7 5.3C24.3 2.9 21.26 1.6 18 1.6 9.82 1.6 3.2 8.22 3.2 16.4c0 2.59.68 5.1 1.97 7.32L3 30.4l6.86-2.11c2.13 1.16 4.53 1.77 7.04 1.77 8.18 0 14.8-6.62 14.8-14.8 0-3.26-1.3-6.3-3.6-8.66zM16.9 27.2c-2.23 0-4.4-.6-6.3-1.72l-.45-.27-4.07 1.25 1.29-3.97-.29-.48c-1.22-1.99-1.86-4.29-1.86-6.61 0-6.92 5.63-12.55 12.55-12.55 3.36 0 6.52 1.31 8.9 3.69 2.38 2.38 3.69 5.54 3.69 8.9 0 6.92-5.63 12.55-12.55 12.55z"/>
              </svg>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold text-foreground">{t('footer.whatsapp')}</div>
              <div className="text-sm text-muted-foreground">{t('footer.whatsappDesc')}</div>
            </div>
          </a>
        </div>

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
