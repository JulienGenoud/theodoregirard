import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/crimson-text/400.css';
import '@fontsource/crimson-text/400-italic.css';
import '@fontsource/crimson-text/600.css';
import '@fontsource/crimson-text/700.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import './styles.css';
import App from './App';
import { parseRoute } from './routes';

const container = document.getElementById('root');
if (!container) throw new Error('Élément #root introuvable');

const app = (
  <StrictMode>
    <App
      route={parseRoute(window.location.pathname)}
      pageTextHtml={document.getElementById('texte-page')?.innerHTML}
    />
  </StrictMode>
);

// En production, le HTML est pré-rendu au build (scripts/prerender.mjs) : on l'hydrate.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
