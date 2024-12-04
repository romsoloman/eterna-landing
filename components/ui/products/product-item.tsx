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
  <div className="border shadow-md p-4 rounded-md">
    <Image
      src={image}
      alt={title}
      width={400}
      height={300}
      className="w-full h-64 object-cover rounded-md mb-4"
    />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <Link
      href={`https://wa.me/<${CONTACT_PHONE}>?text=${encodeURIComponent(
        commonTexts.whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      {contactText}
    </Link>
  </div>
)

export default ProductItem
