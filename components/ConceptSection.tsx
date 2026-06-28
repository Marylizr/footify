export default function ConceptSection() {
  return (
    <section id="about-us" className="overflow-hidden bg-[#000000] px-4 py-10 md:px-6 md:py-14 lg:py-[88px]">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 py-8 md:px-6 md:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-[96px]">
        <div className="concept-visual relative aspect-[4/3] min-h-[220px] w-full max-w-full overflow-hidden rounded-[1.25rem] bg-black sm:aspect-[16/10] sm:min-h-[300px] lg:aspect-auto lg:min-h-[520px] lg:overflow-visible lg:rounded-[2.75rem]">
          <video
            className="concept-shoe relative z-10 h-full w-full object-contain drop-shadow-[0_34px_38px_rgba(7,16,34,0.36)] lg:scale-[1.12]"
            src="https://res.cloudinary.com/da6il8qmv/video/upload/v1782589948/animacion_dipaqd.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Animated custom sneaker concept"
          />
        </div>

        <div className="relative z-20 w-full max-w-full min-w-0 lg:max-w-xl lg:pl-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#178bff]">
            The Concept
          </p>
          <h2 className="mt-4 max-w-full bg-[linear-gradient(135deg,#ff2bbf_0%,#6c4dff_43%,#178bff_100%)] bg-clip-text text-[clamp(2.25rem,12vw,3.1rem)] font-black leading-[0.94] tracking-normal text-transparent md:text-[clamp(2.55rem,5.2vw,4.7rem)] md:tracking-[-0.04em]">
            Born of Creativity
          </h2>
          <p className="mt-5 max-w-full text-sm leading-6 text-[#c9d0e8] md:text-base md:leading-7 lg:mt-6 lg:text-lg lg:leading-8">
            Footify turns sneakers into wearable art. Choose your base, colors, textures and details to create a pair that feels completely yours.
          </p>

          <div className="mt-8 grid w-full gap-3 sm:grid-cols-3">
            {[
              "Unlimited Colors",
              "Premium Finish",
              "Unique Details",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-black/10 bg-white px-4 py-3 text-center text-sm font-semibold text-[#071022] shadow-[0_10px_30px_rgba(7,16,34,0.06)]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:justify-start lg:justify-center">
            <a
              href="#customize"
              className="inline-flex h-12 w-full max-w-[15rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff2bbf_0%,#6c4dff_43%,#178bff_100%)] px-8 text-lg font-black text-white shadow-[0_18px_45px_rgba(108,77,255,0.28)] transition-transform hover:-translate-y-0.5 md:text-xl"
            >
              Try It Out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
