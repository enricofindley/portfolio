import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://enricofindley.my.id",
      lastModified: new Date(),
    },
    {
      url: "https://enricofindley.my.id/projects",
      lastModified: new Date(),
    },
  ];
}
