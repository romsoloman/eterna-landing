"use client"

import React from "react"
import { motion } from "framer-motion"
import productTexts from "./data/products.texts.json"
import products from "./data/products.json"
import ProductItem from "./product-item"
import { Container } from "../container"
import { containerVariants, itemVariants } from "./products.animations"

const ProductList = () => {
  return (
    <Container>
      <motion.div
        id="products"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1 className="text-3xl text-center" variants={itemVariants}>
          {productTexts.title}
        </motion.h1>
        <motion.section
          className="py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {products.map((product) => (
            <motion.div
              key={product.title + product.id}
              variants={itemVariants}
            >
              <ProductItem
                title={product.title}
                description={product.description}
                image={product.image}
                contactText={productTexts.contactUs}
              />
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </Container>
  )
}

export default ProductList
