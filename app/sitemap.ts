import { MetadataRoute } from 'next';
import { assessments } from '@/data/assessments';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://relation-lab.vercel.app';

  const assessmentPages = assessments.map(a => ({
    url: `${baseUrl}/assessment/${a.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...assessmentPages,
  ];
}