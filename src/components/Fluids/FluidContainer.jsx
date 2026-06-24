import { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';
import {
  trackClarityEvent,
  trackClarityEventOnce,
} from '../../lib/clarityTracking';
import './FluidContainer.css';

export default function FluidContainer({ children }) {
  const canvasRef = useRef(null);
  const hasStarted = useRef(false);
  const touchState = useRef({
    lastPoint: null,
    pendingPoint: null,
    rafId: null,
  });
  const hoverStartedAtRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || hasStarted.current) return;

    hasStarted.current = true;

    WebGLFluid(canvasRef.current, {
      TRIGGER: 'hover',
      IMMEDIATE: true,
      AUTO: false,

      // Lower resolution is usually fine for a background.
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 512,

      // Higher = fades faster, so it does not cover your portfolio content.
      DENSITY_DISSIPATION: 1.8,

      // Lower = movement calms down faster.
      VELOCITY_DISSIPATION: 0.45,

      PRESSURE: 0.1,
      PRESSURE_ITERATIONS: 20,

      // Lower = less wild swirling.
      CURL: 15,

      // Smaller mouse radius.
      // This is the main one you want to reduce.
      SPLAT_RADIUS: 0.08,

      // Lower = mouse movement is less explosive.
      SPLAT_FORCE: 1500,

      COLORFUL: true,

      // Lower = slower color changes, less distracting.
      COLOR_UPDATE_SPEED: 4,

      // Keep this true for depth, or false for a flatter look.
      SHADING: true,

      // Reduce glow heavily.
      BLOOM: true,
      BLOOM_INTENSITY: 0.25,

      // Higher = fewer parts become bright/glowy.
      BLOOM_THRESHOLD: 0.85,

      // I would turn this off for a portfolio background.
      // It can make the whole canvas too bright.
      SUNRAYS: false,
      SUNRAYS_WEIGHT: 0.3,

      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: false,
    });
  }, []);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: none), (pointer: coarse)').matches;

    if (!isTouchDevice) return;

    const state = touchState.current;

    const flushTouch = () => {
      state.rafId = null;

      const canvas = canvasRef.current;
      const point = state.pendingPoint;
      if (!canvas || !point) return;

      const rect = canvas.getBoundingClientRect();
      const isInBounds =
        point.clientX >= rect.left &&
        point.clientX <= rect.right &&
        point.clientY >= rect.top &&
        point.clientY <= rect.bottom;

      if (!isInBounds) return;

      const prev = state.lastPoint;
      const movementX = prev ? point.clientX - prev.clientX : 0;
      const movementY = prev ? point.clientY - prev.clientY : 0;

      canvas.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          cancelable: true,
          clientX: point.clientX,
          clientY: point.clientY,
          movementX,
          movementY,
        }),
      );

      state.lastPoint = point;
    };

    const queueTouch = (touch) => {
      state.pendingPoint = { clientX: touch.clientX, clientY: touch.clientY };
      if (state.rafId === null) {
        state.rafId = window.requestAnimationFrame(flushTouch);
      }
    };

    const onTouchStart = (event) => {
      const touch = event.touches[0] || event.changedTouches[0];
      if (!touch) return;

      trackClarityEventOnce('fluid_touch_interaction');

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.dispatchEvent(
          new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            clientX: touch.clientX,
            clientY: touch.clientY,
          }),
        );
      }
      queueTouch(touch);
    };

    const onTouchMove = (event) => {
      const touch = event.touches[0] || event.changedTouches[0];
      if (!touch) return;
      queueTouch(touch);
    };

    const onTouchEnd = () => {
      const canvas = canvasRef.current;
      const point = state.lastPoint || state.pendingPoint;

      if (canvas && point) {
        canvas.dispatchEvent(
          new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true,
            clientX: point.clientX,
            clientY: point.clientY,
          }),
        );
      }

      state.lastPoint = null;
      state.pendingPoint = null;
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
      if (state.rafId !== null) {
        window.cancelAnimationFrame(state.rafId);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMouseEnter = () => {
      hoverStartedAtRef.current = Date.now();
      trackClarityEventOnce('fluid_hover_start');
    };

    const onMouseLeave = () => {
      if (!hoverStartedAtRef.current) return;

      const hoverDuration = Date.now() - hoverStartedAtRef.current;
      hoverStartedAtRef.current = null;

      if (hoverDuration >= 5000) {
        trackClarityEventOnce('fluid_hover_5s');
      } else if (hoverDuration >= 2000) {
        trackClarityEventOnce('fluid_hover_2s');
      }
    };

    const onMouseDown = () => {
      trackClarityEvent('fluid_mouse_down');
      trackClarityEventOnce('fluid_interaction');
    };

    canvas.addEventListener('mouseenter', onMouseEnter);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('mousedown', onMouseDown);

    return () => {
      canvas.removeEventListener('mouseenter', onMouseEnter);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  return (
    <div className="fluid-container">
      <div className="fluid-canvas-layer">
        <canvas ref={canvasRef} className="fluid-canvas" />
      </div>

      <div className="fluid-content">{children}</div>
    </div>
  );
}
