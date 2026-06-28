import Image from "next/image";

const mainLinks = [
  { label: "Design", href: "#design" },
  { label: "Collections", href: "#collections" },
  { label: "Customize", href: "#customize" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050712] px-6 py-14 md:py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,215,255,0.45),rgba(255,43,191,0.35),transparent)]" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#178bff]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl">
          <Image
            src="/images/logo.png"
            alt="Footify"
            width={160}
            height={60}
            className="h-11 w-auto object-contain brightness-[1.08]"
          />
          <p className="mt-6 max-w-md text-base leading-8 text-[#c9d0e8]">
            Custom sneaker concepts made for creators who want to stand out.
          </p>
          <a
            href="#design"
            className="mt-7 inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 text-sm font-bold text-white transition-colors hover:border-white/20 hover:bg-white/10"
          >
            Back to top
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:justify-items-end">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#c9d0e8]">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
              Legal
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#c9d0e8]">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-[1200px] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#8f98b8] sm:flex-row sm:items-center sm:justify-between">
        <p>Footify custom sneaker experience.</p>
        <p>Designed for premium everyday expression.</p>
      </div>
    </footer>
  );
}
