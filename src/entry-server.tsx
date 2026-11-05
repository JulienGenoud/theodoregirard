import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { pageImage } from './data/book';
import { PORTRAIT } from './data/content';
import { ALL_PATHS, parseRoute } from './routes';
import { renderHead } from './seo';

export { ALL_PATHS };

/** Rendu HTML statique d'une adresse, injecté dans le gabarit au build. */
export function render(
  urlPath: string,
  extras: { pageTextHtml?: string; pageExcerpt?: string } = {},
): { html: string; head: string } {
  const route = parseRoute(urlPath);
  const html = renderToString(
    <StrictMode>
      <App route={route} pageTextHtml={extras.pageTextHtml} />
    </StrictMode>,
  );
  return { html, head: renderHead(route, extras.pageExcerpt) };
}

/** Images à déclarer dans le sitemap pour une adresse. */
export function imagesForPath(urlPath: string): string[] {
  const route = parseRoute(urlPath);
  return route.kind === 'page' ? [pageImage(route.page, 1600)] : [PORTRAIT.src];
}
