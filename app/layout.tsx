import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { I18nProvider } from '@/components/i18n-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://uobd.inology.tech'),
  title: {
    default: 'UoBD Important Websites',
    template: '%s | UoBD',
  },
  description: 'Curated links and resources for University of Birmingham Dubai campus students and staff.',
  keywords: ['University of Birmingham', 'Dubai', 'UoB', 'UoBD', 'student portal', 'academic resources'],
  authors: [{ name: 'ZNing' }],
  creator: 'ZNing',
  publisher: 'University of Birmingham Dubai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uobd.inology.tech',
    siteName: 'UoBD Important Websites',
    title: 'UoBD Important Websites',
    description: 'Curated links and resources for University of Birmingham Dubai campus students and staff.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UoBD Important Websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UoBD Important Websites',
    description: 'Curated links and resources for University of Birmingham Dubai campus students and staff.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-MTYH758FNF',
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'UoBD Important Websites',
  description: 'Curated links and resources for University of Birmingham Dubai campus students and staff.',
  url: 'https://uobd.inology.tech',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://uobd.inology.tech/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'University of Birmingham Dubai',
    url: 'https://www.birmingham.ac.uk/dubai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <div className="min-h-screen flex flex-col bg-background">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
