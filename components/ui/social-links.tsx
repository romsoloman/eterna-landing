import { CONTACT_PHONE } from "@/lib/constants"
import Link from "next/link"
import React from "react"
import { WhatsAppIcon } from "../icons/WhatsAppIcon"
import { InstagramIcon } from "../icons/InstagramIcon"

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-[#2d2c2c] hover:text-black"
      >
        <InstagramIcon className="h-5 w-5" />
      </Link>
      <Link
        href={`https://wa.me/<${CONTACT_PHONE}>?text=Hello, I'm interested in your products!`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-[#2d2c2c] hover:text-black"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </Link>
    </div>
  )
}

export default SocialLinks
