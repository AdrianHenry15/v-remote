"use client"

import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { BiWindowOpen, BiWindowClose } from "react-icons/bi"

const AllWindows = () => {
  return (
    <WidgetWrapper onClick={() => {}} text="All">
      <BiWindowOpen size="20px" />
    </WidgetWrapper>
  )
}

export default AllWindows
