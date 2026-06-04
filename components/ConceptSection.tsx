"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConceptSection() {
  return (
    <section id="concept" className="bg-[#d0d0e8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[700px]">

        {/* ── LEFT: dark purple rounded card ─────────────── */}
        <div className="relative bg-[#3d3d8f] md:rounded-r-3xl overflow-hidden flex flex-col p-8 md:p-10 lg:p-14">
          {/* Inner glow */}
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#6060cc]/30 rounded-full blur-3xl pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 text-white font-black leading-tight
                       text-[clamp(2rem,4vw,3rem)]"
          >
            The Concept<br />Behind Footify
          </motion.h2>

          {/* Sneaker floats at the bottom of the card */}
          <div className="relative z-10 flex-1 flex items-end justify-center mt-6">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full"
            >
              <Image
                src="/images/concept-sneaker.png"
                alt="Concept sneaker"
                width={520}
                height={520}
                className="w-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT: light content column ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#e8e8f0] flex flex-col justify-center gap-6 p-8 md:p-10 lg:p-14"
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
            Unique Designs — Vibrant colors,<br />textures, and custom prints.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Cutting-Edge Tech",
                desc: "Advanced digital mockups for seamless customization.",
              },
              {
                title: "One-of-a-Kind",
                desc: "Sneakers – No limits, no rules. Just pure self-expression.",
              },
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

          {/* CTA — dark navy, rounded rectangle (matches screenshot) */}
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
