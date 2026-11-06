import { useEffect } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, FileDown, List } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import {
  PAGE_NOTES,
  PAGE_VIEW_SIZES,
  TOTAL_PAGES,
  pageAlt,
  pageImage,
  pageInfo,
  pagePdf,
  pageSrcSet,
  pageUrl,
  sectionsForPage,
  tocEntriesForPage,
  tocTitlesForPage,
} from '../data/book';
import { BOOK_ABOUT } from '../data/content';

const isTypingTarget = (target: EventTarget | null): boolean =>
  target instanceof HTMLElement &&
  (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT', 'AUDIO', 'VIDEO'].includes(target.tagName));

function PageNavigation({ page, position }: { page: number; position: 'haut' | 'bas' }) {
  const previous = page > 1 ? page - 1 : null;
  const next = page < TOTAL_PAGES ? page + 1 : null;
  const linkClass =
    'group flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 shadow-sm transition-colors hover:border-amber-600 hover:text-amber-900';

  return (
    <nav aria-label={`Pages précédente et suivante (${position})`} className="my-6 flex gap-3">
      {previous ? (
        <a href={pageUrl(previous)} rel="prev" className={linkClass}>
          <ChevronLeft size={20} className="shrink-0" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block text-xs uppercase tracking-widest text-stone-600">
              <span className="hidden sm:inline">Page </span>précédente
            </span>
            <span className="block truncate font-serif">
              {previous}
              {tocTitlesForPage(previous)[0] ? ` · ${tocTitlesForPage(previous)[0]}` : ''}
            </span>
          </span>
        </a>
      ) : (
        <span className="flex-1" />
      )}
      {next ? (
        <a href={pageUrl(next)} rel="next" className={`${linkClass} justify-end text-right`}>
          <span className="min-w-0">
            <span className="block text-xs uppercase tracking-widest text-stone-600">
              <span className="hidden sm:inline">Page </span>suivante
            </span>
            <span className="block truncate font-serif">
              {next}
              {tocTitlesForPage(next)[0] ? ` · ${tocTitlesForPage(next)[0]}` : ''}
            </span>
          </span>
          <ChevronRight size={20} className="shrink-0" aria-hidden="true" />
        </a>
      ) : (
        <span className="flex-1" />
      )}
    </nav>
  );
}

/** Page dédiée (indexable) à une page du recueil. */
export default function PageView({
  page,
  textHtml,
  textKind = 'ocr',
}: {
  page: number;
  textHtml?: string;
  textKind?: 'ocr' | 'manuscrit';
}) {
  const info = pageInfo(page);
  const entries = tocEntriesForPage(page);
  const sections = sectionsForPage(page);
  const note = PAGE_NOTES[page];

  // Flèches du clavier : page précédente / suivante.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (isTypingTarget(event.target)) return;
      if (event.key === 'ArrowLeft' && page > 1) window.location.assign(pageUrl(page - 1));
      if (event.key === 'ArrowRight' && page < TOTAL_PAGES) window.location.assign(pageUrl(page + 1));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [page]);

  return (
    <>
      <Header active="livre" />
      <main id="contenu" tabIndex={-1} className="bg-stone-100 pb-16 pt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6 font-sans text-sm text-stone-600">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <a href="/" className="underline decoration-stone-300 underline-offset-4 hover:text-amber-800">
                  Accueil
                </a>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <a href="/#livre" className="underline decoration-stone-300 underline-offset-4 hover:text-amber-800">
                  Le recueil
                </a>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-stone-800">
                Page {page}
              </li>
            </ol>
          </nav>

          <header>
            <p className="font-sans text-sm font-bold uppercase tracking-widest text-amber-800">
              {sections.map((section) => `${section.title} · ${section.period}`).join(' / ')}
            </p>
            <h1 className="mt-2 font-serif text-3xl text-stone-900 sm:text-4xl">
              Recueil de Théodore Girard <span className="whitespace-nowrap">– page {page}</span>
            </h1>
            {entries.length > 0 && (
              <ul className="mt-4 space-y-1 font-serif text-xl text-stone-800">
                {entries.map((entry) => (
                  <li key={entry.title}>
                    « {entry.title} »
                    {entry.uncertain && <span className="ml-2 font-sans text-sm text-stone-600">(lecture incertaine)</span>}
                  </li>
                ))}
              </ul>
            )}
            {note && <p className="mt-4 max-w-3xl leading-relaxed text-stone-700">{note}</p>}
          </header>

          <PageNavigation page={page} position="haut" />

          <figure>
            <img
              src={pageImage(page, 900)}
              srcSet={pageSrcSet(page)}
              sizes={PAGE_VIEW_SIZES}
              width={info.w}
              height={info.h}
              alt={pageAlt(page)}
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-full rounded-sm border border-stone-300 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            />
            <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm text-stone-700">
              <span>
                Page {page} sur {TOTAL_PAGES}
              </span>
              <a href={pagePdf(page)} className="inline-flex items-center gap-1.5 text-amber-800 underline-offset-4 hover:underline">
                <FileDown size={16} aria-hidden="true" /> PDF original (haute définition)
              </a>
              <a href={`/#page-${page}`} className="inline-flex items-center gap-1.5 text-amber-800 underline-offset-4 hover:underline">
                <BookOpen size={16} aria-hidden="true" /> Feuilleter dans le lecteur
              </a>
              <a href="/#index" className="inline-flex items-center gap-1.5 text-amber-800 underline-offset-4 hover:underline">
                <List size={16} aria-hidden="true" /> Index du recueil
              </a>
            </figcaption>
          </figure>

          <PageNavigation page={page} position="bas" />

          {textHtml ? (
            <details className="group mt-10 rounded-lg border border-stone-200 bg-white">
              <summary className="cursor-pointer list-none rounded-lg px-6 py-4 font-serif text-xl text-stone-900 hover:bg-stone-50 [&::-webkit-details-marker]:hidden">
                {textKind === 'manuscrit' ? 'Transcription du manuscrit' : 'Texte de la page'}{' '}
                <span className="font-sans text-sm text-stone-600">
                  {textKind === 'manuscrit'
                    ? '(relue et vérifiée ; [?] = lecture incertaine)'
                    : '(reconnaissance automatique, non relue)'}
                </span>
                <span className="ml-2 inline-block text-sm text-stone-600 transition-transform group-open:rotate-180" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div
                id="texte-page"
                data-kind={textKind}
                className="space-y-3 px-6 pb-6 font-serif leading-relaxed text-stone-800"
                dangerouslySetInnerHTML={{ __html: textHtml }}
              />
            </details>
          ) : null}

          <section aria-labelledby="a-propos-du-livre" className="mt-10 rounded-lg border border-stone-200 bg-white p-6 sm:p-8">
            <h2 id="a-propos-du-livre" className="mb-3 font-serif text-2xl text-stone-900">
              À propos du recueil
            </h2>
            <p className="leading-relaxed text-stone-700">
              {BOOK_ABOUT}
            </p>
            <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm">
              <a href="/#biographie" className="text-amber-800 underline-offset-4 hover:underline">
                Lire sa biographie
              </a>
              <a href="/#histoires" className="text-amber-800 underline-offset-4 hover:underline">
                Histoires tirées du recueil
              </a>
              <a href="/#index" className="text-amber-800 underline-offset-4 hover:underline">
                Table des matières complète
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
