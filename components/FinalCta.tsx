export default function FinalCta() {
  return (
    <section id="contact" className="bg-[#050712] px-6 py-[88px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,11,24,0.98),rgba(11,16,40,0.98))] px-6 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,0.42)] md:px-10 md:py-16">
          <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,215,255,0.22),transparent_70%)] blur-2xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,43,191,0.18),transparent_70%)] blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#00d7ff]">
              Final Step
            </p>
            <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-[0.96] tracking-[-0.04em] text-white">
              Ready to bring your vision to life?
            </h2>
            <p className="mt-5 text-base leading-8 text-[#c9d0e8] md:text-lg">
              Start customizing and step into a pair made for your story.
            </p>
            <a
              href="#design"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#050712] transition-transform hover:-translate-y-0.5"
            >
              Start Your Custom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
