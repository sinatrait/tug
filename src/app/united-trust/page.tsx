import type { Metadata } from "next";
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
      />

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
        <Container className="max-w-3xl py-16">
          <h2 className="font-serif text-3xl">{unitedTrust.pullQuoteTitle}</h2>
          <blockquote className="mt-6 border-l-2 border-gold pl-5 font-serif text-2xl leading-snug text-ink">
            {unitedTrust.pullQuote}
          </blockquote>
        </Container>
      </section>

      <ContactCta title="Speak with The United Group" />
    </main>
  );
}
