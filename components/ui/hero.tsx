"use client"

export default function Hero() {
  return (
    <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden max-sm:h-[290px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-55 z-5" />
    </div>
  )
}
