// pages/sitemap.xml.js

export async function getServerSideProps({ res }) {
    const baseUrl = 'https://cristalinox.ma';
    const lastmod = '2025-04-17';
  
    const staticPages = [
      '/',
      '/about',
      '/catalogue',
      '/contact',
      '/FAQ'
    ];
  
    const staticXml = staticPages.map(
      (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>0.80</priority>
      </url>`
    ).join('');
  
    // Pages catalogue 1 à 13
    const catalogueXml = Array.from({ length: 13 }, (_, i) => {
      const pageNum = i + 1;
      return `
      <url>
        <loc>${baseUrl}/catalogue/${pageNum}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>0.80</priority>
      </url>`;
    }).join('');
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticXml}
      ${catalogueXml}
    </urlset>`;
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default function Sitemap() {
    return null;
  }
  