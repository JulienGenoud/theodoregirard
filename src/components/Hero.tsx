import { BookOpen, Scroll } from 'lucide-react';
import { HERO, PORTRAIT } from '../data/content';

export default function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="titre-principal"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-100 pb-16 pt-28 lg:pt-20"
    >
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-8 text-center lg:text-left">
          <p className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-900">
            {HERO.badge}
          </p>
          <h1 id="titre-principal" className="font-serif leading-tight text-stone-900">
            <span className="mb-3 block text-2xl tracking-wide text-stone-700 sm:text-3xl">
              Théodore Girard <span className="whitespace-nowrap">({HERO.lifespan})</span>
            </span>
            <span className="block text-5xl lg:text-7xl">
              La Forge d'un <br />
              <span className="italic text-amber-700">Républicain</span>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl font-serif text-xl leading-relaxed text-stone-700 lg:mx-0">{HERO.lead}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#livre"
              className="group flex items-center justify-center gap-2 rounded bg-stone-900 px-8 py-4 text-stone-50 shadow-lg transition-all hover:bg-stone-800"
            >
              <BookOpen size={20} className="transition-transform group-hover:scale-110" aria-hidden="true" />
              Consulter le Livre de combat
            </a>
            <a
              href="#histoires"
              className="flex items-center justify-center gap-2 rounded border border-stone-300 bg-white px-8 py-4 text-stone-700 shadow-sm transition-all hover:bg-stone-50"
            >
              <Scroll size={20} aria-hidden="true" />
              Histoires oubliées
            </a>
          </div>
        </div>

        <div className="relative">
          <figure className="relative mx-auto h-64 w-64 overflow-hidden rounded-full border-8 border-white bg-stone-200 shadow-2xl sepia-[.2] sm:h-80 sm:w-80 lg:h-[30rem] lg:w-[30rem]">
            <img
              src={PORTRAIT.src}
              width={PORTRAIT.width}
              height={PORTRAIT.height}
              alt={PORTRAIT.alt}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <span className="block text-center font-serif text-lg italic text-white">« {HERO.caption} »</span>
            </figcaption>
          </figure>
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-200/50 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-stone-300/50 blur-3xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
