"use client"

import React from "react"
import { motion } from "framer-motion"
import "swiper/css" // Core Swiper CSS
import "swiper/css/pagination" // Pagination module CSS
import productTexts from "./data/products.texts.json"
import products from "./data/products.json"
import ProductItem from "./product-item"
import { Container } from "../container"
import {
  buttonVariants,
  containerVariants,
  itemVariants
} from "./products.animations"
import Link from "next/link"
import { CONTACT_PHONE } from "../social-links/social-links.consts"

const MAX_PRODUCTS = 3

const ProductList = () => {
  return (
    <Container>
      <motion.div
        id="products"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="my-10 px-8"
      >
        <motion.h1
          className="text-3xl max-sm:text-2xl mb-6"
          variants={itemVariants}
        >
          {productTexts.title}
        </motion.h1>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
          {products.slice(0, MAX_PRODUCTS).map((product) => (
            <motion.div
              variants={itemVariants}
              key={product.id}
              className="flex flex-col items-center"
            >
              <ProductItem
                id={product.id}
                title={product.title}
                description={product.description}
                src={product.src}
                contactText={productTexts.contactUs}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center md:justify-start">
          <Link
            href={`https://wa.me/${CONTACT_PHONE}?text=היי אני מעוניין במוצרים שלך, נוכל לדבר על זה?`}
            target="_blank"
            rel="noopener noreferrer"
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
        </div>
      </motion.div>
    </Container>
  )
}

export default ProductList
