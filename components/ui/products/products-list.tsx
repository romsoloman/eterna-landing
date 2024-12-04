"use client"

import React from "react"
import productTexts from "./data/products.texts.json"
import products from "./data/products.json"
import ProductItem from "./product-item"

const ProductList = () => {
  return (
    <section className="py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
      {products.map((product) => (
        <ProductItem
          key={product.title + product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          contactText={productTexts.contactUs}
        />
      ))}
    </section>
  )
}

export default ProductList
