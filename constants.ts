
export const APP_TITLE = "Archives Girard : La Forge d'un Républicain (1872-1918)";

// Liste complète des pages triées de 1 à 146 (fichiers PDF locaux dans /public)
export const BOOK_PAGES_IDS = Array.from({ length: 146 }, (_, i) => `${i + 1}.pdf`);

export const TOTAL_PAGES = BOOK_PAGES_IDS.length;

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  period: "roots" | "statesman";
}

export const BIOGRAPHY_EVENTS: TimelineEvent[] = [
  // Période 1 : Les Racines et le Combat (1851-1880)
  {
    year: "1851",
    title: "Naissance en Saintonge",
    description: "Né le 14 janvier à Montils (Charente-Inférieure), fils de cultivateur. Il grandit dans un terroir rural marqué par l'influence bonapartiste.",
    period: "roots"
  },
  {
    year: "1872-1876",
    title: "La Guerre des Plumes",
    description: "Jeune militant, il compile le 'Livre de Combat'. Il vit au rythme des procès de presse et des luttes contre l'Ordre Moral à Saintes et Cognac.",
    period: "roots"
  },
  // Période 2 : L'Homme d'État (1880-1918)
  {
    year: "1884",
    title: "Maire de Melle",
    description: "Installation dans les Deux-Sèvres. Il devient Maire de Melle, mandat qu'il gardera 25 ans. Il y défend l'école laïque et la République.",
    period: "statesman"
  },
  {
    year: "1895",
    title: "Sénateur des Deux-Sèvres",
    description: "Élu Sénateur le 24 février. Il siège au groupe de la Gauche Démocratique et devient une conscience morale de la Haute Assemblée.",
    period: "statesman"
  },
  {
    year: "1910",
    title: "Garde des Sceaux",
    description: "Ministre de la Justice dans le gouvernement Aristide Briand. Il incarne la méritocratie républicaine au sommet de l'État.",
    period: "statesman"
  },
  {
    year: "1918",
    title: "Une Fin Discrète",
    description: "Il s'éteint à Paris le 13 octobre. Le Figaro salue 'la parole vive d'un honnête homme qui atteint l'éloquence sans y penser'.",
    period: "statesman"
  },
];

export const CONTEXT_POINTS = [
  {
    title: "L'Ordre Moral (1873-1876)",
    text: "Sous la présidence de Mac Mahon, la France conservatrice tente de 'rechristianiser' le pays. C'est contre cette alliance du Sabre et du Goupillon que le jeune Girard s'insurge dans ses notes."
  },
  {
    title: "Le Bastion Bonapartiste",
    text: "Le Sud-Ouest (Charentes) reste fidèle à l'Empire déchu. Le Baron Eschassériaux y est tout-puissant. Être Républicain ici, c'est être un résistant face à une majorité hostile."
  },
  {
    title: "La Guerre Scolaire",
    text: "Avant même les lois Jules Ferry, le combat se joue à l'école. Pour Girard, l'école laïque est le 'berceau de l'égalité' qui doit former des citoyens libres, loin des dogmes."
  }
];

export const BONAPARTIST_CONTEXT = {
  title: "Pourquoi la Charente était-elle Bonapartiste ?",
  text: "En lisant ces archives, on est frappé par la puissance du parti de l'Empire. C'est avant tout économique : sous Napoléon III, le commerce des eaux-de-vie (Cognac) a explosé grâce au traité de libre-échange avec l'Angleterre (1860). Les paysans et bourgeois charentais associaient l'Empire à la richesse et craignaient que la République n'amène l'instabilité et la pauvreté. Girard a dû construire sa carrière contre ce courant dominant."
};

