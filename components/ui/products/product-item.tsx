"use client"

import React from "react"
import Image from "next/image"
import commonTexts from "@/lib/data/common.texts.json"
import Link from "next/link"
import { CONTACT_PHONE } from "../social-links/social-links.consts"

interface ProductItemProps {
  title: string
  description: string
  image: string
  contactText: string
}

const ProductItem = ({
  title,
  description,
  image,
  contactText
}: ProductItemProps) => (
  <div className="border p-4 rounded-md flex flex-col items-center sm:items-start">
    <Image
      src={image}
      alt={title}
      width={400}
      height={300}
      className="w-full h-64 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-bold mb-2 text-center sm:text-left">{title}</h3>
    <p className="text-sm text-gray-600 mb-4 text-center sm:text-left">
      {description}
    </p>
    <Link
      href={`https://wa.me/<${CONTACT_PHONE}>?text=${encodeURIComponent(
        commonTexts.whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded text-center hover:bg-green-600"
    >
      {contactText}
    </Link>
  </div>
)

export default ProductItem
