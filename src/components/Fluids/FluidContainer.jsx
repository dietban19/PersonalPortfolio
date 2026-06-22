import { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';
import './FluidContainer.css';

export default function FluidContainer({ children }) {
  const canvasRef = useRef(null);
  const hasStarted = useRef(false);

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
      SPLAT_FORCE: 2500,

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

  return (
    <div className="fluid-container">
      <div className="fluid-canvas-layer">
        <canvas ref={canvasRef} className="fluid-canvas" />
      </div>

      <div className="fluid-content">{children}</div>
    </div>
  );
}
