"use client"

import React from "react"
import Logo from "../../icons/Logo"
import SocialLinks from "../social-links/social-links"

const Header = () => {
  return (
    <header className="flex flex-row-reverse items-center justify-between px-28 py-2 shadow-md h-[90px] max-md:h-[80px] max-md:px-4">
      <SocialLinks />

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Logo className="h-auto w-[160px]" />
      </div>
    </header>
  )
}

export default Header
