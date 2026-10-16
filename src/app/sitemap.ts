import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { navigation } from "@/content/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((item, index) => ({
    url: new URL(item.href, company.url).toString(),
    lastModified: new Date("2026-10-16"),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
