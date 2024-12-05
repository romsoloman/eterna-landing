"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import texts from "./banner.texts.json"

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % texts.banners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-200 text-primary py-4 px-6 text-center font-medium relative overflow-hidden max-sm:px-0 ">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full bottom-1 text-center"
        >
          <p className="text-center">{texts.banners[currentBanner].text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Banner
