import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Info,
  Feather,
  Scroll,
  Menu,
  X,
  ExternalLink,
  Maximize,
  Minimize,
  List,
  Scale,
  Sword,
  PenTool,
  Flower,
  Megaphone,
  Ban,
  TrendingUp,
  Coins,
  Key,
  Volume2,
  Headphones
} from 'lucide-react';
import {
  BIOGRAPHY_EVENTS,
  CONTEXT_POINTS,
  BOOK_PAGES_IDS,
  TABLE_OF_CONTENTS,
  BOOK_THEMES,
  KEY_FIGURES,
  ANECDOTES,
  VOCABULARY,
  BONAPARTIST_CONTEXT,
  EVOLUTION_ANALYSIS
} from './constants';

type Section = 'home' | 'bio' | 'context' | 'stories' | 'keys' | 'audio' | 'reader' | 'summary';

// --- Components ---

const Navigation: React.FC<{ activeSection: Section; onNavigate: (s: Section) => void }> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: Section; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'bio', label: 'Biographie' },
    { id: 'context', label: 'Contexte' },
    { id: 'stories', label: 'Histoires' },
    { id: 'keys', label: 'Clés de Lecture' },
    { id: 'audio', label: 'Radio' },
    { id: 'reader', label: 'Le Livre' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Feather className="h-6 w-6 text-amber-700 mr-2" />
            <span className="font-serif text-xl font-bold text-stone-800 tracking-wide">Archives Girard</span>
          </div>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === item.id
                  ? 'text-amber-700 border-b-2 border-amber-700'
                  : 'text-stone-600 hover:text-stone-900'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 hover:text-stone-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 text-base font-medium ${activeSection === item.id
                  ? 'bg-amber-50 text-amber-800'
                  : 'text-stone-600 hover:bg-stone-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC<{ onRead: () => void }> = ({ onRead }) => {
  return (
    <div className="relative bg-stone-100 min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-900 text-sm font-semibold tracking-wider uppercase mb-4">
            Archives 1872-1918
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif text-stone-900 leading-tight">
            La Forge d'un <br />
            <span className="text-amber-700 italic">Républicain</span>
          </h1>
          <p className="text-xl text-stone-600 font-serif max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Des tranchées de la presse charentaise aux ors du Ministère de la Justice.
            Découvrez comment un jeune militant anticlérical, témoin de la "Guerre des Journaux", est devenu l'une des consciences morales de la Troisième République.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onRead}
              className="px-8 py-4 bg-stone-900 text-stone-50 rounded shadow-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group"
            >
              <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
              Consulter le Livre de Combat
            </button>
            <a
              href="#stories"
              className="px-8 py-4 bg-white border border-stone-300 text-stone-700 rounded shadow-sm hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
            >
              <Scroll size={20} />
              Histoires Oubliées
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-80 h-96 mx-auto lg:w-96 lg:h-[30rem] bg-stone-200 rounded-lg shadow-2xl rotate-3 border-8 border-white overflow-hidden sepia-[.3]">
            <img
              src="./photo.jpg"
              alt="Portrait de Théodore Girard"
              className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-serif italic text-lg text-center">"Sénateur des Deux-Sèvres"</p>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200/50 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-stone-300/50 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

const Biography: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Une Vie en Deux Actes</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-stone-600 font-serif">
            L'existence de Théodore Girard se divise nettement entre sa jeunesse militante en Charente-Inférieure, terre de combat contre le Bonapartisme, et sa carrière d'homme d'État bâtisseur dans les Deux-Sèvres.
          </p>
        </div>

        <div className="relative border-l-2 border-stone-200 ml-4 md:ml-0 md:pl-0 space-y-12">
          {BIOGRAPHY_EVENTS.map((event, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0 md:flex md:items-center group">
              <div className={`absolute -left-[9px] top-0 md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full border-4 border-white shadow z-10 group-hover:scale-125 transition-transform ${event.period === 'roots' ? 'bg-amber-600' : 'bg-stone-800'}`}></div>
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <span className={`font-bold font-sans text-sm tracking-widest ${event.period === 'roots' ? 'text-amber-700' : 'text-stone-600'}`}>
                  {event.period === 'roots' ? 'RACINES & MILITANTISME' : 'HOMME D\'ÉTAT'} • {event.year}
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-800 mt-1 mb-2">{event.title}</h3>
                <p className="text-stone-600 leading-relaxed font-serif italic">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Context: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1 bg-stone-800 text-stone-50 p-8 rounded-lg shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif mb-6 border-b border-stone-600 pb-4">La Guerre de 1870-1876</h3>
              <p className="mb-4 text-stone-300 font-light">
                Ces archives ne sont pas neutres. Elles sont le témoignage brut d'une France déchirée qui hésite encore entre la Monarchie, l'Empire et la République.
              </p>
            </div>
            <div className="mt-8 flex items-center text-amber-500">
              <Scroll size={20} className="mr-2" />
              <span className="text-sm uppercase tracking-widest">Archives</span>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CONTEXT_POINTS.map((point, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-stone-800 mb-2 font-serif text-lg flex items-center">
                  <span className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-xs mr-3 font-sans">0{idx + 1}</span>
                  {point.title}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StoriesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'flower': return <Flower className="text-amber-700" size={28} />;
      case 'megaphone': return <Megaphone className="text-amber-700" size={28} />;
      case 'ban': return <Ban className="text-red-700" size={28} />;
      default: return <Scroll className="text-amber-700" size={28} />;
    }
  };

  return (
    <section className="py-24 bg-sepia-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-amber-800 text-amber-100 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Archives Vivantes</span>
          <h2 className="text-4xl font-serif text-stone-900 mb-6">Au Cœur de la Mêlée (1872-1876)</h2>
          <p className="text-stone-700 text-lg max-w-2xl mx-auto italic font-serif">
            Quand la politique se réglait à coups de plumes, de procès et d'arnaques aux violettes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ANECDOTES.map((story, idx) => (
            <div key={idx} className="bg-white p-6 rounded-sm shadow-lg border-2 border-transparent hover:border-amber-700/30 transition-all duration-300 relative group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-50 p-3 rounded-full border border-stone-200 shadow-sm group-hover:scale-110 transition-transform">
                {getIcon(story.icon)}
              </div>
              <div className="mt-8 text-center">
                <span className="text-stone-400 font-serif italic text-sm">{story.year} • Page {story.pageRef}</span>
                <h3 className="text-xl font-bold font-serif text-stone-900 mt-2 mb-4 leading-tight">{story.title}</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">{story.content}</p>
                <div className="bg-amber-50 p-3 rounded text-xs text-amber-900 font-medium italic border-l-2 border-amber-600 text-left">
                  💡 {story.analysis}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KeysSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-4 flex items-center justify-center gap-3">
            <Key className="text-stone-400" /> Les Clés de Lecture
          </h2>
          <div className="w-24 h-1 bg-stone-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Vocabulaire */}
          <div className="bg-stone-50 p-8 rounded-lg border border-stone-200">
            <h3 className="text-xl font-bold font-serif text-stone-900 mb-6 flex items-center gap-2">
              <BookOpen size={20} className="text-amber-700" /> Le Vocabulaire du Combat
            </h3>
            <ul className="space-y-6">
              {VOCABULARY.map((voc, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="font-bold text-stone-800 whitespace-nowrap">{voc.term} :</span>
                  <span className="text-stone-600 italic text-sm">{voc.def}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contexte Eco + Evolution */}
          <div className="space-y-8">
            <div className="bg-stone-800 text-stone-100 p-8 rounded-lg shadow-md relative overflow-hidden">
              <Coins className="absolute top-4 right-4 text-stone-700 opacity-20" size={120} />
              <h3 className="text-xl font-bold font-serif text-amber-500 mb-4">{BONAPARTIST_CONTEXT.title}</h3>
              <p className="text-sm leading-relaxed text-stone-300 relative z-10">{BONAPARTIST_CONTEXT.text}</p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
              <h3 className="text-xl font-bold font-serif text-amber-900 mb-4 flex items-center gap-2">
                <TrendingUp size={20} /> {EVOLUTION_ANALYSIS.title}
              </h3>
              <p className="text-sm leading-relaxed text-amber-900/80">{EVOLUTION_ANALYSIS.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookAnalysis: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'feather': return <PenTool className="text-amber-700" size={32} />;
      case 'eagle': return <Sword className="text-amber-700" size={32} />;
      case 'scale': return <Scale className="text-amber-700" size={32} />;
      default: return <BookOpen className="text-amber-700" size={32} />;
    }
  };

  return (
    <section className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Analyse Historique</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto italic">
            Comprendre les enjeux derrière les caricatures et les textes enflammés.
          </p>
        </div>

        {/* 3 Themes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BOOK_THEMES.map((theme, idx) => (
            <div key={idx} className="text-center p-6 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors">
              <div className="mb-4 flex justify-center">{getIcon(theme.icon)}</div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">{theme.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{theme.text}</p>
            </div>
          ))}
        </div>

        {/* Galerie des Acteurs */}
        <div className="bg-stone-900 rounded-xl p-8 md:p-12 text-stone-50">
          <h3 className="text-2xl font-serif mb-8 text-center text-amber-500 border-b border-stone-800 pb-4">Les Acteurs du Drame</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {KEY_FIGURES.map((fig, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center text-2xl font-serif mb-4 border border-stone-700">
                  {fig.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-stone-200">{fig.name}</h4>
                <span className="text-xs uppercase tracking-widest text-amber-600 mb-2 block">{fig.role}</span>
                <p className="text-stone-400 text-sm italic">{fig.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BookReader: React.FC<{ currentPageIndex: number; setCurrentPageIndex: (p: number) => void }> = ({ currentPageIndex, setCurrentPageIndex }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Safety check: ensure we have pages
  const totalPages = BOOK_PAGES_IDS.length;
  const currentId = BOOK_PAGES_IDS[currentPageIndex];

  // Google Drive Preview URL
  const embedUrl = `https://drive.google.com/file/d/${currentId}/preview`;

  // Handlers
  const handlePrev = () => {
    if (currentPageIndex > 0) setCurrentPageIndex(currentPageIndex - 1);
  };

  const handleNext = () => {
    if (currentPageIndex < totalPages - 1) setCurrentPageIndex(currentPageIndex + 1);
  };

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1 && val <= totalPages) {
      setCurrentPageIndex(val - 1);
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFSChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFSChange);
    return () => document.removeEventListener('fullscreenchange', handleFSChange);
  }, []);

  if (totalPages === 0) {
    return (
      <div className="bg-stone-200 min-h-[50vh] flex items-center justify-center">
        <p className="text-stone-500">Aucune page configurée.</p>
      </div>
    );
  }

  // Classes for fullscreen handling
  const containerClasses = isFullScreen
    ? "fixed inset-0 z-50 bg-stone-900 flex flex-col items-center justify-center p-0"
    : "bg-stone-200 min-h-screen pt-20 pb-12 flex flex-col items-center relative border-t border-stone-300";

  const controlsClasses = isFullScreen
    ? "w-full bg-stone-900/90 text-stone-50 p-4 flex flex-wrap items-center justify-between gap-4 absolute top-0 left-0 z-40 transition-all hover:opacity-100 opacity-0 hover:opacity-100"
    : "w-full max-w-4xl bg-stone-900 text-stone-50 rounded-lg shadow-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4 sticky top-20 z-40 mx-4 transition-all";

  const viewerContainerClasses = isFullScreen
    ? "w-full h-full flex items-center justify-center"
    : "w-full max-w-5xl px-4 flex-1 flex flex-col";

  const iframeClasses = isFullScreen
    ? "w-full h-full border-0"
    : "relative z-10 w-full h-full min-h-[80vh] border-0";

  return (
    <div ref={containerRef} className={containerClasses}>

      {/* Controls Header */}
      <div className={controlsClasses}>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPageIndex === 0}
            className="p-2 rounded hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Page précédente"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="font-mono text-sm flex items-center">
            Page
            <input
              type="number"
              value={currentPageIndex + 1}
              onChange={handlePageInput}
              min={1}
              max={totalPages}
              className="bg-stone-800 text-white w-14 text-center rounded border border-stone-700 mx-2 focus:outline-none focus:border-amber-500"
            />
            / {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPageIndex === totalPages - 1}
            className="p-2 rounded hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Page suivante"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4 text-sm font-sans text-stone-400 hidden lg:flex">
          <BookOpen size={16} />
          <span className="flex items-center gap-2 text-stone-300">
            Livre de Combat - Page {currentPageIndex + 1}
          </span>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullScreen}
            className="p-2 hover:bg-stone-700 rounded text-stone-400 hover:text-white flex items-center gap-2 text-xs"
            title={isFullScreen ? "Quitter le plein écran" : "Plein écran"}
          >
            {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>

          <a
            href={`https://drive.google.com/file/d/${currentId}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-stone-700 rounded text-stone-400 hover:text-white flex items-center gap-2 text-xs"
            title="Ouvrir dans Google Drive"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Reader Area */}
      <div className={viewerContainerClasses}>
        <div className={`relative w-full ${isFullScreen ? 'h-full' : 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-stone-300 rounded-sm overflow-hidden'}`} style={!isFullScreen ? { minHeight: '80vh' } : {}}>

          {/* Iframe Loading State - Only show if not full screen or handled better */}
          {!isFullScreen && (
            <div className="absolute inset-0 flex items-center justify-center z-0 bg-stone-100">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-stone-300 border-t-amber-700"></div>
            </div>
          )}

          {/* The Viewer */}
          <iframe
            key={currentId} // Force reload on ID change
            src={embedUrl}
            className={iframeClasses}
            title={`Page ${currentPageIndex + 1}`}
            allow="autoplay; fullscreen"
          ></iframe>

          {/* Navigation Overlay (for easy clicking) */}
          <div className="absolute top-0 bottom-0 left-0 w-12 hover:bg-black/5 z-20 cursor-pointer hidden md:block" onClick={handlePrev} title="Précédent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 hover:bg-black/5 z-20 cursor-pointer hidden md:block" onClick={handleNext} title="Suivant"></div>
        </div>
      </div>

      {!isFullScreen && (
        <p className="mt-6 text-stone-500 text-xs text-center max-w-md font-sans">
          Astuce : Utilisez les flèches de votre clavier ou cliquez sur les bords pour tourner les pages.
        </p>
      )}

    </div>
  );
};

const Summary: React.FC<{ onGoToPage: (page: number) => void }> = ({ onGoToPage }) => {
  return (
    <section className="py-24 bg-white relative border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-stone-900 mb-4 flex items-center justify-center gap-3">
            <List className="text-amber-700" size={32} />
            Index du Livre
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto italic font-serif">
            Table des matières reconstituée pour naviguer rapidement dans les notes et articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 bg-stone-50 p-8 rounded-lg border border-stone-200 shadow-inner">
          {TABLE_OF_CONTENTS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                onGoToPage(item.page);
                // Optional: scroll to reader when clicking TOC
                const el = document.getElementById('reader');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-baseline justify-between py-2 border-b border-stone-200 last:border-0 hover:bg-white cursor-pointer px-2 rounded transition-colors"
            >
              <span className="font-serif text-stone-800 group-hover:text-amber-800 transition-colors text-lg truncate pr-4">
                {item.title}
              </span>
              <span className="flex-1 border-b border-dotted border-stone-400 mx-2 relative -top-1 opacity-30"></span>
              <span className="font-sans font-bold text-amber-700 text-sm whitespace-nowrap">P. {item.page}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AudioSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-dark.png")' }}></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 mb-6 border border-amber-500/20">
            <Volume2 size={32} />
          </div>
          <h2 className="text-4xl font-serif mb-4">Émission de Radio</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-400 font-serif text-xl italic max-w-2xl mx-auto">
            "Théodore Girard : Une conscience de la République"
          </p>
        </div>

        <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-2xl border border-stone-700 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 flex-shrink-0 bg-stone-700 rounded-xl flex items-center justify-center text-amber-500 shadow-inner">
              <Headphones size={64} strokeWidth={1.5} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-serif text-white mb-2">Radio Accords Poitiers</h3>
              <p className="text-amber-500 font-medium mb-4 uppercase tracking-widest text-sm">Par Dominique Breillat</p>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Dominique Breillat, professeur émérite de droit public, retrace le parcours exceptionnel de Théodore Girard, de ses débuts journalistiques à ses responsabilités ministérielles.
              </p>

              <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-700 shadow-inner">
                <audio
                  controls
                  className="w-full h-10 accent-amber-500"
                  src="./audio.mp3"
                >
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-stone-500 text-xs italic">
          Archives sonores — Dominique Breillat © Radio Accords Poitiers
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="text-stone-200 font-serif text-lg mb-4">Archives Théodore Girard</h4>
          <p>Une initiative pour préserver la mémoire politique de la Troisième République.</p>
          <div className="mt-4">
            <a
              href="mailto:théo.girard17800@gmail.com"
              className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              ✉️ théo.girard17800@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-stone-200 font-serif text-lg mb-4">Liens Utiles</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.senat.fr/senateur-3eme-republique/girard_theodore1638r3.html" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
                Sénat (Biographie)
              </a>
            </li>
            <li>
              <a href="https://www.senat.fr/table-nominative-archives/girard_theodore1638r3/3R/1918_1920.html" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
                Sénat (Table Nominative 1918-1920)
              </a>
            </li>
            <li>
              <a href="https://cimetieresmellois.fr/MELLE%2079%20GIRARD%20THEODORE.html" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
                Sépulture (Cimetières Mellois)
              </a>
            </li>
            <li>
              <a href="https://gallica.bnf.fr" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
                Bibliothèque Nationale (Gallica)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-stone-200 font-serif text-lg mb-4">Crédits</h4>
          <p>Développé avec React & Google Drive Embed.</p>
          <p className="mt-2 text-stone-600">© 2026 - Domaine Public</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoToPage = (page: number) => {
    // Page is 1-based, index is 0-based
    const newIndex = Math.max(0, Math.min(page - 1, BOOK_PAGES_IDS.length - 1));
    setCurrentPageIndex(newIndex);
    // Don't auto-scroll here as the summary component handles logic or we might want to stay on Summary
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <div id="home">
        <Hero onRead={() => handleNavigate('stories')} />
      </div>

      <div id="bio">
        <Biography />
      </div>

      <div id="context">
        <Context />
      </div>

      <div id="stories">
        <StoriesSection />
      </div>

      <div id="keys">
        <KeysSection />
      </div>

      <div id="audio">
        <AudioSection />
      </div>

      <div id="analysis">
        <BookAnalysis />
      </div>

      <div id="reader">
        <BookReader currentPageIndex={currentPageIndex} setCurrentPageIndex={setCurrentPageIndex} />
      </div>

      <div id="summary">
        <Summary onGoToPage={handleGoToPage} />
      </div>

      <Footer />
    </div>
  );
};

export default App;