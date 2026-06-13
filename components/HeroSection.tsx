import Image from "next/image";
import heroShoe from "../img/shoe-1.png";

export default function HeroSection() {
  return (
    <section
      id="design"
      className="relative min-h-screen overflow-hidden bg-[#050712] pt-28 md:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,215,255,0.12),transparent_30%),radial-gradient(circle_at_82%_38%,rgba(255,43,191,0.13),transparent_28%),linear-gradient(180deg,#050712_0%,#090b16_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,18,0.96)_0%,rgba(5,7,18,0.78)_45%,rgba(5,7,18,0.26)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,215,255,0.12),transparent_30%),linear-gradient(180deg,rgba(5,7,18,0.15)_0%,rgba(5,7,18,0.72)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1280px] items-center gap-10 px-6 pb-16 lg:grid-cols-[0.74fr_1.26fr] lg:gap-4">
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#c9d0e8] backdrop-blur-sm">
            Design. Create. Wear.
          </span>

          <h1 className="mt-6 text-balance text-[clamp(3rem,5.2vw,5.65rem)] font-black leading-[0.94] tracking-[-0.05em] text-white">
            The Ultimate Sneaker Customization Experience
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-[#c9d0e8] md:text-lg">
            Design. Personalize. Stand Out. Create sneakers that are 100% you.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#customize"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#050712] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f2f5ff]"
            >
              Design Yours
            </a>
            <a
              href="#collections"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/10"
            >
              Explore Gallery
            </a>
          </div>

          <p className="mt-6 text-sm text-[#8f98b8]">
            Built for creators who want custom sneakers with a premium neon streetwear feel.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[820px] lg:max-w-[900px]">
          <Image
            src={heroShoe}
            alt="Premium custom sneaker concept"
            priority
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
