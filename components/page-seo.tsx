'use client';

import { useI18n } from './i18n-provider';
import { locales, type Locale } from '@/lib/i18n';

const siteUrl = 'https://uobd.inology.tech';
const defaultOgImage = `${siteUrl}/og-image.png`;

// Locale to OG locale mapping
const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  ar: 'ar_SA',
};

interface PageSeoProps {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
}

export function PageSeo({ 
  title, 
  description, 
  ogImage = defaultOgImage,
  path = '' 
}: PageSeoProps) {
  const { t, locale } = useI18n();
  
  const pageTitle = title || t('meta.title');
  const pageDescription = description || t('meta.description');
  const pageUrl = path ? `${siteUrl}${path}` : siteUrl;
  
  return (
    <>
      {/* Basic Meta */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Hreflang tags for multilingual SEO */}
      {locales.map((loc) => (
        <link 
          key={loc}
          rel="alternate" 
          hrefLang={loc} 
          href={pageUrl} 
        />
      ))}
      {/* x-default for users with unsupported languages */}
      <link rel="alternate" hrefLang="x-default" href={pageUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="University of Birmingham Dubai Important Websites" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocales[locale]} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}
