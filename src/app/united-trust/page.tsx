import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { unitedTrust } from "@/content/united-trust";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: unitedTrust.seoTitle,
  description: unitedTrust.seoDescription,
  path: "/united-trust",
});

export default function UnitedTrustPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow={unitedTrust.hero.eyebrow}
        title={unitedTrust.hero.title}
        summary={unitedTrust.hero.summary}
        tone="navy"
      >
        <ButtonLink href={unitedTrust.website.href}>
          {unitedTrust.website.label}
        </ButtonLink>
        <ButtonLink href={unitedTrust.brochure.href} variant="ghost" download>
          {unitedTrust.brochure.label}
        </ButtonLink>
      </PageHero>

      <section className="bg-paper">
        <Container className="max-w-3xl py-16">
          <p className="font-serif text-2xl">{unitedTrust.greeting}</p>
          <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
            {unitedTrust.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-16">
          <h2 className="font-serif text-3xl">{unitedTrust.whatWeDo.title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
            {unitedTrust.whatWeDo.intro}
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {unitedTrust.whatWeDo.items.map((item) => (
              <li key={item.name} className="border-t border-gold/40 pt-4">
                <h3 className="font-serif text-2xl">{item.name}</h3>
                <p className="mt-2 leading-7 text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="max-w-3xl py-16">
          <h2 className="font-serif text-3xl">{unitedTrust.pullQuoteTitle}</h2>
          <blockquote className="mt-6 border-l-2 border-gold pl-5 font-serif text-2xl leading-snug text-ink">
            {unitedTrust.pullQuote}
          </blockquote>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-16">
          <h2 className="font-serif text-3xl">{unitedTrust.participate.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            {unitedTrust.participate.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={unitedTrust.website.href}>
              {unitedTrust.website.label}
            </ButtonLink>
            <ButtonLink href={unitedTrust.brochure.href} variant="navy" download>
              {unitedTrust.brochure.label}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <ContactCta title="Speak with The United Group" />
    </main>
  );
}
