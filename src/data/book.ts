import pages from './pages.json';

export interface PageInfo {
  /** Numéro de page (1 à 146). */
  n: number;
  /** Dimensions du scan d'origine, en pixels. */
  w: number;
  h: number;
}

/** Scans du « Livre de combat », générés par scripts/build-pages.sh. */
export const PAGES: readonly PageInfo[] = pages;
export const TOTAL_PAGES = PAGES.length;

export const PAGE_SIZES = '(min-width: 1024px) 56rem, 100vw';
export const PAGE_VIEW_SIZES = '(min-width: 1024px) 60rem, calc(100vw - 2rem)';

export const clampPage = (n: number): number => Math.min(Math.max(Math.round(n) || 1, 1), TOTAL_PAGES);

export const pageInfo = (n: number): PageInfo => PAGES[clampPage(n) - 1];

export const pageImage = (n: number, width: 320 | 900 | 1600): string => `/livre/pages/page-${n}-${width}.webp`;

export const pageSrcSet = (n: number): string => {
  const { w } = pageInfo(n);
  return `${pageImage(n, 900)} ${Math.min(w, 900)}w, ${pageImage(n, 1600)} ${Math.min(w, 1600)}w`;
};

export const pagePdf = (n: number): string => `/livre/pdf/${n}.pdf`;

/** Adresse de la page dédiée (indexable) d'une page du livre. */
export const pageUrl = (n: number): string => `/livre-de-combat/page-${n}/`;

export interface TocItem {
  page: number;
  title: string;
  /** Lecture de l'écriture manuscrite incertaine. */
  uncertain?: boolean;
}

export interface TocSection {
  id: string;
  title: string;
  period: string;
  description: string;
  entries: readonly TocItem[];
}

/**
 * Table des matières établie d'après la table manuscrite de Théodore Girard
 * (scans p. 133-139, signée « Th. Girard »). Les documents des pages 125 à 146,
 * absents de sa table, sont décrits d'après les scans.
 */
