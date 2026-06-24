import Clarity from '@microsoft/clarity';

const hasClarityId = Boolean(import.meta.env.VITE_CLARITY_ID);
const clarityEnabled = import.meta.env.VITE_ENABLE_CLARITY === 'true';
const trackedOnceEvents = new Set();

export function trackClarityEvent(eventName) {
  if (!clarityEnabled || !hasClarityId || !eventName) return;

  try {
    Clarity.event(eventName);
  } catch {
    // Swallow tracking errors so analytics never impacts UX.
  }
}

export function trackClarityEventOnce(eventName) {
  if (!eventName || trackedOnceEvents.has(eventName)) return;
  trackedOnceEvents.add(eventName);
  trackClarityEvent(eventName);
}
