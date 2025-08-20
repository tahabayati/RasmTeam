import { siteConfig } from '../lib/metadata';

export default function sitemap() {
  const routes = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/home`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Add individual project pages
  const projectIds = [
    'ludum-dare',
    'renzo-cafe', 
    'fintech-brand',
    'pishtazbakhtar',
    'manufacturer-branding',
    'oko-team',
    'electronics-brand',
    'health-company',
    'oak-arc',
    'saar-studio',
    'creative-studio',
    'HealthCompanyTrue',
    'copper-stair',
    'renzo'
  ];

  const projectRoutes = projectIds.map((id) => ({
    url: `${siteConfig.url}/project/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