export const TOC_SECTIONS: readonly TocSection[] = [
  {
    id: 'independant',
    title: "L'Indépendant",
    period: '1872-1874',
    description: "Coupures du journal L'Indépendant, dont les premiers articles et les « réponses » de Théodore Girard.",
    entries: [
      { page: 1, title: 'Théâtre – Marie Tudor' },
      { page: 2, title: 'Théâtre – Les Enfers de Paris' },
      { page: 3, title: 'Théâtre – Le Barbier de Séville' },
      { page: 3, title: 'Théâtre – Un excès de zèle' },
      { page: 4, title: 'La circulaire Lefranc' },
      { page: 5, title: 'La peine de mort' },
      { page: 7, title: 'Les palinodies ministérielles' },
      { page: 8, title: 'Indignations cléricales' },
      { page: 9, title: 'Un dernier mot' },
      { page: 10, title: 'Assises – Affaire Véron' },
      { page: 12, title: 'Lettre de Montils (cimetière)' },
      { page: 13, title: 'Réponse de Bourraud, maire [de Montils]' },
      { page: 13, title: 'Ma réponse' },
      { page: 14, title: 'La condamnation du Rappel' },
      { page: 14, title: 'Le mot du révérend' },
      { page: 15, title: 'La démission de M. Grévy' },
      { page: 16, title: 'Les élections de la Charente-Inférieure' },
      { page: 17, title: "Le vol de l'hôtel Vigier à Saintes", uncertain: true },
      { page: 18, title: 'Pour un fait personnel' },
      { page: 19, title: 'Ma réponse' },
      { page: 20, title: 'Les troubles de Charleville' },
      { page: 21, title: "L'affaire correctionnelle Vincent" },
      { page: 22, title: "Lettre au sujet de l'office d'huissier de Pérignac" },
      { page: 22, title: 'La manifestation bonapartiste de la Chapelle-des-Pots' },
      { page: 23, title: 'Au Progrès, à propos de cette manifestation' },
      { page: 24, title: 'Le départ de Rochefort' },
      { page: 24, title: 'Les courses des officiers à Saintes' },
      { page: 25, title: 'Le lendemain de la victoire' },
      { page: 26, title: 'Réponse à Thibaudeau' },
      { page: 27, title: 'Autre lettre de ce dernier (Courrier)' },
      { page: 29, title: 'La défense de Bazaine' },
      { page: 30, title: 'Zigzags' },
      { page: 31, title: 'Zigzags' },
      { page: 33, title: 'La révocation de M. Drouin' },
      { page: 34, title: 'Réponse du Journal des Charentes' },
      { page: 35, title: 'Incident Planat' },
      { page: 36, title: 'Ma lettre à ce sujet' },
      { page: 38, title: 'Réponse Planat' },
      { page: 39, title: 'Lettre Bossay' },
      { page: 39, title: 'Ma réponse' },
      { page: 40, title: 'Bibliographie' },
      { page: 41, title: 'Causerie – Trois personnages célèbres' },
      { page: 42, title: 'Causerie – La procession aux flambeaux' },
      { page: 43, title: 'Un tour de force préfectoral' },
      { page: 44, title: 'Ce qui fut, ce qui est, ce qui sera' },
      { page: 44, title: 'Lettre Lonla du Progrès' },
      { page: 45, title: 'Les professions de foi bonapartistes' },
      { page: 46, title: 'Le triomphe des honnêtes gens' },
      { page: 47, title: 'Causerie – La délibération municipale de Thénac' },
      { page: 48, title: 'Causerie – Les ouvriers Planat' },
      { page: 49, title: 'Causerie – Le manifeste de Plon-Plon' },
      { page: 50, title: 'Causerie – Réponse à la Volonté nationale' },
      { page: 51, title: 'Causerie – Les éléments impurs' },
      { page: 52, title: 'Causerie – Les élections municipales de Saintes' },
      { page: 52, title: 'Le cortège était maigre' },
      { page: 53, title: 'Causerie – Les excès républicains' },
      { page: 54, title: 'Causerie – Discours de Jolibois' },
      { page: 55, title: 'À propos de ma dernière causerie' },
    ],
  },
  {
    id: 'union-republicaine',
    title: "L'Union républicaine",
    period: '1875-1876',
    description:
      "Coupures de L'Union républicaine (Saintes) : la querelle du « capucin », les causeries d'Arthur Lanlair, les polémiques avec la presse bonapartiste et cléricale.",
    entries: [
      { page: 55, title: 'Un exorcisme' },
      { page: 56, title: 'Un regard au-delà des Pyrénées' },
      { page: 56, title: "À propos de la réorganisation de l'armée" },
      { page: 57, title: 'Cazeaux' },
      { page: 58, title: 'Les landes de Madion' },
      { page: 58, title: 'La Chose en police correctionnelle' },
      { page: 60, title: 'Du drame !' },
      { page: 61, title: 'La fin du carnaval' },
      { page: 61, title: 'Le capucin de Saint-Pierre' },
      { page: 62, title: "L'Union républicaine à Cognac" },
      { page: 63, title: "Lettre d'une dévote" },
      { page: 64, title: 'Ma réponse au capucin' },
      { page: 65, title: 'Lettre deuxième de la dévote' },
      { page: 66, title: "L'œuvre du Saint-Viatique" },
      { page: 67, title: 'Le capucin ne va pas mieux !' },
      { page: 67, title: 'Le capucin' },
      { page: 68, title: 'Lettre du capucin' },
      { page: 69, title: 'À M. le sous-préfet de Saintes' },
      { page: 70, title: 'Les quelques imbéciles sont des menteurs' },
      { page: 70, title: 'Le 16 mars' },
      { page: 71, title: 'Lettre Mouroux' },
      { page: 73, title: "C'est fini !" },
      { page: 74, title: "La fin d'un charivari" },
      { page: 75, title: 'Excellents confrères !' },
      { page: 75, title: 'La Saint-Eutrope' },
      { page: 76, title: 'Le Journal officiel (mouvement administratif)' },
      { page: 76, title: "Le Progrès en cour d'assises" },
      { page: 78, title: "L'éreintement du Courrier" },
      { page: 78, title: 'Adressez-vous à Gois !' },
      { page: 79, title: "L'ouverture du concours" },
      { page: 80, title: "Les martyrs de l'Appel au peuple" },
      { page: 81, title: "L'argent de la loterie" },
      { page: 81, title: 'Les perquisitions de Lyon' },
      { page: 82, title: "L'hôtel de Lamoureux" },
      { page: 82, title: 'Bizarreries' },
      { page: 83, title: "Les cléricaux et l'argent de la loterie" },
      { page: 84, title: "L'oiseau et Loizeau" },
      { page: 85, title: 'Le silence de la Volonté nationale' },
      { page: 85, title: 'Lettre de M. Loizeau' },
      { page: 85, title: 'Ma réponse' },
      { page: 87, title: 'Revue humoristique de la presse' },
      { page: 88, title: 'Réponse à la Volonté' },
      { page: 89, title: "Réponse à l'Ère nouvelle" },
      { page: 89, title: 'Les colporteurs' },
      { page: 90, title: '2e revue humoristique de la presse' },
      { page: 91, title: '3e revue de la presse' },
      { page: 92, title: '4e revue de la presse' },
      { page: 93, title: 'Un aveu pénible' },
      { page: 94, title: 'La campagne cléricale contre le conseil municipal de Saintes' },
      { page: 95, title: 'Réponse du Courrier' },
      { page: 96, title: 'Ma réponse au jésuite' },
      { page: 97, title: 'Autre réponse du Courrier : menteur et imbécile' },
      { page: 99, title: 'Une tempête de sacristie' },
      { page: 100, title: '5e revue de la presse' },
      { page: 102, title: 'Mort de M. Geay-Besse' },
      { page: 103, title: 'À qui la palme ?' },
      { page: 104, title: 'Allez, allez, ô jeunes filles' },
      { page: 104, title: 'La candidature de Cadoret' },
      { page: 105, title: 'Le coup de pied de Thèze' },
      { page: 106, title: 'Gambades du suffrage universel' },
      { page: 107, title: 'Les exercices du capucin' },
      { page: 107, title: 'Le procès des landes de Madion' },
      { page: 109, title: 'Théâtre – La Vie de bohème' },
      { page: 110, title: 'Théâtre – Le Pauvre Idiot' },
      { page: 111, title: 'Théâtre – Don César de Bazan' },
      { page: 111, title: 'Monseigneur ne répond pas' },
      { page: 112, title: "Théâtre – Trente ans ou la vie d'un joueur" },
      { page: 113, title: 'Fêtes de sainte Eustelle' },
      { page: 114, title: 'Le programme' },
      { page: 115, title: 'La pétition de ces messieurs, etc.' },
      { page: 116, title: 'Le programme (suite)' },
      { page: 117, title: 'Réponse au Progrès' },
      { page: 118, title: 'Fislon, du Courrier, répond' },
      { page: 119, title: "À propos d'un rêve étonnant (le même)" },
      { page: 120, title: 'La résurrection de Fislon' },
      { page: 120, title: 'Sa photographie' },
      { page: 121, title: 'Les cléricaux (trésor de charité)' },
      { page: 122, title: "Fin de l'événement de Dompierre" },
      { page: 123, title: 'Le phylloxera à Montils' },
    ],
  },
  {
    id: 'fin-du-recueil',
    title: 'Fin du recueil et documents ajoutés',
    period: '1876-1920',
    description:
      "La dernière coupure inscrite dans la table de Girard (1876), puis des documents ajoutés plus tard au recueil, décrits ici d'après les scans.",
    entries: [
      { page: 124, title: 'Les violettes napoléoniennes' },
      { page: 125, title: 'À la rédaction du Rappel charentais (coupure)' },
      { page: 126, title: "Discours manuscrit à la distribution des prix de l'école communale de Melle (24 août 1880)" },
      { page: 129, title: 'Discours manuscrit « de l\'année 1880 » (distribution des prix)' },
      { page: 133, title: 'Table manuscrite du recueil, signée « Th. Girard » (p. 133-139)' },
      { page: 140, title: 'Note manuscrite postérieure', uncertain: true },
      { page: 141, title: 'Notice du Dictionnaire des parlementaires français 1889-1940 (Jean Jolly), photocopie' },
      { page: 142, title: 'Coupure « L\'École et le Socialisme », signée Georges Girard (années 1920)', uncertain: true },
      { page: 143, title: 'Le Mémorial des Deux-Sèvres du jeudi 9 février 1899 (une)' },
      { page: 144, title: '« Nos compatriotes » : portrait de Théodore Girard paru dans Le Figaro (janvier 1899), suite p. 145' },
      { page: 146, title: 'Schéma manuscrit', uncertain: true },
    ],
  },
];

