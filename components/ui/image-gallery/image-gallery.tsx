"use client"

import React from "react"
import ImageGallery from "react-image-gallery"
import { motion } from "framer-motion"
import "react-image-gallery/styles/css/image-gallery.css"

import texts from "./data/image-gallery.texts.json"
import images from "./data/gallery.json"
import {
  galleryContainerVariants,
  imageVariants
} from "./image-gallery.animations"

const CustomImageGallery = () => {
  return (
    <motion.div
      className="py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={galleryContainerVariants}
    >
      <h2 className="text-center text-2xl font-bold mb-6">{texts.title}</h2>
      <ImageGallery
        items={images.map((image) => ({
          ...image,
          renderItem: () => (
            <motion.img
              src={image.original}
              alt=""
              className="rounded-md"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          )
        }))}
        showThumbnails={true}
        showPlayButton={false}
        showFullscreenButton={true}
      />
    </motion.div>
  )
}

export default CustomImageGallery
