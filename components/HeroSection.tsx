import Image from "next/image";
import heroShoe from "../img/shoe-1.png";

export default function HeroSection() {
  return (
    <section
      id="design"
      className="hero-section relative overflow-hidden bg-[#050712] pt-16 md:pt-20 lg:min-h-screen lg:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_26%,rgba(255,43,191,0.2),transparent_28%),radial-gradient(circle_at_30%_38%,rgba(0,215,255,0.16),transparent_34%),linear-gradient(135deg,#050712_0%,#071a22_42%,#170616_100%)] lg:bg-[radial-gradient(circle_at_20%_20%,rgba(0,215,255,0.12),transparent_30%),radial-gradient(circle_at_82%_38%,rgba(255,43,191,0.13),transparent_28%),linear-gradient(180deg,#050712_0%,#090b16_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,18,0.98)_0%,rgba(5,7,18,0.9)_48%,rgba(5,7,18,0.42)_100%)] md:bg-[linear-gradient(90deg,rgba(5,7,18,0.96)_0%,rgba(5,7,18,0.72)_52%,rgba(5,7,18,0.18)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,7,18,0.96)_0%,rgba(5,7,18,0.78)_45%,rgba(5,7,18,0.26)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,215,255,0.1),transparent_30%),linear-gradient(180deg,rgba(5,7,18,0)_0%,rgba(5,7,18,0.74)_100%)]" />

      <div className="hero-inner relative z-10 mx-auto grid min-h-[min(488px,calc(100svh-4rem))] max-w-[1280px] items-start px-5 pb-10 pt-7 md:min-h-[min(820px,calc(100svh-5rem))] md:px-6 md:pt-10 lg:min-h-[calc(100vh-7rem)] lg:items-center lg:pb-14 lg:pt-0">
        <div className="relative z-20 max-w-[34rem] text-left lg:max-w-xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[#c9d0e8] backdrop-blur-sm md:px-4 md:py-2 md:text-xs md:tracking-[0.32em]">
            Design. Create. Wear.
          </span>

          <h1 className="hero-title mt-3 text-balance text-[clamp(2.25rem,8vw,3.6rem)] font-black leading-[0.9] tracking-normal text-white drop-shadow-[0_10px_28px_rgba(5,7,18,0.45)] md:mt-5 lg:text-[5rem] xl:text-[5.65rem]">
            The Ultimate Sneaker Customization Experience
          </h1>

          <p className="hero-copy mt-4 max-w-[22rem] text-pretty text-sm leading-6 text-[#c9d0e8] md:max-w-lg md:text-base md:leading-7 lg:mt-6 lg:max-w-2xl lg:text-lg lg:leading-8">
            Design. Personalize. Stand Out. Create sneakers that are 100% you.
          </p>

          <div className="hero-actions mt-5 flex max-w-[20rem] flex-row flex-wrap gap-2.5 md:max-w-none lg:mt-8 lg:gap-4 lg:justify-start">
            <a
              href="#customize"
              className="inline-flex min-w-[8rem] items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#050712] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f2f5ff] md:px-6 md:py-3.5 md:text-sm"
            >
              Design Yours
            </a>
            <a
              href="#collections"
              className="inline-flex min-w-[8rem] items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/10 md:px-6 md:py-3.5 md:text-sm"
            >
              Explore Gallery
            </a>
          </div>

          <p className="hero-footnote mt-4 max-w-[20rem] text-xs leading-5 text-[#8f98b8] md:max-w-md lg:mt-6 lg:max-w-none lg:text-sm">
            Built for creators who want custom sneakers with a premium neon streetwear feel.
          </p>
        </div>

        <div className="hero-art pointer-events-none absolute bottom-0 right-[-42vw] top-[0rem] z-10 w-[132vw] max-w-none opacity-58 md:right-[-26vw] md:top-[8rem] md:w-[104vw] md:opacity-65 lg:inset-y-0 lg:right-0 lg:w-[58%] lg:opacity-100 xl:w-[62%]">
          <Image
            src={heroShoe}
            alt="Premium custom sneaker concept"
            priority
            sizes="(min-width: 1280px) 62vw, (min-width: 1024px) 58vw, (min-width: 768px) 104vw, 132vw"
            className="h-full w-full object-cover object-[64%_58%] [mask-image:linear-gradient(90deg,transparent_0%,black_38%)] drop-shadow-[0_28px_55px_rgba(0,0,0,0.55)] lg:object-[62%_50%] lg:[mask-image:linear-gradient(90deg,transparent_0%,black_24%)]"
          />
        </div>
      </div>
    </section>
  );
}
