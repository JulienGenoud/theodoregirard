import { TOTAL_PAGES, pageUrl } from './data/book';

export type Route = { kind: 'home' } | { kind: 'page'; page: number };

const PAGE_PATH = /^\/livre-de-combat\/page-(\d{1,3})\/?$/;

/** Détermine la vue à afficher à partir du chemin de l'URL. */
export function parseRoute(pathname: string): Route {
  const match = PAGE_PATH.exec(pathname);
  if (match) {
    const page = Number(match[1]);
    if (page >= 1 && page <= TOTAL_PAGES) return { kind: 'page', page };
  }
  return { kind: 'home' };
}

/** Toutes les adresses à pré-rendre au build. */
export const ALL_PATHS: readonly string[] = [
  '/',
  ...Array.from({ length: TOTAL_PAGES }, (_, i) => pageUrl(i + 1)),
];
