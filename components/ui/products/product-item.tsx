"use client"

import React from "react"
import Head from "next/head"
import { seoConfig } from "@/lib/seo/seo.config"
import Link from "next/link"

export interface ProductItemProps {
  id: string
  title: string
  description: {
    sizes: { label: string; price: { real: number; laboratory?: number } }[] // Array for sizes with real and optional laboratory prices
    cut: string
    clarity: string
    shapes: string[] // Array for available shapes
    goldTypes: { name: string; color: string }[] // Array for gold types with names and hex colors
  }
  src: string
}

const ProductItem = ({ id, title, description, src }: ProductItemProps) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={`צבע: ${description.goldTypes}, בוררות: ${description.clarity}, עבודה: ${description.cut}`}
        />
        <meta property="og:image" content={src} />
        <meta
          property="og:url"
          content={`${seoConfig.siteUrl}/#products-product${id}`}
        />
        <meta property="og:type" content="item" />
      </Head>
      <Link href={`/product/${id}`} passHref className="w-full">
        <div
          className="rounded-md flex flex-col  sm:items-start"
          id={`products-product${id}`}
        >
          <div className="h-[120px] w-full rounded-md flex items-center mb-4">
            <video
              src={src}
              controls={false}
              className="w-full h-[120px] object-cover rounded-md"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <h3 className="text-lg mb-2 text-center sm:text-left max-sm:text-sm max-sm:text-right">
            {title}
          </h3>
        </div>
      </Link>
    </>
  )
}

export default ProductItem
