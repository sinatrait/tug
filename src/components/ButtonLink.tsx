import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  gold: "bg-gold text-navy-deep hover:bg-gold-bright",
  navy: "bg-navy text-cream hover:bg-navy-deep",
  ghost:
    "border border-gold/50 bg-transparent text-cream hover:border-gold hover:bg-gold/10",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
  download,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  download?: boolean | string;
  onClick?: () => void;
}) {
  const classes = `inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`;

  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      className={classes}
      onClick={onClick}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...(download
        ? { download: download === true ? true : download }
        : {})}
    >
      {children}
    </a>
  );
}
