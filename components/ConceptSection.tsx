import Image from "next/image";

export default function ConceptSection() {
  return (
    <section id="about-us" className="bg-[#f6f7fb] text-[#071022]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-[96px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
        <div className="relative min-h-[460px] overflow-visible sm:min-h-[560px] lg:min-h-[640px]">
          <div className="absolute inset-x-6 bottom-7 top-0 rounded-[2.75rem] bg-[linear-gradient(135deg,#424487_0%,#65669d_52%,#7a7eb1_100%)] shadow-[0_34px_90px_rgba(41,43,101,0.22)] sm:inset-x-10 lg:bottom-10 lg:left-12 lg:right-4" />
          <div className="absolute inset-x-6 bottom-7 top-0 rounded-[2.75rem] bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.2),transparent_28%),radial-gradient(circle_at_76%_78%,rgba(11,16,40,0.16),transparent_32%)] sm:inset-x-10 lg:bottom-10 lg:left-12 lg:right-4" />
          <Image
            src="/images/concept-sneaker.png"
            alt="Concept sneaker with dark painted details"
            width={980}
            height={906}
            sizes="(min-width: 1024px) 58vw, 112vw"
            className="absolute -left-8 bottom-0 z-10 w-[112%] max-w-none object-contain drop-shadow-[0_34px_38px_rgba(7,16,34,0.36)] sm:-left-12 sm:w-[118%] lg:-left-16 lg:bottom-1 lg:w-[126%]"
          />
        </div>

        <div className="relative z-20 max-w-xl lg:pl-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#178bff]">
            The Concept
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,4.1rem)] font-black leading-[0.96] tracking-[-0.04em] text-[#071022]">
            Born of Creativity
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#33415f]">
            Footify turns sneakers into wearable art. Choose your base, colors, textures and details to create a pair that feels completely yours.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Unlimited Colors",
              "Premium Finish",
              "Unique Details",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#071022] shadow-[0_10px_30px_rgba(7,16,34,0.06)]"
              >
                {item}
              </div>
            ))}
          </div>

          <a
            href="#customize"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#071022] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Try It Out
          </a>
        </div>
      </div>
    </section>
  );
}
