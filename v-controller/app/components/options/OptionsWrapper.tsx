import React from "react"
import { BsChevronRight } from "react-icons/bs"

interface OptionsWrapperProps {
  children: React.ReactNode
  title: string
  subtext?: string
  onClick?: (mainOwner: boolean) => void
}

const OptionsWrapper = (props: OptionsWrapperProps) => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div>
        {/* ICON AND TITLE */}
        <div className="flex items-center">
          {props.children}
          {props.title}
        </div>
        {/* SUBTITLE */}
        <span className="pl-4 text-sm font-thin">{props.subtext}</span>
      </div>
      <BsChevronRight size="25px" />
    </div>
  )
}

export default OptionsWrapper
