// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Enrico Findley",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Enrico Findley | Software Engineer | Data Scientist" },
        { name: "keywords", content: "Enrico Findley, software engineer, data scientist, portfolio" },
        { name: "author", content: "Enrico Findley" },
        { name: "robots", content: "index, follow" }, // Set indexing and crawling rules

        // Open Graph (OG) meta tags
        { property: "og:title", content: "Enrico Findley" },
        { property: "og:description", content: "Enrico Findley | Software Engineer | Data Scientist" },
        { property: "og:image", content: "https://avatars.githubusercontent.com/u/83508929?v=4" },
        { property: "og:url", content: "https://enricofindley.my.id" },
        { property: "og:type", content: "website" },

        // Twitter Card meta tags
        { name: "twitter:title", content: "Enrico Findley" },
        { name: "twitter:description", content: "Enrico Findley | Software Engineer | Data Scientist" },
        { name: "twitter:image", content: "https://avatars.githubusercontent.com/u/83508929?v=4" },
        { name: "twitter:card", content: "summary_large_image" },

        // Schema.org structured data
        { property: "name", content: "Enrico Findley" },
        { property: "description", content: "Portfolio of Enrico Findley" },
        { property: "image", content: "https://avatars.githubusercontent.com/u/83508929?v=4" },
      ],
      link: [
        // Default link tags
        { rel: "canonical", href: "https://enricofindley.my.id" }, // Canonical URL
        { rel: "icon", type: "image/png", href: "https://avatars.githubusercontent.com/u/83508929?v=4" },
      ],
    },
  },
});
