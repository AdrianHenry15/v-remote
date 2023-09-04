"use client"

import React from "react"
import WidgetWrapper from "./WidgetWrapper"
import { AiOutlineSound } from "react-icons/ai"

const Honk = () => {
  return (
    <WidgetWrapper
      onClick={() => {
        console.log("Click")
      }}
      text="Horn">
      <AiOutlineSound size="20px" />
    </WidgetWrapper>
  )
}

export default Honk
