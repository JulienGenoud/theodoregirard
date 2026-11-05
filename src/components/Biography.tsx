import { BIOGRAPHY_EVENTS, BIO_INTRO, BIO_SUMMARY, BIO_TITLE } from '../data/content';

export default function Biography() {
  return (
    <section id="biographie" aria-labelledby="biographie-titre" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 id="biographie-titre" className="mb-4 font-serif text-3xl text-stone-900 sm:text-4xl">
            {BIO_TITLE}
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-amber-700" aria-hidden="true" />
          <p className="mx-auto max-w-2xl font-serif text-lg text-stone-700">{BIO_SUMMARY}</p>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-stone-600">{BIO_INTRO}</p>
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-stone-200 md:block" aria-hidden="true" />
          <ol className="relative ml-4 space-y-12 border-l-2 border-stone-200 md:ml-0 md:border-l-0">
          {BIOGRAPHY_EVENTS.map((event, idx) => (
            <li key={event.title} className="group relative pl-8 md:flex md:items-center md:pl-0">
              <span
                className={`absolute -left-[9px] top-0 z-10 h-5 w-5 rounded-full border-4 border-white shadow transition-transform group-hover:scale-125 md:left-1/2 md:-ml-[10px] ${
                  event.period === 'roots' ? 'bg-amber-600' : 'bg-stone-800'
                }`}
                aria-hidden="true"
              />
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                <p
                  className={`font-sans text-sm font-bold tracking-widest ${
                    event.period === 'roots' ? 'text-amber-800' : 'text-stone-600'
                  }`}
                >
                  {/^\d{4}$/.test(event.year) ? <time dateTime={event.year}>{event.year}</time> : <span>{event.year}</span>}
                </p>
                <h3 className="mb-2 mt-1 font-serif text-xl font-bold text-stone-800">{event.title}</h3>
                <p className="font-serif italic leading-relaxed text-stone-600">{event.description}</p>
              </div>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
