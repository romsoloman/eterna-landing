"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

interface WhatsAppIconProps {
  className?: string
}

export const WhatsAppIcon = ({ className }: WhatsAppIconProps) => {
  return <FontAwesomeIcon icon={faWhatsapp} className={className} />
}
