"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

interface FacebookIconProps {
  className?: string
}

export const FacebookIcon = ({ className }: FacebookIconProps) => {
  return <FontAwesomeIcon icon={faFacebook} className={className} />
}
