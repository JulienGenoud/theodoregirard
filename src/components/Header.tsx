import { useEffect, useRef, useState } from 'react';
import { Feather, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/sections';

interface HeaderProps {
  /** Identifiant de la section actuellement à l'écran. */
  active: string;
}

export default function Header({ active }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Fermeture du menu mobile : Échap, clic à l'extérieur, passage en grand écran.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onBreakpoint = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-white/95 font-sans shadow-sm backdrop-blur-md">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[70] focus:rounded focus:bg-stone-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>
      <nav aria-label="Navigation principale" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/#accueil" className="flex items-center rounded" aria-label="Archives Girard – accueil">
          <Feather className="mr-2 h-6 w-6 text-amber-700" aria-hidden="true" />
          <span className="font-serif text-xl font-bold tracking-wide text-stone-800">Archives Girard</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`block border-b-2 px-2.5 py-2 text-sm font-medium transition-colors duration-200 xl:px-3 ${
                    isActive
                      ? 'border-amber-700 text-amber-800'
                      : 'border-transparent text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="rounded p-2 text-stone-600 hover:text-stone-900 lg:hidden"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      <nav id="menu-mobile" aria-label="Navigation principale (mobile)" hidden={!isOpen} className="max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-stone-200 bg-white lg:hidden">
        <ul className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`block rounded px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-amber-50 text-amber-800' : 'text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
