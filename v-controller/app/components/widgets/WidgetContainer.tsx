import React from "react"
import Climate from "./Climate"
import Lock from "./Lock"
import HeadLights from "./lights/HeadLights"

const WidgetContainer = () => {
  return (
    <div className="flex items-center justify-evenly pb-20 relative">
      <Climate />
      <HeadLights />
      <Lock />
    </div>
  )
}

export default WidgetContainer
