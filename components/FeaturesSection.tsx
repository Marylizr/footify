"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "360° Sneaker Customization",
    body: "Design your Jordans in real-time with our interactive 3D editor. Choose materials, colors, laces, patterns, and even add your own graffiti or digital artwork.",
  },
  {
    title: "AI-Generated Concepts",
    body: "Need inspiration? Our AI-powered sneaker designer creates unique, street-ready looks based on your preferences and mood.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative w-full">
      {/* ── Full-bleed sneaker image as background ── */}
      <div className="relative w-full h-[60vh] md:h-[75vh] min-h-[480px]">
        <Image
          src="/images/features-sneaker.png"
          alt="Colorful Jordan sneaker"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Gradient: strong left → fades right, + top fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        {/* ── Text overlaid: top-left ── */}
        <div className="absolute inset-0 flex flex-col justify-start p-6 md:p-12 lg:p-16 pt-10 md:pt-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12 max-w-[min(480px,55vw)]"
            >
              <h3 className="text-white font-black text-xl md:text-3xl lg:text-4xl mb-3 leading-tight">
                {f.title}
              </h3>
              <p className="text-white/85 text-sm md:text-base lg:text-lg leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
