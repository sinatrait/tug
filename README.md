# The United Group website

Corporate website for [The United Group](https://theunitedgroup.co.in/), rebuilt with Next.js, TypeScript, and Tailwind CSS.

Content is taken from the public site and from BEFODIZE campaign photography supplied for this project. Spelling and grammar are corrected; meaning is not expanded beyond those sources.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Deploy

The app is ready for GitHub and Vercel:

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Use the default Next.js settings. No environment variables are required for the current static site.
4. Point `theunitedgroup.co.in` at the Vercel project when you are ready to replace the live site.

## Where to change company information

All public copy lives under `src/content/`. Pages import that data instead of hard-coding it.

| File | Purpose |
| --- | --- |
| `src/content/company.ts` | Name, tagline, phone, email, locations, site URL |
| `src/content/navigation.ts` | Header and footer links |
| `src/content/about.ts` | Story, values, vision, mission |
| `src/content/divisions.ts` | Business divisions |
| `src/content/products.ts` | BEFODIZE product page copy and image paths |
| `src/content/united-trust.ts` | United Trust / United House copy |
| `src/content/home.ts` | Home page introductions |
| `src/content/contact.ts` | Contact page introduction |

BEFODIZE images are in `public/images/befodize/`.

## Important project files

| File | Purpose |
| --- | --- |
| `src/app/layout.tsx` | Root HTML, fonts, metadata, header, footer |
| `src/app/page.tsx` | Home page |
| `src/app/befodize/page.tsx` | BEFODIZE product page |
| `src/app/sitemap.ts` | Generated `/sitemap.xml` for search engines |
| `src/app/robots.ts` | Generated `/robots.txt` |
| `src/app/opengraph-image.tsx` | Default social sharing image |
| `src/app/icon.svg` | Favicon |
| `src/components/` | Reusable UI: header, footer, buttons, JSON-LD |
| `src/lib/metadata.ts` | Shared SEO metadata helper |
| `src/lib/json-ld.ts` | Organization and Product structured data |
| `next.config.ts` | Next.js config, including Cache Components |
| `src/app/globals.css` | Tailwind v4 theme tokens and base styles |

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS v4
- ESLint (`eslint-config-next`)
