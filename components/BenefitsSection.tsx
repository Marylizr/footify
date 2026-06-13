const benefits = [
  {
    title: "Custom Designs",
    description: "Tailor every pair into your own sneaker art story.",
  },
  {
    title: "Premium Finish",
    description: "Clean materials, rich detail, and polished presentation.",
  },
  {
    title: "Fast Delivery",
    description: "A smooth handoff from concept to your doorstep.",
  },
  {
    title: "Secure Checkout",
    description: "Simple, trusted ordering with clear purchase flow.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#080b18] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-[linear-gradient(90deg,#178bff,#00d7ff,#ff2bbf)]" />
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c9d0e8]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
