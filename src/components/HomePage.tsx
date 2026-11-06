import { useCallback, useEffect, useState } from 'react';
import Analysis from './Analysis';
import AudioSection from './AudioSection';
import Biography from './Biography';
import BookIndex from './BookIndex';
import BookReader from './BookReader';
import Context from './Context';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Keys from './Keys';
import Stories from './Stories';
import { clampPage } from '../data/book';
import { LEGACY_IDS, SECTION_IDS } from '../data/sections';
import { useActiveSection } from '../hooks/useActiveSection';

const PAGE_HASH = /^page-(\d{1,3})$/;

/** Fait défiler jusqu'au lecteur et y place le focus (utile au clavier et aux lecteurs d'écran). */
const scrollToReader = () => {
  document.getElementById('livre')?.scrollIntoView({ block: 'start' });
  document.getElementById('livre-titre')?.focus({ preventScroll: true });
};

export default function HomePage() {
  const [page, setPage] = useState(1);
  const activeSection = useActiveSection(SECTION_IDS);

  // Liens profonds : #page-12 ouvre la page 12 dans le lecteur ; les anciennes ancres sont redirigées.
  useEffect(() => {
    const applyHash = () => {
      let hash = window.location.hash.slice(1);
      try {
        hash = decodeURIComponent(hash);
      } catch {
        // Ancre mal formée (%xx invalide) : on la garde telle quelle.
      }
      const match = PAGE_HASH.exec(hash);
      if (match) {
        setPage(clampPage(Number(match[1])));
        scrollToReader();
        return;
      }
      const legacy = LEGACY_IDS[hash];
      if (legacy) {
        window.history.replaceState(null, '', `#${legacy}`);
        document.getElementById(legacy)?.scrollIntoView({ block: 'start' });
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  // Feuilletage dans le lecteur : l'adresse reste partageable sans polluer l'historique.
  const handleReaderPageChange = useCallback((next: number) => {
    setPage(next);
    window.history.replaceState(null, '', `#page-${next}`);
  }, []);

  // Liens « page N » ailleurs sur la page (index, histoires) : ouverture dans le lecteur.
  const openPage = useCallback((target: number) => {
    const next = clampPage(target);
    const hash = `#page-${next}`;
    if (window.location.hash === hash) {
      setPage(next);
      scrollToReader();
    } else {
      window.location.hash = hash; // déclenche hashchange → applyHash
    }
  }, []);

  return (
    <>
      <Header active={activeSection} />
      <main id="contenu" tabIndex={-1}>
        <Hero />
        {/* Le recueil et l'émission de radio, propres à ce site, viennent en premier. */}
        <BookReader page={page} onPageChange={handleReaderPageChange} isActive={activeSection === 'livre'} />
        <AudioSection />
        <Biography />
        <Context />
        <Stories onOpenPage={openPage} />
        <Keys />
        <Analysis />
        <BookIndex currentPage={page} onOpenPage={openPage} />
      </main>
      <Footer />
    </>
  );
}
