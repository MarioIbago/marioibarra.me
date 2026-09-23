import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/proyectos', '/laboratorio', '/notas', '/sobre-mi'];
  const fixedRoutes = pages.map((path, index) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'monthly' as const : 'yearly' as const,
    priority: index === 0 ? 1 : 0.7,
  }));
  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/proyectos/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));
  return [...fixedRoutes, ...projectRoutes];
}
