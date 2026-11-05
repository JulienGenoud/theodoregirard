import type { MouseEvent } from 'react';

/**
 * Intercepte un clic « simple » sur un lien (bouton gauche, sans touche de
 * modification) pour le traiter dans la page ; Ctrl/Cmd/Maj-clic et clic du
 * milieu gardent le comportement normal du lien (ouverture dans un onglet…).
 */
export const plainClick =
  (handler: () => void) =>
  (event: MouseEvent<HTMLAnchorElement>): void => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    handler();
  };
