import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { company, locations } from "@/content/company";
import { contact } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: contact.hero.body,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        summary={contact.hero.body}
      />

      <section className="bg-paper">
        <Container className="grid gap-10 py-16 lg:grid-cols-2">
          <div className="border border-gold/25 bg-cream p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Phone
            </h2>
            <a
              href={company.phoneHref}
              className="mt-3 block font-serif text-3xl hover:text-gold"
            >
              {company.phone}
            </a>
            <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Email
            </h2>
            <a
              href={company.emailHref}
              className="mt-3 block text-xl hover:text-gold"
            >
              {company.email}
            </a>
            <p className="mt-8 leading-7 text-muted">
              There is no contact form on this site. Please call or email, and we
              look forward to hearing from you.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl">Locations</h2>
            <ul className="mt-8 space-y-8">
              {locations.map((location) => (
                <li key={location.id} className="border-t border-gold/30 pt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                    {location.country}
                  </h3>
                  <p className="mt-2 max-w-md leading-7 text-muted">
                    {location.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
