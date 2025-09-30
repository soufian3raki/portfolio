import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString() || 'https://soufiane-raki.com';
  
  // Obtener todas las páginas estáticas
  const staticPages = [
    '',
    '/about',
    '/services',
    '/experience',
    '/certificates',
    '/works',
    '/blog',
    '/contact',
  ];

  // Obtener posts del blog
  const blogPosts = await getCollection('blog');
  const blogUrls = blogPosts.map(post => `/blog/${post.slug}`);

  // Obtener proyectos
  const works = await getCollection('works');
  const workUrls = works.map(work => `/works/${work.slug}`);

  // Obtener certificados
  const certificates = await getCollection('certificates');
  const certificateUrls = certificates.map(cert => `/certificates/${cert.slug}`);

  // Combinar todas las URLs
  const allUrls = [
    ...staticPages,
    ...blogUrls,
    ...workUrls,
    ...certificateUrls,
  ];

  // Generar sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map(url => {
  const fullUrl = `${baseUrl}${url}`;
  const lastmod = new Date().toISOString().split('T')[0];
  
  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${fullUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${fullUrl.replace(/^\/$/, '/en')}" />
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
