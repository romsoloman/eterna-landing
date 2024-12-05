"use client"

import React from "react"
import Image from "next/image"
import commonTexts from "@/lib/data/common.texts.json"
import Link from "next/link"
import { CONTACT_PHONE } from "../social-links/social-links.consts"
import texts from "./data/products.texts.json"

interface ProductItemProps {
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

const ProductItem = ({
  title,
  description,
  image,
  contactText
}: ProductItemProps) => (
  <div className="p-4 rounded-md flex flex-col items-center sm:items-start">
    <Image
      src={image}
      alt={title}
      width={160}
      height={160}
      className="w-full h-72 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg mb-2 text-center sm:text-left">{title}</h3>
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex gap-1 items-center">
        <p className="text-sm text-black font-bold mb-4 sm:text-left">
          {texts.clarity}:
        </p>
        <p className="text-sm text-400 mb-4 sm:text-left">
          {description.clarity}
        </p>
      </div>

      <div className="flex gap-1 items-center">
        <p className="text-sm text-black font-bold mb-4 sm:text-left">
          {texts.cut}:
        </p>
        <p className="text-sm text-400 mb-4 sm:text-left">{description.cut}</p>
      </div>

      <div className="flex gap-1 items-center">
        <p className="text-sm text-black font-bold mb-4 sm:text-left">
          {texts.color}:
        </p>
        <p className="text-sm text-400 mb-4 sm:text-left">
          {description.color}
        </p>
      </div>
    </div>
    <p className="text-sm text-400 mb-4 sm:text-left">{description.size}</p>
    <Link
      href={`https://wa.me/<${CONTACT_PHONE}>?text=${encodeURIComponent(
        commonTexts.whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full sm:w-auto px-4 py-2 bg-primary text-white rounded text-center hover:bg-white hover:text-primary border-white border hover:border-primary transition-all"
    >
      {contactText}
    </Link>
  </div>
)

export default ProductItem
