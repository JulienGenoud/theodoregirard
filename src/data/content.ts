// Textes du site. Règle : aucune affirmation sans source.
// Sources : biographie du Sénat (dictionnaire Jolly), Wikipédia, data.bnf.fr,
// cimetieresmellois.fr (coupures du Mémorial des Deux-Sèvres et du Siècle),
// émission « Rue des hommes politiques » (Radio Accords, transcription relue),
// et les scans du recueil (numéros de page indiqués entre parenthèses).
// Vérification ligne par ligne : novembre 2026.

export const SITE_URL = 'https://www.theodoregirard.fr';
export const CONTACT_EMAIL = 'theogirard17800@gmail.com';

/** Nom donné ici au document (il ne porte pas de titre : sa table manuscrite est intitulée « Table »). */
export const BOOK_NAME = 'Recueil de Théodore Girard';

export const HERO = {
  badge: 'Recueil de presse · 1872-1876',
  lifespan: '1851-1918',
  titleLine1: 'Du journal',
  titleLine2: 'au Sénat',
  lead: "Né en 1851 à Montils, Théodore Girard collabore jeune aux journaux républicains de Saintes, dont ce recueil réunit des coupures, avec la table qu'il en a dressée et signée. Avoué puis maire à Melle, il devient sénateur des Deux-Sèvres (1895-1918) et garde des Sceaux (1910-1911).",
  caption: 'Sénateur des Deux-Sèvres, vers 1915',
};

export const PORTRAIT = {
  src: '/images/portrait-theodore-girard-340.webp',
  width: 340,
  height: 340,
  alt: 'Portrait photographique de Théodore Girard vers 1915',
};

export const BIO_TITLE = 'De la Saintonge aux Deux-Sèvres';

export const BIO_SUMMARY =
  "Né en Charente-Inférieure en 1851, Théodore Girard y collabore jeune aux journaux républicains de Saintes ; installé comme avoué à Melle à la fin de 1876, il fait ensuite carrière dans les Deux-Sèvres, dont il devient sénateur en 1895.";

export const BIO_INTRO =
  "Théodore Girard (Montils, 14 janvier 1851 – Paris, 13 octobre 1918) fut avoué, maire de Melle (à partir de 1884 selon le Sénat, 1885 selon la radio), sénateur des Deux-Sèvres de 1895 à sa mort, et garde des Sceaux, ministre de la Justice, dans le deuxième gouvernement Aristide Briand (1910-1911).";

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
      "Né le 14 janvier 1851 à Montils (Charente-Inférieure, aujourd'hui Charente-Maritime), dans l'arrondissement de Saintes. D'après l'arbre généalogique familial joint au recueil (p. 146), son père, Thomas Girard, était cultivateur.",
    period: 'roots',
  },
  {
    year: '1872-1876',
    title: 'Les journaux républicains de Saintes',
    description:
      "Après des études de droit à Paris, il réside à Saintes au lendemain de la guerre de 1870 et collabore aux journaux républicains L'Indépendant de la Charente-Inférieure et L'Union républicaine (émission de Radio Accords). Ce recueil en réunit des coupures ; il en a dressé et signé la table (p. 133-139).",
    period: 'roots',
  },
  {
    year: '1876',
    title: 'Avoué à Melle',
    description:
      "Installé comme avoué à Melle fin décembre 1876 (le 23 décembre selon l'arbre familial, p. 146), puis juge suppléant au tribunal civil, il entre au conseil municipal et devient adjoint au maire (en 1878 selon le dictionnaire Jolly, ou nommé le 9 février 1881 d'après la p. 146).",
    period: 'statesman',
  },
  {
    year: '1884',
    title: 'Maire de Melle',
    description:
      "Maire de Melle à partir de 1884 selon la biographie du Sénat (ou 1885 selon l'émission radio, après le décès de Clément de Reignié), il le reste « pendant plus de vingt ans », écrit Le Mémorial des Deux-Sèvres en 1911 (jusqu'en 1908 selon la p. 146, 1909 selon Wikipédia), puis retrouve la mairie (en 1913 selon Wikipédia, source non corroborée), qu'il occupe encore à sa mort.",
    period: 'statesman',
  },
  {
    year: '1895',
    title: 'Sénateur des Deux-Sèvres',
    description:
      "Élu sénateur le 24 février 1895, après la mort de Jean Macé, sénateur inamovible, par 513 voix sur 776 votants, réélu en 1900 et 1909, il siège jusqu'à sa mort, inscrit au groupe de l'Union républicaine. Il est secrétaire du Sénat (1902-1905) et, à plusieurs reprises, questeur (en 1903 selon Jolly, 1908 selon la radio et la p. 146, puis 1909-1910 et de 1914 à 1918).",
    period: 'statesman',
  },
  {
    year: '1899',
    title: 'Une voix écoutée',
    description:
      "Le 19 janvier 1899, il intervient au Sénat dans la discussion d'une interpellation sur le retard de la Cour de cassation à statuer dans les affaires Picquart. Peu après, Le Figaro publie de lui un portrait « crayonné par un adversaire politique », selon le journal qui le reproduit (p. 144-145) : « Parole vive, chaude, évidemment improvisée, l'accent d'un honnête homme qui se défend de songer à l'éloquence, et qui l'atteint sans y penser. »",
    period: 'statesman',
  },
  {
    year: '1910-1911',
    title: 'Garde des Sceaux',
    description:
      "Garde des Sceaux, ministre de la Justice dans le deuxième gouvernement Aristide Briand, du 3 novembre 1910 au 2 mars 1911 (le cabinet avait démissionné le 27 février). Il y défend son budget et annonce un projet de loi sur la répression de l'avortement. Sénateur depuis 1895, il n'a jamais été député.",
    period: 'statesman',
  },
  {
    year: '1918',
    title: 'Mort accidentelle',
    description:
      "Renversé par un taxi-auto boulevard Saint-Michel, il meurt de ses blessures le 13 octobre 1918 dans une clinique de la rue de la Chaise, à Paris. Ses obsèques sont fixées au jeudi 17 octobre à Montils, sa commune natale, où il repose : « Ni discours, ni couronnes », précise Le Mémorial des Deux-Sèvres.",
    period: 'statesman',
  },
];

