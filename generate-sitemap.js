const fs = require("fs");
const path = require("path");

const baseUrl = "https://cristalinox.ma";

// Simule les produits, tu peux charger ça depuis un JSON ou une API
const productsC = Array.from({ length: 13 }, (_, i) => `product/c${i + 1}`);
const productsP = Array.from({ length: 10 }, (_, i) => `product/p${i + 1}`);

const staticPages = ["", "about", "catalogue", "contact", "FAQ"];

const urls = [...staticPages, ...productsC, ...productsP];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}/${url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>0.60</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);

console.log("✅ sitemap.xml généré dans /public !");
