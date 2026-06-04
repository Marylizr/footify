"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Each line of the headline renders as a separate stagger block
const lines = ["The Ultimate", "Sneaker", "Customization", "Experience"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] bg-[#08080f] overflow-hidden"
    >
      {/* ── Sneaker: right 65%, fills full height, floats ── */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-0 w-[65%] md:w-[60%] h-full pointer-events-none"
      >
        <Image
          src="/images/hero-sneaker.png"
          alt="Custom Jordan sneaker"
          fill
          className="object-contain object-right-bottom"
          priority
          sizes="65vw"
        />
      </motion.div>

      {/* ── Left-to-right gradient so text stays readable ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08080f] via-[#08080f]/80 to-transparent pointer-events-none" />
      {/* ── Bottom gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080f]/60 via-transparent to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-14 lg:px-20 pt-28 pb-10">
        {/* Headline — each line staggers in from the left */}
        <div className="flex flex-col">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="block font-black leading-none tracking-tight text-white
                         text-[clamp(3rem,9vw,7.5rem)]"
            >
              {line}
            </motion.span>
          ))}
        </div>

        {/* Subheadline — bottom */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-white font-semibold text-[clamp(1.1rem,3vw,2rem)]"
        >
          Unleash Your Creativity.{" "}
          <span className="text-[#e91e8c]">Own</span> the Streets
        </motion.p>
      </div>
    </section>
  );
}
