"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section id="design" className="bg-[#0d0d2a] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-black text-white leading-tight
                     text-[clamp(2rem,6vw,5rem)]"
        >
          Design Your Own{" "}
          <span className="text-[#e91e8c]">Jordans</span> Today!!!
        </motion.h2>
      </div>
    </section>
  );
}
