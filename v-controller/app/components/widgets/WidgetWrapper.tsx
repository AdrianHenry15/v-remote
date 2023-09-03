import React from "react"

interface WidgetWrapperProps {
  children: React.ReactNode
  text: string
}

const WidgetWrapper = (props: WidgetWrapperProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {props.children}
      <span className="text-xs pt-2">{props.text}</span>
    </div>
  )
}

export default WidgetWrapper
