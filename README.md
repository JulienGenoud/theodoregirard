# Archives Théodore Girard

Site consacré à Théodore Girard (1851-1918) — maire de Melle, sénateur des Deux-Sèvres, garde des Sceaux — et à son
« Livre de combat » (1872-1876), recueil de 146 pages de coupures de presse et de notes.

**En ligne : <https://www.theodoregirard.fr>**

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build + pré-rendu HTML + sitemap dans dist/
npm run preview    # sert dist/ pour vérifier le build
npm run typecheck  # vérification TypeScript
```

## Organisation

| Chemin | Rôle |
| --- | --- |
| `index.html` | Gabarit : balises SEO (titre, description, Open Graph, données structurées JSON-LD) |
| `src/App.tsx` | Assemblage des sections et gestion des liens profonds (`#page-12`) |
| `src/components/` | Une section par fichier (en-tête, biographie, lecteur du livre, index…) |
| `src/data/content.ts` | Tous les textes du site |
| `src/data/book.ts` | Table des matières du livre et chemins des images |
| `src/data/pages.json` | Dimensions des 146 scans (généré) |
| `public/livre/pdf/` | PDF d'origine, un par page |
| `public/livre/pages/` | Scans en WebP 320/900/1600 px (générés par `scripts/build-pages.sh`) |
| `scripts/prerender.mjs` | Pré-rendu : écrit le HTML complet dans `dist/index.html` et génère `sitemap.xml` |

### Pourquoi un pré-rendu ?

L'ancienne version envoyait aux moteurs de recherche une page vide (`<div id="root"></div>`) remplie ensuite par
JavaScript. Désormais, `npm run build` produit un `index.html` contenant tout le texte, les titres et les liens : Google
et Bing indexent le contenu sans exécuter de JavaScript, puis React « hydrate » la page dans le navigateur.

### Ajouter ou remplacer une page du livre

1. Déposer le PDF (une page, un scan) dans `public/livre/pdf/N.pdf`.
2. Lancer `scripts/build-pages.sh` (prérequis : `brew install poppler webp imagemagick`).
3. Si besoin, ajouter le titre dans `TABLE_OF_CONTENTS` (`src/data/book.ts`).

## Mise en ligne

- **Automatique** : chaque `git push` sur `main` lance `.github/workflows/deploy.yml`, qui construit le site et le
  publie sur la branche `gh-pages` (servie par GitHub Pages sur www.theodoregirard.fr).
- **Manuelle** : `npm run deploy`.

## Référencement : à faire une fois (hors code)

1. **Google Search Console** (<https://search.google.com/search-console>) : ajouter la propriété de type *Domaine*
   `theodoregirard.fr`, valider avec l'enregistrement DNS TXT proposé (chez le registraire du domaine), puis dans
   *Sitemaps* envoyer `https://www.theodoregirard.fr/sitemap.xml` et, dans *Inspection de l'URL*, demander l'indexation
   de `https://www.theodoregirard.fr/`.
2. **Bing Webmaster Tools** (<https://www.bing.com/webmasters>) : importer le site depuis Search Console (Bing alimente
   aussi DuckDuckGo, Ecosia, Qwant).
3. **Liens entrants** : un site nouveau sans aucun lien met longtemps à être découvert. Les liens les plus utiles :
   l'article Wikipédia « Théodore Girard » (section *Liens externes*, en respectant les règles de Wikipédia sur les liens
   personnels), Wikidata, les sites patrimoniaux de Melle, de Montils et des Deux-Sèvres, les archives départementales.
