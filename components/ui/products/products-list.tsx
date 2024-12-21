"use client"

import React from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react" // Swiper components
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
import { Pagination, A11y } from "swiper/modules"

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
        <motion.h1 className="text-3xl max-sm:text-2xl" variants={itemVariants}>
          {productTexts.title}
        </motion.h1>
        <Swiper
          spaceBetween={15} // Adjust spacing to show part of the 3rd item
          slidesPerView={2.2} // Show 2 full items and part of the 3rd item
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 }, // For screens >= 640px
            1024: { slidesPerView: 2.7, spaceBetween: 30 } // For screens >= 1024px
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, A11y]}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div variants={itemVariants}>
                <ProductItem
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  contactText={productTexts.contactUs}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-primary text-white py-2 px-4 mt-2 min-w-[200px]"
          >
            {productTexts.contactUs}
          </motion.button>
        </div>
      </motion.div>
    </Container>
  )
}

export default ProductList
