import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { company } from "@/content/company";
import { befodize } from "@/content/products";
import { befodizeJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: befodize.seoTitle,
  description: befodize.seoDescription,
  path: "/befodize",
});

export default function BefodizePage() {
  return (
    <>
      <JsonLd data={befodizeJsonLd()} />
      <main id="main-content">
      <header className="border-b border-gold/20 bg-navy-deep text-cream">
        <Container className="grid items-end gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {befodize.hero.eyebrow}
            </p>
            <p className="mt-5 font-serif text-2xl text-gold-bright">
              {befodize.name}
            </p>
            <p className="mt-1 text-sm tracking-[0.18em] text-cream/70" dir="ltr">
              <span lang="ar">{befodize.nameArabic}</span>
              {" · "}
              {befodize.line}
              {" · "}
              {befodize.category}
            </p>
            <h1 className="font-serif mt-6 text-4xl leading-tight sm:text-6xl">
              {befodize.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cream/80">
              {befodize.hero.body}
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.16em] text-gold">
              {befodize.manufacturerCredit}
            </p>
          </div>
          <p className="font-serif text-2xl leading-snug text-gold-bright lg:text-right">
            {befodize.hero.kicker}
          </p>
        </Container>
      </header>

      <section className="bg-paper">
        <Container className="py-16">
          <h2 className="font-serif text-4xl">{befodize.story.title}</h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted">
            {befodize.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-16">
          <h2 className="font-serif text-4xl">A perfect blend</h2>
          <p className="mt-3 max-w-2xl text-muted">
            The published scent profile describes four parts of the blend.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {befodize.notes.map((note) => (
              <li
                key={note.name}
                className="border-t border-gold/40 pt-5"
              >
                <h3 className="font-serif text-2xl">{note.name}</h3>
                <p className="mt-2 leading-7 text-muted">{note.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy text-cream">
        <Container className="py-16">
          <h2 className="font-serif text-4xl">What the brand copy says</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {befodize.features.map((feature) => (
              <li key={feature.title}>
                <h3 className="font-serif text-2xl text-gold">{feature.title}</h3>
                <p className="mt-2 leading-7 text-cream/80">{feature.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16">
          <h2 className="font-serif text-4xl">Campaign photography</h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted">
            The current photography shows BEFODIZE in two bottle presentations.
            Both carry the same brand identity, Breeze of Paradise line, and The
            United Group manufacturing and marketing credit.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {befodize.presentations.map((presentation) => (
              <figure key={presentation.id} className="bg-cream">
                <Image
                  src={presentation.image.src}
                  alt={presentation.image.alt}
                  width={presentation.image.width}
                  height={presentation.image.height}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  priority={presentation.id === "gold"}
                />
                <figcaption className="px-5 py-5 text-sm leading-6 text-muted">
                  <span className="block font-semibold text-ink">
                    {presentation.name}
                  </span>
                  {presentation.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta
        title={`Ask about ${befodize.name}`}
        body={`${befodize.closing} ${company.phone} · ${company.email}`}
      />
      </main>
    </>
  );
}