export const TABLE_OF_CONTENTS: readonly TocItem[] = TOC_SECTIONS.flatMap((section) => section.entries);

/** Notes de lecture vérifiées sur les scans, affichées sur les pages concernées. */
export const PAGE_NOTES: Readonly<Record<number, string>> = {
  4: "Septembre 1872 : la circulaire de Victor Lefranc, ministre de l'Intérieur de Thiers, interdit « toutes manifestations, tous banquets » pour l'anniversaire du 4 Septembre.",
  5: '« La peine de mort », article signé « TH. G. » et daté du 22 octobre 1872 (suite p. 6) : probablement le premier article de Théodore Girard.',
  55: "« Un exorcisme » : le 24 décembre 1874, un curé de Saintes vient asperger d'eau bénite une maison qui avait servi de loge maçonnique.",
  68: 'Lettre du père Alexandre de Saint-Joseph, prédicateur du carême 1875, datée du presbytère de Saint-Pierre de Saintes, 9 mars 1875.',
  124: "Juillet 1876 : le tribunal correctionnel de Saintes juge pour escroquerie Mouroux, ancien instituteur, qui exploitait la renommée des violettes du « Père la Violette ».",
  126: "Discours prononcé par Théodore Girard, adjoint au maire, au nom de l'administration municipale de Melle.",
  133: 'Table du recueil rédigée et signée par Théodore Girard (p. 133 à 139).',
  144: 'Portrait publié par Le Figaro quelques jours après le discours de Théodore Girard au Sénat du 19 janvier 1899 (suite p. 145).',
};

/** Titres de la table des matières qui commencent à la page donnée. */
export const tocEntriesForPage = (n: number): TocItem[] => TABLE_OF_CONTENTS.filter((item) => item.page === n);

export const tocTitlesForPage = (n: number): string[] => tocEntriesForPage(n).map((item) => item.title);

/** Partie(s) du recueil auxquelles appartient une page. */
export const sectionsForPage = (n: number): TocSection[] => {
  const direct = TOC_SECTIONS.filter((section) => section.entries.some((item) => item.page === n));
  if (direct.length) return direct;
  let found: TocSection = TOC_SECTIONS[0];
  for (const section of TOC_SECTIONS) {
    if (section.entries.some((item) => item.page < n)) found = section;
  }
  return [found];
};

export const pageAlt = (n: number): string => {
  const titles = tocTitlesForPage(n);
  const base = `Livre de combat de Théodore Girard, page ${n}`;
  return titles.length ? `${base} : ${titles.join(' ; ')}` : base;
};
