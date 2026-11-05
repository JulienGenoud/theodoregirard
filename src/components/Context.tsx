import { Scroll } from 'lucide-react';
import { CONTEXT_INTRO, CONTEXT_POINTS } from '../data/content';

export default function Context() {
  return (
    <section id="contexte" aria-labelledby="contexte-titre" className="bg-stone-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg bg-stone-800 p-8 text-stone-50 shadow-xl">
            <div>
              <h2 id="contexte-titre" className="mb-6 border-b border-stone-600 pb-4 font-serif text-2xl">
                {CONTEXT_INTRO.title}
              </h2>
              <p className="mb-4 font-light text-stone-200">{CONTEXT_INTRO.text}</p>
            </div>
            <p className="mt-8 flex items-center text-amber-400">
              <Scroll size={20} className="mr-2" aria-hidden="true" />
              <span className="text-sm uppercase tracking-widest">Contexte historique</span>
            </p>
          </div>

          <ol className="col-span-1 grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-2">
            {CONTEXT_POINTS.map((point, idx) => (
              <li key={point.title} className="rounded border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-2 flex items-center font-serif text-lg font-bold text-stone-800">
                  <span
                    className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 font-sans text-xs text-stone-600"
                    aria-hidden="true"
                  >
                    0{idx + 1}
                  </span>
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600">{point.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
