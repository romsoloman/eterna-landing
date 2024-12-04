"use client"

import React from "react"
import Image from "next/image"

interface BenefitItemProps {
  icon: string
  title: string
  description: string
}

const BenefitItem = ({ icon, title, description }: BenefitItemProps) => (
  <div className="flex flex-col items-center text-center p-4">
    <Image src={icon} alt={title} width={64} height={64} className="mb-4" />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
)

export default BenefitItem
