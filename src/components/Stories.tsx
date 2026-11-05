import type { ReactElement } from 'react';
import { ArrowRight, Ban, Flower, Lightbulb, Megaphone } from 'lucide-react';
import { pageUrl } from '../data/book';
import { ANECDOTES } from '../data/content';
import type { Anecdote } from '../data/content';
import { plainClick } from '../lib/plainClick';

const icons: Record<Anecdote['icon'], ReactElement> = {
  flower: <Flower className="text-amber-700" size={28} aria-hidden="true" />,
  megaphone: <Megaphone className="text-amber-700" size={28} aria-hidden="true" />,
  ban: <Ban className="text-red-700" size={28} aria-hidden="true" />,
};

interface StoriesProps {
  onOpenPage: (page: number) => void;
}

export default function Stories({ onOpenPage }: StoriesProps) {
  return (
    <section id="histoires" aria-labelledby="histoires-titre" className="relative overflow-hidden bg-sepia-200 py-20 sm:py-24">
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 inline-block rounded-full bg-amber-800 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-50">
            Archives vivantes
          </p>
          <h2 id="histoires-titre" className="mb-6 font-serif text-4xl text-stone-900">
            Au cœur de la mêlée (1872-1876)
          </h2>
          <p className="mx-auto max-w-2xl font-serif text-lg italic text-stone-700">
            Quand la politique se réglait à coups de plumes, de procès et d'escroqueries aux violettes.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {ANECDOTES.map((story) => (
            <li
              key={story.title}
              className="group relative flex flex-col rounded-sm border-2 border-transparent bg-white p-6 shadow-lg transition-all duration-300 hover:border-amber-700/30"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-200 bg-amber-50 p-3 shadow-sm transition-transform group-hover:scale-110">
                {icons[story.icon]}
              </div>
              <article className="mt-8 flex flex-1 flex-col text-center">
                <p className="font-serif text-sm italic text-stone-600">
                  <time>{story.year}</time> • Page {story.pageRef}
                </p>
                <h3 className="mb-4 mt-2 font-serif text-xl font-bold leading-tight text-stone-900">{story.title}</h3>
                <p className="mb-4 text-left text-sm leading-relaxed text-stone-700">{story.content}</p>
                <p className="flex gap-2 rounded border-l-2 border-amber-600 bg-amber-50 p-3 text-left text-xs font-medium italic text-amber-900">
                  <Lightbulb size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{story.analysis}</span>
                </p>
                <a
                  href={pageUrl(story.pageRef)}
                  onClick={plainClick(() => onOpenPage(story.pageRef))}
                  className="mt-auto inline-flex items-center justify-center gap-2 pt-5 text-sm font-semibold text-amber-800 hover:text-amber-900 hover:underline"
                >
                  Voir la page {story.pageRef} du livre
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
