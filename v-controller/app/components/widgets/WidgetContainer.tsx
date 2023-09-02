import React from "react"
import Climate from "./Climate"
import Keys from "./Keys"
import Lock from "./Lock"

const WidgetContainer = () => {
  return (
    <div className="flex items-center justify-evenly">
      <Climate />
      <Keys />
      <Lock />
    </div>
  )
}

export default WidgetContainer
