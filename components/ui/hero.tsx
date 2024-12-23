"use client"

export default function Hero() {
  return (
    <div className="relative h-[60vh] w-full flex items-end justify-end overflow-hidden max-sm:h-[375px]">
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
      <div className="z-10 flex flex-col items-end p-4 ">
        <h2 className="text-white text-sm">ETERNA Collection</h2>
        <p className="text-white z-10 text-[10px]">
          The best collection of the year, with the best prices
        </p>
      </div>
    </div>
  )
}
