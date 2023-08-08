export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/*.pdf",
      disallow: "/sitemap.xml",
    },
    sitemap: "https://enricofindley.my.id/sitemap.xml",
  };
}
