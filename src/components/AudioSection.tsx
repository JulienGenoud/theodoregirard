import { Download, Headphones, Volume2 } from 'lucide-react';
import { RADIO } from '../data/content';

export default function AudioSection() {
  return (
    <section id="radio" aria-labelledby="radio-titre" className="relative overflow-hidden bg-stone-900 py-20 text-stone-100 sm:py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400" aria-hidden="true">
            <Volume2 size={32} />
          </div>
          <h2 id="radio-titre" className="mb-4 font-serif text-4xl">
            Émission de radio
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-amber-500" aria-hidden="true" />
          <p className="mx-auto max-w-2xl font-serif text-xl italic text-stone-300">{RADIO.tagline}</p>
        </div>

        <div className="rounded-2xl border border-stone-700 bg-stone-800/50 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-xl bg-stone-700 text-amber-400 shadow-inner" aria-hidden="true">
              <Headphones size={64} strokeWidth={1.5} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-2 font-serif text-2xl text-white">{RADIO.station}</h3>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-400">Par {RADIO.author}</p>
              <p className="mb-6 text-sm leading-relaxed text-stone-200">{RADIO.description}</p>

              <div className="rounded-xl border border-stone-700 bg-stone-900/80 p-4 shadow-inner">
                <audio controls preload="none" className="h-10 w-full" aria-label={`Écouter l'émission de ${RADIO.author} sur Théodore Girard`}>
                  <source src={RADIO.src} type="audio/mpeg" />
                  Votre navigateur ne lit pas l'audio :{' '}
                  <a href={RADIO.src} className="underline">
                    téléchargez l'émission (MP3)
                  </a>
                  .
                </audio>
              </div>
              <p className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-stone-300 md:justify-start">
                <span>Durée : {RADIO.durationLabel}</span>
                <a href={RADIO.src} download className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 hover:underline">
                  <Download size={14} aria-hidden="true" /> Télécharger le MP3 ({RADIO.sizeLabel})
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs italic text-stone-400">{RADIO.credit}</p>
      </div>
    </section>
  );
}
