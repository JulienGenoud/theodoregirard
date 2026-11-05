import { BookOpen, PenTool, Scale, Sword } from 'lucide-react';
import { BOOK_THEMES, KEY_FIGURES } from '../data/content';

const icons = {
  feather: <PenTool className="text-amber-700" size={32} aria-hidden="true" />,
  eagle: <Sword className="text-amber-700" size={32} aria-hidden="true" />,
  scale: <Scale className="text-amber-700" size={32} aria-hidden="true" />,
} as const;

export default function Analysis() {
  return (
    <section id="analyse" aria-labelledby="analyse-titre" className="border-t border-stone-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 id="analyse-titre" className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">
            Analyse historique
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-amber-700" aria-hidden="true" />
          <p className="mx-auto max-w-2xl italic text-stone-600">
            Comprendre les enjeux derrière les caricatures et les textes enflammés.
          </p>
        </div>

        <ul className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {BOOK_THEMES.map((theme) => (
            <li key={theme.title} className="rounded-lg bg-stone-50 p-6 text-center transition-colors hover:bg-stone-100">
              <div className="mb-4 flex justify-center">
                {icons[theme.icon as keyof typeof icons] ?? <BookOpen className="text-amber-700" size={32} aria-hidden="true" />}
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-stone-900">{theme.title}</h3>
              <p className="text-sm leading-relaxed text-stone-600">{theme.text}</p>
            </li>
          ))}
        </ul>

        <div className="rounded-xl bg-stone-900 p-8 text-stone-50 md:p-12">
          <h3 className="mb-8 border-b border-stone-800 pb-4 text-center font-serif text-2xl text-amber-400">
            Les acteurs du drame
          </h3>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {KEY_FIGURES.map((fig) => (
              <li key={fig.name} className="flex flex-col items-center text-center">
                <span
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-stone-700 bg-stone-800 font-serif text-2xl"
                  aria-hidden="true"
                >
                  {fig.name.charAt(0)}
                </span>
                <h4 className="text-lg font-bold text-stone-100">{fig.name}</h4>
                <p className="mb-2 block text-xs uppercase tracking-widest text-amber-400">{fig.role}</p>
                <p className="text-sm italic text-stone-300">{fig.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
