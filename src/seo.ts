// Balises <head> propres à chaque adresse (titre, description, canonique,
// Open Graph, données structurées schema.org), injectées au pré-rendu.
import {
  PAGE_NOTES,
  TOTAL_PAGES,
  pageImage,
  pageInfo,
  pageUrl,
  sectionsForPage,
  tocTitlesForPage,
} from './data/book';
import { PORTRAIT, RADIO, SITE_URL } from './data/content';
import type { Route } from './routes';

const SITE_NAME = 'Archives Théodore Girard';
const PERSON_ID = `${SITE_URL}/#theodore-girard`;
const BOOK_ID = `${SITE_URL}/#recueil`;
const WEBSITE_ID = `${SITE_URL}/#site`;
const OG_IMAGE = `${SITE_URL}/images/og-theodore-girard.jpg`;

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Sérialise du JSON-LD sans risque de fermer la balise <script>. */
const jsonLd = (data: unknown): string =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

const truncate = (text: string, max: number): string => {
  if (text.length <= max) return text;
  let cut = text.slice(0, max - 1).replace(/[\s,;:–-]+\S*$/, '');
  // Pas de parenthèse ni de guillemet laissés ouverts.
  for (const [open, close] of [['(', ')'], ['«', '»'], ['[', ']']]) {
    if (cut.split(open).length > cut.split(close).length) cut = cut.slice(0, cut.lastIndexOf(open)).trimEnd();
  }
  return `${cut}…`;
};

interface HeadData {
  title: string;
  description: string;
  path: string;
  ogType: 'website' | 'article';
  structuredData: unknown;
}

const PERSON = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Théodore Girard',
  givenName: 'Théodore',
  familyName: 'Girard',
  birthDate: '1851-01-14',
  birthPlace: {
    '@type': 'Place',
    name: 'Montils (Charente-Inférieure, aujourd’hui Charente-Maritime)',
    sameAs: 'https://www.wikidata.org/wiki/Q290337',
  },
  deathDate: '1918-10-13',
  deathPlace: { '@type': 'Place', name: 'Paris' },
  nationality: { '@type': 'Country', name: 'France' },
  jobTitle: ['Garde des Sceaux, ministre de la Justice (1910-1911)', 'Sénateur des Deux-Sèvres (1895-1918)', 'Maire de Melle', 'Avoué à Melle'],
  description:
    'Homme politique français (1851-1918) : avoué, maire de Melle, sénateur des Deux-Sèvres et garde des Sceaux dans le deuxième gouvernement Briand.',
  image: `${SITE_URL}${PORTRAIT.src}`,
  sameAs: [
    'https://www.wikidata.org/wiki/Q3526426',
    'https://fr.wikipedia.org/wiki/Th%C3%A9odore_Girard',
    'https://www.senat.fr/senateur-3eme-republique/girard_theodore1638r3.html',
    'https://data.bnf.fr/ark:/12148/cb13210644d',
    'https://catalogue.bnf.fr/ark:/12148/cb13210644d',
  ],
};

const BOOK = {
  '@type': 'Book',
  '@id': BOOK_ID,
  name: 'Recueil de coupures de presse de Théodore Girard (1872-1876)',
  description:
    "Recueil de coupures de presse réunies par Théodore Girard (L'Indépendant, 1872-1874 ; L'Union républicaine, 1875-1876), avec sa table manuscrite et des documents ajoutés, dont certains postérieurs à sa mort.",
  creator: { '@id': PERSON_ID },
  about: { '@id': PERSON_ID },
  inLanguage: 'fr',
  numberOfPages: TOTAL_PAGES,
  temporalCoverage: '1872/1876',
  url: `${SITE_URL}/#livre`,
  isAccessibleForFree: true,
};

