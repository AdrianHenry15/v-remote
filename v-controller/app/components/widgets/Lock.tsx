import React from "react"
import WidgetWrapper from "./WidgetWrapper"
import { BiSolidLockOpen } from "react-icons/bi"

const Lock = () => {
  return (
    <WidgetWrapper text="Locks">
      <BiSolidLockOpen size="20px" />
    </WidgetWrapper>
  )
}

export default Lock
