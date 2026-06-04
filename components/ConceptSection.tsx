"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ConceptSection() {
  const shoeRef  = useRef(null);
  const inView   = useInView(shoeRef, { once: true, margin: "-60px" });
  const controls = useAnimation();

  useEffect(() => {
    if (!inView) return;
    // ① Slide shoe up into the scene from below
    controls
      .start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
      })
      // ② Chain into infinite gentle float
      .then(() => {
        controls.start({
          y: [0, -20, 0],
          transition: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
        });
      });
  }, [inView, controls]);

  return (
    <section id="concept" className="bg-[#d0d0e8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[680px]">

        {/* ══════════════════════════════════════════════════════
            LEFT — Purple card with heading ON TOP, shoe overflows
            ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col justify-start overflow-visible py-8 px-4 md:px-6">

          {/*
            The card wraps heading + shoe in a normal FLEX-COLUMN flow.
            overflow: visible lets the shoe bleed outside the card bounds.
            The heading is always FIRST in DOM → always above the shoe.
          */}
          <div
            className="relative bg-[#3d3d8f] rounded-3xl flex flex-col overflow-visible"
          >
            {/* Inner glow */}
            <div
              className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(100,100,220,0.3), transparent 70%)",
                filter: "blur(28px)",
              }}
            />

            {/* ── HEADING — always on top in DOM, stays visible ── */}
            <div className="relative z-20 px-7 pt-8 pb-4 md:px-9 md:pt-10">
              <h2
                className="text-white font-black leading-[1.1]
                           text-[clamp(1.8rem,3vw,2.8rem)]"
              >
                The Concept
                <br />
                Behind Footify
              </h2>
            </div>

            {/* ── SHOE — below heading in DOM, z-10 ──
                negative marginBottom makes the shoe overflow the card bottom.
                The scroll-reveal starts from y:120 (below card).           */}
            <div className="relative z-10 flex justify-center overflow-visible px-4">
              <motion.div
                ref={shoeRef}
                initial={{ opacity: 0, y: 120 }}
                animate={controls}
                className="w-full max-w-[460px]"
                style={{ marginBottom: "-14%" }}
                /* shoe overflows card bottom */
              >
                <Image
                  src="/images/concept-sneaker.png"
                  alt="Jordan sneaker"
                  width={680}
                  height={680}
                  className="w-full h-auto object-contain"
                  style={{
                    filter: "drop-shadow(0 28px 40px rgba(0,0,0,0.6))",
                  }}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            RIGHT — brand copy, feature cards, CTA
            ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          viewport={{ once: true }}
          className="bg-[#e8e8f0] flex flex-col justify-center gap-6
                     p-8 md:p-10 lg:p-14"
        >
          <p className="text-[#2a2a4a] text-base md:text-lg leading-relaxed">
            Footify isn&apos;t just a sneaker customization platform—it&apos;s a movement
            for creators, trendsetters, and sneakerheads who want to break the mold.
            Here, your shoes become your canvas, and your style becomes the masterpiece.
          </p>

          <p className="text-[#2a2a4a] text-base md:text-lg leading-relaxed">
            Whether you&apos;re a basketball player, street artist, or fashion enthusiast,
            Footify lets you personalize your Nike Jordans like never before.
          </p>

          <p className="text-[#2a2a4a] font-black text-lg md:text-xl leading-snug">
            Unique Designs — Vibrant colors,<br />
            textures, and custom prints.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Cutting-Edge Tech",   desc: "Advanced digital mockups for seamless customization." },
              { title: "One-of-a-Kind",        desc: "Sneakers – No limits, no rules. Just pure self-expression." },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/60 border border-white/70 rounded-2xl p-5"
              >
                <h3 className="font-bold text-[#3d3d8f] text-base mb-2">{card.title}</h3>
                <p className="text-[#444466] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <motion.a
            href="#cta"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#3d3d8f] hover:bg-[#4a4ab5] transition-colors
                       text-white px-10 py-4 rounded-xl font-bold text-lg w-fit cursor-pointer"
          >
            Try now!
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
