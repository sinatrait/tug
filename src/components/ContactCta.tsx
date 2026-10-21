import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { company } from "@/content/company";

export function ContactCta({
  title = "Ready to talk?",
  body = "If you have questions or would like to learn more about our services, please contact us.",
  enquireHref = "/contact",
  enquireLabel = "Enquire",
}: {
  title?: string;
  body?: string;
  enquireHref?: string;
  enquireLabel?: string;
}) {
  return (
    <section className="bg-navy text-cream">
      <Container className="flex flex-col items-start gap-8 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-3 text-cream/80 leading-7">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={enquireHref}>{enquireLabel}</ButtonLink>
          <ButtonLink href={company.phoneHref} variant="ghost">
            {company.phone}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
