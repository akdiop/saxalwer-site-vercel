import type { MetadataRoute } from 'next'

const BASE = 'https://www.saxalwer.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    { path: '',                          priority: 1.0, freq: 'weekly' as const },
    { path: '/a-propos',                 priority: 0.9, freq: 'monthly' as const },
    { path: '/application',              priority: 0.9, freq: 'monthly' as const },
    { path: '/ressources',               priority: 0.8, freq: 'weekly' as const },
    { path: '/recherche-impact',         priority: 0.8, freq: 'monthly' as const },
    { path: '/participer-aux-tests',     priority: 0.9, freq: 'weekly' as const },
    { path: '/partenaires',              priority: 0.7, freq: 'monthly' as const },
    { path: '/contact',                  priority: 0.6, freq: 'monthly' as const },
    { path: '/confidentialite',          priority: 0.3, freq: 'yearly' as const },
    { path: '/mentions-legales',         priority: 0.3, freq: 'yearly' as const },
    { path: '/conditions-utilisation',   priority: 0.3, freq: 'yearly' as const },
    { path: '/avertissement-medical',    priority: 0.5, freq: 'yearly' as const },
  ]

  return routes.map(r => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
