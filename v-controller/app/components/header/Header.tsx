import React, { useState } from "react"
import Settings from "./Settings"
import Title from "./Title"

interface HeaderProps {
  mainOwner: boolean
}

const Header = (props: HeaderProps) => {
  const getOwnerTitle = () => {
    if (props.mainOwner) {
      return "Haqq"
    } else {
      return "Summayah"
    }
  }
  return (
    <div className="flex items-center justify-center">
      <Settings />
      <Title name={getOwnerTitle()} />
    </div>
  )
}

export default Header
