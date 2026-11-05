import { Images, List } from 'lucide-react';
import { PAGES, TOC_SECTIONS, TOTAL_PAGES, pageImage, pageUrl } from '../data/book';
import { plainClick } from '../lib/plainClick';

interface BookIndexProps {
  currentPage: number;
  onOpenPage: (page: number) => void;
}

export default function BookIndex({ currentPage, onOpenPage }: BookIndexProps) {
  return (
    <section id="index" aria-labelledby="index-titre" className="relative border-t border-stone-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 id="index-titre" className="mb-4 flex items-center justify-center gap-3 font-serif text-3xl text-stone-900 sm:text-4xl">
            <List className="text-amber-700" size={32} aria-hidden="true" />
            Index du recueil
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-amber-700" aria-hidden="true" />
          <p className="mx-auto max-w-2xl font-serif italic text-stone-700">
            Établi d'après la table manuscrite de Théodore Girard (p. 133-139) pour les pages 1 à 124 ; la suite est décrite
            d'après les scans. Cliquez sur un titre pour ouvrir la page dans le lecteur ; chaque page dispose aussi de sa
            propre adresse.
          </p>
        </div>

        <div className="space-y-10">
          {TOC_SECTIONS.map((section) => (
            <div key={section.id} className="rounded-lg border border-stone-200 bg-stone-50 p-4 shadow-inner sm:p-8">
              <h3 className="font-serif text-2xl text-stone-900">
                {section.title} <span className="text-lg text-stone-600">({section.period})</span>
              </h3>
              <p className="mb-4 mt-1 text-sm text-stone-700">{section.description}</p>
              <ol className="gap-x-12 md:columns-2">
                {section.entries.map((item) => {
                  const isCurrent = item.page === currentPage;
                  return (
                    <li key={`${item.page}-${item.title}`} className="break-inside-avoid border-b border-stone-200">
                      <a
                        href={pageUrl(item.page)}
                        onClick={plainClick(() => onOpenPage(item.page))}
                        aria-current={isCurrent ? 'true' : undefined}
                        className={`group flex items-baseline justify-between gap-3 rounded px-2 py-2 transition-colors hover:bg-white ${
                          isCurrent ? 'bg-amber-50' : ''
                        }`}
                      >
                        <span className="font-serif text-lg leading-snug text-stone-800 transition-colors group-hover:text-amber-800">
                          {item.title}
                          {item.uncertain && (
                            <span className="ml-1 font-sans text-xs text-stone-500" title="Lecture du manuscrit incertaine">
                              (?)
                              <span className="sr-only"> lecture incertaine</span>
                            </span>
                          )}
                        </span>
                        <span className="whitespace-nowrap font-sans text-sm font-bold text-amber-800">
                          <span className="sr-only">page </span>
                          <span aria-hidden="true">p. </span>
                          {item.page}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>

        <details className="group mt-10 rounded-lg border border-stone-200 bg-stone-50">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-3 rounded-lg px-4 py-4 font-serif text-lg text-stone-800 hover:bg-white [&::-webkit-details-marker]:hidden">
            <Images className="text-amber-700" size={22} aria-hidden="true" />
            Parcourir les {TOTAL_PAGES} pages en vignettes
            <span className="text-sm text-stone-600 transition-transform group-open:rotate-180" aria-hidden="true">
              ▾
            </span>
          </summary>
          <ul className="grid grid-cols-3 gap-3 p-4 sm:grid-cols-4 sm:p-6 md:grid-cols-6">
            {PAGES.map((p) => (
              <li key={p.n}>
                <a
                  href={pageUrl(p.n)}
                  onClick={plainClick(() => onOpenPage(p.n))}
                  aria-current={p.n === currentPage ? 'true' : undefined}
                  className={`block overflow-hidden rounded border bg-white transition-shadow hover:shadow-md ${
                    p.n === currentPage ? 'border-amber-600 ring-2 ring-amber-500' : 'border-stone-200'
                  }`}
                >
                  <img
                    src={pageImage(p.n, 320)}
                    width={320}
                    height={Math.round((320 * p.h) / p.w)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] h-auto w-full object-cover object-top"
                  />
                  <span className="block py-1 text-center font-sans text-xs text-stone-700">Page {p.n}</span>
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