function homeHead(): HeadData {
  const title = 'Théodore Girard (1851-1918) – Biographie et recueil de presse';
  const description =
    'Théodore Girard (1851-1918), maire de Melle, sénateur des Deux-Sèvres et garde des Sceaux : biographie et recueil de coupures de presse (1872-1876) à feuilleter.';
  return {
    title,
    description,
    path: '/',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': WEBSITE_ID,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          inLanguage: 'fr-FR',
          about: { '@id': PERSON_ID },
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#page`,
          url: `${SITE_URL}/`,
          name: title,
          description,
          inLanguage: 'fr-FR',
          isPartOf: { '@id': WEBSITE_ID },
          about: { '@id': PERSON_ID },
          mainEntity: { '@id': PERSON_ID },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${SITE_URL}${PORTRAIT.src}`,
            width: PORTRAIT.width,
            height: PORTRAIT.height,
            caption: PORTRAIT.alt,
          },
        },
        PERSON,
        BOOK,
        {
          '@type': 'AudioObject',
          '@id': `${SITE_URL}/#radio`,
          name: `« ${RADIO.series} » : Théodore Girard (${RADIO.station})`,
          description: RADIO.description,
          contentUrl: `${SITE_URL}${RADIO.src}`,
          encodingFormat: 'audio/mpeg',
          duration: RADIO.durationIso,
          inLanguage: 'fr',
          about: { '@id': PERSON_ID },
          creator: { '@type': 'Person', name: RADIO.author },
        },
      ],
    },
  };
}

function pageHead(n: number, excerpt?: string): HeadData {
  const titles = tocTitlesForPage(n);
  const sections = sectionsForPage(n);
  const sectionLabel = sections.map((s) => `${s.title} (${s.period})`).join(' / ');
  const info = pageInfo(n);
  const path = pageUrl(n);

  const title = titles.length
    ? `${truncate(titles[0], 42)} – recueil de Théodore Girard, p. ${n}`
    : `Recueil de Théodore Girard – page ${n}`;
  const note = PAGE_NOTES[n];
  const description = truncate(
    note
      ? `Page ${n} du recueil de Théodore Girard. ${note}`
      : !titles.length && excerpt
        ? `Page ${n} du recueil de Théodore Girard : «\u00a0${excerpt}\u00a0»`
        : `Page ${n} sur ${TOTAL_PAGES} du recueil de Théodore Girard, ${sectionLabel}${
          titles.length ? ` : ${titles.join(', ')}` : ''
        }. Scan haute définition.`,
    160,
  );

  return {
    title,
    description,
    path,
    ogType: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}${path}#page`,
          url: `${SITE_URL}${path}`,
          name: title,
          description,
          inLanguage: 'fr-FR',
          isPartOf: { '@id': WEBSITE_ID },
          about: { '@id': PERSON_ID },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Le recueil', item: `${SITE_URL}/#livre` },
              { '@type': 'ListItem', position: 3, name: `Page ${n}`, item: `${SITE_URL}${path}` },
            ],
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            contentUrl: `${SITE_URL}${pageImage(n, 1600)}`,
            width: Math.min(info.w, 1600),
            height: Math.round((Math.min(info.w, 1600) * info.h) / info.w),
            caption: titles.length ? `Page ${n} : ${titles.join(' ; ')}` : `Page ${n}`,
            isPartOf: { '@id': BOOK_ID },
          },
        },
      ],
    },
  };
}

/** Bloc HTML à insérer dans <head> pour l'adresse donnée. */
export function renderHead(route: Route, pageExcerpt?: string): string {
  const data = route.kind === 'page' ? pageHead(route.page, pageExcerpt) : homeHead();
  const url = `${SITE_URL}${data.path}`;
  return [
    `<title>${escapeHtml(data.title)}</title>`,
    `<meta name="description" content="${escapeHtml(data.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${data.ogType}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(data.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(data.description)}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta property="og:image:alt" content="Portrait de Théodore Girard vers 1915, avec son nom, ses dates (1851-1918) et ses fonctions : maire de Melle, sénateur des Deux-Sèvres, garde des Sceaux (1910-1911)" />',
    jsonLd(data.structuredData),
  ].join('\n    ');
}
