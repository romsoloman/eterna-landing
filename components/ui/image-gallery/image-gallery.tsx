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
      id="gallery"
    >
      <h2 className="text-center text-3xl mb-8">{texts.title}</h2>
      <ImageGallery
        items={images.map((image) => ({
          ...image,
          renderItem: () => (
            <motion.img
              src={image.original}
              alt=""
              className="w-full h-auto object-contain "
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          )
        }))}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={true}
        autoPlay={true}
        showNav={false}
      />
    </motion.div>
  )
}

export default CustomImageGallery
