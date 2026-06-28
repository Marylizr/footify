"use client";

import React, { useEffect, useRef, useState } from "react";
import c1 from "./c1.png";
import c2 from "./c2.png";
import c3 from "./c3.png";
import c4 from "./c4.png";
import c5 from "./c5.png";
import c6 from "./c6.png";
import c7 from "./c7.png";
import c8 from "./c8.png";

/* ------------------------------------------------------------------ *
 * FanCardGallery — galería en abanico (hand-of-cards) que barre hacia
 * la derecha en loop, arrastrable con mouse/dedo. Tap/clic en una card
 * la abre aislada en grande (lightbox) con flechas para navegar.
 * Plain React + Tailwind. Sin dependencias externas.
 *
 * 1) Usa las imágenes locales del componente (o pásale tu propio `items`).
 * 2) Uso:
 *      import FanCardGallery from "@/components/FanCardGallery";
 *      <FanCardGallery />
 *      <FanCardGallery items={mis} speed={9} spacing={16} radius={760} />
 *
 * Las @keyframes del lightbox se inyectan una vez (no toca tailwind.config).
 * ------------------------------------------------------------------ */

const KEYFRAMES = `
@keyframes fanOvFade{from{opacity:0}to{opacity:1}}
@keyframes fanOvZoom{from{opacity:0;transform:scale(.92) translateY(12px)}to{opacity:1;transform:scale(1) translateY(0)}}
`;

export type FanCard = { img: string; name: string; sub: string };

export type FanCardGalleryProps = {
  items?: FanCard[];
  /** giro automático cuando no arrastras */
  autoplay?: boolean;
  /** velocidad del barrido (grados/segundo) */
  speed?: number;
  /** apertura del abanico (grados entre cartas) */
  spacing?: number;
  /** radio / curvatura del abanico (px) */
  radius?: number;
  /** título superior */
  title?: string;
  eyebrow?: string;
  showHeader?: boolean;
  className?: string;
};

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

const DEFAULT_ITEMS: FanCard[] = [
  { img: c5.src, name: "Color Burst",  sub: "Custom sneaker concept" },
  { img: c6.src, name: "Paint Motion", sub: "Custom sneaker concept" },
  { img: c7.src, name: "Neon Heat",    sub: "Custom sneaker concept" },
  { img: c8.src, name: "Acid Wash",    sub: "Custom sneaker concept" },
  { img: c1.src, name: "Prism Drip",   sub: "Custom sneaker concept" },
  { img: c2.src, name: "Holo Rush",    sub: "Custom sneaker concept" },
  { img: c3.src, name: "Spray Saga",   sub: "Custom sneaker concept" },
  { img: c4.src, name: "Chroma Pop",   sub: "Custom sneaker concept" },
];