export const ANECDOTES = [
  {
    title: "L'Affaire des 'Violettes Napoléoniennes'",
    year: "1876",
    pageRef: 124,
    icon: "flower",
    content: "En juillet 1876, une étrange arnaque secoue la Saintonge. Un certain 'Père la Violette' vend aux paysans des graines de violettes (emblème bonapartiste) promettant qu'elles fleuriront miraculeusement au retour de l'Empereur.",
    analysis: "Il vendait en réalité de la mauvaise graine ! Cela montre la ferveur naïve des campagnes pour la famille Bonaparte et l'attente messianique d'un retour impérial."
  },
  {
    title: "Le Capucin Exorciste et la Guerre des Chaires",
    year: "1874",
    pageRef: 60,
    icon: "megaphone",
    content: "Le Père Alexandre, surnommé 'Le Capucin', transforme sa chaire à Saintes en tribune politique contre la République. La presse républicaine réplique en racontant qu'il tente d'exorciser des meubles !",
    analysis: "L'Église faisait ouvertement campagne pour les conservateurs. Les Républicains utilisaient l'humour et la caricature (fausses lettres de dévotes) pour décrédibiliser cette ingérence politique."
  },
  {
    title: "Le 4 Septembre Interdit !",
    year: "1873",
    pageRef: 5,
    icon: "ban",
    content: "Le 4 septembre (anniversaire de la République) est interdit de fête par l'Ordre Moral. Les préfets envoient la police empêcher les banquets. Les Républicains organisent alors des fêtes clandestines.",
    analysis: "La République était un régime 'toléré' mais combattu de l'intérieur. La fêter était un acte de rébellion et de courage politique."
  }
];

export const VOCABULARY = [
  { term: "Badingueux", def: "Insulte désignant les Bonapartistes (d'après 'Badinguet', surnom moqueur de Napoléon III)." },
  { term: "Les Blancs", def: "Les Monarchistes, partisans du Roi et du drapeau blanc, alliés de circonstance des bonapartistes contre la République." },
  { term: "L'Ordre Moral", def: "La coalition conservatrice et religieuse au pouvoir à Paris (1873-1876), que les journaux du recueil combattent férocement." },
  { term: "L'Insigne Basilique", def: "Terme ironique utilisé par les anticléricaux pour désigner l'église Saint-Pierre de Saintes, QG des conservateurs locaux." }
];

export const EVOLUTION_ANALYSIS = {
  title: "De la Satire au Sénat",
  text: "Ces archives montrent le passage de l'adolescence politique à la maturité d'État. En 1872, c'est l'époque de la jeunesse et de la conquête : on est dans l'attaque, la caricature, le journalisme de combat pour détruire l'adversaire. À partir de 1880, les manuscrits montrent un ton posé, institutionnel. La République a gagné. Le combat n'est plus de détruire, mais de construire l'État (l'École, la Justice)."
};

export const BOOK_THEMES = [
  {
    icon: "feather",
    title: "La Satire comme Arme",
    text: "Face à la censure, l'humour est un refuge. Le livre regorge d'articles d'Arthur Lanlair ridiculisant les 'badingueux' (bonapartistes) et les pèlerinages politiques."
  },
  {
    icon: "eagle", // using Lucide map in component
    title: "L'Ombre de l'Empire",
    text: "Chaque page transpire la peur d'un retour de Napoléon III ou du Prince Impérial. Les 'Appels au Peuple' sont dénoncés comme des manœuvres séditieuses."
  },
  {
    icon: "scale",
    title: "Justice et Presse",
    text: "Procès en diffamation, duels d'honneur, préfets censeurs... Ce recueil est le témoignage brut de la difficile conquête de la liberté de la presse."
  }
];

export const KEY_FIGURES = [
  { name: "Arthur Lanlair", role: "Le Chroniqueur", desc: "Plume acerbe de 'L'Indépendant', ses satires rythment le livre." },
  { name: "Baron Eschassériaux", role: "L'Ennemi", desc: "Figure tutélaire du Bonapartisme charentais, la cible privilégiée." },
  { name: "Le Capucin", role: "Le Clérical", desc: "Prédicateur transformant la chaire en tribune politique." }
];

export interface TocItem {
  title: string;
  page: number;
}

