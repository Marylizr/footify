"use client";

import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#concept" },
  { label: "Pinktails", href: "#features" },
  { label: "Contact", href: "#benefits" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 50));
  }, [scrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080f]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-0 select-none">
          <span className="text-2xl font-black tracking-tight leading-none">
            <span className="text-[#e91e8c]">F</span>
            <span className="text-[#f5e642]">∞</span>
            <span className="text-white font-light">∞</span>
            <span className="text-white">T</span>
            <span className="text-[#e91e8c]">i</span>
            <span className="text-white">fy</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#a0a0b0] hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-[#e91e8c] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ff2d9b] transition-colors duration-200"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0d0d1a] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#a0a0b0] hover:text-white text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="bg-[#e91e8c] text-white px-5 py-2 rounded-full text-sm font-semibold text-center hover:bg-[#ff2d9b] transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
