import React from "react"

const WidgetWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-full border-2 flex items-center justify-center p-4">
      {children}
    </div>
  )
}

export default WidgetWrapper
