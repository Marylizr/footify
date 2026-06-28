export default function FullWidthBanner() {
  return (
    <section id="community" className="bg-[#080b18] px-4 py-12 md:px-6 md:py-14 lg:py-[92px]">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(5,7,18,0.98),rgba(11,16,40,0.98))] shadow-[0_30px_100px_rgba(0,0,0,0.4)] lg:rounded-[2.25rem]">
        <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="relative min-h-[280px] bg-[#050712] p-3 sm:min-h-[340px] sm:p-4 lg:min-h-[560px] lg:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(0,215,255,0.16),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(255,43,191,0.12),transparent_24%)]" />
            <div className="relative h-full min-h-[250px] overflow-hidden rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] sm:min-h-[310px] lg:min-h-[390px] lg:rounded-[1.75rem]">
              <video
                className="h-full w-full object-cover object-[50%_18%]"
                src="/images/animacion-jugador.mov"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Animated basketball player lifestyle scene"
              />
            </div>
          </div>

          <div className="relative flex items-center p-5 sm:p-7 lg:p-12 xl:p-14">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#178bff]/15 blur-3xl" />
            <div className="relative max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#00d7ff]">
                Lifestyle / Community
              </p>
              <h2 className="mt-4 text-[clamp(2rem,7vw,3.5rem)] font-black leading-[0.98] tracking-[-0.03em] text-white lg:text-[clamp(2.8rem,5vw,4.6rem)]">
                Wear your story
              </h2>
              <p className="mt-4 text-base leading-7 text-[#c9d0e8] lg:mt-5 lg:text-lg lg:leading-8">
                Made for creators, players and streetwear lovers who want something nobody else owns.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex h-14 min-w-[14rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff2bbf_0%,#6c4dff_43%,#178bff_100%)] px-10 text-lg font-black text-white shadow-[0_18px_45px_rgba(108,77,255,0.28)] transition-transform hover:-translate-y-0.5"
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
