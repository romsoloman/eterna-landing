"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.webp"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="z-0"
      />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4"></h1>
        <p className="text-lg md:text-xl mb-6"></p>
        {/* <a
          href="/get-started"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
        ></a> */}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-55 z-5" />
    </div>
  )
}
