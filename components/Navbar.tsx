"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Design", href: "#design" },
  { label: "Collections", href: "#collections" },
  { label: "Customize", href: "#customize" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050712]/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <a href="#design" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Footify"
            width={152}
            height={60}
            className="h-8 w-auto object-contain brightness-[1.1] md:h-9"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-[#c9d0e8] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white px-5 py-2 text-sm font-semibold text-[#050712] transition-transform hover:-translate-y-0.5"
          >
            Start Now
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#050712]/95 px-6 py-5 backdrop-blur-xl xl:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-[#c9d0e8] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-[#050712]"
          >
            Start Now
          </a>
        </div>
      )}
    </header>
  );
}
