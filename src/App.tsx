import HomePage from './components/HomePage';
import PageView from './components/PageView';
import type { Route } from './routes';

export default function App({ route }: { route: Route }) {
  return route.kind === 'page' ? <PageView page={route.page} /> : <HomePage />;
}
