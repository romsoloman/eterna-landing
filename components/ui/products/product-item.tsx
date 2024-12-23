"use client"

import React from "react"
import Head from "next/head"
import { seoConfig } from "@/lib/seo/seo.config"

interface ProductItemProps {
  id: number
  title: string
  description: {
    color: string
    size: string
    cut: string
    clarity: string
  }
  src: string
  contactText: string
}

const ProductItem = ({ id, title, description, src }: ProductItemProps) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={`צבע: ${description.color}, בוררות: ${description.clarity}, עבודה: ${description.cut}`}
        />
        <meta property="og:image" content={src} />
        <meta
          property="og:url"
          content={`${seoConfig.siteUrl}/#products-product${id}`}
        />
        <meta property="og:type" content="item" />
      </Head>
      <div
        className="rounded-md flex flex-col  sm:items-start"
        id={`products-product${id}`}
      >
        <div className="h-[250px] w-full rounded-md flex items-center mb-4">
          <video
            src={src}
            controls
            className="w-full h-[250px] object-cover rounded-md"
            autoPlay
            muted
            loop
          />
        </div>
        <h3 className="text-lg mb-2 text-center sm:text-left max-sm:text-sm max-sm:text-right">
          {title}
        </h3>
      </div>
    </>
  )
}

export default ProductItem
