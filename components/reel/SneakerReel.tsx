"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

/* ------------------------------------------------------------------ *
 * SneakerReel — animación "carrete": foto fija (fondo negro) + el mismo
 * zapato recortado (sin fondo) en superposición. El recorte entra por la
 * derecha, se detiene sobre la foto unos segundos y sale por la izquierda;
 * loop infinito. CSS puro (sin JS de animación, sin dependencias).
 *
 * 1) Copia las imágenes a /public/reel/ :
 *      /public/reel/sneaker-photo.png    (foto original con fondo)
 *      /public/reel/sneaker-cutout.webp  (zapato sin fondo, transparente)
 *
 * 2) Uso (Next + Tailwind):
 *      import SneakerReel from "@/components/SneakerReel";
 *      <SneakerReel />
 *      // tamaño / posición desde el padre:
 *      <SneakerReel className="mx-auto w-[680px]" durationSec={7} />
 *
 * Las @keyframes se inyectan una sola vez; no necesitas tocar la config.
 * ------------------------------------------------------------------ */

const KEYFRAMES = `
@keyframes sneakerReelPass{
  0%   { transform: translateX(142%) scale(var(--s)); }
  15%  { transform: translateX(0%)   scale(var(--s)); }
  17.5%{ transform: translateX(-2.2%) scale(calc(var(--s) * 1.018)); }
  21%  { transform: translateX(0%)   scale(var(--s)); }
  55%  { transform: translateX(0%)   scale(var(--s)); }
  69%  { transform: translateX(-170%) scale(var(--s)); }
  100% { transform: translateX(-170%) scale(var(--s)); }
}
@keyframes sneakerReelFloat{
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-2.2%); }
}
`;

export type SneakerReelProps = {
  photoSrc?: string;
  cutoutSrc?: string;
  /** duración de un ciclo completo (s) */
  durationSec?: number;
  /** escala del recorte respecto a la foto */
  cutoutScale?: number;
  /** ajuste fino de posición del recorte (% del frame) */
  offsetX?: number;
  offsetY?: number;
  /** marco de película con perforaciones */
  filmFrame?: boolean;
  className?: string;
};

const SPROCKETS = Array.from({ length: 22 }, (_, i) => i);

function SprocketBar({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      className={[
        "relative z-[3] flex h-[30px] items-center justify-between bg-[#040405] px-4",
        position === "top" ? "border-b" : "border-t",
        "border-white/5",
      ].join(" ")}
    >
      {SPROCKETS.map((i) => (
        <span key={i} className="h-[9px] w-[15px] flex-none rounded-[2px] bg-white/10" />
      ))}
    </div>
  );
}

export default function SneakerReel({
  photoSrc = "/reel/sneaker-photo.png",
  cutoutSrc = "/reel/sneaker-cutout.webp",
  durationSec = 6.5,
  cutoutScale = 0.98,
  offsetX = -1,
  offsetY = -6,
  filmFrame = true,
  className = "",
}: SneakerReelProps) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#050506] font-mono " +
        "shadow-[0_50px_110px_-34px_rgba(0,0,0,0.9)] " +
        (className || "w-[min(92vw,880px)]")
      }
    >
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      {filmFrame && <SprocketBar position="top" />}

      <div className="relative overflow-hidden bg-black leading-[0]">
        {/* foto fija */}
        <img src={photoSrc} alt="Sneaker" className="block h-auto w-full" />

        {/* recorte en superposición */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{ transform: `translate(${offsetX}%, ${offsetY}%)` }}
        >
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ animation: "sneakerReelFloat 4.2s ease-in-out infinite" }}
          >
            <img
              src={cutoutSrc}
              alt="Sneaker overlay"
              className="block h-[90%] w-auto"
              style={{
                animation: `sneakerReelPass ${durationSec}s cubic-bezier(.5,.05,.2,1) infinite`,
                // @ts-expect-error CSS custom property
                "--s": cutoutScale,
                filter:
                  "drop-shadow(0 26px 44px rgba(0,0,0,.6)) drop-shadow(0 0 34px rgba(0,0,0,.32))",
                willChange: "transform",
              }}
            />
          </div>
        </div>

        {/* etiqueta */}
        <div className="pointer-events-none absolute bottom-3 left-3.5 z-[3] flex items-center gap-2 text-[10px] tracking-[0.22em] text-white/55">
          <span className="h-[7px] w-[7px] rounded-full bg-[#ff4d4d] shadow-[0_0_8px_#ff4d4d]" />
          <span>AUTO&nbsp;REEL · LOOP</span>
        </div>
      </div>

      {filmFrame && <SprocketBar position="bottom" />}
    </div>
  );
}