export const TABLE_OF_CONTENTS: TocItem[] = [
  { title: "Assises – Affaire Véron", page: 1 },
  { title: "Lettre de Monsieur C...", page: 2 },
  { title: "Les enfers de Paris (Le Barbier de Séville)", page: 3 },
  { title: "Réponse de Bonnard / Ma réponse", page: 3 },
  { title: "La condamnation en appel", page: 4 },
  { title: "Le mot du réveil", page: 8 },
  { title: "La démission de M. Grévy", page: 9 },
  { title: "Les élections de la...", page: 10 },
  { title: "Vol de l'hôtel Liguès à Saintes", page: 12 },
  { title: "Pour un...", page: 13 },
  { title: "Ma réponse / Tout commence", page: 13 },
  { title: "La réponse", page: 16 },
  { title: "Les troubles de Charleville", page: 20 },
  { title: "L'affaire C...", page: 21 },
  { title: "La manifestation bonapartiste...", page: 22 },
  { title: "Au Progrès, à propos de cette manifestation", page: 24 },
  { title: "Le départ", page: 25 },
  { title: "Rochefort", page: 26 },
  { title: "Officiers caissiers", page: 29 },
  { title: "Je leur demande la victoire", page: 30 },
  { title: "Réponse à...", page: 31 },
  { title: "Autre lettre de M. Demser", page: 33 },
  { title: "La défense de Bazaine", page: 34 },
  { title: "Zigzags", page: 36 },
  { title: "La récusation de M. Droning", page: 38 },
  { title: "Réponse du journal / Incident Clamat", page: 39 },
  { title: "Ma lettre à ce sujet", page: 40 },
  { title: "Réponse Clamat – Lettre Bornay", page: 41 },
  { title: "Ma réponse", page: 42 },
  { title: "Bibliographie", page: 43 },
  { title: "La procession aux flambeaux", page: 44 },
  { title: "Mre Coula... / Professions de foi", page: 46 },
  { title: "Causerie : la délibération...", page: 49 },
  { title: "Réponse", page: 50 },
  { title: "Les ouvriers Clamat", page: 51 },
  { title: "Le manifeste de M. Play / A la volonté", page: 52 },
  { title: "Les éléments impurs", page: 53 },
  { title: "Les élections municipales", page: 54 },
  { title: "Cortège lait maigre", page: 55 },
  { title: "Union républicaine / Ma croissance", page: 56 },
  { title: "Regard au delà des Pyrénées / Réorganisation", page: 58 },
  { title: "Les Parades de...", page: 60 },
  { title: "La fin du Carnaval / Le capucin", page: 61 },
  { title: "Républicaine à Cognac", page: 62 },
  { title: "Lettre d'une dévote", page: 63 },
  { title: "Ma réponse au capucin", page: 64 },
  { title: "Lettre... sur la dévote", page: 65 },
  { title: "L’œuvre de Saint...", page: 66 },
  { title: "Le capucin / Viatique", page: 67 },
  { title: "Lettre du Capucin", page: 68 },
  { title: "Les piètres imbéciles sont des malheureux", page: 70 },
  { title: "16 mars / Lettre...", page: 71 },
  { title: "C'est fini !", page: 73 },
  { title: "La fin d'un charivari", page: 74 },
  { title: "Excellents confrères", page: 75 },
  { title: "Journal officiel", page: 76 },
  { title: "Le Progrès en Cour d'assises", page: 77 },
  { title: "L'écrin... / Adressez-vous à...", page: 78 },
  { title: "L'ouverture des concours", page: 79 },
  { title: "Les martyrs de l'appel au peuple", page: 80 },
  { title: "Largesse de la collecte / Persécutions", page: 81 },
  { title: "L'hôtel de Lamoureu... / Bizarreries", page: 82 },
  { title: "Les cléricaux... la loterie", page: 83 },
  { title: "A la volonté nationale / L'oiseau", page: 84 },
  { title: "Revue humoristique", page: 88 },
  { title: "Les colporteurs / Revue humoristique", page: 89 },
  { title: "Revue de la presse", page: 90 },
  { title: "Avec franchise", page: 93 },
  { title: "Réponses au jésuite", page: 96 },
  { title: "Tempête de sacristie", page: 99 },
  { title: "Revue...", page: 100 },
  { title: "La palme... Mort de M...", page: 102 },
  { title: "La candidature de Cadore", page: 104 },
  { title: "Gambades du suffrage universel", page: 106 },
  { title: "Les exercices du capucin", page: 107 },
  { title: "Procès des Landes", page: 108 },
  { title: "Théâtre : La vie de Bohème", page: 109 },
  { title: "Le pauvre...", page: 110 },
  { title: "Don César de Bazan / Monseigneur", page: 111 },
  { title: "Le programme...", page: 112 },
  { title: "Réponse au Progrès", page: 113 },
  { title: "Courrier réponse", page: 115 },
  { title: "Insurrection de...", page: 116 },
  { title: "Sa photographie / Les cléricaux", page: 120 },
  { title: "Le phylloxera à Dompierre", page: 121 },
  { title: "(Suite manuscrite illisible)", page: 122 },
  { title: "Les violettes napoléoniennes", page: 124 },
];
