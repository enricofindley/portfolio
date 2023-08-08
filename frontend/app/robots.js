export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/CV.pdf",
      disallow: "/sitemap.xml",
    },
    sitemap: "https://enricofindley.my.id/sitemap.xml",
  };
}
