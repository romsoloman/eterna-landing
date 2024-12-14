import texts from "./seo.texts.json"

export const seoConfig = {
  defaultTitle: texts.title,
  defaultDescription: texts.description,
  defaultKeywords: texts.keywords,
  siteUrl: "https://eterna-jewlery's.com",
  openGraph: {
    ...texts.openGraph,
    images: [
      {
        url: texts.images.default,
        width: 1200,
        height: 630,
        alt: texts.images.alt
      }
    ]
  }
}