export const CONTEXT_INTRO = {
  title: 'Monarchistes, bonapartistes et républicains (1870-1880)',
  text: "La plupart des coupures du recueil viennent de journaux républicains qui affichent leur camp : « Notre drapeau est hardiment déployé ; c'est le drapeau de la démocratie républicaine », écrit L'Union républicaine en mars 1875 (p. 70). Elles datent des années où monarchistes, bonapartistes et républicains se disputent le régime.",
};

export const CONTEXT_POINTS = [
  {
    title: "L'Ordre moral (à partir de 1873)",
    text: "Après la chute de Thiers (24 mai 1873), sous la présidence du maréchal de Mac-Mahon, le gouvernement du duc de Broglie mène une politique « conservatrice et cléricale » (Larousse). Les journaux du recueil la combattent : ils dénoncent « la presse de l'ordre moral » (p. 25) et les « perquisitions arbitraires faites au nom de l'ordre moral » à Lyon (p. 81).",
  },
  {
    title: 'Le bastion bonapartiste',
    text: "Aux élections de 1876, la Charente-Inférieure élit cinq bonapartistes sur sept députés. Le baron Eschassériaux, qui préside la réunion parlementaire de l'Appel au peuple, « domine la scène politique de la haute Saintonge » (Wikipédia). En mai 1873, le bonapartiste Boffinton y gagne une élection partielle « avec 3,000 voix de majorité », grâce aux campagnes, quand « toutes les villes » ont voté républicain (L'Indépendant, p. 16).",
  },
  {
    title: "L'école avant les lois Ferry",
    text: "Avant même les lois Ferry (1881-1882), Girard, adjoint au maire de Melle, préside en 1880 la distribution des prix de l'école communale « au nom de l'administration municipale ». Dans un second discours daté de 1880, il rappelle que « le Conseil municipal de Melle a lui-même voté […] la gratuité absolue de l'enseignement primaire » et exhorte les élèves à devenir « des citoyens utiles, honnêtes, honorables » (p. 126-132).",
  },
];

