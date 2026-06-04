"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FullWidthBanner() {
  return (
    <section id="banner" className="w-full">
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/banner-sneaker.png"
          alt="Footify banner sneaker"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-black text-white leading-tight"
          >
            Create. Customize. Stand Out.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 text-lg md:hidden text-white/80 italic"
          >
            No Rules. Just Pure Sneaker Art.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
