import type { ReactNode } from "react"
import { Metadata } from "next"
import { Heebo } from "next/font/google"
import "../styles/globals.css"
import { seoConfig } from "@/lib/seo/seo.config"
import Header from "@/components/ui/header/header"
import Footer from "@/components/ui/footer/footer"
import Banner from "@/components/ui/banner/banner"

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap"
})

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  keywords: seoConfig.defaultKeywords,
  openGraph: {
    type: "website",
    locale: seoConfig.openGraph.locale,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    siteName: seoConfig.openGraph.siteName,
    images: [
      {
        url: seoConfig.openGraph.images[0].url,
        width: seoConfig.openGraph.images[0].width,
        height: seoConfig.openGraph.images[0].height,
        alt: seoConfig.openGraph.images[0].alt
      }
    ]
  }
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className={heebo.className} dir="rtl" lang="he">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" />
      </head>
      <body>
        <Banner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
