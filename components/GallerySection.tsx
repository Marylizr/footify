import Image from "next/image";
import shoeTwo from "../img/shoe-2.png";
import shoeThree from "../img/shoe-3.png";
import shoeFour from "../img/shoe-4.png";
import shoeFive from "../img/shoe-5.png";

const galleryItems = [
  {
    src: shoeTwo,
    alt: "Bright painted high-top sneaker on a red backdrop",
    title: "Color Burst",
  },
  {
    src: shoeThree,
    alt: "Dark high-top sneaker with vivid paint splashes",
    title: "Paint Motion",
  },
  {
    src: shoeFour,
    alt: "Color-shift high-top sneaker with neon painted details",
    title: "Neon Heat",
  },
  {
    src: shoeFive,
    alt: "Multicolor high-top sneaker with paint splashes",
    title: "Studio Splash",
  },
];

export default function GallerySection() {
  return (
    <section id="collections" className="bg-[#050712] px-4 py-12 md:px-6 md:py-14 lg:py-[88px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#ff2bbf]">
            Gallery
          </p>
          <h2 className="mt-4 text-[clamp(2rem,7vw,3.4rem)] font-black leading-[0.98] tracking-[-0.03em] text-white lg:text-[clamp(2.6rem,4.8vw,4.1rem)]">
            Explore the latest sneaker concepts.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-[rgba(255,255,255,0.045)] p-2 shadow-[0_20px_70px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[rgba(255,255,255,0.065)] lg:rounded-[1.5rem]"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-[radial-gradient(circle_at_50%_35%,rgba(23,139,255,0.18),#0b1028_68%)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 31vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-[#8f98b8]">Custom sneaker concept</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
