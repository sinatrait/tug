import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function PageHero({
  eyebrow,
  title,
  summary,
  tone = "cream",
  children,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  tone?: "cream" | "navy";
  children?: ReactNode;
}) {
  const isNavy = tone === "navy";

  return (
    <header
      className={
        isNavy
          ? "border-b border-gold/20 bg-navy-deep text-cream"
          : "border-b border-gold/20 bg-cream text-ink"
      }
    >
      <Container className="py-16 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
        <h1 className="font-serif mt-4 max-w-3xl text-4xl leading-tight text-balance sm:text-6xl">
          {title}
        </h1>
        <p
          className={`mt-6 max-w-2xl text-lg leading-8 ${isNavy ? "text-cream/80" : "text-muted"}`}
        >
          {summary}
        </p>
        {children ? (
          <div className="mt-10 flex flex-wrap gap-3">{children}</div>
        ) : null}
      </Container>
    </header>
  );
}
