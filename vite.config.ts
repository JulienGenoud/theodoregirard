import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Site servi à la racine du domaine personnalisé (www.theodoregirard.fr).
export default defineConfig(({ isSsrBuild }) => ({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    // Le build SSR (pré-rendu) n'a pas besoin des 400 Mo du dossier public.
    copyPublicDir: !isSsrBuild,
  },
}));
