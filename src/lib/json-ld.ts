import { company, locations } from "@/content/company";
import { befodize } from "@/content/products";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    email: company.email,
    telephone: company.phone,
    slogan: company.tagline,
    description: company.shortDescription,
    address: locations.map((location) => ({
      "@type": "PostalAddress",
      addressCountry: location.country,
      streetAddress: location.address,
    })),
  };
}

export function befodizeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: befodize.name,
    description: befodize.seoDescription,
    brand: {
      "@type": "Brand",
      name: befodize.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: company.name,
      url: company.url,
    },
    image: befodize.presentations.map(
      (presentation) => `${company.url}${presentation.image.src}`,
    ),
  };
}
