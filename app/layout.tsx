import type { ReactNode } from "react"
import { Metadata } from "next"
import { Heebo } from "next/font/google"
import "../styles/globals.css"
import Header from "@/components/ui/header"
import { Container } from "@/components/ui/container"
import Footer from "@/components/ui/footer"

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Next.js and Contentstack",
  description: "Example using the Next.js App Router."
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className={heebo.className} dir="rtl" lang="he">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  )
}