export default function FanCardGallery({
  items = DEFAULT_ITEMS,
  autoplay = true,
  speed = 7,
  spacing = 15,
  radius = 720,
  title = "Sneaker Collection",
  eyebrow = "Concept Drops",
  showHeader = true,
  className = "",
}: FanCardGalleryProps) {
  const N = items.length;
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isMobileFan, setIsMobileFan] = useState(false);

  const offsetRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const movedRef = useRef(0);
  const selRef = useRef<number | null>(null);
  selRef.current = selected;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const syncMobileFan = () => setIsMobileFan(media.matches);
    syncMobileFan();
    media.addEventListener("change", syncMobileFan);
    return () => media.removeEventListener("change", syncMobileFan);
  }, []);

  // bucle de barrido
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const loop = () => {
      const now = performance.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (autoplay && !draggingRef.current && selRef.current == null) {
        offsetRef.current += speed * dt;
        setOffset(offsetRef.current);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [autoplay, speed]);

  // cerrar con Escape / navegar con flechas
  useEffect(() => {
    if (selected == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      else if (e.key === "ArrowRight") setSelected((s) => (s == null ? s : (s + 1) % N));
      else if (e.key === "ArrowLeft") setSelected((s) => (s == null ? s : (s - 1 + N) % N));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, N]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (selRef.current != null) return;
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    movedRef.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    movedRef.current += Math.abs(dx);
    offsetRef.current += dx * 0.16;
    setOffset(offsetRef.current);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const wasDragging = draggingRef.current;
    draggingRef.current = false;
    if (!wasDragging || selRef.current != null) return;
    if (movedRef.current >= 6) return; // fue arrastre, no tap
    const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
    const hit = el?.closest?.("[data-idx]") as HTMLElement | null;
    if (hit) setSelected(+hit.getAttribute("data-idx")!);
  };

  // ---- geometría del abanico ----
  const effectiveSpacing = isMobileFan ? Math.max(spacing, 22) : spacing;
  const W = N * effectiveSpacing;
  const half = W / 2;
  const mobileFadeStart = effectiveSpacing * 1.75;
  const mobileFadeEnd = effectiveSpacing * 2.55;
  const desktopFadeStart = half - effectiveSpacing * 1.15;
  const cardWidth = "clamp(150px, 34vw, 236px)";
  const cardHeight = "clamp(195px, 44vw, 306px)";
  const cardTop = "clamp(18px, 5vw, 46px)";
  const cardRadius = `clamp(260px, 72vw, ${radius}px)`;

  const cards = items.map((c, i) => {
    let a = i * effectiveSpacing + offset;
    a = ((a % W) + W) % W;
    a -= half;
    const op = isMobileFan
      ? 1 - clamp01((Math.abs(a) - mobileFadeStart) / (mobileFadeEnd - mobileFadeStart))
      : 1 - clamp01((Math.abs(a) - desktopFadeStart) / (half - desktopFadeStart));
    const style: React.CSSProperties = {
      position: "absolute",
      left: "50%",
      top: cardTop,
      width: cardWidth,
      height: cardHeight,
      marginLeft: "calc(clamp(150px, 34vw, 236px) / -2)",
      transformOrigin: `50% ${cardRadius}`,
      transform: `rotate(${a.toFixed(3)}deg)`,
      borderRadius: 18,
      overflow: "hidden",
      backgroundImage: `url("${c.img}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#15151b",
      boxShadow: "0 34px 60px -24px rgba(0,0,0,.78), 0 10px 22px -12px rgba(0,0,0,.6)",
      opacity: op,
      zIndex: Math.round(a) + 400,
      pointerEvents: op > 0.5 ? "auto" : "none",
      cursor: "pointer",
      willChange: "transform",
    };
    return { ...c, style, idx: i };
  });

  const sel = selected != null ? items[selected] : null;

  return (
    <div
      className={
        "relative flex min-h-[320px] w-full flex-col overflow-hidden rounded-[1.5rem] text-white sm:min-h-[460px] lg:min-h-[640px] " +
        className
      }
      style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      {/* header */}
      {showHeader && (
        <div className="relative z-30 flex items-start justify-between gap-6 px-5 py-6 sm:px-9 sm:py-8">
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-[0.28em] text-white/45">{eyebrow}</div>
            <div className="text-[26px] font-bold tracking-[-0.02em]">{title}</div>
          </div>
          <div className="pt-1.5 text-right text-[10px] uppercase leading-relaxed tracking-[0.22em] text-white/40">
            arrastra ◂ ▸<br />o deja correr
          </div>
        </div>
      )}

      {/* abanico */}
      <div
        className="relative min-h-[310px] flex-1 cursor-grab touch-pan-y sm:min-h-[430px] lg:min-h-[560px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {cards.map((card) => (
          <div
            key={card.idx}
            data-idx={card.idx}
            role="button"
            tabIndex={card.style.pointerEvents === "auto" ? 0 : -1}
            aria-label={`Open ${card.name}`}
            style={card.style}
            onClick={() => {
              if (movedRef.current < 6) setSelected(card.idx);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(card.idx);
              }
            }}
          >
            <div className="absolute inset-0 [background:linear-gradient(to_top,rgba(5,5,8,.92)_0%,rgba(5,5,8,.34)_32%,rgba(5,5,8,0)_56%)]" />
            <div className="absolute bottom-[15px] left-4 right-3.5">
              <div className="text-[16px] font-bold tracking-[-0.01em] [text-shadow:0_1px_6px_rgba(0,0,0,.6)]">{card.name}</div>
              <div className="mt-[3px] text-[11px] text-white/60">{card.sub}</div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[18px] [box-shadow:inset_0_1px_0_rgba(255,255,255,.10),inset_0_0_0_1px_rgba(255,255,255,.06)]" />
          </div>
        ))}
      </div>

      {/* lightbox */}
      {sel && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(6,6,9,.9)] px-[6vw] py-[5vh] backdrop-blur-[10px] [animation:fanOvFade_.26s_ease]"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-[min(92vw,1080px)] [animation:fanOvZoom_.36s_cubic-bezier(.2,.7,.2,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="rounded-2xl bg-[#0c0c11] [box-shadow:0_50px_110px_-34px_rgba(0,0,0,.9),inset_0_0_0_1px_rgba(255,255,255,.06)]"
              style={{
                width: "100%",
                aspectRatio: "16 / 10",
                maxHeight: "70vh",
                backgroundImage: `url("${sel.img}")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <div className="mt-5 flex items-end justify-between">
              <div>
                <div className="mb-[7px] text-[11px] uppercase tracking-[0.26em] text-white/45">{sel.sub}</div>
                <div className="text-[30px] font-bold tracking-[-0.025em]">{sel.name}</div>
              </div>
              <div className="text-[13px] tracking-[0.14em] text-white/50">
                {String(selected! + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); setSelected((s) => (s == null ? s : (s - 1 + N) % N)); }}
              aria-label="Previous sneaker concept"
              className="absolute left-[-2px] top-[35%] flex h-[50px] w-[50px] -translate-x-[120%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[rgba(20,20,26,.7)] text-[22px] leading-none text-white"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelected((s) => (s == null ? s : (s + 1) % N)); }}
              aria-label="Next sneaker concept"
              className="absolute right-[-2px] top-[35%] flex h-[50px] w-[50px] translate-x-[120%] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[rgba(20,20,26,.7)] text-[22px] leading-none text-white"
            >
              ›
            </button>
          </div>

          <button
            onClick={() => setSelected(null)}
            aria-label="Close sneaker concept"
            className="absolute right-[30px] top-[26px] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[rgba(20,20,26,.6)] text-[18px] text-white"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
