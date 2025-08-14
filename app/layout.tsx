import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { I18nProvider } from '@/components/i18n-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MetaI18n } from '@/components/meta-i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://uobd.inology.tech'),
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
  // Simple locale detection (client value will override after hydration)
  const initialLang = 'en';
  const initialDir = 'ltr';
  return (
    <html lang={initialLang} dir={initialDir} suppressHydrationWarning>
      <head>
        {/* Early locale bootstrap to set lang/dir before hydration to avoid Chrome translate prompt */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try{
                  var s = localStorage.getItem('locale') || '';
                  var n = (navigator.language||'').toLowerCase();
                  var l = s || (n.indexOf('zh')===0?'zh':(n.indexOf('ar')===0?'ar':'en'));
                  document.documentElement.lang = l;
                  document.documentElement.dir = (l==='ar')?'rtl':'ltr';
                }catch(e){}
              })();
            `,
          }}
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
              <MetaI18n />
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
