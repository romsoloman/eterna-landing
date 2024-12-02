"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

interface WhatsAppIconProps {
  className?: string
}

export const InstagramIcon = ({ className }: WhatsAppIconProps) => {
  return <FontAwesomeIcon icon={faInstagram} className={className} />
}
