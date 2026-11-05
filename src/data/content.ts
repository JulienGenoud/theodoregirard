// Contenus textuels du site.
// Faits biographiques vérifiés : biographie du Sénat (dictionnaire Jolly), Wikipédia,
// data.bnf.fr, et les scans du recueil lui-même (numéros de page indiqués).

export const SITE_URL = 'https://www.theodoregirard.fr';
export const CONTACT_EMAIL = 'theogirard17800@gmail.com';

export const HERO = {
  badge: 'Livre de combat · 1872-1876',
  lifespan: '1851-1918',
  lead: "Des tranchées de la presse charentaise aux ors du ministère de la Justice : découvrez comment un jeune républicain anticlérical, acteur de la « guerre des journaux » saintongeaise, est devenu sénateur des Deux-Sèvres et garde des Sceaux de la Troisième République.",
  caption: 'Sénateur des Deux-Sèvres',
};

export const PORTRAIT = {
  src: '/images/portrait-theodore-girard-340.webp',
  width: 340,
  height: 340,
  alt: 'Portrait photographique de Théodore Girard vers 1915',
};

export const BIO_SUMMARY =
  "L'existence de Théodore Girard se divise nettement entre sa jeunesse militante en Charente-Inférieure, terre de combat contre le bonapartisme, et sa carrière d'homme d'État dans les Deux-Sèvres.";

export const BIO_INTRO =
  "Théodore Girard (Montils, 14 janvier 1851 – Paris, 13 octobre 1918) fut avoué, maire de Melle (1884-1909 et 1913-1918), sénateur des Deux-Sèvres de 1895 à sa mort, et garde des Sceaux, ministre de la Justice, dans le deuxième gouvernement Aristide Briand (1910-1911).";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  period: 'roots' | 'statesman';
}

export const BIOGRAPHY_EVENTS: TimelineEvent[] = [
  {
    year: '1851',
    title: 'Naissance en Saintonge',
    description:
      "Né le 14 janvier 1851 à Montils (Charente-Inférieure, aujourd'hui Charente-Maritime), dans l'arrondissement de Saintes, il grandit dans un terroir rural marqué par l'influence bonapartiste.",
    period: 'roots',
  },
  {
    year: '1872-1876',
    title: 'La guerre des plumes',
    description:
      "Jeune républicain, il rassemble dans un recueil – baptisé ici « Livre de combat » – les coupures de L'Indépendant puis de L'Union républicaine, dont ses propres articles, et en dresse lui-même la table, qu'il signe.",
    period: 'roots',
  },
  {
    year: '1876',
    title: 'Avoué à Melle',
    description:
      "Installé à Melle vers 1876 comme avoué, puis juge suppléant au tribunal civil, il y est élu conseiller municipal et adjoint au maire en 1878.",
    period: 'statesman',
  },
  {
    year: '1884',
    title: 'Maire de Melle',
    description:
      "Maire de Melle de 1884 à 1909, puis de nouveau de 1913 à sa mort. Adjoint, il avait salué en 1880 le vote par le conseil municipal de « la gratuité absolue de l'enseignement primaire ».",
    period: 'statesman',
  },
  {
    year: '1895',
    title: 'Sénateur des Deux-Sèvres',
    description:
      "Élu sénateur le 24 février 1895, réélu en 1900 et 1909, il siège jusqu'à sa mort, inscrit au groupe de l'Union républicaine. Il est secrétaire du Sénat (1902-1905) et, à plusieurs reprises, questeur.",
    period: 'statesman',
  },
  {
    year: '1899',
    title: 'Une voix écoutée',
    description:
      "Après son discours au Sénat du 19 janvier 1899 (interpellation sur l'affaire Picquart), Le Figaro, sous la plume d'un adversaire politique, décrit sa « parole vive, chaude, évidemment improvisée, l'accent d'un honnête homme qui se défend de songer à l'éloquence, et qui l'atteint sans y penser ».",
    period: 'statesman',
  },
  {
    year: '1910-1911',
    title: 'Garde des Sceaux',
    description:
      "Garde des Sceaux, ministre de la Justice dans le deuxième gouvernement Aristide Briand, du 3 novembre 1910 au 2 mars 1911 : un avoué de province entré au gouvernement sans avoir jamais siégé à la Chambre des députés.",
    period: 'statesman',
  },
  {
    year: '1918',
    title: 'Une fin soudaine',
    description:
      "Renversé par un taxi boulevard Saint-Michel, il meurt à Paris le 13 octobre 1918. Il est inhumé à Montils, sa commune natale, le 17 octobre : « Ni discours, ni couronnes ».",
    period: 'statesman',
  },
];

