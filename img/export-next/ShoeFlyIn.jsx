'use client';

import { useEffect, useRef } from 'react';

/**
 * ShoeFlyIn — la zapatilla entra diminuta, vuela en zigzag creciendo
 * y se estaciona inclinada en su posición final.
 *
 * Coloca este componente DENTRO de un contenedor con `position: relative`
 * (tu sección hero). El zapato se posiciona en absoluto respecto a ese contenedor.
 *
 * La imagen va en /public (por defecto /shoe.png).
 *
 *   <section style={{ position: 'relative', overflow: 'hidden' }}>
 *      ...tu contenido...
 *      <ShoeFlyIn src="/shoe.png" />
 *   </section>
 *
 * Props:
 *   src        ruta de la imagen (default '/shoe.png')
 *   widthVw    ancho final del zapato en vw (default 48)
 *   width      ancho CSS opcional; si existe reemplaza widthVw
 *   duration   duración del vuelo en ms (default 3200)
 *   delay      espera antes de arrancar en ms (default 350)
 *   final      { x, y, rotate } posición/inclinación final, x/y en vw/vh (default {x:64,y:58,rotate:-18})
 *   showReplay muestra un botón para repetir (default false)
 *   waypoints  opcional, sobrescribe los puntos del zigzag
 */
export default function ShoeFlyIn({
  src = '/shoe.png',
  alt = 'Zapatilla',
  className = '',
  widthVw = 48,
  width = /** @type {any} */ (undefined),
  leftPx = 0,
  topPx = 0,
  duration = 3200,
  delay = 350,
  final = { x: 64, y: 58, rotate: -18 },
  showReplay = false,
  waypoints = /** @type {any} */ (undefined),
}) {
  const shoeRef = useRef(null);
  const rafRef = useRef(0);
  const timerRef = useRef(0);

  // Puntos del zigzag: x/y = centro en vw/vh, s = escala, r = rotación (deg)
  const wp = waypoints || [
    { t: 0.0, x: 7, y: 46, s: 0.05, r: 560 },
    { t: 0.17, x: 24, y: 21, s: 0.17, r: 410 },
    { t: 0.37, x: 41, y: 72, s: 0.34, r: 250 },
    { t: 0.57, x: 55, y: 24, s: 0.58, r: 95 },
    { t: 0.79, x: final.x + 6, y: 66, s: 1.09, r: final.rotate - 14 },
    { t: 1.0, x: final.x, y: final.y, s: 1.0, r: final.rotate },
  ];

  const play = () => {
    cancelAnimationFrame(rafRef.current);
    const el = shoeRef.current;
    if (!el) return;

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const lerp = (a, b, u) => a + (b - a) * u;
    const start = performance.now();

    // estado inicial
    const s0 = wp[0];
    el.style.transform = `translate(${s0.x}vw, ${s0.y}vh) translate(-50%,-50%) rotate(${s0.r}deg) scale(${s0.s})`;

    const frame = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const g = easeOut(p);
      let i = 0;
      while (i < wp.length - 2 && g > wp[i + 1].t) i++;
      const a = wp[i];
      const b = wp[i + 1];
      const span = b.t - a.t || 1;
      const u = Math.max(0, Math.min(1, (g - a.t) / span));
      const x = lerp(a.x, b.x, u);
      const y = lerp(a.y, b.y, u);
      const sc = lerp(a.s, b.s, u);
      const r = lerp(a.r, b.r, u);
      el.style.transform = `translate(${x}vw, ${y}vh) translate(-50%,-50%) rotate(${r}deg) scale(${sc})`;
      if (p < 1) rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
  };

  useEffect(() => {
    timerRef.current = window.setTimeout(play, delay);
    return () => {
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <img
        ref={shoeRef}
        src={src}
        alt={alt}
        className={className}
        draggable={false}
        style={{
          position: 'absolute',
          left: `${leftPx}px`,
          top: `${topPx}px`,
          width: width || `${widthVw}vw`,
          height: 'auto',
          transformOrigin: 'center center',
          transform: `translate(${wp[0].x}vw, ${wp[0].y}vh) translate(-50%,-50%) rotate(${wp[0].r}deg) scale(${wp[0].s})`,
          filter:
            'drop-shadow(0 30px 60px rgba(255,40,140,0.35)) drop-shadow(0 0 40px rgba(120,60,255,0.25))',
          pointerEvents: 'none',
          userSelect: 'none',
          willChange: 'transform',
          zIndex: 5,
        }}
      />
      {showReplay && (
        <button
          onClick={play}
          style={{
            position: 'absolute',
            bottom: 30,
            left: 56,
            zIndex: 40,
            background: 'rgba(255,255,255,0.06)',
            color: '#cfcfd8',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 999,
            padding: '11px 22px',
            fontWeight: 500,
            fontSize: 15,
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
          }}
        >
          ↻ Repetir animación
        </button>
      )}
    </>
  );
}
