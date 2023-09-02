import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { BsFillPersonFill } from "react-icons/bs"

const Owner = () => {
  return (
    <OptionsWrapper title={`Switch Owner`}>
      <BsFillPersonFill />
    </OptionsWrapper>
  )
}

export default Owner
