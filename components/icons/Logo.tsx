import Image from "next/image"

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/logo.png"
        alt="Company Logo"
        width={190} // Set the desired width
        height={60} // Set the desired height
        priority // Optional: Preloads the image for better performance
      />
    </div>
  )
}

export default Logo
