import FanCardGallery from "./cards/FanCardGallery";

export default function GallerySection() {
  return (
    <section id="collections" className="overflow-hidden bg-[#050712] px-4 py-12 md:px-6 md:py-14 lg:py-[88px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff2bbf]">
            Gallery
          </p>
          <h2 className="mt-4 text-[clamp(2rem,7vw,3.4rem)] font-black leading-[0.98] tracking-[-0.03em] text-white lg:text-[clamp(2.6rem,4.8vw,4.1rem)]">
            Explore the latest sneaker concepts.
          </h2>
        </div>

        <FanCardGallery
          showHeader={false}
          speed={6.5}
          spacing={14}
          radius={700}
          className="mt-8 lg:mt-10"
        />
      </div>
    </section>
  );
}
