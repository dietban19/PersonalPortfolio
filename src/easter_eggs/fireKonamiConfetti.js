import confetti from 'canvas-confetti';

export default function fireKonamiConfetti() {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) return;

  const duration = 1200;
  const end = Date.now() + duration;

  function fire() {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      startVelocity: 55,
      origin: {
        x: 0,
        y: 1,
      },
    });

    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      startVelocity: 55,
      origin: {
        x: 1,
        y: 1,
      },
    });
  }

  fire();

  const interval = window.setInterval(() => {
    if (Date.now() > end) {
      window.clearInterval(interval);
      return;
    }

    fire();
  }, 300);
}
