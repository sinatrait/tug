import Link from "next/link";
import { Container } from "@/components/Container";
import { company, locations } from "@/content/company";
import { footerNav } from "@/content/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{company.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.24em] text-gold">
            {company.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-cream/75">
            {company.shortDescription}
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-cream/80 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Contact
          </h2>
          <p className="mt-4">
            <a className="hover:text-gold" href={company.phoneHref}>
              {company.phone}
            </a>
          </p>
          <p className="mt-1">
            <a className="hover:text-gold" href={company.emailHref}>
              {company.email}
            </a>
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            {locations.map((location) => (
              <li key={location.id}>
                <span className="block text-cream">{location.country}</span>
                {location.address}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-gold/15">
        <Container className="py-5 text-xs text-cream/60">
          © {company.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
