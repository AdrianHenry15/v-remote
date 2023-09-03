import React from "react"
import OptionsWrapper from "./OptionsWrapper"
import { BsFillPersonFill } from "react-icons/bs"

interface OwnerProps {
  mainOwner: boolean
  setMainOwner: (owner: boolean) => void
}

const Owner = (props: OwnerProps) => {
  return (
    <OptionsWrapper
      onClick={() => props.setMainOwner(!props.mainOwner)}
      title={`Switch Owner`}>
      <div className="pr-2">
        <BsFillPersonFill size="20px" />
      </div>
    </OptionsWrapper>
  )
}

export default Owner
