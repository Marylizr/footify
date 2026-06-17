import Image from "next/image";

export default function CtaBanner() {
  return (
    <section id="customize" className="bg-[#050712] px-4 py-12 md:px-6 md:py-14 lg:py-[96px]">
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#ff2bbf_0%,#6c4dff_43%,#178bff_100%)] p-4 shadow-[0_36px_120px_rgba(0,0,0,0.48)] md:p-5 lg:rounded-[2.25rem] lg:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <div className="relative z-10 max-w-2xl py-3 text-white lg:py-8">
            <div className="absolute -left-4 top-0 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
              Signature Sneaker
            </p>
            <h2 className="mt-4 text-[clamp(2rem,7vw,3.7rem)] font-black leading-[0.98] tracking-[-0.03em] text-white lg:text-[clamp(2.8rem,5vw,4.7rem)]">
              Build Your Own Signature Sneaker
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/85 lg:mt-5 lg:text-lg lg:leading-8">
              Pick your base. Choose your colors. Add unique details. Make it yours.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#071022] transition-transform hover:-translate-y-0.5"
            >
              Start Designing
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[700px]">
            <div className="absolute inset-6 -z-10 rounded-[2rem] bg-white/20 blur-3xl" />
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.2rem] border border-white/20 bg-[#f7f8ff] md:aspect-[2.2/1] lg:aspect-[1.5/1] lg:rounded-[1.75rem]">
              <Image
                src="/images/banner-sneaker.png"
                alt="Colorful signature sneaker concept"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-contain p-1 md:p-2 lg:scale-[1.08]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
