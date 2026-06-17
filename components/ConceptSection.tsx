import Image from "next/image";

export default function ConceptSection() {
  return (
    <section id="about-us" className="bg-[#f6f7fb] text-[#071022]">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-12 md:px-6 md:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-[96px]">
        <div className="concept-visual relative aspect-[16/10] min-h-[240px] overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#424487_0%,#65669d_52%,#7a7eb1_100%)] shadow-[0_34px_90px_rgba(41,43,101,0.22)] sm:min-h-[300px] lg:aspect-auto lg:min-h-[520px] lg:rounded-[2.75rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.2),transparent_28%),radial-gradient(circle_at_76%_78%,rgba(11,16,40,0.16),transparent_32%)]" />
          <Image
            src="/images/concept-sneaker.png"
            alt="Concept sneaker with dark painted details"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="concept-shoe object-contain object-center p-3 drop-shadow-[0_34px_38px_rgba(7,16,34,0.36)] sm:p-5 lg:p-8"
          />
        </div>

        <div className="relative z-20 max-w-xl lg:pl-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#178bff]">
            The Concept
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,4.6vw,4.1rem)] font-black leading-[0.96] tracking-[-0.04em] text-[#071022]">
            Born of Creativity
          </h2>
          <p className="mt-5 text-base leading-7 text-[#33415f] lg:mt-6 lg:text-lg lg:leading-8">
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
