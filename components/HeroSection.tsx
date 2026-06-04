"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const headline = "The Ultimate Sneaker Customization Experience";
const words = headline.split(" ");

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#08080f] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 65% 50%, rgba(233,30,140,0.12) 0%, rgba(100,60,180,0.14) 35%, #08080f 70%)",
      }}
    >
      {/* top-left corner glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f5e642, transparent 70%)" }} />
      {/* bottom-right accent */}
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #e91e8c, transparent 65%)" }} />
      <div className="max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-6 z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`inline-block mr-[0.25em] ${
                  word === "Customization" ? "text-[#e91e8c]" :
                  word === "Experience"   ? "text-[#f5e642]" : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: words.length * 0.08 + 0.2 }}
            className="text-[#a0a0b0] text-xl md:text-2xl font-medium"
          >
            Unleash Your Creativity. Own the Streets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: words.length * 0.08 + 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="#concept"
              className="bg-[#e91e8c] text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-[#ff2d9b] transition-colors"
            >
              Explore Now
            </a>
            <a
              href="#features"
              className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold text-base hover:border-white/50 transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Right: image */}
        <div className="flex justify-center items-center">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero-sneaker.png"
              alt="Custom sneaker"
              width={600}
              height={600}
              className="w-full max-w-md md:max-w-full object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
