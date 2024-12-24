import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href={"/"} passHref>
      <Image
        src="/images/logo.png"
        alt="Company Logo"
        width={120} // Set the desired width
        height={60} // Set the desired height
        priority // Optional: Preloads the image for better performance
      />
    </Link>
  )
}

export default Logo
