"use client"

import React from "react"
import Logo from "../../icons/Logo"
import SocialLinks from "../social-links/social-links"
import MobileMenu from "./mobile-menu"
import useHeader from "./header.hooks"
import HamburgerMenu from "./hamburger-menu"
import NavigationLinks from "./navigation-links"

const Header = () => {
  const { isMenuOpen, toggleMenu } = useHeader()

  return (
    <header className="flex flex-row-reverse items-center justify-between px-20 py-2 shadow-md h-[90px] max-md:h-[50px] max-md:px-4">
      <SocialLinks />

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Logo className="h-auto w-[160px]" />
      </div>

      <NavigationLinks />

      <div className="md:hidden z-50">
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  )
}

export default Header
