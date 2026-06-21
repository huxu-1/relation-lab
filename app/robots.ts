import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/payment/', '/result/'],
    },
    sitemap: 'https://relation-lab.vercel.app/sitemap.xml',
  };
}