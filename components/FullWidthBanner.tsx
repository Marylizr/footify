import Image from "next/image";

export default function FullWidthBanner() {
  return (
    <section id="community" className="bg-[#080b18] px-6 py-[92px]">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(5,7,18,0.98),rgba(11,16,40,0.98))] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
        <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="relative min-h-[430px] bg-[#050712] p-4 sm:p-5 lg:min-h-[560px] lg:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(0,215,255,0.16),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(255,43,191,0.12),transparent_24%)]" />
            <div className="relative h-full min-h-[390px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.04)]">
              <Image
                src="/images/player.png"
                alt="Basketball player in a lifestyle scene"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[50%_18%]"
              />
            </div>
          </div>

          <div className="relative flex items-center p-6 sm:p-8 lg:p-12 xl:p-14">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#178bff]/15 blur-3xl" />
            <div className="relative max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#00d7ff]">
                Lifestyle / Community
              </p>
              <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.6rem)] font-black leading-[0.96] tracking-[-0.04em] text-white">
                Wear your story
              </h2>
              <p className="mt-5 text-base leading-8 text-[#c9d0e8] md:text-lg">
                Made for creators, players and streetwear lovers who want something nobody else owns.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#050712] transition-transform hover:-translate-y-0.5"
              >
                Join the Movement
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
