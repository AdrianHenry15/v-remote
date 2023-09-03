import React from "react"
import Container from "../Container"
import Climate from "./Climate"
import Controls from "./Controls"
import Owner from "./Owner"

interface OptionsContainerProps {
  mainOwner: boolean
  setMainOwner: (owner: boolean) => void
}

const OptionsContainer = (props: OptionsContainerProps) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col">
        <Climate />
        <Controls />
        <Owner mainOwner={props.mainOwner} setMainOwner={props.setMainOwner} />
      </div>
    </div>
  )
}

export default OptionsContainer
