import React from "react"
import WidgetWrapper from "../WidgetWrapper"
import { useWidgetStore } from "@/app/hooks/useWidgetStore"
import { AiFillLock, AiFillUnlock } from "react-icons/ai"

const Hood = () => {
  const { hoodOpen, setHoodOpen } = useWidgetStore()
  return (
    <WidgetWrapper onClick={() => setHoodOpen()} text="Hood">
      {hoodOpen ? <AiFillUnlock size="20px" /> : <AiFillLock size="20px" />}
    </WidgetWrapper>
  )
}

export default Hood
