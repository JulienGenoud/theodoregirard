export interface NavItem {
  id: string;
  label: string;
}

/** Sections affichées dans le menu, dans l'ordre de la page. */
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'biographie', label: 'Biographie' },
  { id: 'contexte', label: 'Contexte' },
  { id: 'histoires', label: 'Histoires' },
  { id: 'cles-de-lecture', label: 'Clés de lecture' },
  { id: 'radio', label: 'Radio' },
  { id: 'analyse', label: 'Analyse' },
  { id: 'livre', label: 'Le Livre' },
  { id: 'index', label: 'Index' },
];

export const SECTION_IDS: readonly string[] = ['accueil', ...NAV_ITEMS.map((item) => item.id)];

/** Anciennes ancres (version précédente du site) redirigées vers les nouvelles. */
export const LEGACY_IDS: Readonly<Record<string, string>> = {
  home: 'accueil',
  bio: 'biographie',
  context: 'contexte',
  stories: 'histoires',
  keys: 'cles-de-lecture',
  audio: 'radio',
  analysis: 'analyse',
  reader: 'livre',
  summary: 'index',
};
