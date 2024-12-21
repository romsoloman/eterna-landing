"use client"

import React from "react"
import Image from "next/image"
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
  image: string
  contactText: string
}

const ProductItem = ({ id, title, description, image }: ProductItemProps) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={`צבע: ${description.color}, בוררות: ${description.clarity}, עבודה: ${description.cut}`}
        />
        <meta property="og:image" content={image} />
        <meta
          property="og:url"
          content={`${seoConfig.siteUrl}/#products-product${id}`}
        />
        <meta property="og:type" content="item" />
      </Head>
      <div
        className=" rounded-md flex flex-col items-center sm:items-start"
        id={`products-product${id}`}
      >
        <div className="w-[190px] h-[250px] rounded-md flex items-center justify-center mb-4">
          <Image
            src={image}
            alt={title}
            width={190}
            height={250}
            className="h-[250px] object-cover rounded-md"
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
