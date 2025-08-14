export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];

export const defaultLocale: Locale = 'en';

export interface Translations {
  // Header
  'header.home': string;
  'header.categories': string;
  'header.dubai': string;
  'header.about': string;
  'header.search': string;
  
  // Hero Section
  'hero.title': string;
  'hero.subtitle': string;
  'hero.searchPlaceholder': string;
  'hero.allCategories': string;
  'hero.dubaiOnly': string;
  'hero.clear': string;
  'hero.showing': string;
  'hero.browseAll': string;
  'hero.of': string;
  'hero.links': string;
  
  // Featured Links
  'featured.badge': string;
  'featured.title': string;
  'featured.subtitle': string;
  
  // About Page
  'about.title': string;
  'about.subtitle': string;
  'about.whyChoose': string;
  'about.whyChooseSubtitle': string;
  'about.mission': string;
  'about.missionText1': string;
  'about.missionText2': string;
  'about.missionText3': string;
  'about.tech': string;
  'about.techSubtitle': string;
  'about.frontend': string;
  'about.deployment': string;
  'about.seo': string;
  'about.ux': string;
  'about.contact': string;
  'about.contactSubtitle': string;
  'about.sendEmail': string;
  'about.github': string;
  
  // Features
  'feature.comprehensive.title': string;
  'feature.comprehensive.desc': string;
  'feature.quick.title': string;
  'feature.quick.desc': string;
  'feature.dubai.title': string;
  'feature.dubai.desc': string;
  'feature.secure.title': string;
  'feature.secure.desc': string;
  'feature.friendly.title': string;
  'feature.friendly.desc': string;
  'feature.updated.title': string;
  'feature.updated.desc': string;
  
  // Stats
  'stats.links': string;
  'stats.categories': string;
  'stats.dubai': string;
  'stats.available': string;
  
  // Footer
  'footer.madeWith': string;
  'footer.for': string;
}

