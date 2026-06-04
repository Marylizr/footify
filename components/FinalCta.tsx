"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalCta() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[560px]">

        {/* ── LEFT: sneaker fills the entire column ─── */}
        <div className="relative min-h-[380px] md:min-h-0 order-2 md:order-1">
          <Image
            src="/images/cta-sneaker.png"
            alt="Get started sneaker"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>

        {/* ── RIGHT: deep navy-blue gradient ───────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative flex flex-col justify-center
                     px-10 py-14 md:px-14 lg:px-20
                     order-1 md:order-2"
          style={{
            background:
              "linear-gradient(135deg, #12103a 0%, #0d1b52 55%, #0a1640 100%)",
          }}
        >
          {/* Subtle top-right glow */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full
                       opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #4040cc 0%, transparent 70%)",
            }}
          />

          {/* Heading — 3 lines as in screenshot */}
          <h2
            className="relative z-10 font-black leading-tight text-white/90
                       text-[clamp(2.6rem,5.5vw,5rem)]"
          >
            Get Started &amp;<br />
            Unleash Your<br />
            Style
          </h2>

          {/* Pink CTA button — rounded-lg, not pill */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 mt-10 inline-block
                       bg-[#e91e8c] hover:bg-[#ff2d9b] transition-colors
                       text-white font-semibold text-xl
                       px-10 py-4 rounded-lg w-fit cursor-pointer"
          >
            Try now!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
