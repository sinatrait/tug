import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { company, locations } from "@/content/company";
import { contact } from "@/content/contact";
import {
  enquiryMailto,
  enquiryTopics,
  isEnquiryTopicId,
} from "@/content/enquiry";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Enquire",
  description: contact.hero.body,
  path: "/contact",
});

function ContactDetails({
  topic,
}: {
  topic?: string;
}) {
  const topicCopy = isEnquiryTopicId(topic) ? enquiryTopics[topic] : undefined;

  return (
    <>
      <PageHero
        eyebrow={topicCopy ? "Enquire" : contact.hero.eyebrow}
        title={
          topicCopy ? `Enquire about ${topicCopy.label}` : contact.hero.title
        }
        summary={topicCopy ? topicCopy.prompt : contact.hero.body}
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
              href={enquiryMailto(topicCopy?.id)}
              className="mt-3 block text-xl hover:text-gold"
            >
              {company.email}
            </a>
            {topicCopy ? (
              <p className="mt-3 text-sm text-muted">
                Suggested subject: {topicCopy.subject}
              </p>
            ) : null}
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
    </>
  );
}

async function ContactFromQuery({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string | string[] }>;
}) {
  const params = await searchParams;
  const topicValue = Array.isArray(params.topic) ? params.topic[0] : params.topic;

  return <ContactDetails topic={topicValue} />;
}

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string | string[] }>;
}) {
  return (
    <main id="main-content">
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-cream" aria-busy="true">
            <span className="sr-only">Loading enquiry details</span>
          </div>
        }
      >
        <ContactFromQuery searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
