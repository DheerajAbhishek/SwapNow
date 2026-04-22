import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible] — attach ref to an element to trigger a
 * fade-up animation when it enters the viewport.
 */
export function useFadeUp(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