export const translations: Record<Locale, Translations> = {
  en: {
    // Header
    'header.home': 'Home',
    'header.categories': 'Categories',
    'header.dubai': 'Dubai Campus',
    'header.about': 'About',
    'header.search': 'Search',
    
    // Hero Section
    'hero.title': 'UoBD Important Websites',
    'hero.subtitle': 'Essential University of Birmingham Dubai related services and resources (study, campus, accommodation, restaurants, etc)',
    'hero.searchPlaceholder': 'Search links, services, or categories...',
    'hero.allCategories': 'All Categories',
    'hero.dubaiOnly': 'Dubai Only',
    'hero.clear': 'Clear',
    'hero.showing': 'Showing',
    'hero.browseAll': 'Browse all',
    'hero.of': 'of',
    'hero.links': 'important links',
    
    // Featured Links
    'featured.badge': 'Quick Access',
    'featured.title': 'All Important Links',
    'featured.subtitle': 'Complete collection of UoB services, academic resources, and Dubai campus information.',
    
    // About Page
    'about.title': 'About Us',
    'about.subtitle': 'A comprehensive link navigation platform designed for University of Birmingham Dubai campus students and staff. Making academic life simpler with essential resources at your fingertips.',
    'about.whyChoose': 'Why Choose Us?',
    'about.whyChooseSubtitle': 'An intelligent navigation platform designed specifically for UoB Dubai students',
    'about.mission': 'Our Mission',
    'about.missionText1': 'At University of Birmingham Dubai campus, students need to access numerous different systems and resources. From academic portals to accommodation services, from library resources to IT support, important links are scattered across different places.',
    'about.missionText2': 'UoBD Important Websites was created to solve this problem. We organize all important links in one place, allowing students to quickly find the resources they need and focus on learning rather than wasting time searching for the right URLs.',
    'about.missionText3': 'Especially for Dubai campus students, we also provide localized resources including transport timetables, accommodation services, restaurant menus, and other practical information.',
    'about.tech': 'Technical Implementation',
    'about.techSubtitle': 'Modern technology stack ensuring the best user experience',
    'about.frontend': 'Frontend Technology',
    'about.deployment': 'Deployment & Operations',
    'about.seo': 'SEO Optimization',
    'about.ux': 'User Experience',
    'about.contact': 'Contact Us',
    'about.contactSubtitle': 'Have questions, suggestions, or want to add new links? We\'d love to hear your feedback.',
    'about.sendEmail': 'Send Email',
    'about.github': 'GitHub Repository',
    
    // Features
    'feature.comprehensive.title': 'Comprehensive Coverage',
    'feature.comprehensive.desc': 'Essential links covering academics, student life, and administrative services',
    'feature.quick.title': 'Quick Access',
    'feature.quick.desc': 'One-click access without memorizing complex URLs',
    'feature.dubai.title': 'Dubai Campus Focus',
    'feature.dubai.desc': 'Localized resources specifically tailored for Dubai campus students',
    'feature.secure.title': 'Official & Secure',
    'feature.secure.desc': 'All links are verified official university resources',
    'feature.friendly.title': 'Student-Friendly',
    'feature.friendly.desc': 'Clean interface designed based on actual student needs',
    'feature.updated.title': 'Regularly Updated',
    'feature.updated.desc': 'Maintained and updated regularly to ensure accuracy',
    
    // Stats
    'stats.links': 'Important Links',
    'stats.categories': 'Main Categories',
    'stats.dubai': 'Dubai Specific',
    'stats.available': 'Always Available',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.for': 'for UoB Dubai students',
  },
  zh: {
    // Header
    'header.home': '首页',
    'header.categories': '分类',
    'header.dubai': '迪拜校区',
    'header.about': '关于',
    'header.search': '搜索',
    
    // Hero Section
    'hero.title': 'UoBD 重要网站',
    'hero.subtitle': '伯明翰大学迪拜校区相关的重要服务和资源（学习、校园、住宿、餐厅等）',
    'hero.searchPlaceholder': '搜索链接、服务或分类...',
    'hero.allCategories': '所有分类',
    'hero.dubaiOnly': '仅迪拜',
    'hero.clear': '清除',
    'hero.showing': '显示',
    'hero.browseAll': '浏览全部',
    'hero.of': '共',
    'hero.links': '个重要链接',
    
    // Featured Links
    'featured.badge': '快速访问',
    'featured.title': '所有重要链接',
    'featured.subtitle': '完整收录 UoB 服务、学术资源和迪拜校区信息。',
    
    // About Page
    'about.title': '关于我们',
    'about.subtitle': '为伯明翰大学迪拜校区学生和教职工打造的综合链接导航平台。让学术生活更简单，重要资源触手可及。',
    'about.whyChoose': '为什么选择我们？',
    'about.whyChooseSubtitle': '专为 UoB 迪拜学生设计的智能导航平台',
    'about.mission': '我们的使命',
    'about.missionText1': '在伯明翰大学迪拜校区，学生需要访问众多不同的系统和资源。从学术门户到住宿服务，从图书馆资源到 IT 支持，重要的链接分散在各个地方。',
    'about.missionText2': 'UoBD Important Websites 的诞生就是为了解决这个问题。我们将所有重要的链接整理在一个地方，让学生能够快速找到所需的资源，专注于学习而不是浪费时间寻找正确的网址。',
    'about.missionText3': '特别是对于迪拜校区的学生，我们还提供了本地化的资源，包括交通时刻表、住宿服务、餐厅菜单等实用信息。',
    'about.tech': '技术实现',
    'about.techSubtitle': '现代化的技术栈，确保最佳的用户体验',
    'about.frontend': '前端技术',
    'about.deployment': '部署与运维',
    'about.seo': 'SEO 优化',
    'about.ux': '用户体验',
    'about.contact': '联系我们',
    'about.contactSubtitle': '有问题、建议或想要添加新的链接？我们很乐意听取您的反馈。',
    'about.sendEmail': '发送邮件',
    'about.github': 'GitHub 仓库',
    
    // Features
    'feature.comprehensive.title': '全面覆盖',
    'feature.comprehensive.desc': '涵盖学术、生活、行政等各个方面的重要链接',
    'feature.quick.title': '快速访问',
    'feature.quick.desc': '一键直达，无需记忆复杂的网址',
    'feature.dubai.title': '迪拜专区',
    'feature.dubai.desc': '专门为迪拜校区学生定制的本地化资源',
    'feature.secure.title': '官方认证',
    'feature.secure.desc': '所有链接均为官方资源，安全可靠',
    'feature.friendly.title': '学生友好',
    'feature.friendly.desc': '基于学生实际需求设计的简洁界面',
    'feature.updated.title': '持续更新',
    'feature.updated.desc': '定期维护和更新，确保信息准确性',
    
    // Stats
    'stats.links': '重要链接',
    'stats.categories': '主要分类',
    'stats.dubai': '迪拜专有',
    'stats.available': '全天可用',
    
    // Footer
    'footer.madeWith': '用',
    'footer.for': '为 UoB 迪拜学生制作',
  },
};

export function getTranslation(locale: Locale, key: keyof Translations): string {
  return translations[locale][key] || translations[defaultLocale][key];
}

export function getCurrentLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('locale') as Locale;
    if (stored && locales.includes(stored)) {
      return stored;
    }
    // Auto-detect from browser
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) {
      return 'zh';
    }
  }
  return defaultLocale;
}

export function setCurrentLocale(locale: Locale): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale);
  }
}
