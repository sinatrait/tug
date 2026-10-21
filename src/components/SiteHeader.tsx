"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { company } from "@/content/company";
import { enquireNav, navigation } from "@/content/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeMenu() {
    window.setTimeout(() => setOpen(false), 0);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy-deep/95 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="min-w-0"
          aria-label={`${company.name} home`}
          onClick={closeMenu}
        >
          <span className="block font-serif text-xl leading-none tracking-wide sm:text-2xl">
            {company.name}
          </span>
          <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.28em] text-gold">
            {company.tagline}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm tracking-wide transition-colors hover:text-gold ${
                      isActive(pathname, item.href)
                        ? "text-gold"
                        : "text-cream/85"
                    }`}
                    aria-current={
                      isActive(pathname, item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href={enquireNav.href}>{enquireNav.label}</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-gold/40 px-3 py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id={menuId}
        aria-label="Mobile"
        className={`border-t border-gold/20 bg-navy-deep lg:hidden ${open ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col px-5 py-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-3 text-base ${
                  isActive(pathname, item.href) ? "text-gold" : "text-cream"
                }`}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <ButtonLink href={enquireNav.href} className="w-full" onClick={closeMenu}>
              {enquireNav.label}
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
