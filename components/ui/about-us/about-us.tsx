import React from "react"
import Divider from "../divider"
import texts from "./about-us.json"

const AboutUs = () => {
  return (
    <div className="px-8 my-10 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-3xl">{texts.title}</h1>
      <div className="text-center leading-[28px] text-gray-600">
        {texts.description}
      </div>
      <Divider />
    </div>
  )
}

export default AboutUs
