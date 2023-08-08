export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/sitemap.xml", "/CV.pdf"],
    },
    sitemap: "https://enricofindley.my.id/sitemap.xml",
  };
}