export const BONAPARTIST_CONTEXT = {
  title: 'Le bonapartisme dans les Charentes',
  text: "Sous le Second Empire, le commerce des eaux-de-vie charentaises connaît des « records d'expédition » avec « l'essor du chemin de fer, de la navigation à vapeur et de la signature de traités de commerce » (Gilles Bernard, Académie d'Angoumois), dont le traité franco-britannique du 23 janvier 1860, dit Cobden-Chevalier. Les bonapartistes vantent les « vingt années de prospérité » de l'Empire, « éternel thème des bonapartistes », écrit L'Indépendant en février 1873 ; le journal admet qu'un paysan « attribuait, lui aussi, à l'empereur, le progrès matériel qui se fit sous son gouvernement » (p. 9).",
};

export const STORIES_INTRO = {
  eyebrow: 'Histoires tirées du recueil',
  title: 'Trois épisodes (1872-1876)',
  text: 'Une circulaire ministérielle (1872), un prédicateur de carême (1875), un procès pour escroquerie (1876) : trois affaires racontées par les journaux du recueil.',
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
      "Juillet 1876 : Mouroux, « ancien instituteur à Saintes », comparaît devant le tribunal correctionnel de Saintes, « poursuivi comme escroc ». Il avait négocié l'achat du secret de Réal, dit le « Père la Violette », vieux cultivateur de Chaumet dont les violettes poussaient « en toute saison et malgré l'hiver » ; c'est de Chaumet, ajoute le journal, que sortit jadis la couronne de violettes portée par les pèlerins bonapartistes chez les « augustes exilés de Chislehurst ». Par la presse, Mouroux sollicita des souscriptions « pour couvrir l'Europe entière des violettes de Chislehurst » ; à son annonce « Offre 100 fr. par jour », 2 400 personnes répondirent en envoyant chacune un franc.",
    analysis:
      "Selon le ministère public, Mouroux a usé de « manœuvres frauduleuses » ; la défense plaide sa bonne foi, et l'affaire est renvoyée au 23 juillet (p. 125). « Père la Violette » était aussi le surnom de Napoléon dans les chansons populaires de la Restauration, quand la violette était « un symbole de la cause bonapartiste » (Fondation Napoléon).",
  },
  {
    title: "Le « capucin » de l'insigne basilique",
    year: '1875',
    pageRef: 61,
    icon: 'megaphone',
    content:
      "Carême 1875 : à Saint-Pierre de Saintes, « l'insigne basilique », prêche le père Alexandre de Saint-Joseph – « le capucin » pour L'Union républicaine, qui note pourtant que « ce capucin est un carme ». Selon Arthur Lanlair, il insulte en chaire « la République et les républicains » et les « libres-penseurs » ; Lanlair lui répond de numéro en numéro, le journal publie deux lettres signées « Une dévote », et le père écrit le 9 mars 1875 au rédacteur en chef pour obtenir une « note rectificative » (p. 61 à 69).",
    analysis:
      "« Vous parlez politique dans votre chaire, vous me permettrez de parler politique dans mon journal, et de vous répondre », écrit Arthur Lanlair au prédicateur (p. 64).",
  },
  {
    title: 'La circulaire Lefranc',
    year: '1872',
    pageRef: 4,
    icon: 'ban',
    content:
      "Septembre 1872 : après une première circulaire de Victor Lefranc, ministre de l'Intérieur de Thiers, « interdisant toutes manifestations le jour du 4 septembre », une seconde vise le 22, anniversaire de « la fondation de la 1re République Française ». Le journal (article signé « S. ») s'indigne qu'« en 1872, sous un gouvernement républicain », un ministre interdise ce jour-là « toutes manifestations, tous banquets », alors que « des manifestations cléricales se produisent sur tous les points de la France ».",
    analysis:
      "Le journal admet qu'il soit « inopportun, quand l'ennemi règne encore dans une partie du pays », de fêter le 4 Septembre. Le 4 septembre, souligne-t-il, les républicains ont donné « l'exemple du respect à la légalité » : « Des désordres ne se sont produit nulle part. »",
  },
];

export const KEYS_TITLES = {
  section: 'Les clés de lecture',
  vocabulary: 'Le vocabulaire du recueil',
};

