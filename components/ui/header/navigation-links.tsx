"use client"

import { Link } from "react-scroll"
import texts from "./header.json"

const NavigationLinks = () => {
  return (
    <nav
      className={"flex flex-row gap-6 justify-start max-lg:gap-2 max-md:hidden"}
    >
      {texts.navLinks.map((link) => (
        <Link
          key={link.id}
          className="text-primary hover:text-black text-lg font-thin cursor-pointer hover:font-semibold transition-all duration-300"
          duration={500}
          offset={-70}
          smooth={true}
          to={link.id}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default NavigationLinks