export const CONTEXT_INTRO = {
  title: 'Une France divisée (1870-1876)',
  text: "Ces archives ne sont pas neutres. Elles sont le témoignage brut d'une France qui hésite encore entre la monarchie, l'Empire et la République.",
};

export const CONTEXT_POINTS = [
  {
    title: "L'Ordre moral (1873-1876)",
    text: "Sous la présidence de Mac Mahon, la France conservatrice tente de « rechristianiser » le pays. C'est contre cette alliance du sabre et du goupillon que ferraillent les journaux républicains rassemblés par le jeune Girard.",
  },
  {
    title: 'Le bastion bonapartiste',
    text: "La Saintonge reste fidèle à l'Empire déchu. Le baron Eschassériaux, premier président du groupe de l'Appel au peuple (1873), y est tout-puissant. Être républicain ici, c'est faire face à une majorité hostile.",
  },
  {
    title: "L'école avant Jules Ferry",
    text: "Avant même les lois Ferry (1881-1882), Girard, adjoint au maire de Melle, salue en 1880 le vote de « la gratuité absolue de l'enseignement primaire » et exhorte les élèves à devenir « des citoyens utiles, honnêtes, honorables ».",
  },
];

export const BONAPARTIST_CONTEXT = {
  title: 'Pourquoi les Charentes étaient-elles bonapartistes ?',
  text: "Sous le Second Empire, le négoce des eaux-de-vie de Cognac bat des records d'expédition, porté par le chemin de fer, la navigation à vapeur et les traités de commerce, dont le traité franco-britannique du 23 janvier 1860 (dit Cobden-Chevalier). Pour beaucoup de Charentais, l'Empire reste synonyme de prospérité : Girard a dû construire sa carrière contre ce courant dominant.",
};

export interface Anecdote {
  title: string;
  year: string;
  pageRef: number;
  icon: 'flower' | 'megaphone' | 'ban';
  content: string;
  analysis: string;
}

export const ANECDOTES: Anecdote[] = [
  {
    title: "L'affaire des « violettes napoléoniennes »",
    year: '1876',
    pageRef: 124,
    icon: 'flower',
    content:
      "Juillet 1876 : le tribunal correctionnel de Saintes juge pour escroquerie un certain Mouroux, ancien instituteur. Il prétendait acheter le secret du « Père la Violette », vieil horticulteur de Chaumet dont les violettes fleurissaient en toute saison et avaient fourni la couronne portée par les pèlerins bonapartistes aux « augustes exilés de Chislehurst ». Par voie d'annonces, il promettait de « couvrir l'Europe entière des violettes de Chislehurst » : quelque 2 400 personnes lui envoyèrent un franc.",
    analysis:
      "Plus qu'une ferveur naïve des campagnes, l'affaire montre l'exploitation commerciale du culte bonapartiste de la violette, emblème de la famille impériale.",
  },
  {
    title: "Le « capucin » de l'insigne basilique",
    year: '1875',
    pageRef: 61,
    icon: 'megaphone',
    content:
      "Carême 1875 : prédicateur à la cathédrale Saint-Pierre de Saintes, le père Alexandre de Saint-Joseph – « le capucin » pour L'Union républicaine, qui note pourtant que « ce capucin est un carme » – tonne en chaire contre les libres-penseurs et les républicains. Arthur Lanlair lui répond de numéro en numéro, le journal publie des « lettres d'une dévote », et le père finit par écrire au rédacteur en chef (p. 61 à 68).",
    analysis:
      "Le clergé faisait ouvertement campagne pour les conservateurs ; la presse républicaine répliquait par l'ironie et la polémique.",
  },
  {
    title: 'Le 4 Septembre interdit !',
    year: '1872',
    pageRef: 4,
    icon: 'ban',
    content:
      "Septembre 1872 : Victor Lefranc, ministre de l'Intérieur de Thiers, interdit par circulaire « toutes manifestations, tous banquets » le 4 septembre, anniversaire de la proclamation de la République. Le journal s'indigne qu'« en 1872, sous un gouvernement républicain », on interdise de fêter la République quand les processions cléricales sont tolérées.",
    analysis:
      "La République, encore provisoire, n'ose pas fêter sa propre naissance. Les républicains choisissent la légalité : « Des désordres ne se sont produit nulle part. »",
  },
];

