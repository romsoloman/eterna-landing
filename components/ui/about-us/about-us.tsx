"use client"

import React from "react"
import { motion } from "framer-motion"
import texts from "./about-us.json"
import { Container } from "../container"
import { aboutContainerVariants, textVariants } from "./abou-us.animation"

const AboutUs = () => {
  return (
    <Container>
      <motion.div
        id="about"
        className="px-8 my-10 flex flex-col gap-8 items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={aboutContainerVariants}
      >
        <motion.h1 className="text-3xl" variants={textVariants}>
          {texts.title}
        </motion.h1>
        <motion.div
          className="text-center leading-[28px] text-gray-600 max-sm:text-sm"
          variants={textVariants}
        >
          {texts.description}
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default AboutUs
