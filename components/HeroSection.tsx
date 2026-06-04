"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const lines = ["The Ultimate", "Sneaker", "Customization", "Experience"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#08080f] overflow-hidden"
    >
      {/* ═══ TRUE 50/50 GRID — text left, shoe right ═══ */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT: headline + subheadline ───────────── */}
        <div className="relative z-10 flex flex-col justify-between
                        px-6 md:px-12 lg:px-16 xl:px-20
                        pt-28 pb-10 min-h-screen lg:min-h-0">
          {/* Staggered headline */}
          <div className="flex flex-col mt-4">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="block font-black text-white leading-[0.95] tracking-tight
                           text-[clamp(3.5rem,8vw,7.5rem)]"
              >
                {line}
              </motion.span>
            ))}
          </div>

          {/* Subheadline — pinned to bottom on desktop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="font-bold text-white text-[clamp(1rem,2.2vw,1.6rem)]"
          >
            Unleash Your Creativity.{" "}
            <span className="text-[#e91e8c]">Own</span> the Streets
          </motion.p>
        </div>

        {/* ── RIGHT: shoe fills this column completely ─── */}
        <div className="relative flex items-center justify-center
                        h-[55vw] lg:h-auto min-h-[380px]">

          {/* Outer ambient glow — large diffuse circle */}
          <div
            className="absolute w-[85%] h-[85%] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,140,60,0.22) 0%, rgba(200,60,20,0.10) 45%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />

          {/* Orange ring halo */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "min(72%, 520px)",
              height: "min(72%, 520px)",
              border: "2px solid rgba(255,130,40,0.35)",
              boxShadow:
                "0 0 40px rgba(255,130,40,0.20), inset 0 0 40px rgba(255,130,40,0.08)",
            }}
          />

          {/* Shoe — floats, fills column */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
            style={{ minHeight: "380px" }}
          >
            <Image
              src="/images/hero-sneaker.png"
              alt="Custom Jordan sneaker"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