export const VOCABULARY = [
  {
    term: 'Bonaparteux',
    def: "Sobriquet méprisant des bonapartistes dans les journaux du recueil ; on lit aussi « badinguistes », de Badinguet, surnom moqueur de Napoléon III (« le petit Badinguet » désigne le Prince impérial).",
  },
  {
    term: 'Les légitimistes',
    def: "Partisans du comte de Chambord et du drapeau blanc, alliés de circonstance des bonapartistes contre les républicains : « cette alliance monstrueuse des légitimistes et des badinguistes » (p. 16).",
  },
  {
    term: "L'Ordre moral",
    def: 'La coalition conservatrice et religieuse au pouvoir (1873-1876), que les journaux du recueil combattent férocement.',
  },
  {
    term: "L'insigne basilique",
    def: "Titre officiel de la cathédrale Saint-Pierre de Saintes, érigée en basilique mineure en 1870, que la presse républicaine reprend avec ironie : c'est là que prêche le « capucin » pendant le carême de 1875.",
  },
];

export const EVOLUTION_ANALYSIS = {
  title: 'De la satire au Sénat',
  text: "En 1872, c'est le temps de la jeunesse et de la conquête : attaque, caricature, journalisme de combat. Le recueil se clôt sur deux discours manuscrits de 1880, prononcés par Girard, adjoint au maire, aux distributions des prix de l'école communale de Melle : le ton y est posé, institutionnel. La République a gagné ; il s'agit désormais de construire.",
};

export const BOOK_THEMES = [
  {
    icon: 'feather',
    title: 'La satire comme arme',
    text: "Face à la censure, l'humour est un refuge : le recueil regorge des « Causeries » d'Arthur Lanlair, qui raillent les « bonaparteux » et les pèlerinages politiques.",
  },
  {
    icon: 'eagle',
    title: "L'ombre de l'Empire",
    text: "Le recueil trahit la crainte d'une restauration impériale au profit du Prince impérial, « Napoléon IV » (Napoléon III meurt en janvier 1873). Le parti bonapartiste de l'« Appel au peuple » y est dénoncé comme une menace pour la République.",
  },
  {
    icon: 'scale',
    title: 'Justice et presse',
    text: "Procès en diffamation, duels d'honneur, préfets censeurs… Ce recueil est le témoignage brut de la difficile conquête de la liberté de la presse.",
  },
];

export const KEY_FIGURES = [
  {
    name: 'Arthur Lanlair',
    role: 'Le chroniqueur',
    desc: "Pseudonyme d'un chroniqueur de L'Indépendant (1874) puis de L'Union républicaine (1875) : ses « Causeries » et ses répliques rythment le recueil.",
  },
  {
    name: 'Baron Eschassériaux',
    role: "L'adversaire",
    desc: 'Figure tutélaire du bonapartisme saintongeais. La cible la plus fréquente du recueil reste toutefois la presse bonapartiste, au premier rang Le Progrès de la Charente-Inférieure.',
  },
  {
    name: 'Le « capucin »',
    role: 'Le prédicateur',
    desc: "Le père Alexandre de Saint-Joseph, carme, prédicateur du carême 1875 à Saintes, qui transforme la chaire en tribune politique.",
  },
];

export const RADIO = {
  tagline: 'Théodore Girard, une conscience de la République',
  station: 'Radio Accords Poitiers',
  author: 'Dominique Breillat',
  description:
    "Dominique Breillat, professeur émérite de droit public à l'Université de Poitiers et chroniqueur de Radio Accords, consacre une émission au parcours de Théodore Girard.",
  src: '/audio/emission-radio-theodore-girard.mp3',
  durationLabel: '11 min 24 s',
  durationIso: 'PT11M24S',
  sizeLabel: '8 Mo',
  credit: 'Archives sonores — Dominique Breillat © Radio Accords Poitiers',
};

export const EXTERNAL_LINKS = [
  { label: 'Sénat : biographie', href: 'https://www.senat.fr/senateur-3eme-republique/girard_theodore1638r3.html' },
  {
    label: 'Sénat : table nominative 1918-1920',
    href: 'https://www.senat.fr/table-nominative-archives/girard_theodore1638r3/3R/1918_1920.html',
  },
  { label: 'Wikipédia : Théodore Girard', href: 'https://fr.wikipedia.org/wiki/Th%C3%A9odore_Girard' },
  { label: 'BnF : notice d\'autorité (data.bnf.fr)', href: 'https://data.bnf.fr/ark:/12148/cb13210644d' },
  {
    label: 'Sépulture à Montils : fiche des Cimetières du Mellois',
    href: 'https://cimetieresmellois.fr/MELLE%2079%20GIRARD%20THEODORE.html',
  },
  {
    label: 'Gallica : rechercher « Théodore Girard »',
    href: 'https://gallica.bnf.fr/services/engine/search/sru?operation=searchRetrieve&version=1.2&query=%28gallica%20all%20%22Th%C3%A9odore%20Girard%22%29',
  },
];
