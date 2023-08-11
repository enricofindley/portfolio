export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/sitemap.xml"],
    },
    sitemap: "https://enricofindley.my.id/sitemap.xml",
  };
}
