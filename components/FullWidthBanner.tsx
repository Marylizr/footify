"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FullWidthBanner() {
  return (
    <section id="banner" className="w-full">
      <div className="relative w-full h-[55vh] md:h-[68vh] min-h-[400px]">
        {/* Edge-to-edge sneaker image */}
        <Image
          src="/images/banner-sneaker.png"
          alt="Colorful Jordan 1"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* ── Text bar at the BOTTOM ─── */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#2a6060]/80 backdrop-blur-sm py-5 md:py-7 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="text-white font-black text-center leading-tight
                       text-[clamp(1.5rem,5vw,4rem)]"
          >
            Create. Customize. Stand Out
          </motion.h2>

          {/* Mobile only tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            viewport={{ once: true }}
            className="md:hidden text-center text-white/75 italic text-sm mt-1"
          >
            No Rules. Just Pure Sneaker Art.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
