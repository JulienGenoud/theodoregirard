import HomePage from './components/HomePage';
import PageView from './components/PageView';
import type { Route } from './routes';

interface AppProps {
  route: Route;
  /** Texte OCR de la page (HTML), injecté au pré-rendu et relu tel quel dans le DOM au chargement. */
  pageTextHtml?: string;
}

export default function App({ route, pageTextHtml }: AppProps) {
  return route.kind === 'page' ? <PageView page={route.page} textHtml={pageTextHtml} /> : <HomePage />;
}
