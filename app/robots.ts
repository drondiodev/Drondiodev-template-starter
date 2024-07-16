import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/public/'],
    },
    sitemap: 'adresse du site/sitemap.xml',
    // fichier sitemap.xml à mettre à la racine de votre projet
  }
}
