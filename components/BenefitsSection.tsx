"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Handcrafted Precision & Premium Materials",
    description:
      "Our artisans ensure high-quality finishes, premium paints, and durable coatings so your kicks stay fresh on and off the court.",
  },
  {
    title: "Limited Edition Drops & Collabs",
    description:
      "Exclusive Footify x Street Artists collabs—designed by the world's best urban creatives.",
  },
  {
    title: "Global Shipping & Sneaker Community",
    description:
      "Ship your custom Jordans anywhere & connect with other sneaker lovers in the Footify community.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[580px]">

        {/* ── LEFT: white bg, pink titles ─────────────── */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 gap-10">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h3 className="font-black text-[#e91e8c] leading-snug mb-2
                             text-[clamp(1.25rem,2.5vw,1.9rem)]">
                {b.title}
              </h3>
              <p className="text-[#333] text-sm md:text-base leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── RIGHT: player image fills column ─────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] md:min-h-0"
        >
          <Image
            src="/images/player.png"
            alt="Basketball player with paint splash"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
