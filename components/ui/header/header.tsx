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
    <header className="flex flex-row-reverse items-center justify-between px-20  shadow-md h-[90px] max-md:h-[60px] max-md:px-4">
      <SocialLinks />

      <Logo />

      <NavigationLinks />

      <div className="md:hidden z-50">
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  )
}

export default Header
