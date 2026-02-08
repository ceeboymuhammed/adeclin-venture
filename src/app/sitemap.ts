import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/livestock-import-export",
    "/services/farm-management",
    "/services/consulting-training",
    "/products",
    "/products/pure-iron-beans",
    "/global-trade",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
