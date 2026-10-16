import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { company } from "@/content/company";
import { divisions } from "@/content/divisions";
import { home } from "@/content/home";
import { befodize } from "@/content/products";

export default function HomePage() {
  const featuredPresentation = befodize.presentations[0];

  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-navy-deep text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 10%, rgba(212, 179, 106, 0.18), transparent 36%), linear-gradient(120deg, transparent 40%, rgba(181, 139, 58, 0.08) 100%)",
          }}
        />
        <Container className="relative py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {home.hero.eyebrow}
          </p>
          <h1 className="font-serif mt-5 max-w-4xl text-5xl leading-[1.05] sm:text-7xl">
            {home.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/80">
            {home.hero.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/about">About the group</ButtonLink>
            <ButtonLink href="/business" variant="ghost">
              Business divisions
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl">{home.welcome.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {home.welcome.body}
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {home.valuesStrip.map((value) => (
              <li
                key={value}
                className="border-t border-gold/40 pt-3 font-serif text-2xl"
              >
                {value}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Business
              </p>
              <h2 className="font-serif mt-3 text-4xl">Four divisions, one group</h2>
            </div>
            <Link href="/business" className="text-sm font-semibold text-navy hover:text-gold">
              View all divisions
            </Link>
          </div>
          <ol className="mt-12 divide-y divide-gold/20 border-y border-gold/20">
            {divisions.map((division, index) => (
              <li key={division.slug} className="grid gap-4 py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline">
                <span className="font-sans text-sm font-semibold tracking-[0.28em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{division.name}</h3>
                  <p className="mt-2 max-w-2xl leading-7 text-muted">
                    {division.summary}
                  </p>
                </div>
                <Link
                  href={`/business#${division.slug}`}
                  className="text-sm font-semibold text-navy hover:text-gold"
                >
                  Read more
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-navy text-cream">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              {home.befodizeTeaser.eyebrow}
            </p>
            <h2 className="font-serif mt-4 text-4xl sm:text-5xl">
              {home.befodizeTeaser.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-cream/80">
              {home.befodizeTeaser.body}
            </p>
            <ButtonLink href={befodize.href} className="mt-8">
              Explore BEFODIZE
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-sm border border-gold/20">
            <Image
              src={featuredPresentation.image.src}
              alt={featuredPresentation.image.alt}
              width={featuredPresentation.image.width}
              height={featuredPresentation.image.height}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 36rem, 100vw"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {home.trustTeaser.eyebrow}
          </p>
          <h2 className="font-serif mt-4 text-4xl">{home.trustTeaser.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {home.trustTeaser.body}
          </p>
          <ButtonLink href="/united-trust" variant="navy" className="mt-8">
            Read about United Trust
          </ButtonLink>
        </Container>
      </section>

      <ContactCta
        title="Talk with The United Group"
        body={`Reach us at ${company.phone} or ${company.email}. We look forward to the opportunity to work with you.`}
      />
    </main>
  );
}
