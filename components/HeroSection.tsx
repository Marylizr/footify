import Image from "next/image";
import heroShoe from "../img/shoe-1.png";

export default function HeroSection() {
  return (
    <section
      id="design"
      className="relative min-h-[350px] overflow-hidden bg-[#050712] pt-20 md:min-h-screen md:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_26%,rgba(255,43,191,0.2),transparent_28%),radial-gradient(circle_at_30%_38%,rgba(0,215,255,0.16),transparent_34%),linear-gradient(135deg,#050712_0%,#071a22_42%,#170616_100%)] lg:bg-[radial-gradient(circle_at_20%_20%,rgba(0,215,255,0.12),transparent_30%),radial-gradient(circle_at_82%_38%,rgba(255,43,191,0.13),transparent_28%),linear-gradient(180deg,#050712_0%,#090b16_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,18,0.96)_0%,rgba(5,7,18,0.68)_50%,rgba(5,7,18,0.12)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,7,18,0.96)_0%,rgba(5,7,18,0.78)_45%,rgba(5,7,18,0.26)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,215,255,0.1),transparent_30%),linear-gradient(180deg,rgba(5,7,18,0)_0%,rgba(5,7,18,0.74)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[350px] max-w-[1280px] items-start px-5 pb-4 pt-4 md:min-h-[calc(100vh-8rem)] md:items-center md:px-6 md:pb-16 md:pt-0 lg:grid-cols-[0.74fr_1.26fr] lg:gap-4">
        <div className="relative z-20 max-w-[68vw] text-left sm:max-w-[22rem] md:max-w-xl lg:max-w-xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[#c9d0e8] backdrop-blur-sm md:px-4 md:py-2 md:text-xs md:tracking-[0.32em]">
            Design. Create. Wear.
          </span>

          <h1 className="mt-3 text-balance text-[2rem] font-black leading-[0.86] tracking-normal text-white drop-shadow-[0_10px_28px_rgba(5,7,18,0.45)] sm:text-[2.35rem] md:mt-6 md:text-6xl md:leading-[0.94] lg:text-[5rem] xl:text-[5.65rem]">
            The Ultimate Sneaker Customization Experience
          </h1>

          <p className="mt-4 max-w-[17rem] text-pretty text-[0.8rem] leading-5 text-[#c9d0e8] md:mt-6 md:max-w-2xl md:text-lg md:leading-8">
            Design. Personalize. Stand Out. Create sneakers that are 100% you.
          </p>

          <div className="mt-5 flex max-w-[13.5rem] flex-col gap-2.5 sm:flex-row md:mt-8 md:max-w-none md:gap-4 lg:justify-start">
            <a
              href="#customize"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#050712] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f2f5ff] md:px-6 md:py-3.5 md:text-sm"
            >
              Design Yours
            </a>
            <a
              href="#collections"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/10 md:px-6 md:py-3.5 md:text-sm"
            >
              Explore Gallery
            </a>
          </div>

          <p className="mt-4 max-w-[14rem] text-[0.7rem] leading-5 text-[#8f98b8] md:mt-6 md:max-w-none md:text-sm">
            Built for creators who want custom sneakers with a premium neon streetwear feel.
          </p>
        </div>

        <div className="absolute right-[-36vw] top-[0.75rem] z-10 w-[88vw] max-w-none sm:right-[-18vw] sm:top-[11rem] sm:w-[68vw] md:right-[-10vw] md:top-[9rem] md:w-[64vw] lg:relative lg:right-auto lg:top-auto lg:mx-auto lg:w-full lg:max-w-[900px]">
          <Image
            src={heroShoe}
            alt="Premium custom sneaker concept"
            priority
            sizes="(min-width: 1024px) 62vw, (min-width: 768px) 64vw, 92vw"
            className="h-auto w-full object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>
    </section>
  );
}
