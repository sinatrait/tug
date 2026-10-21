import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { divisions } from "@/content/divisions";

const paths = [
  "/",
  "/about",
  "/business",
  ...divisions.map((division) => `/business/${division.slug}`),
  "/befodize",
  "/united-trust",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path, index) => ({
    url: new URL(path, company.url).toString(),
    lastModified: new Date("2026-10-21"),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : path.startsWith("/business/") ? 0.6 : 0.7,
  }));
}
