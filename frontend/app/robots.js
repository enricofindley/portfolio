export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/CV.pdf",
    },
    sitemap: "https://enricofindley.my.id/sitemap.xml",
  };
}
