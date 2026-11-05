import { useEffect, useState } from 'react';

/**
 * Renvoie l'identifiant de la section actuellement lue (scroll-spy) : la
 * dernière section dont le haut a franchi une ligne située à ~35 % de la
 * hauteur de la fenêtre (jamais moins que `minOffset`, sous l'en-tête fixe).
 */
export function useActiveSection(ids: readonly string[], minOffset = 120): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = Math.max(minOffset, window.innerHeight * 0.35);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids, minOffset]);

  return active;
}