export const VOCABULARY = [
  {
    term: 'Bonaparteux',
    def: "Sobriquet méprisant des bonapartistes dans les journaux du recueil ; on lit aussi « badinguistes » (p. 16) ou « badinguettistes » (p. 9), de Badinguet, surnom moqueur de Napoléon III (« le petit Badinguet » désigne le Prince impérial, p. 22-23).",
  },
  {
    term: 'Les légitimistes',
    def: "Partisans du comte de Chambord et du drapeau blanc, alliés de circonstance des bonapartistes contre les républicains : « cette alliance monstrueuse des légitimistes et des badinguistes » (p. 16).",
  },
  {
    term: "L'Ordre moral",
    def: "Politique « conservatrice et cléricale » (Larousse) d'une coalition des droites, menée à partir de mai 1873 sous la présidence de Mac-Mahon. Les journaux du recueil s'en prennent à « la presse de l'ordre moral » (p. 25) et aux « agents de l'ordre moral » (p. 81).",
  },
  {
    term: "L'insigne basilique",
    def: "Formule employée pour Saint-Pierre de Saintes, élevée au rang de basilique mineure par un décret du 8 avril 1870 : un bulletin religieux situe son association « dans l'insigne basilique de St-Pierre » (p. 66). La presse républicaine la reprend avec ironie (p. 31) ; c'est là que prêche « le capucin » pendant le carême de 1875 (p. 61).",
  },
];

export const EVOLUTION_ANALYSIS = {
  title: 'Des polémiques de presse aux discours de 1880',
  text: "De 1872 à 1877, les coupures réunies par le jeune Girard mêlent polémique et humour : on y lit une « Revue humoristique de la presse régionale » (p. 87) ou un discours bonapartiste parodié à coups de « gouvernement de l'Emperrrreur » (p. 54). Suivent deux discours manuscrits datés de 1880 (p. 126-132), pour des distributions des prix à Melle, où l'orateur préside « au nom de l'administration municipale » et salue « une ère nouvelle » où « régneront la paix, l'union, la concorde au sein de la République française » ; puis la table manuscrite que Girard signe (p. 133-139). En 1895, il entre au Sénat.",
};

export const ANALYSIS_INTRO = {
  title: 'Analyse historique',
  text: 'Les thèmes qui reviennent dans les coupures du recueil, avec renvoi aux pages.',
  figuresTitle: 'Trois figures du recueil',
};

export const BOOK_THEMES = [
  {
    icon: 'feather',
    title: 'La satire comme arme',
    text: "Arthur Lanlair signe dix « Causeries » dans L'Indépendant (septembre-décembre 1874) : il y raille les « bonaparteux » (p. 41) et « la semaine des pèlerinages » (p. 42), et ailleurs le « pèlerin de Chislehurst » (p. 45). « Nous rions parce que nous ne pouvons faire autre chose », écrivait La Chose, petit journal de Saintes condamné en 1875 pour avoir « parlé politique » (p. 58-60).",
  },
  {
    icon: 'eagle',
    title: "L'ombre de l'Empire",
    text: "Napoléon III meurt en exil en janvier 1873 (p. 9). En août, selon Le Progrès, des bonapartistes acclament « Napoléon IV », le Prince impérial, que L'Indépendant surnomme « le petit Badinguet » (p. 22-23). Arthur Lanlair voit dans l'« Appel au peuple » un « piège grossier » (p. 45) ; en 1875, L'Union républicaine admet que « le bonapartisme y conserve encore de puissantes racines » (p. 86).",
  },
  {
    icon: 'scale',
    title: 'Justice et presse',
    text: "Le rédacteur du Progrès condamné à 500 francs d'amende pour « offenses envers le président de la République » (p. 77), un journaliste « prévenu de diffamation » (p. 54), une affaire de duel entre journalistes (p. 101), un préfet qui interdit la vente du Progrès sur la voie publique (p. 43)… « Demain, nous pouvons être frappés à notre tour », écrit L'Union républicaine en mai 1875 (p. 77).",
  },
];

