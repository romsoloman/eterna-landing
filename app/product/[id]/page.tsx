"use client"

import ProductPage from "@/components/ui/products/product/product"
import { useParams } from "next/navigation"
import products from "@/components/ui/products/data/products.json"
import { ProductItemProps } from "@/components/ui/products/product-item"

export default function Product() {
  const params = useParams()

  const product = products.find(
    (product) => product.id.toString() === params.id
  ) as ProductItemProps

  return <ProductPage product={product} />
}
