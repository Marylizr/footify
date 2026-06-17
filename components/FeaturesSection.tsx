const steps = [
  {
    number: "01",
    title: "Choose your base",
    body: "Start with the silhouette that fits your style and the story you want to tell.",
  },
  {
    number: "02",
    title: "Customize your look",
    body: "Tune colors, materials and accents until the design feels complete.",
  },
  {
    number: "03",
    title: "Wear your masterpiece",
    body: "Lock in the build and step into a pair made for your own lane.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#080b18] px-4 py-12 md:px-6 md:py-14 lg:py-[88px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#00d7ff]">
            How It Works
          </p>
          <h2 className="mt-4 text-[clamp(2rem,7vw,3.4rem)] font-black leading-[0.98] tracking-[-0.03em] text-white lg:text-[clamp(2.6rem,4.8vw,4.2rem)]">
            Three steps to your next favorite pair.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.25rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-1 lg:rounded-[1.75rem] lg:p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#178bff,#00d7ff,#ff2bbf)] text-sm font-black text-white">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c9d0e8]">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
