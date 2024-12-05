"use client"

import React from "react"
import { motion } from "framer-motion"
import benefitsTexts from "./data/benefits.texts.json"
import benefitsData from "./data/benefits.json"
import BenefitItem from "./benefits-item"
import { Container } from "../container"
import {
  containerVariants,
  itemVariants,
  titleVariants
} from "./benefits.animations"

const BenefitsList = () => {
  return (
    <motion.section
      id="benefits"
      className="py-8 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Container>
        <motion.h2
          className="text-center text-3xl mb-6"
          variants={titleVariants}
        >
          {benefitsTexts.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {benefitsData.map((benefit, index) => (
            <motion.div key={benefit.title + index} variants={itemVariants}>
              <BenefitItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  )
}

export default BenefitsList
