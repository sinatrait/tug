import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main id="main-content" className="bg-cream">
      <Container className="py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          404
        </p>
        <h1 className="font-serif mt-4 text-5xl">This page is not available</h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
          The address you requested is not part of The United Group website.
          Return to the home page or contact us if you need help.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="navy">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="navy">
            Contact
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
