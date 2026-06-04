"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section id="design" className="bg-[#0d0d1a] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-7xl font-black text-white leading-tight"
        >
          Design Your Own{" "}
          <span className="text-[#e91e8c]">Jordans</span> Today!!!
        </motion.h2>
      </div>
    </section>
  );
}
