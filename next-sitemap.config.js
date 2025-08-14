/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://uobd.inology.tech',
  generateRobotsTxt: true,
  outDir: './out',
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
