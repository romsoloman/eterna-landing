"use client"

import React from "react"
import benefitsTexts from "./data/benefits.texts.json"
import benefitsData from "./data/benefits.json"
import BenefitItem from "./benefits-item"

const BenefitsList = () => {
  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-6">
        {benefitsTexts.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefitsData.map((benefit, index) => (
          <BenefitItem
            key={benefit.title + index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  )
}

export default BenefitsList
