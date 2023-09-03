import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { BiSolidLockOpen } from "react-icons/bi"

const HeadLights = () => {
  return (
    <WidgetWrapper text="Unlocked">
      <BiSolidLockOpen size="20px" />
    </WidgetWrapper>
  )
}

export default HeadLights
