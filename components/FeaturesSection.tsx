"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "360° Sneaker Customization",
    description:
      "Rotate, zoom, and modify every angle of your sneaker in real time. Choose colors, materials, and patterns on each individual panel.",
  },
  {
    title: "AI-Generated Concepts",
    description:
      "Describe your dream sneaker and let our AI generate design concepts. Refine them with your personal touches and make them truly yours.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#08080f] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
        {/* Left 40%: feature blocks */}
        <div className="md:col-span-2 flex flex-col gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-3"
            >
              <div className="w-10 h-1 bg-[#e91e8c] rounded-full" />
              <h3 className="text-2xl font-black text-white">{f.title}</h3>
              <p className="text-[#a0a0b0] text-base leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right 60%: image */}
        <div className="md:col-span-3 flex justify-center">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/features-sneaker.png"
              alt="Features sneaker"
              width={700}
              height={700}
              className="w-full max-w-lg object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
