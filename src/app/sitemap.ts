import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = ["", "/work", "/work/clinic-agents", "/work/palantir", "/work/rabbithole", "/writing", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
