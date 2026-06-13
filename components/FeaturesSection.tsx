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

      {/*
        Container is exactly viewport height so the section never overflows.
        Background is a warm red gradient that MATCHES the image's own red bg,
        so the object-contain letterbox areas blend seamlessly.
      */}
      <div
        className="relative w-full h-screen"
        style={{
          background:
            "linear-gradient(150deg, #7a0e00 0%, #b81a00 30%, #cc2200 55%, #8b0800 85%, #550500 100%)",
        }}
      >
        {/* Shoe image — object-contain preserves full image, no cropping.
            Letterbox areas filled by the matching red gradient above.    */}
        <Image
          src="/images/features-sneaker.png"
          alt="Colorful Jordan sneaker on vibrant red background"
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />

        {/* Extra darkening on the left so white text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
        {/* Subtle top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* ── Feature text — upper-left overlay ── */}
        <div
          className="absolute inset-0 flex flex-col justify-start
                      p-6 md:p-12 lg:p-16 pt-12 md:pt-16 lg:pt-20"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12 max-w-[min(440px,48vw)]"
            >
              <h3
                className="text-white font-black leading-tight mb-3
                           text-[clamp(1.2rem,2.4vw,2rem)]"
              >
                {f.title}
              </h3>
              <p className="text-white/85 leading-relaxed text-[clamp(0.85rem,1.4vw,1.05rem)]">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
