"use client"

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface HamburgerMenuProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const HamburgerMenu = ({ isMenuOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <button
      aria-label="Toggle menu"
      className="text-black focus:outline-none space-y-2 mt-2"
      onClick={toggleMenu}
    >
      {!isMenuOpen && (
        <div className="w-6 h-0.5">
          <FontAwesomeIcon
            className="text-black text-xl transition-all duration-300"
            icon={faBars}
          />
        </div>
      )}
      {isMenuOpen && (
        <FontAwesomeIcon
          className="text-white text-2xl transition-all duration-300"
          icon={faTimes}
        />
      )}
    </button>
  )
}

export default HamburgerMenu
