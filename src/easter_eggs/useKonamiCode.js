import { useEffect, useRef } from 'react';

const KONAMI_SEQUENCE = [
  'arrowup',
  'arrowup',
  'arrowdown',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'arrowleft',
  'arrowright',
  'b',
  'a',
];

export default function useKonamiCode(onUnlock, enabled = true) {
  const indexRef = useRef(0);
  const callbackRef = useRef(onUnlock);

  useEffect(() => {
    callbackRef.current = onUnlock;
  }, [onUnlock]);

  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(event) {
      const target = event.target;

      const isTyping =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable;

      if (isTyping) return;

      const key = event.key.toLowerCase();
      const expectedKey = KONAMI_SEQUENCE[indexRef.current];

      if (key === expectedKey) {
        indexRef.current += 1;

        if (indexRef.current === KONAMI_SEQUENCE.length) {
          indexRef.current = 0;
          callbackRef.current?.();
        }

        return;
      }

      indexRef.current = key === KONAMI_SEQUENCE[0] ? 1 : 0;
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);
}
