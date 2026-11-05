import { BookOpen, Coins, Key, TrendingUp } from 'lucide-react';
import { BONAPARTIST_CONTEXT, EVOLUTION_ANALYSIS, VOCABULARY } from '../data/content';

export default function Keys() {
  return (
    <section id="cles-de-lecture" aria-labelledby="cles-titre" className="border-t border-stone-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 id="cles-titre" className="mb-4 flex items-center justify-center gap-3 font-serif text-3xl text-stone-900 sm:text-4xl">
            <Key className="text-stone-500" aria-hidden="true" /> Les clés de lecture
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-stone-300" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-6 sm:p-8">
            <h3 className="mb-6 flex items-center gap-2 font-serif text-xl font-bold text-stone-900">
              <BookOpen size={20} className="text-amber-700" aria-hidden="true" /> Le vocabulaire du combat
            </h3>
            <dl className="space-y-6">
              {VOCABULARY.map((voc) => (
                <div key={voc.term} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="whitespace-nowrap font-bold text-stone-800">{voc.term}</dt>
                  <dd className="text-sm italic text-stone-600">{voc.def}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg bg-stone-800 p-6 text-stone-100 shadow-md sm:p-8">
              <Coins className="absolute right-4 top-4 text-stone-700 opacity-20" size={120} aria-hidden="true" />
              <h3 className="relative mb-4 font-serif text-xl font-bold text-amber-400">{BONAPARTIST_CONTEXT.title}</h3>
              <p className="relative z-10 text-sm leading-relaxed text-stone-200">{BONAPARTIST_CONTEXT.text}</p>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-amber-900">
                <TrendingUp size={20} aria-hidden="true" /> {EVOLUTION_ANALYSIS.title}
              </h3>
              <p className="text-sm leading-relaxed text-amber-950">{EVOLUTION_ANALYSIS.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
