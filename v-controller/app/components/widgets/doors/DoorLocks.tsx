"use client"

import React, { useState } from "react"
import WidgetWrapper from "../WidgetWrapper"
import { AiFillLock } from "react-icons/ai"
import { AiFillUnlock } from "react-icons/ai"
import { useWidgetStore } from "@/app/hooks/useWidgetStore"

const DoorLocks = () => {
  const [doorsOpen, setDoorsOpen] = useState(false)

  const handleChange = () => {
    setDoorsOpen(!doorsOpen)
  }
  return (
    <WidgetWrapper onClick={() => handleChange()} text="Doors">
      {doorsOpen ? <AiFillUnlock size="20px" /> : <AiFillLock size="20px" />}
    </WidgetWrapper>
  )
}

export default DoorLocks
