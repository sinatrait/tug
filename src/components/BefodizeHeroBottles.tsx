import Image from "next/image";
import { befodize } from "@/content/products";

export function BefodizeHeroBottles() {
  const gold = befodize.presentations[0];
  const dark = befodize.presentations[1];

  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none"
      aria-label="BEFODIZE perfume bottles"
    >
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-gold/25 blur-3xl"
      />

      <figure className="absolute top-[14%] left-[1%] z-10 w-[58%] -rotate-6 overflow-hidden rounded-sm border border-gold/35 bg-navy shadow-[0_24px_50px_rgba(0,0,0,0.45)]">
        <Image
          src={dark.image.src}
          alt={dark.image.alt}
          width={dark.image.width}
          height={dark.image.height}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 16rem, 50vw"
        />
        <figcaption className="sr-only">{dark.name}</figcaption>
      </figure>

      <figure className="absolute top-[2%] right-[1%] z-20 w-[62%] rotate-3 overflow-hidden rounded-sm border border-gold/50 bg-navy shadow-[0_28px_60px_rgba(0,0,0,0.5)]">
        <Image
          src={gold.image.src}
          alt={gold.image.alt}
          width={gold.image.width}
          height={gold.image.height}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 18rem, 55vw"
          priority
        />
        <figcaption className="sr-only">{gold.name}</figcaption>
      </figure>
    </div>
  );
}
