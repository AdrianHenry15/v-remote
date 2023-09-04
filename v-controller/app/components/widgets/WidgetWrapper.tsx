"use client"

import React from "react"

interface WidgetWrapperProps {
  children: React.ReactNode
  text: string
  onClick: () => void
}

const WidgetWrapper = (props: WidgetWrapperProps) => {
  return (
    <div
      onClick={() => console.log("Click")}
      className="flex flex-col items-center justify-center p-4 active:bg-zinc-700 rounded-full h-20 w-20">
      {props.children}
      <span style={{ fontSize: "10px" }} className="pt-2">
        {props.text}
      </span>
    </div>
  )
}

export default WidgetWrapper
