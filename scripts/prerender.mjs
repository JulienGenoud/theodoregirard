// Pré-rendu statique (exécuté par `npm run build`) :
//  - écrit le HTML complet de chaque adresse (accueil + une page par page du livre),
//    pour que les moteurs de recherche lisent le contenu sans exécuter de JavaScript ;
//  - génère dist/sitemap.xml (avec les images).
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const SITE_URL = 'https://www.theodoregirard.fr';

const { render, ALL_PATHS, imagesForPath } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const template = await readFile(path.join(dist, 'index.html'), 'utf8');
for (const marker of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) throw new Error(`Marqueur ${marker} introuvable dans dist/index.html`);
}

let totalBytes = 0;
for (const urlPath of ALL_PATHS) {
  const { html, head } = render(urlPath);
  if (!html.includes('<h1') || !head.includes('<title>')) {
    throw new Error(`Pré-rendu incomplet pour ${urlPath}`);
  }
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  const outDir = path.join(dist, urlPath);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'index.html'), page);
  totalBytes += page.length;
}

const lastmod = new Date().toISOString().slice(0, 10);
const urls = ALL_PATHS.map((urlPath) => {
  const images = imagesForPath(urlPath)
    .map((src) => `\n    <image:image><image:loc>${SITE_URL}${src}</image:loc></image:image>`)
    .join('');
  return `  <url>\n    <loc>${SITE_URL}${urlPath}</loc>\n    <lastmod>${lastmod}</lastmod>${images}\n  </url>`;
});
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);

await rm(ssrDir, { recursive: true, force: true });
console.log(
  `Pré-rendu OK : ${ALL_PATHS.length} pages (${(totalBytes / 1024 / 1024).toFixed(1)} Mo de HTML), sitemap.xml généré.`,
);
