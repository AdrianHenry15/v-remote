import React from "react"
import Container from "../Container"

interface OptionsContainerProps {
  mainOwner: boolean
  setMainOwner: (owner: boolean) => void
}

const OptionsContainer = (props: OptionsContainerProps) => {
  const renderOwnerOptions = () => {
    if (props.mainOwner) {
      return (
        <Container>
          <div>
            <span>Climate</span>
          </div>
          <div>
            <span>Controls</span>
          </div>
          <div>
            <span>{props.mainOwner ? "Summayah" : "Haqq"}</span>
          </div>
        </Container>
      )
    }
  }
  return <div>{renderOwnerOptions()}</div>
}

export default OptionsContainer