export const KEY_FIGURES = [
  {
    name: 'Arthur Lanlair',
    role: 'Le chroniqueur',
    desc: "Signature des dix « Causeries » de L'Indépendant (septembre-décembre 1874), puis de chroniques de L'Union républicaine (1875). Selon La Volonté nationale, « il est facile de reconnaître l'auteur sous ce masque apparent » (p. 50). Dans sa table, Girard intitule « Ma réponse au jésuite » un article signé Arthur Lanlair (p. 96).",
  },
  {
    name: 'Baron Eschassériaux',
    role: "L'adversaire",
    desc: "Eugène Eschassériaux (1823-1906), député de la Charente-Inférieure, « domine la scène politique de la haute Saintonge » (Wikipédia). Le Progrès de la Charente-Inférieure, que L'Indépendant appelle « le journal de M. Eschassériaux » (p. 19), est le journal adverse le plus souvent nommé dans le recueil.",
  },
  {
    name: 'Le « capucin »',
    role: 'Le prédicateur',
    desc: "Le père Alexandre de Saint-Joseph, carme, prédicateur du carême de 1875 à Saint-Pierre de Saintes. L'Union républicaine le surnomme « le capucin » et lui lance : « vous parlez politique dans votre chaire » (p. 64).",
  },
];

export const BOOK_INTRO =
  "Les 146 pages du recueil, à feuilleter en intégralité : pour l'essentiel des coupures de presse de 1872 à 1876, que Théodore Girard a répertoriées dans une table manuscrite signée, puis des documents plus tardifs.";

export const BOOK_ABOUT =
  "Recueil de 146 pages : les coupures de presse (1872-1876) dont Théodore Girard (1851-1918) a dressé et signé la table, au temps où il écrivait dans la presse républicaine de Saintes, puis des documents plus tardifs. Girard deviendra maire de Melle, sénateur des Deux-Sèvres et garde des Sceaux.";

export const RADIO = {
  tagline: '« Le portrait d’un honnête homme »',
  series: 'Rue des hommes politiques',
  station: 'Radio Accords',
  author: 'Dominique Breillat',
  description:
    "Dans la série « Rue des hommes politiques », Dominique Breillat, professeur émérite de droit public à l'Université de Poitiers et chroniqueur de Radio Accords, retrace la carrière de Théodore Girard.",
  src: '/audio/emission-radio-theodore-girard.mp3',
  durationLabel: '11 min 24 s',
  durationIso: 'PT11M24S',
  sizeLabel: '8 Mo',
  credit: 'Archive sonore — « Rue des hommes politiques », Dominique Breillat, Radio Accords',
};

export const FOOTER = {
  about:
    'Site consacré à Théodore Girard (1851-1918) et au recueil de coupures de presse (1872-1876) dont il a dressé et signé la table.',
  credits:
    "Coupures et manuscrits du XIXe siècle : domaine public ; documents du XXe siècle (p. 141, 142 et 146) : droits réservés. Portrait : Théodore Girard vers 1915, collection de la famille Girard (Wikimedia Commons). Émission radio : « Rue des hommes politiques », Dominique Breillat, Radio Accords.",
};

export const EXTERNAL_LINKS = [
  { label: 'Sénat : biographie', href: 'https://www.senat.fr/senateur-3eme-republique/girard_theodore1638r3.html' },
  {
    label: 'Sénat : table nominative 1918-1920',
    href: 'https://www.senat.fr/table-nominative-archives/girard_theodore1638r3/3R/1918_1920.html',
  },
  { label: 'Wikipédia : Théodore Girard', href: 'https://fr.wikipedia.org/wiki/Th%C3%A9odore_Girard' },
  { label: "BnF : notice d'autorité (data.bnf.fr)", href: 'https://data.bnf.fr/ark:/12148/cb13210644d' },
  {
    label: 'Sépulture à Montils : fiche des Cimetières du Mellois',
    href: 'https://cimetieresmellois.fr/MELLE%2079%20GIRARD%20THEODORE.html',
  },
  {
    label: 'Gallica : rechercher « Théodore Girard »',
    href: 'https://gallica.bnf.fr/services/engine/search/sru?operation=searchRetrieve&version=1.2&query=%28gallica%20all%20%22Th%C3%A9odore%20Girard%22%29',
  },
];
