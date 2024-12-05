"use client"

import { Link } from "react-scroll"
import texts from "./header.json"
import { useEffect, useRef } from "react"

interface MobileMenuProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen, toggleMenu])

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 left-0 w-full h-[50%] bg-gray-100 text-[#2d2c2c] transition-all duration-500 flex flex-col items-start justify-start gap-6 z-50 p-12 ${
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link
        className="text-xl font-medium hover:text-black transition cursor-pointer"
        duration={500}
        offset={-70}
        smooth={true}
        to="about"
        onClick={toggleMenu}
      >
        {texts.navLinks.about}
      </Link>
      <Link
        className="text-xl font-medium hover:text-black transition cursor-pointer"
        duration={500}
        offset={-150}
        smooth={true}
        to="products"
        onClick={toggleMenu}
      >
        {texts.navLinks.products}
      </Link>
      <Link
        className="text-xl font-medium hover:text-black transition cursor-pointer"
        duration={500}
        offset={-150}
        smooth={true}
        to="benefits"
        onClick={toggleMenu}
      >
        {texts.navLinks.benefits}
      </Link>
      <Link
        className="text-xl font-medium hover:text-black transition cursor-pointer"
        duration={500}
        offset={-150}
        smooth={true}
        to="gallery"
        onClick={toggleMenu}
      >
        {texts.navLinks.gallery}
      </Link>
      <Link
        className="text-xl font-medium hover:text-black transition cursor-pointer"
        duration={500}
        offset={-150}
        smooth={true}
        to="footer"
        onClick={toggleMenu}
      >
        {texts.navLinks.contact}
      </Link>
    </div>
  )
}

export default MobileMenu
