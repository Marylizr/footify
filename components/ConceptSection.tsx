"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConceptSection() {
  return (
    <section id="concept" className="bg-[#c8c8e8] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: image */}
        <div className="flex justify-center">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/concept-sneaker.png"
              alt="Concept sneaker"
              width={520}
              height={520}
              className="w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#08080f] leading-tight">
            The Concept Behind Footify
          </h2>
          <p className="text-[#2a2a3a] text-base leading-relaxed">
            Footify was born from a simple idea: every sneaker should tell your
            story. We combine cutting-edge technology with artisan craftsmanship
            to give you complete creative control over your footwear.
          </p>
          <p className="text-[#2a2a3a] text-base leading-relaxed">
            From bold colorways to intricate patterns and custom prints, Footify
            empowers you to express your identity through every step you take.
          </p>
          <p className="font-bold text-[#08080f] text-base">
            Unique Designs — Vibrant colors, textures, and custom prints.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-2">
              <h3 className="font-bold text-[#08080f] text-lg">
                Cutting-Edge Tech
              </h3>
              <p className="text-[#555566] text-sm leading-relaxed">
                AI-powered design tools and 3D visualization let you see your
                creation before it&apos;s made.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-2">
              <h3 className="font-bold text-[#08080f] text-lg">
                One-of-a-Kind
              </h3>
              <p className="text-[#555566] text-sm leading-relaxed">
                No two pairs are alike. Each sneaker is crafted exclusively for
                you, guaranteed unique.
              </p>
            </div>
          </div>

          <motion.a
            href="#cta"
            whileHover={{ scale: 1.06 }}
            className="inline-block bg-[#e91e8c] text-white px-8 py-3 rounded-full font-semibold text-base w-fit hover:bg-[#ff2d9b] transition-colors cursor-pointer"
          >
            Try now!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
