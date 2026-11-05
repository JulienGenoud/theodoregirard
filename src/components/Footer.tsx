import { ExternalLink, Mail } from 'lucide-react';
import { CONTACT_EMAIL, EXTERNAL_LINKS, FOOTER } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900 py-12 text-stone-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 text-sm sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="mb-4 font-serif text-lg text-stone-100">Archives Théodore Girard</h2>
          <p className="leading-relaxed">
            {FOOTER.about}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 text-amber-400 transition-colors hover:text-amber-300"
          >
            <Mail size={16} aria-hidden="true" />
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav aria-labelledby="liens-utiles">
          <h2 id="liens-utiles" className="mb-4 font-serif text-lg text-stone-100">
            Liens utiles
          </h2>
          <ul className="space-y-2">
            {EXTERNAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-amber-400"
                >
                  {link.label}
                  <ExternalLink size={12} aria-hidden="true" />
                  <span className="sr-only">(nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-serif text-lg text-stone-100">Crédits &amp; mentions légales</h2>
          <p className="leading-relaxed">
            {FOOTER.credits}
          </p>
          <p className="mt-2 leading-relaxed">
            Site personnel non commercial, sans cookie ni traceur. Hébergement : GitHub Pages (GitHub, Inc., 88 Colin P.
            Kelly Jr. Street, San Francisco, CA 94107, États-Unis).
          </p>
        </div>
      </div>
    </footer>
  );
}
