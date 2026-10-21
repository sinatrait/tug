import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactCta } from "@/components/ContactCta";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { divisions, getDivision } from "@/content/divisions";
import { enquiryPath } from "@/content/enquiry";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return divisions.map((division) => ({ slug: division.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/business/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivision(slug);

  if (!division) {
    return {};
  }

  return pageMetadata({
    title: division.name,
    description: division.summary,
    path: `/business/${division.slug}`,
  });
}

export default async function DivisionPage({
  params,
}: PageProps<"/business/[slug]">) {
  const { slug } = await params;
  const division = getDivision(slug);

  if (!division) {
    notFound();
  }

  const enquireHref = enquiryPath(division.topic);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Businesses"
        title={division.name}
        summary={division.summary}
      >
        <ButtonLink href={enquireHref}>Enquire about {division.name}</ButtonLink>
        <ButtonLink href="/business" variant="navy">
          All businesses
        </ButtonLink>
      </PageHero>

      <section className="bg-paper">
        <Container className="max-w-3xl py-16">
          <div className="space-y-5 text-lg leading-8 text-muted">
            {division.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <ContactCta
        title={`Enquire about ${division.name}`}
        body={`To discuss ${division.name}, please call or email The United Group.`}
        enquireHref={enquireHref}
        enquireLabel={`Enquire about ${division.name}`}
      />
    </main>
  );
}
