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

// Texte OCR (content/ocr/pN.txt) : injecté dans la page dédiée, sans alourdir le JavaScript.
const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
async function pageTextFor(urlPath) {
  const match = /\/page-(\d+)\/$/.exec(urlPath);
  if (!match) return {};
  // Priorité à la transcription vérifiée d'une page manuscrite, sinon l'OCR.
  try {
    const manu = (await readFile(path.join(root, 'content/manuscrits', `p${match[1]}.txt`), 'utf8')).trim();
    if (manu) {
      const lines = manu.split('\n').map((l) => escapeHtml(l.trim()).replace(/\^([^\s.,;:—)]+)/g, '<sup>$1</sup>'));
      return { pageTextHtml: `<p>${lines.join('<br>')}</p>`, pageTextKind: 'manuscrit' };
    }
  } catch {
    // pas de transcription manuscrite pour cette page
  }
  let text;
  try {
    text = (await readFile(path.join(root, 'content/ocr', `p${match[1]}.txt`), 'utf8')).trim();
  } catch {
    return {};
  }
  if (!text) return {};
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const first = paragraphs.find((p) => p.length > 60) ?? paragraphs[0];
  return {
    pageTextHtml: paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join(''),
    pageTextKind: 'ocr',
    pageExcerpt: first.length > 100 ? `${first.slice(0, 100).replace(/\s+\S*$/, '')}…` : first,
  };
}

let totalBytes = 0;
for (const urlPath of ALL_PATHS) {
  const { html, head } = render(urlPath, await pageTextFor(urlPath));
  if (!html.includes('<h1') || !head.includes('<title>')) {
    throw new Error(`Pré-rendu incomplet pour ${urlPath}`);
  }
  const page = template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html);
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
