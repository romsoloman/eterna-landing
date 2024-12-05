/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, useEffect } from "react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    setIsClicked(true) // Trigger animation
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

    // Reset animation state after it completes
    setTimeout(() => setIsClicked(false), 800) // Matches the animation duration
  }

  return (
    <div>
      {isVisible && (
        <button
          aria-label="Scroll to top"
          className={`fixed bottom-8 right-8 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-black 
            ${isClicked ? "xyz-in-out xyz-pour" : ""}`}
          // @ts-expect-error
          xyz="fade small-100% rotate-45"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon className="h-5 w-5" icon={faArrowUp} />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
