import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { about } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: about.hero.summary,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        summary={about.hero.summary}
      />

      <section className="bg-paper">
        <Container className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-serif text-4xl">{about.taglineExplainer.title}</h2>
          <p className="text-lg leading-8 text-muted">{about.taglineExplainer.body}</p>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="grid gap-12 py-16 lg:grid-cols-2">
          <article>
            <h2 className="font-serif text-3xl">{about.story.title}</h2>
            <p className="mt-4 leading-8 text-muted">{about.story.body}</p>
          </article>
          <article>
            <h2 className="font-serif text-3xl">{about.values.title}</h2>
            <p className="mt-4 leading-8 text-muted">{about.values.intro}</p>
            <ul className="mt-8 space-y-6">
              {about.values.items.map((value) => (
                <li key={value.name} className="border-l-2 border-gold pl-4">
                  <h3 className="font-serif text-xl">{value.name}</h3>
                  <p className="mt-1 text-muted">{value.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>

      <section className="bg-navy text-cream">
        <Container className="grid gap-12 py-16 lg:grid-cols-2">
          <article>
            <h2 className="font-serif text-3xl text-gold">{about.vision.title}</h2>
            <p className="mt-4 leading-8 text-cream/80">{about.vision.body}</p>
          </article>
          <article>
            <h2 className="font-serif text-3xl text-gold">{about.mission.title}</h2>
            <p className="mt-4 leading-8 text-cream/80">{about.mission.body}</p>
          </article>
        </Container>
      </section>

      <ContactCta />
    </main>
  );
}
