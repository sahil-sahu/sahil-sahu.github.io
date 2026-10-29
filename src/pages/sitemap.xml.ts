import site from '../content/site.json';

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${site.siteUrl}/</loc></url>
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
