"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalCta() {
  return (
    <section id="cta" className="bg-[#08080f] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: image */}
        <div className="flex justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/images/cta-sneaker.png"
              alt="CTA sneaker"
              width={520}
              height={520}
              className="w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Right: text + button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 order-1 md:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Get Started &amp; Unleash Your Style
          </h2>
          <p className="text-[#a0a0b0] text-base leading-relaxed">
            Join thousands of sneaker enthusiasts who have already designed
            their dream pair. Your custom creation is just a few clicks away.
          </p>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.06 }}
            className="inline-block bg-[#e91e8c] text-white px-10 py-4 rounded-full font-semibold text-lg w-fit hover:bg-[#ff2d9b] transition-colors cursor-pointer"
          >
            Try now!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
