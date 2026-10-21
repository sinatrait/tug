import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { businessIntro, divisions } from "@/content/divisions";
import { enquiryPath } from "@/content/enquiry";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Businesses",
  description: `${businessIntro.title} — ${businessIntro.summary}`,
  path: "/business",
});

export default function BusinessPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow={businessIntro.eyebrow}
        title={businessIntro.title}
        summary={businessIntro.summary}
      >
        <ButtonLink href="/contact?topic=partnership">Enquire</ButtonLink>
      </PageHero>

      {divisions.map((division, index) => (
        <section
          key={division.slug}
          id={division.slug}
          className={index % 2 === 0 ? "bg-paper" : "bg-cream"}
        >
          <Container className="grid gap-8 py-16 lg:grid-cols-[8rem_1fr]">
            <p className="font-sans text-sm font-semibold tracking-[0.28em] text-gold">
              {String(index + 1).padStart(2, "0")}
            </p>
            <article>
              <h2 className="font-serif text-4xl">
                <Link href={`/business/${division.slug}`} className="hover:text-gold">
                  {division.name}
                </Link>
              </h2>
              <div className="mt-4 max-w-3xl space-y-5 text-lg leading-8 text-muted">
                {division.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`/business/${division.slug}`} variant="navy">
                  View {division.name}
                </ButtonLink>
                <ButtonLink href={enquiryPath(division.topic)} variant="navy">
                  Enquire about {division.name}
                </ButtonLink>
              </div>
            </article>
          </Container>
        </section>
      ))}

      <ContactCta
        title="Discuss a business need"
        enquireHref="/contact?topic=partnership"
      />
    </main>
  );
}
