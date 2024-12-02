import type { ReactNode } from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import Header from "@/components/ui/header"
import { Container } from "@/components/ui/container"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "optional"
})

export const metadata: Metadata = {
  title: "Next.js and Contentstack",
  description: "Example using the Next.js App Router."
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.className} dir="rtl" lang="he">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  )
}
