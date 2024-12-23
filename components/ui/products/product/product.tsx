"use client"

import React from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { ProductItemProps } from "../product-item"
import Link from "next/link"
import { buttonVariants } from "../products.animations"
import { CONTACT_PHONE } from "../../social-links/social-links.consts"
import productTexts from "../data/products.texts.json"

const formatPrice = (price: string) => {
  return `${parseInt(price, 10).toLocaleString()} ILS`
}

type Props = {
  product: ProductItemProps
}

const ProductPage = ({ product }: Props) => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{product.title} | Malka Jewelry</title>
        <meta property="og:title" content={product.title} />
        <meta property="og:video" content={product.src} />
        <meta property="og:type" content="video.other" />
        <meta property="og:site_name" content="Eterna Jewelry" />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:player" content={product.src} />
      </Head>

      {/* Page Layout */}
      <div className="container">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-full h-[360px] overflow-hidden shadow-lg">
            <video
              src={product.src}
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 px-4"
        >
          {/* Title */}
          <h1 className="text-lg mb-2 text-primary font-semibold">
            {product.title}
          </h1>

          {/* Price Section */}
          <p className="text-sm mb-2">
            מחיר:{" "}
            {formatPrice(product.description.sizes[0].priceRange.split("-")[0])}{" "}
            -{" "}
            {formatPrice(product.description.sizes[0].priceRange.split("-")[1])}
          </p>

          <div className="h-[2px] bg-gray-200 rounded-lg mb-4" />

          {/* Sizes and Prices */}
          <h2 className="text-base font-semibold mb-2 ">גדלים ומחירים:</h2>
          <ul className="list-none ml-6 mb-4">
            {product.description.sizes.map((size, index) => (
              <li key={index} className="text-gray-700 text-sm">
                <span className="font-bold ">{size.label}:</span>{" "}
                {size.priceRange
                  .split("-")
                  .map((price) => formatPrice(price.trim()))
                  .join(" ")}
              </li>
            ))}
          </ul>

          <div className="h-[2px] bg-gray-200 rounded-lg mb-4" />

          {/* Grouped Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-sm font-semibold mb-2 ">ניקיון:</h2>
              <p className="text-gray-700 mb-4">
                {product.description.clarity}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold mb-2 ">עבודה:</h2>
              <p className="text-gray-700 mb-4">{product.description.cut}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold mb-2 ">צבעים:</h2>
              <ul className="list-none ml-6 mb-2">
                {product.description.colors.map((color, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span
                      className="w-4 h-4 rounded-full ml-2 border border-gray-300"
                      style={{ backgroundColor: color.color }}
                    ></span>
                    {color.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-[2px] bg-gray-200 rounded-lg mb-4" />

          {/* Contact Us Button */}
          <Link
            href={`https://wa.me/${CONTACT_PHONE}?text=היי אני מעוניין ב${encodeURIComponent(
              product.title
            )}. אפשר להתקשר?`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-primary text-white py-2 px-4 mt-2 min-w-[200px]"
            >
              {productTexts.contactUs}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </>
  )
}

export default ProductPage
