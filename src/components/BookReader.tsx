import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, FileDown, Link2, List, Maximize, Minimize } from 'lucide-react';
import {
  PAGE_SIZES,
  TOTAL_PAGES,
  clampPage,
  pageAlt,
  pageImage,
  pageInfo,
  pagePdf,
  pageSrcSet,
  pageUrl,
  tocTitlesForPage,
} from '../data/book';

interface BookReaderProps {
  /** Page affichée (1 à TOTAL_PAGES). */
  page: number;
  onPageChange: (page: number) => void;
  /** Vrai quand la section du livre est à l'écran : active les flèches du clavier. */
  isActive: boolean;
}

const iconButton =
  'inline-flex h-10 w-10 items-center justify-center rounded text-stone-200 transition-colors hover:bg-stone-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent';

const linkClass = (dark: boolean) =>
  `inline-flex items-center gap-1.5 underline-offset-4 hover:underline ${dark ? 'text-amber-300' : 'text-amber-800'}`;

const isTypingTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT', 'AUDIO', 'VIDEO'].includes(target.tagName);
};

export default function BookReader({ page, onPageChange, isActive }: BookReaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const hasInteracted = useRef(false);

  const [nativeFullscreen, setNativeFullscreen] = useState(false);
  const [emulatedFullscreen, setEmulatedFullscreen] = useState(false);
  const isFullscreen = nativeFullscreen || emulatedFullscreen;

  const [loadedPage, setLoadedPage] = useState(page);
  const [failedPage, setFailedPage] = useState<number | null>(null);
  const [draft, setDraft] = useState(String(page));

  const info = pageInfo(page);
  const titles = tocTitlesForPage(page);
  const hasFailed = failedPage === page;
  const isLoading = loadedPage !== page && !hasFailed;

  const goTo = useCallback(
    (target: number) => {
      const next = clampPage(target);
      hasInteracted.current = true;
      if (next !== page) onPageChange(next);
    },
    [page, onPageChange],
  );
  const previous = useCallback(() => goTo(page - 1), [goTo, page]);
  const next = useCallback(() => goTo(page + 1), [goTo, page]);

  // Garde le champ « Page » synchronisé avec la page affichée.
  useEffect(() => setDraft(String(page)), [page]);

  // Flèches du clavier (quand le lecteur est à l'écran) et Échap en plein écran simulé.
  useEffect(() => {
    if (!isActive && !isFullscreen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'Escape' && emulatedFullscreen) {
        setEmulatedFullscreen(false);
        return;
      }
      // Plein écran simulé : le focus reste dans le lecteur (Tab / Maj+Tab).
      if (event.key === 'Tab' && emulatedFullscreen && containerRef.current) {
        const items = [...containerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input')];
        if (items.length) {
          const first = items[0];
          const last = items[items.length - 1];
          const inside = containerRef.current.contains(document.activeElement);
          if (!inside || (event.shiftKey && document.activeElement === first)) {
            event.preventDefault();
            (event.shiftKey ? last : first).focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
        return;
      }
      if (event.shiftKey || isTypingTarget(event.target)) return;
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previous();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isActive, isFullscreen, emulatedFullscreen, previous, next]);

  // Suit l'état du plein écran natif (Échap, geste système…).
  useEffect(() => {
    const onChange = () => {
      setNativeFullscreen(document.fullscreenElement === containerRef.current);
      setEmulatedFullscreen(false);
    };
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // Bloque le défilement de la page derrière le plein écran simulé (iPhone).
  useEffect(() => {
    if (!emulatedFullscreen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [emulatedFullscreen]);

  // Précharge les pages voisines une fois que le lecteur est utilisé.
  useEffect(() => {
    if (!hasInteracted.current) return;
    for (const neighbour of [page + 1, page - 1]) {
      if (neighbour < 1 || neighbour > TOTAL_PAGES) continue;
      const img = new Image();
      img.decoding = 'async';
      img.sizes = PAGE_SIZES;
      img.srcset = pageSrcSet(neighbour);
      img.src = pageImage(neighbour, 900);
    }
  }, [page]);

  const toggleFullscreen = () => {
    if (isFullscreen) {
      if (document.fullscreenElement) void document.exitFullscreen();
      setEmulatedFullscreen(false);
      return;
    }
    const el = containerRef.current;
    if (el && document.fullscreenEnabled && typeof el.requestFullscreen === 'function') {
      // Certains navigateurs intégrés ignorent la demande sans erreur : repli sur le mode immersif.
      const fallback = window.setTimeout(() => {
        if (document.fullscreenElement !== el) setEmulatedFullscreen(true);
      }, 600);
      el.requestFullscreen()
        .then(() => {
          if (document.fullscreenElement === el) window.clearTimeout(fallback);
        })
        .catch(() => {
          window.clearTimeout(fallback);
          setEmulatedFullscreen(true);
        });
    } else {
      setEmulatedFullscreen(true);
    }
  };

  const commitDraft = () => {
    const value = Number.parseInt(draft, 10);
    if (Number.isFinite(value)) {
      goTo(value);
      setDraft(String(clampPage(value)));
    } else {
      setDraft(String(page));
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    commitDraft();
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 1) {
      touchStart.current = null;
      return;
    }
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || event.changedTouches.length !== 1) return;
    // Pas de changement de page si l'utilisateur a zoomé et se déplace dans l'image.
    if (window.visualViewport && window.visualViewport.scale > 1.05) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) next();
      else previous();
    }
  };

  const caption = `Page ${page} sur ${TOTAL_PAGES}${titles.length ? ` — ${titles.join(' · ')}` : ''}`;

  return (
    <section id="livre" aria-labelledby="livre-titre" className="border-t border-stone-300 bg-stone-200 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 id="livre-titre" tabIndex={-1} className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">
            Le Livre de combat
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-amber-700" aria-hidden="true" />
          <p className="mx-auto max-w-2xl font-serif text-lg italic text-stone-700">
            Les {TOTAL_PAGES} pages du recueil de coupures de presse et de notes constitué par Théodore Girard
            entre 1872 et 1876, à feuilleter en intégralité.
          </p>
        </div>

        <div
          ref={containerRef}
          role={emulatedFullscreen ? 'dialog' : undefined}
          aria-modal={emulatedFullscreen || undefined}
          aria-label={emulatedFullscreen ? 'Lecteur du Livre de combat en plein écran' : undefined}
          className={isFullscreen ? 'fixed inset-0 z-[60] overflow-y-auto bg-stone-950 pb-10' : 'relative'}
        >
          <div
            className={`${isFullscreen ? 'top-0 rounded-none' : 'top-[4.5rem] rounded-lg'} sticky z-30 mx-auto flex max-w-4xl items-center justify-between gap-2 bg-stone-900 p-2 text-stone-50 shadow-2xl sm:p-3`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <button type="button" onClick={previous} disabled={page === 1} aria-label="Page précédente" className={iconButton}>
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <form onSubmit={onSubmit} noValidate className="flex items-center gap-2 font-mono text-sm">
                <label htmlFor="numero-page">Page</label>
                <input
                  id="numero-page"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={TOTAL_PAGES}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onBlur={commitDraft}
                  className="w-16 rounded border border-stone-600 bg-stone-800 px-1 py-1 text-center text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <span aria-hidden="true">/ {TOTAL_PAGES}</span>
                <span className="sr-only">sur {TOTAL_PAGES}</span>
              </form>
              <button type="button" onClick={next} disabled={page === TOTAL_PAGES} aria-label="Page suivante" className={iconButton}>
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>

            <p className="hidden min-w-0 flex-1 truncate text-center font-sans text-sm text-stone-300 md:block">
              {titles.length ? titles.join(' · ') : `Livre de combat, page ${page}`}
            </p>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-pressed={isFullscreen}
                aria-label="Plein écran"
                title={isFullscreen ? 'Quitter le plein écran' : 'Lire en plein écran'}
                className={iconButton}
              >
                {isFullscreen ? <Minimize size={20} aria-hidden="true" /> : <Maximize size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>

          <figure className={`mx-auto mt-4 ${isFullscreen ? 'max-w-5xl px-2' : 'max-w-4xl'}`}>
            <div
              className="relative overflow-hidden rounded-sm border border-stone-300 bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={pageImage(page, 900)}
                srcSet={pageSrcSet(page)}
                sizes={PAGE_SIZES}
                width={info.w}
                height={info.h}
                alt={pageAlt(page)}
                loading="lazy"
                decoding="async"
                onLoad={() => {
                  setLoadedPage(page);
                  setFailedPage((failed) => (failed === page ? null : failed));
                }}
                onError={() => setFailedPage(page)}
                className={`block h-auto w-full transition-opacity duration-300 ${isLoading ? 'opacity-40' : 'opacity-100'}`}
              />

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center" role="status">
                  <span className="sr-only">Chargement de la page {page}…</span>
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-stone-300 border-t-amber-700" aria-hidden="true" />
                </div>
              )}

              {hasFailed && (
                <div role="alert" className="absolute inset-x-4 top-4 rounded bg-white/95 p-4 text-center text-sm text-stone-800 shadow">
                  Impossible d'afficher cette page.{' '}
                  <a href={pagePdf(page)} className="font-semibold text-amber-800 underline">
                    Ouvrir le PDF original
                  </a>
                </div>
              )}

              {/* Zones de clic sur les bords (doublons des boutons, ignorées par les lecteurs d'écran). */}
              {page > 1 && (
                <div aria-hidden="true" onClick={previous} title="Page précédente" className="absolute inset-y-0 left-0 w-1/6 cursor-w-resize hover:bg-black/5" />
              )}
              {page < TOTAL_PAGES && (
                <div aria-hidden="true" onClick={next} title="Page suivante" className="absolute inset-y-0 right-0 w-1/6 cursor-e-resize hover:bg-black/5" />
              )}
            </div>
            <figcaption className={`mt-3 text-center font-sans text-sm ${isFullscreen ? 'text-stone-200' : 'text-stone-700'}`}>
              <span aria-live="polite">{caption}</span>
              <span className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
                <a href={pageUrl(page)} className={linkClass(isFullscreen)}>
                  <Link2 size={15} aria-hidden="true" /> Page dédiée (lien à partager)
                </a>
                <a href={pagePdf(page)} target="_blank" rel="noopener" className={linkClass(isFullscreen)}>
                  <FileDown size={15} aria-hidden="true" /> PDF original
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
                {!isFullscreen && (
                  <a href="#index" className={linkClass(false)}>
                    <List size={15} aria-hidden="true" /> Index du livre
                  </a>
                )}
              </span>
            </figcaption>
          </figure>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center font-sans text-sm text-stone-600">
          Astuce : utilisez les flèches ← → du clavier, balayez l'image sur mobile ou cliquez sur les bords de la page.
          Chaque page peut aussi être ouverte en PDF haute définition.
        </p>
      </div>
    </section>
  );
}
