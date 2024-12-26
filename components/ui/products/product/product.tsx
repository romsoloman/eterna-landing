"use client"

import React, { useEffect, useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import Link from "next/link"
import { ProductItemProps } from "../product-item"
import { buttonVariants } from "../products.animations"
import { CONTACT_PHONE } from "../../social-links/social-links.consts"
import productTexts from "../data/products.texts.json"
import { event } from "@/gtag"

const formatPrice = (price: number) => {
  return `${price.toLocaleString()} ₪`
}

type Props = {
  product: ProductItemProps
}

const ProductPage = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState(product.description.sizes[0])

  useEffect(() => {
    event({
      action: "view_product",
      category: "Product",
      label: product.title
    })
  }, [product.title])

  const handleSizeChange = (_e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLabel = _e.target.value
    const size = product.description.sizes.find(
      (s) => s.label === selectedLabel
    )
    if (size) {
      setSelectedSize(size)
      event({
        action: "select_size",
        category: "Product",
        label: `${product.title} - Size ${selectedLabel}`,
        value: parseFloat(selectedLabel)
      })
    }
  }

  const handleContactClick = () => {
    event({
      action: "contact",
      category: "Product",
      label: product.title
    })
  }

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
      <div className="container mx-auto max-w-screen-md md:py-8">
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
              autoPlay
              loop
              muted
              playsInline
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

          <div className="h-[2px] bg-gray-200 rounded-lg mb-4" />

          {/* Dropdown for Sizes */}
          <h2 className="text-base font-semibold mb-4 ">בחר גודל :</h2>
          <select
            className="block w-[50%] border border-gray-400 rounded-lg bg-gray-50 p-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-200 mb-4 text-base"
            onChange={handleSizeChange}
            value={selectedSize.label}
          >
            {product.description.sizes.map((size) => (
              <option key={size.label} value={size.label}>
                {size.label}
              </option>
            ))}
          </select>

          {/* Display Selected Price */}
          {product.title === "שרשרת טניס" ? (
            <p className="text-gray-700 mb-4 font-semibold">למחיר צרו קשר</p>
          ) : (
            <>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">יהלום טבעי: </span>
                {formatPrice(selectedSize.price.real)}
                {selectedSize.price.laboratory && (
                  <>
                    <br />
                    <span className="font-semibold">יהלום מעבדה: </span>
                    {formatPrice(selectedSize.price.laboratory)}
                  </>
                )}
              </p>
              <p className="text-xs text-gray-500">
                * לפרטים על יהלום מעל 3 קרט, ניתן ליצור קשר לקבלת מחיר
              </p>
            </>
          )}

          <div className="h-[2px] bg-gray-200 rounded-lg mb-4" />

          {/* Grouped Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="font-semibold mb-2 ">ניקיון:</h2>
              <p className="text-gray-700 mb-4 text-sm">
                <span className="font-semibold">יהלום טבעי: </span>
                {product.description.clarity.real}
                <br />
                <span className="font-semibold">יהלום מעבדה: </span>
                {product.description.clarity.laboratory}
              </p>
            </div>
            <div>
              <h2 className="font-semibold mb-2 ">צבע:</h2>
              <p className="text-gray-700 mb-4 text-sm">
                <span className="font-semibold">יהלום טבעי: </span>
                {product.description.color.real}
                <br />
                <span className="font-semibold">יהלום מעבדה: </span>
                {product.description.color.laboratory}
              </p>
            </div>
            <div>
              <h2 className="font-semibold mb-2 ">עבודה:</h2>
              <p className="text-gray-700 mb-4 text-sm">
                {product.description.cut}
              </p>
            </div>
            <div>
              <h2 className="font-semibold mb-2 ">צבעים:</h2>
              <ul className="list-none ml-6 mb-2 text-sm">
                {product.description.goldTypes.map((color, index) => (
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
            onClick={handleContactClick}
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
