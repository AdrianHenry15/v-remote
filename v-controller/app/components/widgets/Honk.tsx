"use client"

import React from "react"
import WidgetWrapper from "./WidgetWrapper"
import { AiOutlineSound } from "react-icons/ai"

interface HonkProps {
  onClick: () => void
}

const Honk = (props: HonkProps) => {
  return (
    <WidgetWrapper
      onClick={() => {
        props.onClick()
      }}
      text="Horn">
      <AiOutlineSound size="20px" />
    </WidgetWrapper>
  )
}

export default Honk
