"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Handcrafted Precision & Premium Materials",
    description:
      "Every pair is assembled by skilled artisans using only premium-grade materials. Quality you can feel with every step.",
  },
  {
    title: "Limited Edition Drops & Collabs",
    description:
      "Exclusive collaborations with top artists and designers. Be the first to rock limited drops that never repeat.",
  },
  {
    title: "Global Shipping & Sneaker Community",
    description:
      "We ship worldwide and connect you with a global community of sneaker enthusiasts who share your passion.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-[#08080f] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: benefit items */}
        <div className="flex flex-col gap-10">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-2"
            >
              <div className="w-8 h-1 bg-[#e91e8c] rounded-full mb-1" />
              <h3 className="text-xl font-black text-white">{b.title}</h3>
              <p className="text-[#a0a0b0] text-base leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right: player image */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/images/player.png"
              alt="Basketball player with paint splash"
              width={520}
              height={520}
              className="w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
