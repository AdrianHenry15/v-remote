import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { CiTempHigh } from "react-icons/ci"

const Climate = () => {
  return (
    <OptionsWrapper title="CLIMATE" subtext={`Interior: ${""}`}>
      <CiTempHigh />
    </OptionsWrapper>
  )
}

export default Climate
