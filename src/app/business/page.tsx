import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { businessIntro, divisions } from "@/content/divisions";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Business",
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
      />

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
              <h2 className="font-serif text-4xl">{division.name}</h2>
              <div className="mt-4 max-w-3xl space-y-5 text-lg leading-8 text-muted">
                {division.body.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </Container>
        </section>
      ))}

      <ContactCta title="Discuss a business need" />
    </main>
  );
}
