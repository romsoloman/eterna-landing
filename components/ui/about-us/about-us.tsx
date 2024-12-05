import React from "react"
import texts from "./about-us.json"
import { Container } from "../container"

const AboutUs = () => {
  return (
    <Container>
      <div className="px-8 my-10 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl">{texts.title}</h1>
        <div className="text-center leading-[28px] text-gray-600 max-sm:text-sm ">
          {texts.description}
        </div>
      </div>
    </Container>
  )
}

export default AboutUs
