import he from "./he"
import { UIComponentTypes } from "../types"

export const LOCALES = ["he"] as const

export type Locales = (typeof LOCALES)[number]

export interface Locale {
  readonly name: string
  readonly root?: boolean
  readonly img: {
    readonly filename: string
    readonly alt: string
  }
  readonly content?: {
    readonly seo: {
      readonly title: string
      readonly description: string
    }
    readonly title: string
    readonly header: {
      readonly menu: string[]
    }
    readonly modular_blocks: {
      readonly component: {
        readonly component_type: UIComponentTypes
        readonly component_variant: string
        readonly content: string
        readonly link: string
        readonly background_image?: string
      }
    }[]
  }
}

export const localesData: Record<Locales, Locale> = {
  he
}

/**
 * Parses the locale from the pathname and returns an array with the locale and the pathname
 * without the locale.
 */
export function parseLocale(pathname: string): [string, string] {
  const regex = new RegExp(`^/(${LOCALES.join("|")})/?(.*)`)
  const result = regex.exec(pathname)

  return result ? [result[1], `/${result[2]}`] : ["", pathname]
}
